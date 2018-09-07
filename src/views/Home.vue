<template>
  <v-container fluid>
    <v-layout>
      <v-flex>
        <v-tabs
          centered
          color="primary"
          dark
          grow
          class="tabsContainer"
        >
          <v-tabs-slider color="black"></v-tabs-slider>
          <v-tab href="#table">
            <v-icon>dashboard</v-icon>
          </v-tab>
          <v-tab href="#list">
            <v-icon>view_list</v-icon>
          </v-tab>
          <v-tab href="#favorite">
            <v-icon>favorite</v-icon>
          </v-tab>

          <v-tab-item id="table">
            <div class="mt-2 text-xs-center">
              <v-btn 
                round
                color="#26a27c"
                dark
                @click="changeDay(1)"
                :outline="!isFirstDay">
                day 1
              </v-btn>
              <v-btn 
                round
                color="#3C8BAD"
                dark
                @click="changeDay(2)"
                :outline="isFirstDay">
                day 2
              </v-btn>
            </div>
            <TableView />
          </v-tab-item>

          <v-tab-item id="list">
            <v-card flat>
              <v-card-text>list</v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item id="favorite">
            <v-card flat>
              <v-card-text>favorite</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TableView from '@/components/TableView';

export default {
  components: {
    TableView
  },
  created() {
    this.$store.dispatch('fetchArtists');
  },
  computed: {
    isFirstDay() {
      return this.$store.state.selectedDay === 1;
    }
  },
  methods: {
    changeDay(day) {
      this.$store.commit('changeDay', { day });
    }
  }
};
</script>

<style lang="stylus">
.tabsContainer {
  margin-top: 20px;
}
</style>
