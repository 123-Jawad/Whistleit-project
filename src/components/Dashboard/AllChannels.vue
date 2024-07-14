<template>
  <div>
    <!-- All channels heading -->
    <div class="heading">
      <v-btn text rounded color="#e8e7ec" class="px-2" @click="toggleChannels">
        <v-icon>{{ channelIcon }}</v-icon>
        Channel
      </v-btn>
      <v-btn icon color="#e8e7ec" class="ml-15" @click="toggleAddDialogChannel">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>

    <!-- Expand collapse transition -->
    <v-expand-transition>
      <div v-show="showChannels">
        <v-list-item v-for="channel in channels" :key="channel.id" link @click="markChannelName(channel)">
          <div class="img">
            <v-img src="https://app.whistleit.io/img/public-channel-select.8d7e0169.svg"></v-img>
          </div>
          <v-list-item-content class="py-0">
            <v-list-item-title class="channel-name ml-3">{{ channel.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-expand-transition>

    <!-- Dialog for creating a new channel -->
    <v-dialog v-model="showAddChannelDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Create Public Channel</span>
        </v-card-title>
        <v-card-text>
          <p>Channels are a way to communicate with your team</p>
          <v-text-field label="Name" v-model="newChannel.name" :rules="[rules.name]"></v-text-field>
          <v-text-field label="Description" v-model="newChannel.description"></v-text-field>
          <h4>Make Private</h4>
          <p>Private channel is only visible to members of the channel</p>
          <v-switch label="Public" v-model="newChannel.isPublic"></v-switch>
        </v-card-text>
        <v-card-actions>
          <v-divider></v-divider>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="toggleAddDialogChannel">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="createChannel">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AllChannels',
  data() {
    return {
      showChannels: false,
      rules: {
        name: value => !!value || 'This field is required'
      }
    };
  },
  methods: {
    toggleChannels() {
      this.showChannels = !this.showChannels;
    },
    markChannelName(channel) {
      this.setShowChannelUserName(channel.name);
      this.newChannelId(channel.id);
    },
    ...mapActions(['toggleAddDialogChannel', 'createChannel', 'setShowChannelUserName','newChannelId'])
  },
  computed: {
    channelIcon() {
      return this.showChannels ? 'mdi-chevron-up' : 'mdi-chevron-down';
    },
    ...mapGetters(['channels', 'showAddChannelDialog', 'newChannel'])
  }
};
</script>

<style scoped>
.channel-name {
  color: #9598be;
  margin-left: 3px;
  font-size: 14px;
}
.img {
  width: 15px;
  height: 15px;
  background-size: cover;
  margin-left: 3px;
  color: #9598be;
}
</style>
