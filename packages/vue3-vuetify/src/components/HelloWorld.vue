<template>
  <v-container>
    <v-row
      class="login-row"
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <!-- 登录卡片 -->
        <v-card class="elevation-12">
          <v-toolbar
            color="dark"
            dark
            flat
          >
            <v-spacer />
            <v-toolbar-title class="card-title">
              许可管理系统
            </v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <!-- <v-responsive :aspect-ratio="16 / 9"> -->
          <v-card-text>
            <v-form
              ref="form"
            >
              <v-text-field
                solo
                class="mx-2"
                name="username"
                label="用户名"
              />
           
              <!-- TODO 保存密码 -->
              <!-- 登录按钮 -->
              <v-card-actions />
            </v-form>
          </v-card-text>
          <!-- </v-responsive> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Logo
import logo from "../assets/logo.svg";

export default defineComponent({
  name: "HelloWorld",

  data() {
    return {
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
});
</script>
