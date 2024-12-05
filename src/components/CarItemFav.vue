<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'
import { useAuth } from '../auth'

const props = defineProps({
  car: Object,
})

const { user } = useAuth()
const errorMessage = ref('')

async function toggleFavorite(carId) {
  if (!user.value) {
    errorMessage.value = 'Você precisa estar logado para favoritar um carro.'
    return
  }

  const { data, error } = await supabase
    .from('favorites')
    .select('*')
    .eq('user_id', user.value.id)
    .eq('car_id', carId)
    .single()

  if (data) {
    // Car is already favorited, so remove it from favorites
    const { error: deleteError } = await supabase
      .from('favorites')
      .delete()
      .eq('id', data.id)
    if (deleteError) {
      errorMessage.value = deleteError.message
    } else {
      fetchFavorites() // Refresh the favorites list
    }
  } else {
    // Car is not favorited, so add it to favorites
    const { error: insertError } = await supabase
      .from('favorites')
      .insert([{ user_id: user.value.id, car_id: carId }])
    if (insertError) {
      errorMessage.value = insertError.message
    } else {
      fetchFavorites() // Refresh the favorites list
    }
  }
}
</script>
<template>
  <div class="car">
    <img :src="car.image" :alt="car.name" />

    <div class="textocarro">
      <span>{{ car.name }}</span>
      <ul>
        <button @click="toggleFavorite(car.id)" class="favorite-icon">
          <i :class="car.is_favorited ? 'fas fa-heart' : 'far fa-heart'"></i>
        </button>
        <li><i class="bi bi-gear-fill"></i>{{ car.brand }}</li>
        <li><i class="bi bi-calendar-fill"></i>{{ car.year }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.car {
  margin-top: 60px;
}

.car img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.favorite-icon {
  cursor: pointer;
  background: none;
  border: none;
  margin-right: 20px;
}

.favorite-icon :hover {
  color: red;
}
.textocarro {
}
</style>
