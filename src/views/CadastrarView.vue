<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/user';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const userStore = useUserStore();
const router = useRouter();

function register() {
  if (userStore.register(email.value, password.value)) {
    router.push('/');
  } else {
    alert('Registration failed');
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
        <input type="text" name="name" placeholder="Nome:" />
      </div>


      <div class="input-group">
        <i class="fas fa-envelope icon"></i>
        <input type="email" name="email" placeholder="Email:" v-model="email" />
      </div>


      <div class="input-group">
        <i class="fas fa-lock icon"></i>
        <input
          type="password"
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
          :type="showConfirmPassword ? 'text' : 'password'"
          name="Confirmpassword"
          placeholder="Confirma Senha"

        />
        <i
          :class="showConfirmPassword ? 'fas fa-eye-slash icon' : 'fas fa-eye icon'"
          @click="toggleConfirmPasswordVisibility"
          style="cursor: pointer"
        ></i>
      </div>


      <div class="input-group">
        <i class="fas fa-calendar icon"></i>
        <input type="date" name="birthdate" placeholder="Data de Nascimento" />
      </div>


      <button class="btn-enviar" @click="register">CADASTRAR</button>


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
  padding: 20px; /* Adicionei padding para evitar que os elementos encostem nas bordas em telas pequenas */
  box-sizing: border-box; /* Inclui o padding no cálculo de largura e altura */
}

.back {
  width: 50px; /* Reduzi o tamanho para telas menores */
  height: 50px;
  border: none;
  color: #ffffff;
  background-color: #000000;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 10px;
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
  width: 100%;
  max-width: 500px;
  padding: 20px;
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
  max-width: 500px;
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
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
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


@media (max-width: 768px) {
  .form {
    padding: 15px;
  }

  .back {
    margin-top: 15px;
    margin-left: 15px;
    width: 50px;
    height: 50px;
    top: 5px;
    left: 5px;
  }

  .btn-enviar {
    margin-top: 30px;
  }

  .title {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .background {
    padding: 10px;
  }

  .form {
    padding: 10px;
    border-radius: 5px;
  }

  .input-group {
    padding: 8px;
  }

  .btn-enviar {
    font-size: 14px;
  }

  .title {
    font-size: 18px;
  }
}
</style>

