<template>
  <div id="app">
    <Login />
    <Createaccount />
  </div>
</template>

<script>

import Login from './components/Login.vue'
import Createaccount from './components/Createaccount.vue'

export default {
  name: 'app',
  components: {
    Login,
    Createaccount
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
