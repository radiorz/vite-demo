<template>
  <div>
    <div v-if="aaa ? delay() &&b : true">
      123123123
    </div>
    <div v-if="aaa ? delay() : true">
      33333
    </div>
    <button @click="changeAAA">
      bbbbb
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Logo
import logo from "../assets/logo.svg";

export default defineComponent({
  name: "HelloWorld",

  data() {
    return {
      b: true,
      aaa: false,
      ecosystem: [
        {
          text: "vuetify-loader",
          href: "https://github.com/vuetifyjs/vuetify-loader",
        },
        {
          text: "github",
          href: "https://github.com/vuetifyjs/vuetify",
        },
        {
          text: "awesome-vuetify",
          href: "https://github.com/vuetifyjs/awesome-vuetify",
        },
      ],
      importantLinks: [
        {
          text: "Chat",
          href: "https://community.vuetifyjs.com",
        },
        {
          text: "Made with Vuetify",
          href: "https://madewithvuejs.com/vuetify",
        },
        {
          text: "Twitter",
          href: "https://twitter.com/vuetifyjs",
        },
        {
          text: "Articles",
          href: "https://medium.com/vuetify",
        },
      ],
      logo,
      whatsNext: [
        {
          text: "Explore components",
          href: "https://vuetifyjs.com",
        },
        {
          text: "Roadmap",
          href: "https://vuetifyjs.com/en/introduction/roadmap/",
        },
        {
          text: "Frequently Asked Questions",
          href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
        },
      ],
    };
  },
  methods: {
    changeAAA() {
      this.aaa = true;
      // this.delay();
    },
    async delay() {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      console.log(`123`, 123);
      this.b = false;
      return false;
    },
  },
});
</script>
