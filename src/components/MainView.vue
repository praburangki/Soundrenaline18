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
      </v-tabs>
    </v-toolbar>

    <v-content class="mb-5">
      <v-tabs-items v-model="tabModel" touchless>
        <v-tab-item value="table" lazy>
          <BtnDaySwitcher />
          <TableView />
        </v-tab-item>

        <v-tab-item value="list" lazy>
          <BtnDaySwitcher />
          <ListView />
        </v-tab-item>

        <v-tab-item value="favorite" lazy>
          <FavoriteView />
        </v-tab-item>
      </v-tabs-items>
    </v-content>
  </v-app>
</template>

<script>
const TableView = () =>
  import(/* webpackChunkName: "table-view" */ '@/components/TableView');

const ListView = () =>
  import(/* webpackChunkName: "list-view" */ '@/components/ListView');

const FavoriteView = () =>
  import(/* webpackChunkName: "favorite-view" */ '@/components/FavoriteView');

const BtnDaySwitcher = () =>
  import(/* webpackChunkName: "btn-switcher" */ '@/components/BtnDaySwitcher');

export default {
  components: {
    TableView,
    ListView,
    FavoriteView,
    BtnDaySwitcher
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
  margin: 0 auto !important;
}
</style>
