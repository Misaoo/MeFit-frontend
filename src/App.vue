<template>
  <div id="app">
     <!-- <Login /> -->
     <GoalDashBoard/>
    <!-- <Register /> -->
  </div>
</template>

<script>

 /* import Login from './components/Login.vue' */
 /* import Register from './components/Register.vue' */
 import GoalDashBoard from './components/GoalDashBoard.vue'

export default {
  name: 'app',
  components: {
    /* Login, */
    /*   Register */
    GoalDashBoard
  }
}
</script>

<style>
#app {
 
}
</style>
