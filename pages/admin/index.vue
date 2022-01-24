<template>
  <div>
    <h1 class="mb2">Аналитика по постам</h1>
    <AnalyticsBar
      :chartdata="analytics.comments"
      :label="`Статистика по комментариям`"
    />
    <AnalyticsBar
      :chartdata="analytics.views"
      :label="`Статистика по просмотрам`"
    />
  </div>
</template>
<script>
import AnalyticsBar from "~/components/admin/AnalyticsBar.vue";
export default {
  layout: "admin",
  components: { AnalyticsBar },
  async asyncData({ store }) {
    const analytics = await store.dispatch("posts/getAnalytics");
    return { analytics };
  },
  head() {
    return {
      title: `Аналитика по постам | ${process.env.appName}`,
    };
  },
};
</script>
