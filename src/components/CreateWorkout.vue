<template>
  <div>
      <form id="createForm">
        <input type="text" class="inputStyle" placeholder="Enter name of workout"  
            v-model="name"  
            required  
            onkeypress="return /[a-å,ä,ö]/i.test(event.key)"
            :maxlength="max" :minlength="min"
        >
        <input type="text" class="inputStyle" placeholder="Enter type"  
            v-model="type"  
            required  
            onkeypress="return /[a-å,ä,ö]/i.test(event.key)"
            :maxlength="max" :minlength="min"
        >

        <!-- make add button -->
        

        <hr class="hrStyle">
        <button type="submit" class="submitBtn">Create a account</button>
    </form>
  </div>
</template>

<script>
export default {
     name: "Register",

    data() {
        return {
            name: "",
            type: "",
            completed: false,
            repetitions: 1,
            max: 20,
            min: 6
        }
    },
    methods: {

    }
}
</script>

<style>

</style>