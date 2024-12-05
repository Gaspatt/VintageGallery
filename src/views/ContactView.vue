<script setup>

import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  title: '',
  text: '',
});

const showModal = ref(false);

const handleSubmit = () => {

  showModal.value = true;
};

const handleModalClose = () => {

  showModal.value = false;
  formData.value = {
    name: '',
    email: '',
    title: '',
    text: '',
  };
};

</script>

<template>
  <div class="background">
    <RouterLink to="/">
      <button class="back"><i class="fas fa-arrow-left"></i></button>
    </RouterLink>

    <div class="form">
      <h1 class="title">FALE CONOSCO!</h1>

      <div class="input-group">
        <i class="fas fa-user icon"></i>
        <input type="text" v-model="formData.name" placeholder="Nome:" />
      </div>

      <div class="input-group">
        <i class="fas fa-envelope icon"></i>
        <input type="email" v-model="formData.email" placeholder="Email:" />
      </div>

      <div class="input-group">
        <i class="fas fa-tag icon"></i>
        <input type="text" v-model="formData.title" placeholder="Assunto:" />
      </div>

      <div class="input-group">
        <textarea v-model="formData.text" placeholder="Fale aqui!"></textarea>
      </div>

      <button class="btn-enviar" @click="handleSubmit">ENVIAR</button>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <p>Mensagem enviada com sucesso!</p>
        <button @click="handleModalClose">OK</button>
      </div>
    </div>
  </div>
</template>


<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  overflow-x: hidden;
}

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

textarea {
  height: 100px;
  resize: none;
}

.title {
  font-size: 25px;
  margin-bottom: 20px;
  color: #000000;
  font-weight: bold;
}

.btn-enviar {
  background-color: #1a1a1a;
  border: none;
  height: 45px;
  width: 100%;
  color: white;
  border-radius: 10px;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.7s;
  display: flex;
  justify-content: center;
}

.btn-enviar:hover {
  background-color: rgb(95, 95, 95);
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.modal-content {
  background: white;
  padding: 50px;
  width: 500px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.modal-content p {
  margin: 0 0 10px;
}

.modal-content button {
  background: #1a1a1a;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

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
    width: 90%;
    padding: 20px;
    gap: 10px;
  }

  .input-group {
    padding: 8px;
  }

  input,
  textarea {
    font-size: 14px;
  }

  .btn-enviar {
    width: 100%;
    height: 40px;
  }

  .title {
    font-size: 20px;
  }

  .back {
    margin-top: 15px;
    margin-left: 15px;
    width: 50px;
    height: 50px;
    top: 5px;
    left: 5px;
  }
}
</style>
