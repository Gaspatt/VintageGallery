<script setup>
import { ref } from 'vue';
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
  <div class="container">
    <h1>PERFIL</h1>
    <P>Suas informações de usuarios abaixo:</P>


    <i class="fa-solid fa-user"></i>



    <div v-if="user">
      <p class="input1"><strong>Nome:</strong> {{ user.name }}</p>
      <p class="input"><strong>Email:</strong> {{ user.email }}</p>
      <p class="input"><strong>Data de Nascimento:</strong> {{ user.birthdate }}</p>
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

}

i {
  font-size: 100px;
  margin-top: 30px;
}

.input1 {
  margin-top: 30px;
  background-color: rgb(214, 214, 214);
  font-size: 15pt;
  padding: 5px;
  width: 500px;
  border-radius: 5px;
}

.input {

  background-color: rgb(214, 214, 214);
  font-size: 15pt;
  padding: 5px;
  width: 500px;
  border-radius: 5px;
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

</style>
