<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      title: '',
      message: '',
      errors: {
        name: '',
        email: '',
        title: '',
        message: ''
      },
      showModal: false // Estado para controlar a visibilidade do modal
    };
  },
  methods: {
    validateForm() {
      // Reset error messages
      this.errors = {
        name: '',
        email: '',
        title: '',
        message: ''
      };

      let isValid = true;

      // Validate name: check if it's empty or contains numbers
      const nameRegex = /^[a-zA-Z\s]*$/;
      if (!this.name) {
        this.errors.name = 'O nome é obrigatório';
        isValid = false;
      } else if (!nameRegex.test(this.name)) {
        this.errors.name = 'O nome não pode conter números';
        isValid = false;
      }

      // Validate email: check if it's empty or doesn't contain "@"
      if (!this.email) {
        this.errors.email = 'O email é obrigatório';
        isValid = false;
      } else if (!this.email.includes('@')) {
        this.errors.email = 'O email deve conter "@"';
        isValid = false;
      }

      // Validate title
      if (!this.title) {
        this.errors.title = 'O assunto é obrigatório';
        isValid = false;
      }

      // Validate message
      if (!this.message) {
        this.errors.message = 'A mensagem é obrigatória';
        isValid = false;
      }

      return isValid;
    },
    submitForm() {
      if (this.validateForm()) {
        this.showModal = true; // Mostrar modal em vez de alert
      }
    },
    closeModal() {
      this.showModal = false;
      this.name = '';
      this.email = '';
      this.title = '';
      this.message = '';
    }
  }
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
        <input type="text" name="name" placeholder="Nome:" v-model="name" />
      </div>
      <div v-if="errors.name" class="error">{{ errors.name }}</div>

      <div class="input-group">
        <i class="fas fa-envelope icon"></i>
        <input type="email" name="email" placeholder="Email:" v-model="email" />
      </div>
      <div v-if="errors.email" class="error">{{ errors.email }}</div>

      <div class="input-group">
        <i class="fas fa-tag icon"></i>
        <input type="text" name="title" placeholder="Assunto:" v-model="title" />
      </div>
      <div v-if="errors.title" class="error">{{ errors.title }}</div>

      <div class="input-group">
        <textarea name="text" placeholder="Fale aqui!" v-model="message"></textarea>
      </div>
      <div v-if="errors.message" class="error">{{ errors.message }}</div>

      <button class="btn-enviar" @click="submitForm">ENVIAR</button>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <p>Formulário enviado com sucesso!</p>
        <button @click="closeModal">OK</button>
      </div>
    </div>
  </div>
</template>


<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box; /* Garante que padding e border sejam incluídos na largura/altura */
}

body {
  margin: 0;
  overflow-x: hidden; /* Evita rolagem horizontal */
}

.background {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(247, 244, 244);
  width: 100%; /* Ajuste para 100% */
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
  background-color: rgb(255, 255, 255);
  width: 500px;
  padding: 30px;
  border-radius: 10px;
  gap: 15px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  animation: slideUp 2s ease-out;
}

.input-group {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: rgb(236, 234, 234);
  color: rgb(0, 0, 0);
  border-radius: 10px;
  padding: 10px;
  gap: 10px;
}

.error {
  font-size: 12px;
  color: red;
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
}

.btn-enviar {
  background-color: #1a1a1a;
  border: none;
  height: 45px;
  width: 30vh;
  color: white;
  border-radius: 10px;
  align-items: center;
  margin-top: 20px;
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
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 400px;
}

.modal-content button {
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #1a1a1a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.modal-content button:hover {
  background-color: rgb(95, 95, 95);
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

/* Estilos responsivos para telas menores */
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
}
</style>
