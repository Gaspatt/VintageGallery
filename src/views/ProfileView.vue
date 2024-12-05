<script setup>

import { useRouter } from 'vue-router';
import { supabase } from '../supabase';
import { useAuth } from '../auth';

const { user } = useAuth();
const router = useRouter();

async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    alert('Error signing out:', error);
  } else {
    router.push('/login');
  }
}
</script>

<template>
      <RouterLink to="/">
      <button class="back"><i class="fas fa-arrow-left"></i></button>
    </RouterLink>
  <div class="container">
    <h1>PERFIL</h1>
    <P>Suas informações de usuarios abaixo:</P>


    <i class="fa-solid fa-user"></i>



    <div v-if="user">
      <p class="input1"><strong>Nome:</strong> Pablo Antonio</p>
      <p class="input"><strong>Email:</strong> {{ user.email }}</p>
      <p class="input"><strong>Data de Nascimento:</strong> 29/06/2001</p>
      <button @click="logout">DESCONECTAR</button>
    </div>
    <div v-else>
      <p>blablablabla...</p>
    </div>
  </div>
</template>

<style scoped>

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  animation: slideUp 2s ease-out;

}

i {
  font-size: 200px;
  margin-top: 30px;
}

.input1 {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: rgb(214, 213, 213);
  color: rgb(0, 0, 0);
  border-radius: 10px;
  padding: 10px;
  gap: 10px;
  margin-top: 50px
}

.input {

  display: flex;
  align-items: center;
  width: 100%;
  background-color: rgb(214, 213, 213);
  color: rgb(0, 0, 0);
  border-radius: 10px;
  padding: 10px;
  gap: 10px;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: black;
  color: white;
  padding: 5px;
  width: 500px;
  border-radius: 5px;
  border: none;
  transition: 0.3s;
  margin-top: 30px;
}

button:hover {
  background-color: rgb(65, 64, 64);
}

.back {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border: none;
  color: #ffffff;
  background-color: #000000;
  border-radius: 50%;
  position: absolute;

  left: 10px;
  transition: 0.3s;
  font-size: 18px;
  padding: 0;
  margin-left: 10px
}

.back i {
  font-size: 35px;
  margin-bottom: 27px;
}

.back:hover {
  background: transparent;
  color: #000000;
  border: 2px solid #000000;
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
