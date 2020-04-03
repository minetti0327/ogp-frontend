<template>
  <section class="section no-top-pad">
    <div class="columns is-centered is-mobile">
      <div class="column is-half-desktop is-full-mobile is-full-tablet">
        <h2 class="subtitle">{{ogpData.message}}</h2>
        <img :src="ogpData.url" alt="">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "OGPメッセージサービス",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "OGPメッセージサービスの説明が入ります"
        },
        { hid: "og:type", property: "og:type", content: "article" },
        {
          hid: "og:title",
          property: "og:title",
          content: "OGPメッセージのタイトル"
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "OGPメッセージサービスの説明が入ります"
        },
        { hid: "og:url", property: "og:url", content: "{詳細ページのURL}" },
        { hid: "og:image", property: "og:image", content: this.ogpData.url },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.ogpData.url
        },
        {
          hid: "twitter:image:src",
          name: "twitter:image:src",
          content: `${this.ogpData.url}`
        }
      ]
    };
  },
  computed: {
    ogpData() {
      return this.$store.getters["ogpData"];
    }
  },
  async fetch({ app, store, route }) {
    const id = route.params.id;
    await store.dispatch("getOPG", id);
    return;
  }
};
</script>
