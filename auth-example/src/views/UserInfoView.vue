<template>
  <NavBar/>
  <div>
    <form class="form horizontal">
      <div class="form-left">

        <img :src="authStore.user.image">

        <label for="firstname">First Name:</label>
        <input v-model="authStore.user.firstName" type="text" id="firstname" placeholder="First Name">

        <label for="lastName">Last Name:</label>
        <input v-model="authStore.user.lastName" type="text" id="lastName" placeholder="Last Name">

        <label for="maidenName">Maiden Name:</label>
        <input v-model="authStore.user.maidenName" type="text" id="maidenName" placeholder="Maiden Name">

        <div class="horizontal">
          <div class="form-left">
            <label for="age">Age:</label>
            <input v-model="authStore.user.age" type="number" id="age" placeholder="Age">
          </div>
          <div class="form-right">
            <label for="age">Gender:</label>
            <div class="radio">
              <input v-model="authStore.user.gender" type="radio" id="male" name="male" value="male">
              <label for="male">Male</label>
              <input v-model="authStore.user.gender" type="radio" id="female" name="female" value="female">
              <label for="female">Female</label>
            </div>
          </div>
        </div>
      </div>
      <div class="form-right info">
        <input id="username" v-model="authStore.user.username">

        <label for="email">Email:</label>
        <input v-model="authStore.user.email" type="email" id="email" placeholder="Email">

        <label for="birthDate">Birth Date:</label>
        <input v-model="authStore.user.birthDate" type="date" id="birthDate">

        <label for="address">Address:</label>
        <input v-model="authStore.user.address.address" type="text" id="address">

        <label for="city">City:</label>
        <input v-model="authStore.user.address.city" type="text" id="city">

        <div class="map">
          <LeafletMap :lat="authStore.user.address.coordinates.lat"
                      :lon="authStore.user.address.coordinates.lng"/>
        </div>

      </div>
    </form>
    <p>User</p>
    <p>{{ authStore.user }}</p>
  </div>
</template>

<script setup>
  import NavBar from '../components/NavBar.vue'
  import { useAuthStore } from '../store/authStore'
  import LeafletMap from '../components/LeafletMap.vue';

  const authStore = useAuthStore()


</script>

<style lang="scss" scoped>

.horizontal {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 50px;
}

.form {
  margin: 80px 30px;

  label {
    text-align: start;
    color: grey;
  }

  .form-left {
    display: flex;
    flex-direction: column;
  }

  .form-right {
    display: flex;
    flex-direction: column;
    flex-grow: 2;
  }

  .info {
    align-content: center;
  }

  img {
    height: 250px;
    width: 250px;
    border-radius: 50%;
    margin-bottom: 10px;
    border: solid $primary-color 3px;
  }

  input {
    margin-bottom: 10px;
    margin-top: 5px;
    padding-left: 5px;
    min-height: 20px;
    border: none;
    border:solid 1px $primary-color;
    border-radius: 5px;

    &:focus {
      border:solid 2px $primary-color;
    }
  }

  #age {
    width: 40px
  }

  .radio {
    display: flex;
    flex-direction: row;
    height: 20px;
    justify-content: space-between;
    width: 170px;
    align-items: first baseline;

    label {
      color: $primary-color;
      justify-content: center;

    }
  }

  .map {
    height: 100%;
    margin-top: 10px;
    border:solid 1px $primary-color;


    iframe {
      border-radius:  5px;
    }
  }
}


</style>
