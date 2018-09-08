<template>
  <div>
    <div v-for="artist in artists" :key="artist.id"
      class="text-xs-left">
      <v-chip :color="day === 1 ? 'info' : 'success'" text-color="white">
        {{ artist.stage }}
      </v-chip>
      <div>
        {{ artist.name }}
      </div>
      <div>
        {{ artist.startsAt | formatTime }} - {{ artist.endsAt | formatTime }} 
        ({{ distance(artist.endsAt, artist.startsAt) }})
      </div>
    </div>
  </div>
</template>

<script>
import { parseTime } from '@/helpers/times';
import { distanceInWordsStrict } from 'date-fns';

export default {
  props: ['artists', 'day'],
  filters: {
    formatTime(time) {
      return parseTime(time);
    }
  },
  methods: {
    distance(start, end) {
      return distanceInWordsStrict(end, start);
    }
  }
};
</script>
