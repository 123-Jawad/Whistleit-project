<template>
    <v-app>
      <TheDashboardHeaderVue/>
      <MainDashboardVue/>
      <TheSideBarVue/>
    </v-app>
  </template>
  
  <script>
import TheDashboardHeaderVue from '../components/Dashboard/TheDashboardHeader.vue'
import TheSideBarVue from '../components/Dashboard/TheSideBar.vue'
import MainDashboardVue from '../components/Dashboard/MainDashboard.vue'
    export default {
      name: "DashbaordView",
      components:{
        TheDashboardHeaderVue,
        TheSideBarVue,
        MainDashboardVue
      }
    }
  </script>