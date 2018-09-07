import Vue from 'vue';
import Vuex from 'vuex';
import { firestore } from '@/utils/firebase';

Vue.use(Vuex);

const filterArtist = (artists, isAfter = true) =>
  artists.filter(artist => {
    const firstDay = artist.playingAt < new Date('2018-09-09 12:00');
    return isAfter ? firstDay : !firstDay;
  });

export default new Vuex.Store({
  state: {
    artists: []
  },
  getters: {
    day1: state => {
      return filterArtist(state.artists);
    },
    day2: state => {
      return filterArtist(state.artists, false);
    }
  },
  mutations: {
    setArtists(state, { artists }) {
      state.artists = artists;
    }
  },
  actions: {
    async fetchArtists({ commit }) {
      const { docs } = await firestore
        .collection('artists')
        .orderBy('playingAt')
        .get();
      const artists = docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        playingAt: doc.data().playingAt.toDate()
      }));
      commit('setArtists', { artists });
    }
  }
});
