<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-flex
          xs12
          style="margin: 20px; border: 1px solid black"
          v-for="artist in artists">
          <div>ID: {{ artist.id }}</div>
          <div>name: {{ artist.name }}</div>
          <div>playingAt: {{ artist.playingAt }}</div>
          
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('fetchArtists');
  },
  computed: {
    artists() {
      return this.$store.state.artists;
    }
  }
};
</script>
