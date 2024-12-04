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
  <div>
    <h1>Perfil do Usuário</h1>
    <div v-if="user">
      <p><strong>Nome:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Data de Nascimento:</strong> {{ user.birthdate }}</p>
      <button @click="logout">Sair</button>
    </div>
    <div v-else>
      <p>blablablabla...</p>
    </div>
  </div>
</template>

<style scoped>

</style>
