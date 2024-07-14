<template>
    <div>
        <v-navigation-drawer
        app
        width="280"
        color="#2F2C54"
        >
        <TheMiniSideBar/>
        <v-list
          class="pl-14"
          shaped
        >
        <p class="recent-heading ml-5 mt-2">
          <v-icon color="#9598BE">mdi-message-outline</v-icon><span class="ml-2">Recents</span>
        </p>
        <all-channels/>
        <all-messages/>
        </v-list>
      </v-navigation-drawer>
    </div>
  </template>
  
  <script>
import AllChannels from './AllChannels.vue'
import AllMessages from './AllMessages.vue'
import TheMiniSideBar from './TheMiniSideBar.vue'
  
  export default {
    name: "TheSideBar",
    components: {
      TheMiniSideBar,
      AllChannels,
      AllMessages,
    }
  }
  </script>
  
  <style scoped>
  .recent-heading{
    font-size: 13px;
    color: #9598BE;
}
  </style>
  