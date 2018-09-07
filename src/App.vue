<template>
  <v-app>
    <v-toolbar app extended color="primary" dark class="mainNav">
      <v-toolbar-title class="appTitle">Soundrenaline 2018</v-toolbar-title>
      <div slot="extension" class="navLinks">
        <v-btn round color="white" light slot="extension" to="/">SCHEDULE</v-btn>
        <v-btn round color="white" light slot="extension" to="/lineup" outline>LINE UP</v-btn>
      </div>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer app>
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

<style lang="stylus" scoped>
.mainNav {
  padding-bottom: 10px;
}

.appTitle {
  font-family: 'Product Sans';
  text-transform: uppercase;
  margin: 0 auto;
}

.navLinks {
  margin: 0 auto;
}
</style>
