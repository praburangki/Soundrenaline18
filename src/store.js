import Vue from 'vue';
import Vuex from 'vuex';
import { firestore } from '@/utils/firebase';
import { differenceInMinutes } from 'date-fns';

Vue.use(Vuex);

const A_STAGE = 'A Stage';
const P_STAGE = 'Platinum Stage';
const SLIM_STAGE = 'Slim Refined Stage';
const CRE_STAGE = 'Creators Stage';
const CAMP_STAGE = 'Camp Stage';
const T_STAGE = 'Thunderdome';

const isFirstDay = new Date() <= new Date('2018/09/09 1:00');

const filterArtist = (artists, isAfter = true) =>
  artists.filter(artist => {
    const firstDay = artist.startsAt < new Date('2018/09/09 08:00');
    return isAfter ? firstDay : !firstDay;
  });

const filterStage = (artists, stageName) =>
  artists.filter(artist => artist.stage === stageName);

const handleTimes = (startsAt, endsAt) => {
  const rowSpan = differenceInMinutes(endsAt, startsAt) / 15 + 1;
  const hours = startsAt.getHours();
  const date = startsAt.getDate();

  let height = differenceInMinutes(startsAt, new Date(`2018/09/${date} 15:00`));

  if (hours === 0) {
    height = differenceInMinutes(
      startsAt,
      new Date(`2018/09/${date - 1} 15:00`)
    );
  }

  height /= 15;

  return {
    startsAt,
    endsAt,
    rowSpan,
    height
  };
};

export default new Vuex.Store({
  state: {
    selectedDay: isFirstDay ? 1 : 2,
    artists: []
  },
  getters: {
    favArtists: state =>
      state.artists
        .filter(artist => artist.isFav)
        .sort((elemA, elemB) => elemA.startsAt - elemB.startsAt),
    day1: state => filterArtist(state.artists),
    day2: state => filterArtist(state.artists, false),
    aStage1: (_, getters) => filterStage(getters.day1, A_STAGE),
    aStage2: (_, getters) => filterStage(getters.day2, A_STAGE),
    platinumStage1: (_, getters) => filterStage(getters.day1, P_STAGE),
    platinumStage2: (_, getters) => filterStage(getters.day2, P_STAGE),
    slimStage1: (_, getters) => filterStage(getters.day1, SLIM_STAGE),
    slimStage2: (_, getters) => filterStage(getters.day2, SLIM_STAGE),
    creatorsStage1: (_, getters) => filterStage(getters.day1, CRE_STAGE),
    creatorsStage2: (_, getters) => filterStage(getters.day2, CRE_STAGE),
    campStage1: (_, getters) => filterStage(getters.day1, CAMP_STAGE),
    campStage2: (_, getters) => filterStage(getters.day2, CAMP_STAGE),
    thunderdome1: (_, getters) => filterStage(getters.day1, T_STAGE),
    thunderdome2: (_, getters) => filterStage(getters.day2, T_STAGE)
  },
  mutations: {
    setArtists(state, { artists }) {
      state.artists = artists;
    },
    setFavArtists(state) {
      const favIds = [];
      const localFav = (
        JSON.parse(localStorage.getItem('favArtists')) || []
      ).map(artist => {
        artist.startsAt = new Date(artist.startsAt);
        artist.endsAt = new Date(artist.endsAt);

        favIds.push(artist.id);

        return artist;
      });
      const filterArt = state.artists.filter(el => {
        return !favIds.includes(el.id);
      });
      state.artists = [...filterArt, ...localFav];
    },
    changeDay(state, { day }) {
      state.selectedDay = day;
    },
    toggleFavArtist(state, { artist }) {
      const isFav = !artist.isFav;
      state.artists = [
        ...state.artists.filter(item => item.id !== artist.id),
        { ...artist, isFav }
      ];
    }
  },
  actions: {
    async fetchArtists({ commit }) {
      const { docs } = await firestore
        .collection('artists')
        .orderBy('startsAt')
        .get();

      const artists = docs.map(doc => {
        const { startsAt: start, endsAt: end } = doc.data();
        const startsAt = start.toDate();
        const endsAt = end.toDate();
        const { rowSpan, height } = handleTimes(startsAt, endsAt);
        return {
          id: doc.id,
          ...doc.data(),
          startsAt,
          endsAt,
          rowSpan,
          height
        };
      });
      commit('setArtists', { artists });
    },
    toggleFav({ commit, getters }, { artist }) {
      commit('toggleFavArtist', { artist });
      const { favArtists } = getters;
      localStorage.setItem('favArtists', JSON.stringify(favArtists));
    }
  }
});
