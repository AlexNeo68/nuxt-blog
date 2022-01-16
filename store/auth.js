export const state = () => ({
  token: "demo",
});

export const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  CLEAR_TOKEN: (state) => {
    state.token = null;
  },
};
export const actions = {
  login: async ({ commit, dispatch }, formData) => {
    try {
      const token = await new Promise((resolve, reject) => {
        setTimeout(() => {
          return resolve("mock-token");
        }, 2000);
      });
      dispatch("setToken", token);
    } catch (e) {
      commit("SET_ERROR", e, { root: true });
      throw e;
    }
  },
  createUser: async ({ commit, dispatch }, formData) => {
    try {
      console.log("createUser", formData);
    } catch (e) {
      commit("SET_ERROR", e, { root: true });
      throw e;
    }
  },
  logout: ({ commit }) => {
    commit("CLEAR_TOKEN");
  },
  setToken: ({ commit }, token) => {
    commit("SET_TOKEN", token);
  },
};
export const getters = {
  isAuth: (state) => Boolean(state.token),
};
