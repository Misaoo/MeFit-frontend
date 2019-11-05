<template>
  <div id="sideNavbarDiv">
     <h1>Sidebar!!</h1>

     <button class="sideNavBtns">1</button>
     <button class="sideNavBtns">1</button>
     <button class="sideNavBtns">1</button>
     <button class="sideNavBtns">1</button>
  </div>
</template>

<script>


  export default {
    name: 'SideNavPage',
    components: {
    
    },
    data(){
      return {
   
      };
    },
    methods: {
     
    }
  }
</script>

<style>
    #sideNavbarDiv {
      height: 100%;
      width: 250px;
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      background-color: #111;
      overflow-x: hidden;
      background: rgba(0, 0, 0, 0.5);
    }

    .sideNavBtns {
       width: 100%;
        border: 0;
        margin-top: 8px;
        padding: 10px;
        background: rgba(0, 0, 0, 0.4);
        color: #fff;
        font-size: 18px;
    }

    .sideNavBtns:hover {
      background: rgba(0, 0, 0, 0.6);
    }




</style>