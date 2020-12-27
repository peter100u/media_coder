<template>
  <div id="app">
    <NaviMenu></NaviMenu>
    <router-view></router-view>
  </div>
</template>

<script>

import NaviMenu from "@/components/NavMenu";

export default {
  name: 'App',
  components: {NaviMenu},
  computed: {},
  methods: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  padding: 0;
  margin: 0;
}
</style>
