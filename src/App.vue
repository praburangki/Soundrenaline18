<template>
  <MainView />
</template>

<script>
const MainView = () =>
  import(/* webpackChunkName: "main-view" */ '@/components/MainView');

export default {
  components: {
    MainView
  }
};
</script>
