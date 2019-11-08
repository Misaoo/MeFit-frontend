<template>
  <div id="formDiv">
      <h3>Create a new exercise</h3>
      <form id="createExercise" v-on:submit="exerciseCreated">
          <input type="text" class="inputStyle" placeholder="Name of exercise" v-model="Exercise" id="name" required>
          <input type="text" class="inputStyle" placeholder="Description" v-model="Description" id="description" required>
          <input type="text" class="inputStyle" placeholder="Muscle group" v-model="MuscleGroup" id="muscle group" required>
          <!-- <input type="image" class="inputStyle" placeholder="Add an image" v-model="Image" id="image" required>
          <input type="video" class="inputStyle" placeholder="VideoLink" v-model="VideoLink" id="video" required> -->
          <button type="submit" class="submitBtn">Create</button>
      </form>
      <br><img src="../assets/pushup.jpg" style="width:100%; height:100%;"><br>
      <br><iframe width="420" height="315" src="https://www.youtube.com/embed/ytmdfIHs_E0"></iframe>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Create Exercise",
    data() {
        return {
            name: "",
            description: "",
            muscleGroup: "",
            image: "",
            video: ""
        }
    },
    props: {
        exerciseCreated: {}
    },
    methods: {
        newExerciseCreated: function(event) {
            event.preventDefault();
            console.log(this.name + this.description + this.muscleGroup);
            axios.post("Url here", {
                name: this.name,
                description: this.description,
                muscleGroup: this.muscleGroup,
                image: this.image,
                video: this.video
            })
            .then ((results) => {
                if(results.status == 200) {
                    console.log("Status 200. This works!");
                } else if (results.status == 400) {
                    console.log("Status 400. BAD!");
                } else if (results.status == 401) {
                    console.log("Status 404. Whata!");
                }
            })
            .catch ((e) => {
                console.log("Exception: ",  e)
            })
        }
    }
}
</script>

<style scooped>
/* Desktop */
    p {
        color: #fff;
        font-size: 20px;
    }
    #formDiv {
        margin: 1%;
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
        /* margin-left: 25%;
        margin-right: 25%;
        width: 50%; */
        width: 100%;
        border: 0;
        margin-top: 8px;
        padding: 10px;
        background: rgba(0, 0, 0, 0.4);
        color: #fff;
        font-size: 18px;
    }
    h3 {
        color: #3088a0;
        text-align: center;
    }

/* Mobile */
@media (min-width: 360px) and (max-width: 600px) {
} 
    
/* Tablet */
@media (min-width: 768px) and (max-width: 1024px) {  
} 
</style>