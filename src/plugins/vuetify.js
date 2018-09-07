import Vue from 'vue';
import {
  Vuetify,
  VApp,
  VFooter,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VTabs,
  VCard,
  transitions
} from 'vuetify';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  components: {
    VApp,
    VFooter,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VTabs,
    VCard,
    transitions
  },
  theme: {
    primary: '#ED1C24',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
});
