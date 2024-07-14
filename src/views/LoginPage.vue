<template>
    <v-container fluid class="">
      <v-row>
        <v-col cols="1">
            <v-img src="https://app.whistleit.io/img/whistle-logo.8554b9a3.svg" width="70" class="ma-3">
            </v-img>
        </v-col>
        <v-col cols="12" lg="4" class="mt-14">
          <LoginForm />
        </v-col>
  
        <v-col cols="7" class="hidden-sm-and-down pa-0">
          <v-img src="https://app.whistleit.io/img/whistle%20login%20animation%20bg%202.4961b4a1.svg" height="95%"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
import LoginForm from '@/components/Login/LoginForm.vue';
  export default {
    name: "LoginPage",
    components: {
      LoginForm,
    },
  };
  </script>
  
  <style scoped>
  </style>
  