<template>
  <div class="wrap">
    <div class="button is-primary" ref="capture">
      OGPイメージを作成する
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    const elm = this.$refs.capture;
    const self = this;
    this.$nextTick(() => {
      // DOMが更新されるのを待って
      if (process.client) {
        const h2c = require("html2canvas");
        elm.addEventListener("click", () => {
          self.$store.dispatch("setLoading", true);
          window.scrollTo(0, 0);
          h2c(document.querySelector("#js_capture_ref"), {
            backgroundColor: "#fff"
          }).then(canvas => {
            canvas.toBlob(blob => {
              const reader = new FileReader();
              reader.readAsDataURL(blob);
              reader.onload = function() {
                const dataURI = this.result;
                self.handleClick(dataURI);
              };
            });
          });
        });
      }
    });
  },
  methods: {
    handleClick(dataURI) {
      this.$emit("click", dataURI);
    }
  }
};
</script>
<style>
.wrap {
  text-align: center;
}
</style>
