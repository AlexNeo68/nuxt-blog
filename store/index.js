export const state = () => ({
  error: null,
});

export const mutations = {
  SET_ERROR(state, error) {
    state.error = error;
  },

  CLEAR_ERROR() {},
};

export const actions = {
  nuxtServerInit({ dispatch }) {
    dispatch("auth/autoLogin");
  },
};

export const getters = {
  error: (state) => state.error,
};
