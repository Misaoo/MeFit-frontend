<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <router-link class="navbar-brand" to="/">
           MeFit
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">

                <li class="nav-item" >
                    <router-link class="nav-link" to="/">
                        <button class="navBtns">Login</button>
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/register">
                        <button class="navBtns">Register</button>
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/progress">
                        <button class="navBtns">Progress</button>
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/goal">
                        <button class="navBtns">Goal dashboard</button>
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/workout">
                        <button class="navBtns">Workout</button>
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/exercise">
                        <button class="navBtns">Exercise</button>
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/createexercise">
                        <button class="navBtns">Create new exercise</button>
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/showexercise">
                        <button class="navBtns">Show exercise</button>
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/profile">
                        <button class="navBtns">Profile</button>
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/createworkout">
                        <button class="navBtns">Create Workout</button>
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/calender">
                        <button class="navBtns">Calender</button>
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link" to="/" @click.native="logout">
                        <button class="navBtns">Logout</button>
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'NavBar',
        methods: {
            logout: function() {
              
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Desktop */
.navbar {
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
}
.navBtns {
    border: 0;
    background-color: transparent;
    color: #fff;
}
.navbar-brand {
   padding: 5px;
   color: #fff;
   font-weight: bold;
}
.navbar-brand:hover {
   color: rgba(255, 255, 255, 0.555);
}

/* Mobile */
@media (min-width: 360px) and (max-width: 600px) {
 
      
} 
    
/* Tablet */
@media (min-width: 768px) and (max-width: 1024px) {
  
} 
</style>