<template>
  <v-app>
    <v-toolbar app color="primary" dark tabs>
      <v-toolbar-title class="appTitle">Soundrenaline 2018</v-toolbar-title>

      <v-tabs
        slot="extension"
        v-model="tabModel"
        grow
        color="primary"
        slider-color="yellow"
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
        <v-tab href="#pictures">
          <v-icon>photo</v-icon>
        </v-tab>
      </v-tabs>
    </v-toolbar>

    <v-content class="mb-5">
      <v-tabs-items v-model="tabModel">
        <v-tab-item id="table" lazy>
          <BtnDaySwitcher />
          <TableView />
        </v-tab-item>

        <v-tab-item id="list" lazy>
          <BtnDaySwitcher />
          <ListView />
        </v-tab-item>

        <v-tab-item id="favorite" lazy>
          <v-card flat>
            <v-card-text>favorite</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-content>
    <v-footer class="justify-center py-2" fixed height="60">
      <div>
        <v-btn color="primary">
          info
          <v-icon right dark>info</v-icon>
        </v-btn>
      </div>
    </v-footer>
  </v-app>
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
  },
  data() {
    return {
      tabModel: 'table'
    };
  }
};
</script>

<style lang="stylus" scoped>
.appTitle {
  font-family: 'Product Sans';
  text-transform: uppercase;
  margin: 0 auto;
}
</style>
