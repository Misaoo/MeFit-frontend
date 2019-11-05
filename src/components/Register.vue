<template>
  <div id="registerDiv">

    <form id="createForm" v-on:submit="userLoggedIn">
        <input type="text" class="inputStyle" placeholder="Enter firstname"  v-model="firstname" id="firstname" required>
        <input type="text" class="inputStyle" placeholder="Enter lastname"  v-model="lastname" id="lastname" required>
        <input type="email" class="inputStyle" placeholder="Enter email"  v-model="email" id="email" required>
        <input type="password" class="inputStyle" placeholder="Password"  v-model="password" id="password" required  :maxlength="max" :minlength="min">
        <hr class="hrStyle">
        <button type="submit" class="submitBtn">Create a account</button>
    </form>

  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "Register",

    data() {
        return {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            max: 20,
            min: 6
        }
    },

 
    methods: {
        userLoggedIn: function(event) {
            event.preventDefault();
            /* console.log(this.firstname + this.lastname + this.email + this.password); */

            /* Test if else where instead of a string it should check if the input matches the value from the database */
            if(this.firstname != "jeppe") {
                alert("Wrong firstname");
            }
            else if (this.lastname != "test") {
                alert("Wrong lastname");
            }
            else if (this.email != "test@now.com") {
                alert("Wrong email");
            }
            else if (this.password != "1234567") {
                alert("Wrong password");
            }
            else {
                alert("Logged in success");
            }
 
           
    

            axios.post("Url here", {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                password: this.password
            })
            .then((results) => {
                if(results.status == "200") {
                    console.log("200 all is okey");
                    /* If the user exsist get status code 200 and then the user will be sent to user dashboard page. */
                }
                else if (results.status == "400") {
                    console.log("400 bad request");
                    /* This needs to be for inputting like wrong password or email or only one of them. */
                }
                else if (results.status == "404") {
                    console.log("yo");
                }
            }).catch((e) => {
                console.log('Exception: ', e)
            })
        }
    }

}
</script>

<style>
    #registerDiv {
        margin: 10%;
        margin-right: 37%;
        margin-left: 37%;
        margin-bottom: 5%;
        padding: 2%;
        background: rgba(0, 0, 0, 0.3);
    }

    .inputStyle {
        margin-top: 5px;
        margin-bottom: 5px;
        padding: 10px;
        width: 100%;
    }

    .submitBtn {
        width: 100%;
        border: 0;
        margin-top: 8px;
        padding: 10px;
        background: rgba(0, 0, 0, 0.4);
        color: #fff;
        font-size: 18px;
    }

    .hrStyle {
        background-color: #000;
        box-shadow: 1px 1px 1px #fff;
        opacity: 0.2;
    }

</style>