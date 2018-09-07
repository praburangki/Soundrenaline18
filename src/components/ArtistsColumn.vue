<style lang="stylus" scoped>
.stageColumn {
  flex: 1;
  min-width: 100px;
  max-width: 100px;
  position: relative;

  &+.stageColumn {
    margin-left: 10px;
  }

  .band {
    text-align: center;
    color: #fff;
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: solid 1px #fff;

    div:first-child {
      font-weight: bold;
      padding: 0 2px;
    }
  }
}
</style>


<template>
  <div class="stageColumn">
    <div 
      v-for="artist in artists" :key="artist.id"
      :style="{ 
        top: `${26 * artist.height}px`, 
        height: `${26 * artist.rowSpan}px`
      }"
      class="band"
      :class="isFirstDay ? 'info' : 'success'">
      <div>{{ artist.name }}</div>
      <div>{{ artist.startsAt | formatTime }} - {{ artist.endsAt | formatTime }}</div>
    </div>
  </div>
</template>

<script>
import { parseTime } from '@/helpers/times';

export default {
  props: ['artists'],
  filters: {
    formatTime(time) {
      return parseTime(time);
    }
  },
  computed: {
    isFirstDay() {
      return this.$store.state.selectedDay === 1;
    }
  }
};
</script>
