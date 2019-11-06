<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <router-link class="navbar-brand" to="/">
           
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">

                <li class="nav-item" >
                    <router-link class="nav-link" to="/">Login</router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/register">Register</router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/progress">Progress</router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/goal">Goal dashboard</router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/workout">Workout</router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/exercise">Exercise</router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/profile">Profile</router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/createworkout">Create Workout</router-link>
                </li>





                <li class="nav-item">
                    <router-link class="nav-link" to="/" @click.native="logout">Logout</router-link>
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
.navbar {
    text-align: center;
    background: #D9B08C;
}
.navbar-brand img {
    margin-top: -20px;
    margin-bottom: -15px;
    height: 55px;
    width: 50px;
}
</style>
