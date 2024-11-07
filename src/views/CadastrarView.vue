<script setup>
import { ref } from 'vue';

// Cria variáveis reativas
const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const showPassword = ref(false);
const showConfirmPassword = ref(false);

// Função para alternar visibilidade da senha
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const toggleConfirmPasswordVisibility = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};
</script>

<template>
  <div class="container">

    <div class="login-container">
      <RouterLink to="/login">
        <button class="back" aria-label="Voltar">
          <i class="fas fa-arrow-left"></i>
        </button>
      </RouterLink>
      <div class="form">
        <h1 class="title">ENTRAR</h1>

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
          <input :type="showPassword ? 'text' : 'password'" name="password" placeholder="Senha:" v-model="password" />
          <i
            :class="showPassword ? 'fas fa-eye-slash visibility-icon' : 'fas fa-eye visibility-icon'"
            @click="togglePasswordVisibility"
          ></i>
        </div>

        <div class="input-group">
          <i class="fas fa-lock icon"></i>
          <input :type="showConfirmPassword ? 'text' : 'password'" name="confirmPassword" placeholder="Confirma Senha:" v-model="confirmPassword" />
          <i
            :class="showConfirmPassword ? 'fas fa-eye-slash visibility-icon' : 'fas fa-eye visibility-icon'"
            @click="toggleConfirmPasswordVisibility"
          ></i>
        </div>
        <p class="p-link">Já possui cadastro? <RouterLink to="/login">Clique Aqui</RouterLink></p>

        <button class="btn-enter">CADASTRAR</button>
      </div>
    </div>
    <div class="img-container">
      <img src="/src/assets/imagens/lance-reis-L8MAJUCrR5Y-unsplash (1).jpg" alt="Imagem de fundo" class="img" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 0;
}

.img-container {
  width: 60%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.login-container {
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
}

.back {
  width: 60px;
  height: 60px;
  border: none;
  color: #ffffff;
  background-color: #1d1c1c;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 20px;
  transition: 0.3s;
}

.back:hover {
  background: transparent;
  color: #fff;
  border: 3px solid #fff;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 30px;
  border-radius: 10px;
  gap: 15px;
}

.title {
  font-size: 25px;
  margin-bottom: 20px;
  color: #fff;
}

.input-group {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  background-color: rgb(41, 41, 41);
  border-radius: 10px;
  padding: 10px;
  transition: background-color 0.2s;
}

.input-group:hover {
  background-color: rgb(27, 24, 24);
  color: white;
}

.icon {
  color: #ffffff;
  margin-right: 10px;
}

.visibility-icon {
  cursor: pointer;
  color: #ffffff;
  margin-left: 10px;
}

input {
  width: 100%;
  border: none;
  background: none;
  color: #ffffff;
  outline: none;
  font-size: 16px;
}

.btn-enter {
  background-color: #2a5239;
  border: none;
  height: 40px;
  width: 30vh;
  color: white;
  border-radius: 10px;
  margin-top: 20px;
}

.btn-enter:hover {
  background-color: #2d6d45;
}

.p-link {
  color: #fff;
  font-size: 14px;
  margin-right: 200px;
}

@media (min-width: 1400px) {
    .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
        max-width: 100%;
    }
}
</style>
