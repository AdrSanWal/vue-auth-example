<template>
  <div class="login">
  <form>
    <label for="user">First Name</label>
    <input type="text"
            name="username"
            placeholder="Your name.."
            v-model="user">

    <label for="pass">Password</label>
    <input type="password"
            name="lastname"
            placeholder="Your password.."
            v-model="password">

    <button type="submit"
            @click.prevent="login">Submit</button>
    <p>{{ error }}</p>
  </form>
</div>
</template>

<script setup>
  import { ref } from 'vue'
  import router from '../router'
  import { store } from '../store/authStore';

  const user = ref('')
  const password = ref('')
  const error = ref('')
  const st = store()

  const login = async () => {
    const isLogged = await st.signIn(user.value, password.value)
    if (isLogged) {
      router.push({name: 'products'})
    } else {
      user.value = ''
      password.value = ''
      error.value = 'User or password not valid'
    }
  }

</script>

<style lang="scss" scoped>
.login {
  width: 500px;
  margin-top: 100px;
  border-radius: 5px;
  background-color: grey;
  padding: 20px;

}

input[type=text], input[type=password], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 100%;
  background-color: $primary-color;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type=submit]:hover {
  background-color: #45a049;
}

p {
  color: red;
}

</style>
