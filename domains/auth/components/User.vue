<template>
  <div class="user-container">
   userdddddddddd
    <Auth/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '~/domains/auth/store';

const username = ref('');
const password = ref('');
const authStore = useAuthStore();

const handleSubmit = () => {
  authStore.login({ username: username.value, password: password.value });
};
</script>

<style scoped>
.user-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
