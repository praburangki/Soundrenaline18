import Vue from 'vue';
import Vuex from 'vuex';
import differenceInMinutes from 'date-fns/difference_in_minutes';
import axios from 'axios';

Vue.use(Vuex);

const API_URL = 'https://soundrenaline18.firebaseio.com/artists.json';

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
  const rowSpan = differenceInMinutes(endsAt, startsAt) / 15;
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
      const localFav = (JSON.parse(localStorage.getItem('favBands')) || []).map(
        artist => {
          artist.startsAt = new Date(artist.startsAt);
          artist.endsAt = new Date(artist.endsAt);

          favIds.push(artist.id);

          return artist;
        }
      );
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
      const { data: resData } = await axios.get(API_URL);
      const artists = Object.keys(resData).map(uid => {
        const startsAt = new Date(resData[uid].startsAt);
        const endsAt = new Date(resData[uid].endsAt);
        const { rowSpan, height } = handleTimes(startsAt, endsAt);
        return {
          id: uid,
          ...resData[uid],
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
      localStorage.setItem('favBands', JSON.stringify(favArtists));
    }
  }
});
