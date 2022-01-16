const posts = [
  {
    _id: "id1",
    title: "Post 1",
    views: 22,
    comments: 30,
    date: new Date(),
  },
  {
    _id: "id2",
    title: "Post 2",
    views: 25,
    comments: 10,
    date: new Date(),
  },
  {
    _id: "id3",
    title: "Post 3",
    views: 11,
    comments: 2,
    date: new Date(),
  },
];

export const actions = {
  fetchAdmin: async () => {
    try {
      return await new Promise((resolve) => {
        setTimeout(() => {
          resolve(posts);
        }, 2000);
      });
    } catch (e) {
      commit("SET_ERROR", e, { root: true });
      throw e;
    }
  },
  fetchAdminById: async (post_id) => {
    try {
      return await new Promise((resolve) => {
        setTimeout(() => {
          resolve(posts[0]);
        }, 1000);
      });
    } catch (e) {
      commit("SET_ERROR", e, { root: true });
      throw e;
    }
  },
  remove({}, post_id) {},
  create({}, formData) {},
  update({}, { text, post_id }) {},
};
