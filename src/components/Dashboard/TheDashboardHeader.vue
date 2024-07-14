<template>
    <div>
        <v-app-bar
        app
        clipped-right
        flat
        height="50"
      >
      <v-icon>mdi-star-outline</v-icon>
      <div v-if="getDatachannelId">
        <h3>{{ getDatachannelId.name }}</h3>
      </div>
        <v-spacer></v-spacer>
        <v-responsive max-width="156">
        <v-row>
          <v-col class="d-flex justify-center">
            <v-btn icon>
              <v-icon>mdi-clock-outline</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-cog</v-icon>
            </v-btn>

          </v-col>
        </v-row>
        </v-responsive>
      </v-app-bar>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
    export default {
        name: "TheDashboardHeader",
    computed: {
    ...mapGetters(["getDatachannelId"])
  }
    }
</script>

<style scoped>

</style>