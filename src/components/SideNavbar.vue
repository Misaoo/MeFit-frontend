<template>
<div>

  <div id="sideNavbarDiv">
    <div id="imgContainer">
    <img src="https://source.unsplash.com/random/300x300" class="img-fluid" id="sidebarIMG">
    </div>
    <h4 class="nameTitle">Name here</h4>

    <hr class="hrStyle">
    
     
    <router-link to="/workout">
      <button class="sideNavBtns">workout component</button>
    </router-link>
    
   
  </div>

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
    methods:{
      
    }
  }
</script>

<style>

/* Desktop CSS */
    #sideNavbarDiv {
      height: 100%;
      width: 300px;
      /* position: fixed; */
      top: 0px;
      left: 0px;
      /* z-index: 1; */
      overflow-x: hidden;
      background: rgba(70, 155, 172, 0.5);
    } 

    .sideNavBtns {
      text-align: center;
      background-color: transparent;
        width: 100%;
        border: 0;
        margin-top: 8px;
        padding: 10px;
        color: #fff;
        font-size: 18px;
        cursor: pointer;
    }

    .sideNavBtns:hover {
      background: rgba(70, 155, 172, 0.8);
    }

    .hrStyle {
        background-color: #000;
        box-shadow: 1px 1px 1px #fff;
        opacity: 0.2;
    }

    .nameTitle {
      text-align: center;
      color: #fff;
    }

    #imgContainer {
      
      margin-top: 10%;
      margin-right: 20%;
      margin-left: 20%;
      margin-bottom: 3%;
      /* background-color: green; */
    }
    #sidebarIMG {
      border-radius: 50%;
    }


/* Mobile */
@media (min-width: 360px) and (max-width: 600px) {

    #sideNavbarDiv {
      height: 100%;
      width: auto;
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      background-color: #111;
      overflow-x: hidden;
      background: rgba(70, 155, 172, 0.5);
    }

    .sideNavBtns {
      text-align: center;
      background-color: transparent;
        width: 100%;
        border: 0;
        margin-top: 8px;
        padding: 10px;
        color: #fff;
        font-size: 18px;
        cursor: pointer;
    }
    .sideNavBtns:hover {
      background: rgba(70, 155, 172, 0.8);
    }
    .hrStyle {
        background-color: #000;
        box-shadow: 1px 1px 1px #fff;
        opacity: 0.2;
    }
    .nameTitle {
      text-align: center;
      color: #fff;
    }

    #imgContainer {
      margin-top: 10%;
      margin-right: 20%;
      margin-left: 20%;
      margin-bottom: 3%;
      /* background-color: green; */
    }
    #sidebarIMG {
      border-radius: 50%;
    }
} 
    
/* Tablet */
@media (min-width: 768px) and (max-width: 1024px) {
    
} 

</style>