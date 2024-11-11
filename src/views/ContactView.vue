<script setup>
import { reactive, ref } from 'vue'

const validacaoNome = ref(false)
const validacaoEmail = ref(false)
const validacaoAssunto = ref(false)
const validacaoTexto = ref(false)

const dados = reactive({
  nome: '',
  email: '',
  assunto: '',
  texto: '',
})

function teste() {
  if (dados.nome == "") {
    validacaoNome.value = true
  }
  else{
    validacaoNome.value = false
  }


  if (dados.email == "") {
    validacaoEmail.value = true
  }

  else{
    validacaoEmail.value = false
  }


  if (dados.assunto == "") {
    validacaoAssunto.value = true
  }
  else{
    validacaoAssunto.value = false
  }

  if (dados.texto == "") {
    validacaoTexto.value = true
  }
  else{
    validacaoTexto.value = false
  }

}

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
        <input type="text" name="name" placeholder="Nome:" v-model="dados.nome"/>
      </div>
      <p class="error" v-if="validacaoNome">ERRO!</p>


      <div class="input-group">
        <i class="fas fa-envelope icon"></i>
        <input type="email" name="email" placeholder="Email:" v-model="dados.email">
      </div>
      <p class="error" v-if="validacaoEmail">Erro!</p>


      <div class="input-group">
        <i class="fas fa-tag icon"></i>
        <input type="text" name="title" placeholder="Assunto:" v-model="dados.assunto"/>
      </div>
      <p class="error" v-if="validacaoAssunto">Erro!</p>


      <div class="input-group">
        <textarea name="text" placeholder="Fale aqui!" v-model="dados.texto"></textarea>
      </div>
      <p class="error" v-if="validacaoTexto">Erro</p>


      <button class="btn-enviar" @click="teste">ENVIAR</button>
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
Enrique
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
}
</style>
