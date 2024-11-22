<script setup>
import { ref } from 'vue';

const email = ref('');
const name = ref('');
const password = ref('');
const confirmPassword = ref('');
const birthdate = ref('');
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const errors = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  birthdate: ''
});
const successMessage = ref('');

function togglePasswordVisibility() {
  showPassword.value = !showPassword.value;
}

function toggleConfirmPasswordVisibility() {
  showConfirmPassword.value = !showConfirmPassword.value;
}

function validateForm() {

  errors.value = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthdate: ''
  };
  successMessage.value = '';

  let isValid = true;

  // Verificar se algum campo está vazio
  if (!name.value) {
    errors.value.name = 'O nome é obrigatório.';
    isValid = false;
  }
  if (!email.value) {
    errors.value.email = 'O email é obrigatório.';
    isValid = false;
  }
  if (!password.value) {
    errors.value.password = 'A senha é obrigatória.';
    isValid = false;
  }
  if (!confirmPassword.value) {
    errors.value.confirmPassword = 'A confirmação de senha é obrigatória.';
    isValid = false;
  }
  if (!birthdate.value) {
    errors.value.birthdate = 'A data de nascimento é obrigatória.';
    isValid = false;
  }


  if (name.value && /\d/.test(name.value)) {
    errors.value.name = 'O nome não pode conter números.';
    isValid = false;
  }


  if (email.value && !email.value.includes('@')) {
    errors.value.email = 'O email deve conter um "@".';
    isValid = false;
  }

  if (password.value && password.value.length <= 3) {
    errors.value.password = 'A senha deve ter mais de 3 caracteres.';
    isValid = false;
  }

  if (confirmPassword.value && confirmPassword.value !== password.value) {
    errors.value.confirmPassword = 'As senhas não coincidem.';
    isValid = false;
  }

  const birthDate = new Date(birthdate.value);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  if (birthdate.value && age < 18) {
    errors.value.birthdate = 'Você deve ser maior de idade para se cadastrar.';
    isValid = false;
  }

  if (isValid) {
    successMessage.value = 'Usuário cadastrado com sucesso!';
  }
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
      <p v-if="errors.name" class="error-message">{{ errors.name }}</p>

      <div class="input-group">
        <i class="fas fa-envelope icon"></i>
        <input type="email" name="email" placeholder="Email:" v-model="email" />
      </div>
      <p v-if="errors.email" class="error-message">{{ errors.email }}</p>

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
      <p v-if="errors.password" class="error-message">{{ errors.password }}</p>

      <div class="input-group">
        <i class="fas fa-lock icon"></i>
        <input
          :type="showConfirmPassword ? 'text' : 'password'"
          name="Confirmpassword"
          placeholder="Confirma Senha"
          v-model="confirmPassword"
        />
        <i
          :class="showConfirmPassword ? 'fas fa-eye-slash icon' : 'fas fa-eye icon'"
          @click="toggleConfirmPasswordVisibility"
          style="cursor: pointer"
        ></i>
      </div>
      <p v-if="errors.confirmPassword" class="error-message">{{ errors.confirmPassword }}</p>

      <div class="input-group">
        <i class="fas fa-calendar icon"></i>
        <input type="date" name="birthdate" v-model="birthdate" placeholder="Data de Nascimento" />
      </div>
      <p v-if="errors.birthdate" class="error-message">{{ errors.birthdate }}</p>

      <button class="btn-enviar" @click="validateForm">CADASTRAR</button>
      <p v-if="successMessage" class="success-message">{{ successMessage }}</p>

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

.error-message {
  color: red;
  font-size: 14px;
  margin: -10px 0 10px 0;
}

.success-message {
  color: green;
  font-size: 14px;
  margin-top: 10px;
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
