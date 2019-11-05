<template>
  <div id="sideNavbarDiv">
     
  </div>
</template>

<script>


  export default {
    name: 'SideNavPage',
    components: {
    
    },
    data(){
      return {
        toggleA: false
      };
    },
    methods: {
      toggleLeftSideNav() {
        this.toggleA = !this.toggleA;
      }
    }
  }
</script>

<style>
    #sideNavbarDiv {
    height: 750px;
    background-color: green;
  }
  .icon-div {
    width: 49%;
    display: inline-block;
  }
  .icon-div .fa {
    cursor: pointer;
  }
</style>