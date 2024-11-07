<template>
  <div class="detalhe-carro">
    <div class="img-carro">
      <img :src="car.image" :alt="car.name" />
    </div>
    <div class="dados-carro">
      <h1>{{ car.name }}</h1>
      <p>{{ car.description }}</p>
      <h2>Especificações</h2>
      <p>{{ car.specifications }}</p>
      <h2>Interior e Painel</h2>
      <p>{{ car.interior }}</p>
      <h2>Fotos</h2>
      <div class="imagensCarro">
        <img
          v-for="photo in car.photos"
          :src="photo"
          :alt="`Foto de ${car.name}`"
          :key="photo"
        />
      </div>
    </div>
    <div class="espec-carro">
      <h4>{{ car.name }}</h4>
      <hr class="mt-30 mb-30 d-none d-lg-block" />
      <dl class="atributes mb-40">
        <dt>Marca</dt>
        <dd>{{ car.brand }}</dd>
        <dt>Modelo</dt>
        <dd>{{ car.model }}</dd>
        <dt>Cor</dt>
        <dd>{{ car.color }}</dd>
        <dt>Motor</dt>
        <dd>{{ car.motor }}</dd>
        <dt>Câmbio</dt>
        <dd>{{ car.transmission }}</dd>
        <dt>Km</dt>
        <dd>{{ car.km }}</dd>
        <dt>Local</dt>
        <dd>{{ car.location }}</dd>
        <dt>Preço</dt>
        <dd>{{ car.price }}</dd>
      </dl>
      <button class="btn btn-dark">Entrar em contato</button>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useCarStore } from '../stores/carStore'
import { computed } from 'vue'

const route = useRoute()
const carStore = useCarStore()

const car = computed(() => carStore.selectedCar)
</script>

<style scoped>
.detalhe-carro {
  display: flex;
  flex-wrap: wrap;
}

.img-carro {
  width: 100%;
}

.detalhe-carro img {
  width: 100%;
  height: auto;
}

.imagensCarro img {
  width: 100%;
  max-width: 300px;
  height: auto;
  margin: 10px;
}

.atributes {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0 1.5rem;
  justify-content: space-between;
}

.atributes dt {
  font-weight: bold;
}

.atributes dd {
  margin-left: 0;
  margin-bottom: 0.5rem;
}

.espec-carro {
  display: block;
  unicode-bidi: isolate;
  padding-left: 100px;
  border: 1px solid #dee2e6;
  border-top: 3px solid #0c0c0c;
  position: sticky;
  top: 10%;
  margin-top: 20vh;
  margin-left: 30vh;
}

.espec-carro button {
  width: 20vh;
  height: 4vh;
  background-color: #0c0c0c;
  color: #fff;
  border-radius: 20px;
  text-align: center;
}

.espec-carro hr {
  width: 100%;
  border: 1px solid #000;
}
</style>
