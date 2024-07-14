<template>
    <div>
        <div class="heading">
            <v-btn text rounded color="#e8e7ec" id="button" class="px-2" @click="toggleDirectMessages">
                <v-icon>{{ directMessagesIcon }}</v-icon>
                Direct Messages
            </v-btn>
            <v-btn icon color="#e8e7ec" class="ml-4">
                <v-icon>mdi-plus</v-icon>
            </v-btn>

            <v-expand-transition>
                <div v-show="showDirectMessages">
                    <v-list-item v-for="user in directMessages" :key="user.id" link @click="markMessageName(user)">
                        <div class="img">
                            <v-img src="https://app.whistleit.io/img/user-offline-no-select.f956b4c4.svg"></v-img>
                        </div>
                        <v-list-item-content class="py-0">
                            <v-list-item-title class="channel-name ml-3">{{ user.name }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </div>
            </v-expand-transition>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'AllMessages',
    data() {
        return {
            showDirectMessages: false,
        };
    },
    methods: {
        toggleDirectMessages() {
            this.showDirectMessages = !this.showDirectMessages;
        },
        markMessageName(channel) {
      this.setShowMessageUserName(channel.name);
      this.newChannelId(channel.id);
        },
        ...mapActions(['setShowMessageUserName', 'newChannelId'])
    },
    computed: {
        directMessagesIcon() {
            return this.showDirectMessages ? 'mdi-chevron-up' : 'mdi-chevron-down';
        },
        ...mapGetters(['directMessages', 'showMessageUserName'])
    }
};
</script>

<style scoped>
#button {
    font-size: 11px;
}
.channel-name {
  color: #9598be;
  margin-left: 3px;
  font-size: 14px;
}
</style>
