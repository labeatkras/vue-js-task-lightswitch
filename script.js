const app = Vue.createApp({
  data() {
    return {
      isDarkMode: false,
      leftText: "Light",
      rightText: "Dark",
    };
  },
  watch: {
    isDarkMode(newValue) {
      if (newValue) {
        this.leftText = "Dark";
        this.rightText = "Light";
        document.body.classList.add("dark-mode");
      } else {
        this.leftText = "Light";
        this.rightText = "Dark";
        document.body.classList.remove("dark-mode");
      }
    },
  },
  mounted() {
    if (this.isDarkMode) {
      document.body.classList.add("dark-mode");
    }
  },
});

app.mount("#app");
