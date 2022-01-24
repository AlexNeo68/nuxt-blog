export const actions = {
  async getAnalytics({ commit }) {
    try {
      const res = await this.$axios.$get("/get-posts-analytics");
      return res;
    } catch (e) {
      commit("SET_ERROR", e, { root: true });
      throw e;
    }
  },
  async fetch({ commit }) {
    try {
      const res = await this.$axios.$get("/posts");
      return res.data;
    } catch (e) {
      commit("SET_ERROR", e, { root: true });
      throw e;
    }
  },
  async fetchById({ commit }, post_id) {
    try {
      const res = await this.$axios.$get(`/posts/${post_id}`);
      return res.data;
    } catch (e) {
      commit("SET_ERROR", e, { root: true });
      throw e;
    }
  },

  async fetchAdmin({ commit }) {
    try {
      const res = await this.$axios.$get("/posts");
      return res.data;
    } catch (e) {
      commit("SET_ERROR", e, { root: true });
      throw e;
    }
  },
  async fetchAdminById({ commit }, post_id) {
    try {
      const res = await this.$axios.$get(`/posts/${post_id}`);
      return res.data;
    } catch (e) {
      commit("SET_ERROR", e, { root: true });
      throw e;
    }
  },
  async remove({ commit }, post_id) {
    try {
      await this.$axios.$delete(`/posts/${post_id}`);
    } catch (e) {
      commit("SET_ERROR", e, { root: true });
      throw e;
    }
  },
  async create({ commit }, formData) {
    try {
      await this.$axios.post("/posts", formData);
    } catch (e) {
      commit("SET_ERROR", e, { root: true });
      throw e;
    }
  },
  async update({ commit }, { text, post_id }) {
    try {
      await this.$axios.$patch(`/posts/${post_id}`, { body: text });
    } catch (e) {
      commit("SET_ERROR", e, { root: true });
      throw e;
    }
  },
  async addComment({ commit }, formData) {
    try {
      return (
        await this.$axios.$post(`/posts/${formData.post_id}/comments`, formData)
      ).data;
    } catch (e) {
      commit("SET_ERROR", e, { root: true });
      throw e;
    }
  },
};
