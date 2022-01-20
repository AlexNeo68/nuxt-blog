export default function ({ $axios, redirect, store }) {
  $axios.onError((error) => {
    if (error.response) {
      const code = parseInt(error.response.status);
      if (code === 401) {
        redirect("/admin/login?message=session");
        store.dispatch("auth/logout");
      }
      if (code === 500) {
        console.error("Server is cryaknul!");
      }
    }
  });
}
