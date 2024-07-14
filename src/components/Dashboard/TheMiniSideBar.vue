<template>
  <div>
    <v-navigation-drawer v-model="drawer" absolute color="#423D68" mini-variant>
      <h6 class="workspace-title">Workspace</h6>
      <v-avatar
        class="d-block text-center mx-auto mt-4 rounded"
        color="grey darken-1"
        size="36"
      >
        <v-img src="/pf.jpeg"></v-img>
      </v-avatar>

      <hr class="ml-2 my-5" color="#9598BE" width="70%" />
      <h6 class="teams-title">Teams</h6>
      <v-avatar
        v-for="n in 2"
        :key="n"
        class="d-block text-center mx-auto mb-9 rounded"
        color="grey lighten-1"
        size="28"
        ><v-img src="/pf2.webp"></v-img
      ></v-avatar>
      <div class="middle-space"></div>
      <hr width="70%" color="#9598BE" class="ml-2" />

      <v-menu offset-x>
        <template v-slot:activator="{ on, attrs }">
            <v-avatar v-bind="attrs" v-on="on"
              class="d-block text-center mx-auto mt-4 rounded"
              color="grey darken-1"
              size="36"
            >
              <v-img
                src="https://app.whistleit.io/api/viewFile/187422983617117848621817201331.jpg"
              ></v-img>
            </v-avatar>
        </template>
        <v-list class="ml-3"
        width="220">
        <v-list-item
          ><v-icon class="dropdown-icon-size">mdi-emoticon-happy-outline</v-icon>
            <v-list-item-title class="dropdown-title-size ml-3">Update your status</v-list-item-title>
          </v-list-item>
          <v-list-item
           
          > <v-icon class="dropdown-icon-size">mdi-cog</v-icon>
            <v-list-item-title class="dropdown-title-size ml-3">Account Setting</v-list-item-title>
          </v-list-item>
          <v-list-item
          
          > <v-icon class="dropdown-icon-size">mdi-account-multiple</v-icon>
            <v-list-item-title class="dropdown-title-size ml-3">Leave Team</v-list-item-title>
          </v-list-item>
          <hr color="#E0E0E0" class="v-divider theme--light">
          <v-list-item
            class=""
            @click="logout"
          >
          <v-icon class="dropdown-icon-size">mdi-logout</v-icon>
            <v-list-item-title class="dropdown-title-size ml-3">Logout</v-list-item-title>
          </v-list-item>

        </v-list>
      </v-menu>
      <v-icon
        class="v-icon mdi mdi-help-circle #423D68 mt-2 ml-4"
        color="white"
      ></v-icon>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TheMiniSideBar",
  data: () => ({ drawer: null }),
  methods: {
    ...mapActions(["logoutUser"]),
    /**
     * this logout method run when user click on the logout btn 
     */
    logout() {
      this.logoutUser();
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style scoped>
.workspace-title {
  text-align: center;
  font-size: 10px;
  color: white;
  margin-top: 15px;
  font-weight: bold;
}
.middle-space {
  height: 360px;
}
.teams-title {
  text-align: center;
  font-size: 12px;
  color: white;
  margin-bottom: 10px;
}
.dropdown-title-size{
  font-size: 14px;
}
.dropdown-icon-size{
  font-size: 18px !important;
}
</style>
