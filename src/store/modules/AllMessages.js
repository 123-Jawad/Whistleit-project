// const state = {
//   messages: [],
// };

// const mutations = {
//   GET_MESSAGE(state, message) {
//     console.log("Adding message:", message);
//     state.messages.push(message);
//   },

//   /**this below code is for delete the message with id 
//    * it show messge.id !== to messgeId
//    * @param {*} state -> access the state 
//    * @param {*} messageId -> this parameter match the id of message.id if it equal then deleted otherwise show other message.id
//    */

//   DELETE_MESSAGE(state, messageId) {
//     console.log("Deleting message with id:", messageId);
//     state.messages = state.messages.filter((message) => message.id !== messageId);
//   },
// };

// const actions = {
//   getMessage({ commit, getters }, message) {
//     message.channelId = getters.getChannelId;
//     message.id = Date.now();
//     commit("GET_MESSAGE", message); 
//   },
//   deleteMessage({ commit }, messageId) {
//     commit("DELETE_MESSAGE", messageId);
//   },
// };

// const getters = {
//   messages(state) {
//     return state.messages;
//   },
//   getMessagesByChannel(state, getters) {
//     return state.messages.filter(
//       (message) => message.channelId == getters.getChannelId
//     );
//   },
// };

// export default {
//   state,
//   mutations,
//   actions,
//   getters,
// };
const state = {
    messages: [],
    editedMessage: null,
  };
  
  const mutations = {

    /**
     * this below send_message is used to push the message in the messages array
     * @param {*} state -> this access the state
     * @param {*} message -> this message is the parameter to push this message in the messages array
     */

    SEND_MESSAGE(state, message) {
      state.messages.push(message);
    },

    /**
     * this delete_message is used to delte the message with the parameter messageId 
     * not equal to the message.id create a array of other messages that is not 
     * matched
     * @param {*} state -> this access the state
     * @param {*} messageId -> this parameter check with the message.id not equal to
     *                         messageId then deleted other will show in page
     */

    DELETE_MESSAGE(state, messageId) {
      state.messages = state.messages.filter(message => message.id !== messageId);
    },

    /**
     * this updatedMessage updated the messages if the updatedMessage.id matched with the 
     * message.id if match then go futher if not it return void
     * @param {*} state -> this access the state
     * @param {*} updatedMessage ->this updatedMessage is a parameter which matches the id of
     *                             the message.id if found then updated the text of that message
     *                              is updated with the text from updatedMessage. 
     */

    UPDATE_MESSAGE(state, updatedMessage) {
      const index = state.messages.findIndex(message => message.id === updatedMessage.id);
      if (index !== -1) {
        state.messages[index].text = updatedMessage.text;
      }
    },

    /**
     * this set edited message access the editedMessage state
     * @param {*} state -> this access the state
     * @param {*} message -> this message is parameter used to access the message in editedmessage
     */

    SET_EDITED_MESSAGE(state, message) {
      state.editedMessage = message;
    },
  };
  
  const actions = {

    /**
     * this setsendMessage is used to send the message the id of channel is coming 
     * from the getChannelId and saved in the message.channelId 
     * @context {*} context -> this context is used to commit and and and getter is used to call getChannelId
     * @param {*} message -> this is parameter where getChannelId is store
     */

    setsendMessage({ commit, getters }, message) {
      message.channelId = getters.getChannelId;
      message.id = Date.now();  /* this Date.now is taken the current id of messages this helpfull to delete*/
      commit("SEND_MESSAGE", message);
    },

    /**
     * this deleteMessage is used to delete the message with message id
     * @context {*}  commit -> this commit to the DELETE_MESSAGE mutation
     * @param {*} messageId -> this is parameter of messageId
     */

    deleteMessage({ commit }, messageId) {
      commit("DELETE_MESSAGE", messageId);
    },

    /**
     * this updateMessage is used to update the message with updatemessage
     * @context {*}  commit -> this commit to the DELETE_MESSAGE mutation
     * @param {*} updatedMessage -> this is parameter of updatedMessage
     */

    updateMessage({ commit}, updatedMessage) {
     commit("UPDATE_MESSAGE", updatedMessage);  
    },

    /**
     *  this seteditedmessage is used to save the edited message in SET_EDITED_MESSAGE muataion
     * where it save in editedmesasage state 
     * @context {*} context  -> this  commit the mutation
     * @param {*} message  -> this is parameter of message 
     */
    setEditedMessage({ commit }, message) {
      commit('SET_EDITED_MESSAGE', message);
    },
  };
  
  const getters = {
    messages(state) {
      return state.messages;
    },

    /**
     * this getMessageByChannel is used to matched the channelId (currentID) with the getChannelId the filter the
     * specific that channel Id
     * @context {*}  state 
     * @context {*}  getters -> access the getters of getChannelId from allchannels
     * @returns -> it check if the currentchannelId match with getchannelId  then filter that Id
     */

    getMessagesByChannel(state, getters) {
      return state.messages.filter(message => message.channelId === getters.getChannelId);
    },
  };
  
  export default {
    state,
    mutations,
    actions,
    getters,
  };
  