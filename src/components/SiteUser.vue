<script setup>
import { ref } from "vue";
import router from "../router";

const name = ref("");
const password = ref("");

let wrongLogin = ref(false);
function Login() {
  if (name.value != "tmdb" || password.value != "movies") {
    wrongLogin.value = true;
  } else {
    router.push("/purchase");
  }
}
</script>

<template>
  <div class="usercontainer">
    <div class="logcontainer">
      <h1>Login</h1>
      <form class="loginpage" @submit.prevent>
        <input type="text" placeholder="Name" v-model="name" />
        <input type="password" placeholder="Password" v-model="password" />
        <input class="enter" type="submit" value="Enter" @click="Login" />
      </form>
      <div v-if="wrongLogin">
        <p>Incorrect username / password</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
input {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 20px;
  color: rgb(202, 26, 26);
  background-color: rgb(54, 52, 52);
  border-color: rgba(71, 70, 70, 0.76);
  border-width: 3px;
}

.logcontainer {
  width: 30%;
  height: 300px;
  border-width: 4px;
}

h1 {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}

.enter {
  width: 30%;
}
</style>
