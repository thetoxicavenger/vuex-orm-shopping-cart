<template>
  <div id="app">
    <Toolbar />
    <router-view/>
  </div>
</template>

<script lang="ts">
import Toolbar from "@/components/Toolbar.vue";
import Vue from "vue";
import store from "@/store/index";
import data from "@/data";
export default Vue.extend({
  store,
  components: {
    Toolbar
  },
  created() {
    this.$store.dispatch("entities/items/create", { data });
  }
});
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
