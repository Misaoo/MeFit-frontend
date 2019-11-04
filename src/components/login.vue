<template>
  <div id="loginDiv">
    <form id="loginForm">
        <input type="email" class="inputStyle" placeholder="Enter email">
        <input type="password" class="inputStyle" placeholder="Password">
        <button type="submit" class="submitBtn">Login</button>
        <hr class="hrStyle">
        <button type="submit" class="submitBtn">Create a account</button>

    </form>
  </div>
</template>

<script>
export default {
    name: "login"
}
</script>

<style>
    #loginDiv {
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