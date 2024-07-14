const state = {

    channels: [
      { id: 1, name: 'Hr related' },
      { id: 2, name: 'Tech Task' },
      { id: 3, name: 'Announcement' },
      { id: 4, name: 'Attendance' }
    ],

    channelId:'',

    directMessages:[
        {
            id:20, name: 'zain '
        },
        {
            id:21, name: 'Ahmad'
        },
        {
            id:22, name: 'Ammar'
        },
        {
            id:23, name: 'Abdulllah'
        }
    ],

    showAddChannelDialog: false,

    newChannel: {
      name: '',
      description: '',
      isPublic: false
    },

    showChannelUserName: '' ,

    showMessageUserName: ''

  };
  
  const mutations = {

    /**This below Toggle channel dialog is used 
    *to show the dialog
    *@params (state) -> they get the state as a parameter
    */

    TOGGLE_CHANNEL_DIALOG(state) {
      state.showAddChannelDialog = !state.showAddChannelDialog;
    },

    /**This below set new channel name is used 
    * to show the channel name when creating the 
    * channel
    * @params (state , name) -> they get the state and name to give the new channel name  
    * @returns (none)
    * */

    SET_NEW_CHANNEL_NAME(state, name) {
      state.newChannel.name = name;
    },

    /**This below set new channel description is used 
    * to show the channel description when creating the 
    * channel
    * @params (state, description) -> they get the state and description to give description of new channel
    * @returns (none)
    * */

    SET_NEW_CHANNEL_DESCRIPTION(state, description) {
      state.newChannel.description = description;
    },

    /**This below set new channel public is used   
    * to show the channel public or private when
    * creating the channel
    * @params (state, ispublic) -> they get the state and isPublic to give newchannel is public or private
    * @returns (none)
    * */

    SET_NEW_CHANNEL_PUBLIC(state, isPublic) {
      state.newChannel.isPublic = isPublic;
    },

    /**This below add-channel is used 
    * to add the channel in the existing channel
    * @params (state, channel) -> they get the state and channel to push the channnel in existing channel
    * @returns(none)
    * */

    ADD_CHANNEL(state, channel) {
      state.channels.push(channel);
    },

    /**This below set show message user name is used 
    * to show the message user name in header
    * @params (state , name) -> they get the state and name of the showMessageUserName
    * @returns (none)
    * */

    SET_SHOW_MESSAGE_USER_NAME(state, name){
      state.showMessageUserName = name;
  },
  
    /**This below set show user channel name is used 
    *to show the channel user name in header
    *@params (state, name) -> they get state and name to get the name of showChannelUserName
    *@returns(none)
    * */

    SET_SHOW_CHANNEL_USER_NAME(state, name) { 
        state.showChannelUserName = name;
      },

    /**This below reset channel is used to reset 
    * the field when creating the channels
    * @params (state)
    * @returns (none)
    */

    RESET_CHANNEL(state) {
      state.newChannel = {
        name: '',
        description: '',
        isPublic: false
      };
    },


    /**This below new channel id is used to get 
    *the channel id of all channels
    * @params (state,id) -> the get the state and the id to get id of the channelId
    * @returns (none)
    */

    NEW_CHANNEL_ID(state,id){
      state.channelId = id; 
    }
  };
  
  const actions = {

    /**
     * this below toggleAddDialogChannel is used to toggle the dialog
     * @param {commit} -> commit to the mutation 
     * @returns {none}
     */
    toggleAddDialogChannel({ commit }) {
      commit('TOGGLE_CHANNEL_DIALOG');
    },

    /** this below createChannel is used to create channel and apply 
     * logic the new channel is added with new id ( id+1 ) and also
     * new channel name description and isPublic added
     * 
     * @context {commit} -> this commit the Add_channel, Reset_channel, Toggle_channel_dialog to mutation   
     */

    createChannel({ commit, state }) {
      const newChannel = {
        id: state.channels.length + 1,
        name: state.newChannel.name,
        description: state.newChannel.description,
        isPublic: state.newChannel.isPublic,
      };
      commit('ADD_CHANNEL', newChannel);
      commit('RESET_CHANNEL');
      commit('TOGGLE_CHANNEL_DIALOG');
    },

    /** this below setNewChannelName is used to add the name 
     * when we create a new channel
     * @context {commit}  ->  this commit the mutation 
     * @param {name} ->  this parameter access the name of new channel 
     */

    setNewChannelName({ commit }, name) {
      commit('SET_NEW_CHANNEL_NAME', name);
    },

    /** this below setNewChanneldescription is used to add the description 
     * when we create a new channel
     * @context {commit}  ->  this commit the mutation 
     * @param {description} ->  this parameter access the description of new channel 
     */

    setNewChannelDescription({ commit }, description) {
      commit('SET_NEW_CHANNEL_DESCRIPTION', description);
    },

    /** this below setNewChannelPublic is used to add the channel
     * is public or private when we create a new channel
     * @context {commit}  ->  this commit the mutation 
     * @param {ispublic} ->  this parameter access the ispublic of new channel 
     * and only give boolean value 
     */

    setNewChannelPublic({ commit }, isPublic) {
      commit('SET_NEW_CHANNEL_PUBLIC', isPublic);
    },

    /** this below setShowMessageUserName is used to show 
     * the message user name in
     * 
     * @context {commit} -> this commit the mutation
     * @param {*} name  -> this name is used to show the MessageUserName in 
     * the DashboardHeader
     */

    setShowMessageUserName({commit},name){
      commit('SET_SHOW_MESSAGE_USER_NAME',name);
  },

  /** this below setShowChannelUserName is used to show 
     * the message user name in
     * 
     * @context {commit} -> this commit the mutation
     * @param {name} name  -> this name is used to show the ChannelUserName
     *  in the DashboardHeader
     */

    setShowChannelUserName({ commit }, name) {  
        commit('SET_SHOW_CHANNEL_USER_NAME', name);
      },
      
      /** this below newChannelId is used to show 
     * the new id of the user
     * @context {commit} -> this commit the mutation
     * @param {*} id  -> this id is used to get the currently selected channel
     *  or direct message Id
     * */
    newChannelId({commit}, id){
        commit('NEW_CHANNEL_ID', id);
      }
  };
  
  const getters = {

    /**This below channels is used to access the channels state
     * 
     * @param {*} state 
     */

    channels(state) {
      return state.channels;
    },

    /** This below showAddchanneldialog is used to 
     * 
     * @param {*} state -> this access the state of shwAddChanneldialog
     * @returns {*} void
     */

    showAddChannelDialog(state) {
      return state.showAddChannelDialog;
    },

    /**this below newChannel is used to create a new channel 
     * @param {*} state  this access the newchannel state
     * @returns {*} void
     */

    newChannel(state) {
      return state.newChannel;
    },

    /** this below showChannelUserName is used to show the user name of channels
     * @param {*} state this access the showChannelUserName state
     * @returns {*} void
     */

    showChannelUserName(state) { 
        return state.showChannelUserName;
      },

      /** this below showMessageUserName is used to show the user name of Messages channels
     * @param {*} state this access the showMessageUserName state
     * @returns {*} void
     */

    showMessageUserName(state){
          return state.showMessageUserName;
      },

      /** this below directMessages is used to show the content of the direct messages array
     * @param {*} state this access the directMessages state
     * @returns {*} void
     */

    directMessages(state){
        return state.directMessages
    },

    /** this below datafromchannelId is used to convert the channels and direct messages
     * array in one array channelId in this channelId all the data of channels and 
     * directMessages in this channelId 
     * @param {*} state this access the channelId state
     * @returns {*} void
     */

    getDatachannelId(state){
      return state.channels.find((channel)=> channel.id == state.channelId) || state.directMessages.find((message)=> message.id == state.channelId);
    },

    /**
     * this below getchannelId is used to access the id of channelId and this
     * getChannelId is used in send messages according to this id
     * @param {*} state 
     * @returns {*} void
     */

    getChannelId(state){
      return state.channelId;
    }
  };
  
  export default {
    state,
    mutations,
    actions,
    getters
  };
  