<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-view/>
  <router-link v-for="(route, i) in routes" :key="i" :to="route.path">
    {{ route.path }}
  </router-link>
</template>

<script lang="ts">
import {useRouter} from 'vue-router'
import module1 from "/@/views/module1";
export default {
  setup(){
    const router = useRouter()
    return {
      routes: router.getRoutes()
    }
  },
  created() {
    console.log(module1, 'app.module1')
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
