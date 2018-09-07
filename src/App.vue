<template>
  <v-app>
    <v-toolbar app extended color="primary" dark>
      <v-spacer></v-spacer>
      <v-toolbar-title class="appTitle">Soundrenaline 2018</v-toolbar-title>
      <v-spacer></v-spacer>
      <div slot="extension" class="navLinks">
        <v-btn flat slot="extension">SCHEDULE</v-btn>
        <v-btn flat slot="extension">Line UP</v-btn>
      </div>
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

<style lang="stylus" scoped>
.appTitle {
  font-family: 'Product Sans';
  text-transform: uppercase;
}

.navLinks {
  margin: 0 auto;
}
</style>
