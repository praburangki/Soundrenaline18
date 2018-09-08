<style lang="stylus" scoped>
.cardContainer {
  padding: 16px 3px;
  font-family: 'Product Sans';
}

.favInfo {
  font-size: 24px;
}
</style>

<template>
  <v-card flat>
    <v-card-text class="cardContainer">
      <v-container>
        <div v-if="favArtists.length === 0" class="text-xs-center favInfo">
          Pilih siapa yang ingin kamu lihat supaya lebih mudah untuk mengikuti jadwal artis favoritmu!
          <br>
          <br>
          Kamu bisa pilih pada tabel di bagian pertama.
          Silahkan balik kesini lagi setelah memilih.
        </div>
        <div v-else>
          <v-layout wrap>
            <v-flex xs12 class="text-xs-center" v-if="dayNotEmpty.day1">
              <div class="favInfo info white--text mb-3">
                Day 1
              </div>
              <DailyFavorite :artists="day1" :day="1" />
            </v-flex>
            <v-flex xs12 class="text-xs-center" v-if="dayNotEmpty.day2">
              <div class="favInfo success white--text my-3">
                Day 2
              </div>
              <DailyFavorite :artists="day2" :day="2" />
            </v-flex>
          </v-layout>
        </div>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import DailyFavorite from './DailyFavorite';
const firstDay = artist => artist.startsAt < new Date('2018-09-09 08:00');

export default {
  components: {
    DailyFavorite
  },
  computed: {
    ...mapGetters(['favArtists']),
    day1() {
      return this.favArtists.filter(artist => firstDay(artist));
    },
    day2() {
      return this.favArtists.filter(artist => !firstDay(artist));
    },
    dayNotEmpty() {
      return {
        day1: this.day1.length !== 0,
        day2: this.day2.length !== 0
      };
    }
  }
};
</script>
