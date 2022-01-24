import Cookies from "js-cookie";
import Cookie from "cookie";

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
      this.$axios.setToken(res.token, "Bearer");
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
    Cookies.remove("nuxt-blog-token");
  },
  setToken: ({ commit }, token) => {
    commit("SET_TOKEN", token);
    Cookies.set("nuxt-blog-token", token);
  },

  autoLogin({ dispatch }) {
    const cookieStr = process.browser
      ? document.cookie
      : this.app.context.req.headers.cookie;
    if (cookieStr) {
      const cookies = Cookie.parse(cookieStr);
      const token = cookies["nuxt-blog-token"];
      dispatch("setToken", token);
    }
  },
};
export const getters = {
  isAuth: (state) => Boolean(state.token),
  token: (state) => state.token,
};
