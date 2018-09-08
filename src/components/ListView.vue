<style lang="stylus" scoped>
.cardContainer {
  padding: 16px 3px;
  font-family: 'Product Sans';
}

.artistItem {
  display: flex;
  justify-content: space-between;
}
</style>

<template>
  <v-card flat>
    <v-card-text class="cardContainer">
      <v-list>
        <v-list-group
          v-for="item in stages"
          v-model="item.active"
          :key="item.title"
          no-action
        >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title
                :class="isFirstDay ? 'info--text' : 'success--text'"
              >
                {{ item.title }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <div
            v-for="artist in item.items"
            :key="artist.id"
            class="artistItem pa-2"
          >
            <div>{{ artist.startsAt | formatTime }} - {{ artist.endsAt | formatTime }}</div>
            <div>{{ artist.name }}</div>
          </div>
        </v-list-group>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import { parseTime } from '@/helpers/times';

export default {
  filters: {
    formatTime(time) {
      return parseTime(time);
    }
  },
  computed: {
    selectedDay() {
      return this.$store.state.selectedDay;
    },
    isFirstDay() {
      return this.selectedDay === 1;
    },
    stages() {
      return [
        {
          title: 'A Stage',
          active: true,
          items: this.$store.getters[`aStage${this.selectedDay}`]
        },
        {
          title: 'Platinum Stage',
          items: this.$store.getters[`platinumStage${this.selectedDay}`]
        },
        {
          title: 'Slim Refined Stage',
          items: this.$store.getters[`slimStage${this.selectedDay}`]
        },
        {
          title: 'Creators Stage',
          items: this.$store.getters[`creatorsStage${this.selectedDay}`]
        },
        {
          title: 'Camp Stage',
          items: this.$store.getters[`campStage${this.selectedDay}`]
        },
        {
          title: 'Thunderdome',
          items: this.$store.getters[`thunderdome${this.selectedDay}`]
        }
      ];
    }
  }
};
</script>
