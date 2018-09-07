<style lang="stylus" scoped>
.cardContainer {
  padding: 16px 3px;
}

.plannerContainer {
  display: flex;

  .times {
    width: 50px;
    margin-top: 26px;
    font-size: small;
    font-weight: 600;
    text-align: center;
    line-height: 13px;
    height: 100%;
    border-radius: 5px 0 0 0;
    color: #f0f0f0;

    div:nth-child(odd) {
      background: #404040;
    }

    div:nth-child(even) {
      background: #383838;
    }

    div:first-child {
      border-radius: 2.5px 0 0 0;
    }

    div {
      height: 26px;
      line-height: 16px;
      width: 100%;
      letter-spacing: 1px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .stageContainer {
    display: flex;
    flex-direction: column;
    overflow-x: scroll;
    flex: 1;

    .stageHost {
      display: flex;
      color: #fff;
      width: 650px;
      margin-bottom: 1px;

      .stage {
        padding: 0 10px;
        flex: 1;
        width: 0;
        height: 25px;
        text-align: center;
        line-height: 25px;
        border-radius: 2.5px 2.5px 0 0;
        font-size: small;
        position: relative;
        font-weight: 600;

        &+.stage {
          margin-left: 10px;
        }
      }
    }

    .bandsContainer {
      flex: 1;
      display: flex;
    }
  }
}
</style>

<template>
  <v-card flat>
    <v-card-text class="cardContainer">
      <div class="elevation-1">
        <div class="plannerContainer">
          <div class="times">
            <div v-for="time in times" :key="time">
              {{ time }}
            </div>
          </div>
          <div class="stageContainer">
            <div class="stageHost">
              <div
                v-for="(header, idx) in headers" :key="`header-${idx}`"
                class="stage"
                :class="isFirstDay ? 'info' : 'success'"
                >
                {{ header }}
              </div>
            </div>
            <div class="bandsContainer">
              <template v-if="isFirstDay">
                <ArtistsColumn :artists="aStage1" />
                <ArtistsColumn :artists="platinumStage1" />
                <ArtistsColumn :artists="slimStage1" />
                <ArtistsColumn :artists="creatorsStage1" />
                <ArtistsColumn :artists="campStage1" />
                <ArtistsColumn :artists="thunderdome1" />
              </template>
              <template v-else>
                <ArtistsColumn :artists="aStage2" />
                <ArtistsColumn :artists="platinumStage2" />
                <ArtistsColumn :artists="slimStage2" />
                <ArtistsColumn :artists="creatorsStage2" />
                <ArtistsColumn :artists="campStage2" />
                <ArtistsColumn :artists="thunderdome2" />
              </template>
            </div>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import { fifteen } from '@/helpers/times';
import ArtistsColumn from './ArtistsColumn';

export default {
  components: {
    ArtistsColumn
  },
  data: () => ({
    headers: [
      'A Stage',
      'Platinum',
      'Slim Refined',
      'Creators',
      'Camp',
      'Thunderdome'
    ],
    times: []
  }),
  computed: {
    isFirstDay() {
      return this.$store.state.selectedDay === 1;
    },
    ...mapGetters([
      'aStage1',
      'aStage2',
      'platinumStage1',
      'platinumStage2',
      'slimStage1',
      'slimStage2',
      'creatorsStage1',
      'creatorsStage2',
      'campStage1',
      'campStage2',
      'thunderdome1',
      'thunderdome2'
    ])
  },
  mounted() {
    this.times = fifteen();
  }
};
</script>
