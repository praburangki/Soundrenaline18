<template>
  <div class="mt-2 text-xs-center">
    <v-btn 
      round
      color="info"
      dark
      @click="changeDay(1)"
      :outline="!isFirstDay">
      day 1
    </v-btn>
    <v-btn 
      round
      color="success"
      dark
      @click="changeDay(2)"
      :outline="isFirstDay">
      day 2
    </v-btn>
  </div>
</template>

<script>
export default {
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
