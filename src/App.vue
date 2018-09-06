<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>Soundrenaline 2018</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: 'Vuetify.js'
    };
  }
};
</script>
