export const state = () => ({
  error: null,
});

export const mutations = {
  SET_ERROR(state, error) {
    state.error = error;
  },

  CLEAR_ERROR() {},
};

export const getters = {
  error: (state) => state.error,
};
