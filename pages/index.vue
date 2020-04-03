<template>
  <section class="section no-top-pad">
    <div id="js_capture_ref" class="OGPMessage">
      <span class="your-message">あなたのメッセージ</span>
      <span v-if="message">
        {{ message }}
      </span>
      <span v-else class="no-input">
        入力エリアにメッセージを入れてください
      </span>
    </div>
    <div class="columns is-centered is-mobile">
      <div class="column is-half-desktop is-full-mobile is-full-tablet">
        <form>
          <div class="field">
            <label class="label">あなたのメッセージ</label>
            <div class="control">
              <input
                class="input"
                name="message"
                v-model="message"
                placeholder="メッセージを入力してください"
              />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <client-only placeholder="Loading...">
                <GenerateOGPButton @click="handleGenerateOGP" />
              </client-only>
            </div>
          </div>
        </form>
      </div>
    </div>
    <progress v-if="isLoading" class="progress is-small is-primary" max="100">
      15%
    </progress>
  </section>
</template>

<script>
import GenerateOGPButton from "@/components/GenerateOGPButton";
export default {
  components: {
    GenerateOGPButton
  },
  data() {
    return {
      message: "",
      isLoading: false
    };
  },
  methods: {
    handleGenerateOGP(e) {
      this.$store.dispatch("setMessage", {
        message: this.message,
        image: e
      });
    }
  }
};
</script>

<style scoped>
.your-message {
  font-size: 14px;
  display: block;
}
.no-input {
  color: #ccc;
}
.OGPMessage {
  padding: 20px 0;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  border: 10px solid #55c500;
  margin-bottom: 30px;
}
</style>
