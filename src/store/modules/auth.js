import api, { setHeaderToken } from "@/apis/Api";

// import router from "@/router";

export default {
  namespaced: true,
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    login({ dispatch }, payload) {
      dispatch("setLoading", true);
      return new Promise((resolve, reject) => {
        api({
          method: "post",
          url: `login`,
          data: payload,
          withCredentials: false,
          headers: {},
        })
          .then((res) => {
            resolve(res);
            sessionStorage.setItem("token", res.token);
            setHeaderToken(res.token);
            dispatch("setLoading", false);
          })
          .catch((err) => {
            reject(err);
            dispatch("setLoading", false);
            return false;
          });
      });
    },
    register({ dispatch }, payload) {
      dispatch("setLoading", true);
      return new Promise((resolve, reject) => {
        api({
          method: "post",
          url: `register`,
          data: payload,
          withCredentials: false,
          headers: {},
        })
          .then((res) => {
            resolve(res);
            dispatch("setLoading", false);
          })
          .catch((err) => {
            reject(err);
            dispatch("setLoading", false);
            return false;
          });
      });
    },
    setLoading({ commit }, payload) {
      commit("loader/setLoading", payload, {
        root: true,
      });
    },
  },
};
