export const state = () => ({
  message: "",
  isLoading: false,
  ogpData: {}
});

export const mutations = {
  setMessage(state, payload) {
    state.message = payload;
  },
  setLoading(state, payload) {
    state.isLoading = payload;
  },
  setOGP(state, payload) {
    state.ogpData = payload;
  }
};

export const actions = {
  async setMessage({ commit }, payload) {
    const id = await this.$axios.$post("/api/messages", payload);
    if(id){
      this.$router.push(`/message/${id}/`);
    }
  },
  setLoading({ commit }, payload) {
    commit("setLoading", payload);
  },
  async getOPG({ commit }, payload) {
    const data = await this.$axios.$get(`/api/messages/${payload}`);
    commit("setOGP", data);
  }
};

export const getters = {
  message(state) {
    return state.message;
  },
  loading(state) {
    return state.loading;
  },
  ogpData(state) {
    return state.ogpData;
  }
};
