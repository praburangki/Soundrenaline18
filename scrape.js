const axios = require('axios');
const fs = require('fs');
const cheerio = require('cheerio');
const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://soundrenaline18.firebaseio.com',
  storageBucket: 'soundrenaline18.appspot.com'
});

const firestore = admin.firestore();
firestore.settings({ timestampsInSnapshots: true });

const storage = admin.storage().bucket();

const BASE_URL = 'https://soundrenaline.co.id';

const scrapeSite = async () => {
  const LINEUPS_URL = `${BASE_URL}/lineup`;
  const { data: html } = await axios.get(LINEUPS_URL);
  const $ = cheerio.load(html);
  const artists = [];

  $('.lineup-item').each(function() {
    const imgUrl = $(this)
      .children('img')
      .attr('src');
    const name = $(this)
      .children('.lineup-details')
      .children('.lineup-name')
      .text();
    const playingAt = $(this)
      .children('.lineup-details')
      .children('.lineup-date')
      .children()
      .last()
      .text();
    artists.push({
      name,
      imgUrl,
      playingAt
    });
  });

  return artists;
};

const uploadToStorage = async artists =>
  await Promise.all(
    artists.map(async artist => {
      const imgLink = `${BASE_URL}${artist.imgUrl}`;
      const { data: imgBuffer } = await axios.get(imgLink, {
        responseType: 'arraybuffer'
      });

      const fileName = `${artist.name}.jpg`;
      const fileSrc = `./scrape/images/${fileName}`;
      fs.writeFileSync(fileSrc, Buffer.from(imgBuffer));

      const storageDest = `images/${fileName}`;
      const uploadImg = await storage.upload(fileSrc, {
        destination: storageDest
      });

      const { bucket, name: imgName } = uploadImg[1];
      const storageRef = `gs://${bucket}/${imgName}`;
      artist.imgUrl = storageRef;

      fs.unlinkSync(fileSrc);

      return artist;
    })
  );

const writeToDb = async artists => {
  const promises = [];
  artists.forEach(artist => {
    const dbRef = firestore
      .collection('artists')
      .doc()
      .set({ ...artist });
    promises.push(dbRef);
  });
  return await Promise.all(promises);
};

const run = async () => {
  const scrapedArtists = await scrapeSite();
  const artists = await uploadToStorage(scrapedArtists);
  writeToDb(artists);
};

run();
