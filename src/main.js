import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
// import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
  created() {
    store.dispatch('fetchArtists').then(() => {
      store.commit('setFavArtists');
    });
  }
}).$mount('#app');
