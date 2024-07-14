import router from '@/router';

const state = {
  user: {
    name: '',
    companyname: '',
    email: '',
    password: '',
  },
  users: [],
};

const mutations = {
  /**
   *  this setuser set the user in the user state
   * @param {*} state -> state
   * @param {*} user -> set the user in user state
   * @returns {void}
   */
  SET_USER: (state, user) => (state.user = user),

  /**
   * this below add-user push the user in users array (without this array the single user is
   *  register and when the next user register it will replace from previous one)
   * @param {*} state -> state
   * @param {*} user -> user is pararmeter where all the user from users array store
   * @returns {void}
   */

  ADD_USER: (state, user) => state.users.push(user),

  /**
   * this below clearuser clear the field of name email and password
   * @param {*} state -> state
   */

  CLEAR_USER: (state) => {
    state.user = { name: '', companyname: '', email: '', password: '' };
  },
};

const actions = {

  /**
   * this below loginUser is used in loginForm component in handleFormSubmit method 
   * to find the user.email equal to payload.email and same with password
   * we also save the token in localstorage this token is used to login a user when
   * user logout it will clear from localstorage
   * @context {*} commit and state -> commit the set-user and hold the user data and token 
   * @params  {*} payload -> this is parameter used to in user.email is equal to this payload email
   * @returns { success } -> if it return success it is used in handleformsubmit it will redirect to
   *                         dashboard page
   */

  loginUser({ commit, state }, payload) {
    const user = state.users.find((user) => user.email === payload.email && user.password === payload.Password);
    if (user) {
      const token = 'New Token Generated';
      localStorage.setItem('userToken', token);
      commit('SET_USER', { ...user, token });
      return "success";
    } else {
      return "error";
    }
  },

  /**
   * this below registeruser is used to register the user if the user register successfully it
   * will redirected to login page 
   * @context { commit } commit the adduser mutation 
   * @param {*} user it is parameter 
   * @returns success if the user push to login page
   */
  async registerUser({ commit }, user) {
    commit('ADD_USER', user);
    return Promise.resolve().then(() => {
      router.push({ name: 'login' });
      return "success";
    }).catch(() => {
      return "error";
    });
  },
  /**
   * this logoutuser is called when the user click on the logout btn
   * this will remove the token from localstorage
   * @context {*} commit -> this commit the clear-user  
   */
  logoutUser({ commit }) {
    localStorage.removeItem('userToken');
    commit('CLEAR_USER');
  },
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};

