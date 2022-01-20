export const state = () => ({
  token: null,
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
  async login({ commit, dispatch }, formData) {
    try {
      const res = await this.$axios.$post("/login", formData);
      dispatch("setToken", res.token);
    } catch (e) {
      commit("SET_ERROR", e, { root: true });
      throw e;
    }
  },
  async createUser({ commit }, formData) {
    try {
      const res = await this.$axios.post("/users", formData);
      console.log(res.data);
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
