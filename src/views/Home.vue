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
            <BtnDaySwitcher />
            <TableView />
          </v-tab-item>

          <v-tab-item id="list">
            <BtnDaySwitcher />
            <ListView />
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
import ListView from '@/components/ListView';
import BtnDaySwitcher from '@/components/BtnDaySwitcher';

export default {
  components: {
    TableView,
    ListView,
    BtnDaySwitcher
  },
  created() {
    this.$store.dispatch('fetchArtists');
  }
};
</script>

<style lang="stylus">
.tabsContainer {
  margin-top: 20px;
}
</style>
