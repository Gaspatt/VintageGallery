<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    // Variáveis reativas para os campos do formulário
    const name = ref('');
    const email = ref('');
    const title = ref('');
    const message = ref('');

    // Variável reativa para armazenar o estado de preenchimento
    const formStatus = ref(null); // null: sem mensagem, 'success': sucesso, 'error': erro

    // Computed para verificar se todos os campos estão preenchidos
    const allFieldsFilled = computed(() => {
      return name.value && email.value && title.value && message.value;
    });

    // Função para exibir a mensagem com base no status do formulário
    const msg = () => {
      if (allFieldsFilled.value) {
        formStatus.value = 'success';
      } else {
        formStatus.value = 'error';
      }
    };

    // Função para fechar a mensagem e resetar os campos se for sucesso
    const closeMessage = () => {
      if (formStatus.value === 'success') {
        name.value = '';
        email.value = '';
        title.value = '';
        message.value = '';
      }
      formStatus.value = null;
    };

    return {
      name,
      email,
      title,
      message,
      formStatus,
      msg,
      closeMessage
    };
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

      <div class="input-group">
        <i class="fas fa-envelope icon"></i>
        <input type="email" name="email" placeholder="Email:" v-model="email" />
      </div>

      <div class="input-group">
        <i class="fas fa-tag icon"></i>
        <input type="text" name="title" placeholder="Assunto:" v-model="title" />
      </div>

      <div class="input-group">
        <textarea name="text" placeholder="Fale aqui!" v-model="message"></textarea>
      </div>

      <button @click="msg()" class="btn-enviar">ENVIAR</button>
    </div>

    <!-- Mensagem de sucesso ou erro centralizada com botão "OK" para fechar -->
    <div v-if="formStatus === 'success'" class="confirmation-message success">
      <p>TODOS OS CAMPOS FORAM PREENCHIDOS COM SUCESSO! ENTRAREMOS EM CONTATO PELO EMAIL</p>
      <button class="btn-close" @click="closeMessage">OK</button>
    </div>
    <div v-if="formStatus === 'error'" class="confirmation-message error">
      <p>POR FAVOR, PREENCHA TODOS OS CAMPOS.</p>
      <button class="btn-close" @click="closeMessage">OK</button>
    </div>
  </div>
</template>

<style scoped>
.background {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #17221b, #30835d);
  width: 100vw;
  height: 100vh;
  position: relative;
}

.back {
  width: 60px;
  height: 60px;
  border: none;
  color: #000000;
  background-color: #fff;
  border-radius: 50px;
  position: absolute;
  top: 20px;
  left: 20px;
  transition: 0.3s;
}

.back:hover {
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
}

i {
  font-size: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(26, 24, 24);
  width: 500px;
  padding: 30px;
  border-radius: 10px;
  gap: 15px;
}

.input-group {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: rgb(41, 41, 41);
  color: white;
  border-radius: 10px;
  padding: 10px;
}

.input-group:hover {
  background-color: rgb(27, 24, 24);
  color: white;
  border: none;
}

.icon {
  color: #888;
  margin-right: 10px;
}

input, textarea {
  width: 100%;
  border: none;
  background: none;
  color: #000000;
  outline: none;
  font-size: 16px;
  color: white;
}

textarea {
  height: 100px;
  resize: none;
}

.title {
  font-size: 25px;
  margin-bottom: 20px;
  color: #ffffff;
}

.btn-enviar {
  background-color: #2a5239;
  border: none;
  height: 40px;
  width: 30vh;
  color: white;
  border-radius: 10px;
  margin-top: 20px;
}

.btn-enviar:hover {
  background-color: #2d6d45;
}

/* Estilos da mensagem centralizada */
.confirmation-message {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  text-align: center;
  font-size: 1.0em;
  font-weight: bold;
  width: 80%;
  max-width: 500px;
  z-index: 1000;
}

/* Estilo para a mensagem de sucesso (verde) */
.success {
  background-color: #ffffff;
  color: #155724;
  border: 3px solid #000000;
}

/* Estilo para a mensagem de erro (vermelho) */
.error {
  background-color: #ffffff;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border: 3px solid black;
}

/* Estilo do botão "OK" */
.btn-close {
  margin-top: 15px;
  padding: 8px;
  font-size: 0.9em;
  color: #fff;
  background-color: #4a1f66;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  width: 100px;
}

.btn-close:hover {
  background-color: #210335;
}
</style>
