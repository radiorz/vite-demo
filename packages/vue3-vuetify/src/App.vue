<template>
  <v-app>
    <v-main>
      <Pressable />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pressable from "./views/Pressable/index.vue";

export default defineComponent({
  name: "App",

  components: {
    Pressable,
  },

  data() {
    return {
      //
    };
  },
});
</script>
