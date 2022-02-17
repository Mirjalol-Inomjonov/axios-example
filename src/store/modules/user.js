import axios from "axios";
import { BASE_URL } from "../../config";

const users = {
  namespaced: true,
  state: {
    users: [],
  },

  mutations: {
    SET_USERS(state, data) {
      state.users = data;
    },
    PUSH_USERS(state, user) {
      state.users.push(user);
    },
    REMOVE_USER(state, id) {
      state.users.splice(id, 1);
    },
  },

  actions: {
    GET_USERS(vuex) {
      const users = axios.get(`${BASE_URL}posts`);
      // console.log(users);
      users.then((data) => {
        vuex.commit("SET_USERS", data.data);
      });
    },
    POST_USER(vuex, user) {
      console.log(vuex);
      axios.post(`${BASE_URL}posts`, user).then((data) => {
        console.log(data);
        vuex.commit("PUSH_USERS", data.data);
      });
    },
  },
  getters: {},
};
export default users;
