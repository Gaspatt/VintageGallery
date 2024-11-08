<script setup>

import { ref } from 'vue';

const email = ref('');
const password = ref('');
const showPassword = ref(false);

function togglePasswordVisibility() {
  showPassword.value = !showPassword.value;
}
</script>

<template>
  <div class="background">
    <RouterLink to="/login">
      <button class="back"><i class="fas fa-arrow-left"></i></button>
    </RouterLink>

    <div class="form">
      <h1 class="title">CADASTRAR</h1>

      <div class="input-group">
        <i class="fas fa-user icon"></i>
        <input type="text" name="name" placeholder="Nome:" v-model="name" />
      </div>

      <div class="input-group">
        <i class="fas fa-envelope icon"></i>
        <input type="email" name="email" placeholder="Email:" v-model="email" />
      </div>

      <div class="input-group">
        <i class="fas fa-lock icon"></i>
        <input
          :type="showPassword ? 'text' : 'password'"
          name="password"
          placeholder="Senha"
          v-model="password"
        />
        <i
          :class="showPassword ? 'fas fa-eye-slash icon' : 'fas fa-eye icon'"
          @click="togglePasswordVisibility"
          style="cursor: pointer"
        ></i>
      </div>

      <div class="input-group">
        <i class="fas fa-lock icon"></i>
        <input
          :type="showPassword ? 'text' : 'password'"
          name="Confirmpassword"
          placeholder="Confirma Senha"
          v-model="confirmpassword"
        />
        <i
          :class="showPassword ? 'fas fa-eye-slash icon' : 'fas fa-eye icon'"
          @click="togglePasswordVisibility"
          style="cursor: pointer"
        ></i>
      </div>

      
      <div class="input-group">
        <i class="fas fa-calendar icon"></i>
        <input type="date" name="birthdate" placeholder="Data de Nascimento">
      </div>

      <button class="btn-enviar">CADASTRAR</button>

      <p>Ja se cadastrou? <RouterLink to="/login">clique aqui</RouterLink></p>
    </div>
  </div>
</template>

<style scoped>
.background {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(247, 244, 244);
  width: 100%;
  height: 100vh;
  position: relative;
}

.back {
  width: 60px;
  height: 60px;
  border: none;
  color: #ffffff;
  background-color: #000000;
  border-radius: 50px;
  position: absolute;
  top: 20px;
  left: 20px;
  transition: 0.3s;
}

.back:hover {
  background: transparent;
  color: #000000;
  border: 2px solid #000000;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  padding: 30px;
  border-radius: 10px;
  gap: 15px;
  animation: slideUp 2s ease-out;
}

.input-group {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: rgb(214, 213, 213);
  color: rgb(0, 0, 0);
  border-radius: 10px;
  padding: 10px;
  gap: 10px;
}

.icon {
  font-size: 20px;
  color: #000000;
  margin-right: 10px;
}

input,
textarea {
  flex: 1;
  border: none;
  background: none;
  color: #000000;
  outline: none;
  font-size: 16px;
}

.btn-enviar {
  background-color: #1a1a1a;
  border: none;
  height: 45px;
  width: 100%;
  color: white;
  border-radius: 10px;
  align-items: center;
  margin-top: 50px;
  cursor: pointer;
  transition: 0.7s;
  display: flex;
  justify-content: center;
}

.btn-enviar:hover {
  background-color: rgb(95, 95, 95);
}

.title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 50px;
  color: #000000;
}

@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
