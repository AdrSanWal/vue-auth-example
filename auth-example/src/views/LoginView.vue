<template>
  <MainLayout>
    <template #main>
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
                  @click.prevent="login();$router.push({name: 'products'})">Submit</button>
          <p>{{ error }}</p>
        </form>
      </div>
    </template>
  </MainLayout>
</template>

<script setup>
  import { ref } from 'vue'
  import { useAuthStore } from '../store/authStore';
  import MainLayout from '@/layouts/MainLayout.vue';

  const user = ref('')
  const password = ref('')
  const authStore = useAuthStore()
  const error = ref('')

  const login = async () => {
    const isLogged = await authStore.signIn(user.value, password.value)
    if (!isLogged) { error.value = 'User or password not valid' }
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
  background-color: $primary-color;
  font-weight: bold;
}

p {
  color: red;
}

</style>
