<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'
import CarItemFav from '@/components/CarItemFav.vue'
import { useAuth } from '../auth'
import HeaderPage from '@/components/HeaderPage.vue'

const { user } = useAuth()
const favoriteCars = ref([])
const errorMessage = ref('')

const cars = [
  {
    id: 1,
    name: '1978 Volkswagen Passat TS',
    brand: 'Volkswagen',
    model: 'Passat TS',
    color: 'Azul',
    year: 1978,
    motor: '1.6',
    transmission: 'Manual',
    km: '25.372',
    location: 'São Paulo',
    price: 'R$ 5.000,00',
    image: '/src/assets/imagens/carroprin1.png',
    description:
      'O 1978 Volkswagen Passat TS é um dos ícones mais marcantes da história automotiva brasileira, combinando um design arrojado com o desempenho que conquistou gerações de entusiastas. Este exemplar na clássica cor vermelha com interior preto destaca-se como uma verdadeira peça de colecionador, representando a era de ouro dos esportivos nacionais.',
    specifications:
      'O Passat TS é famoso por suas linhas angulares e seu design esportivo. Além disso, a cor vermelha vibrante deste exemplar destaca ainda mais suas formas.',
  },
  {
    id: 2,
    name: '1974 Ford Maverick GT',
    brand: 'Ford',
    model: 'Maverick GT',
    color: 'Preto',
    year: 1974,
    motor: '5.0 V8',
    transmission: 'Manual',
    km: '12.000',
    location: 'Rio de Janeiro',
    price: 'R$ 50.000,00',
    image: '/src/assets/imagens/carroprin2.png',
    description:
      'O Ford Maverick GT é um dos muscle cars mais emblemáticos da história, com seu design robusto e motor V8 de alta performance. Este exemplar na cor preta com faixas brancas é um verdadeiro clássico, perfeito para quem busca um carro com personalidade e estilo.',
    specifications:
      'O Maverick GT é famoso por seu motor V8 de 5.0 litros, que entrega uma potência impressionante. Além disso, seu design agressivo e imponente o torna um dos muscle cars mais icônicos de todos os tempos.',
  },
  {
    id: 3,
    name: '1982 Chevrolet Opala Diplomata',
    brand: 'Chevrolet',
    model: 'Opala Diplomata',
    color: 'Branco',
    year: 1982,
    motor: '4.1',
    transmission: 'Automático',
    km: '45.000',
    location: 'Curitiba',
    price: 'R$ 30.000,00',
    image: '/src/assets/imagens/carroprin3.png',
    description:
      'O Chevrolet Opala Diplomata é um dos clássicos mais queridos do Brasil, com seu design elegante e conforto incomparável. Este exemplar na cor branca com interior caramelo é uma verdadeira joia sobre rodas, perfeito para quem busca um carro de luxo com estilo atemporal.',
    specifications:
      'O Opala Diplomata é famoso por seu design sofisticado e seu conforto excepcional. Além disso, seu motor de 4.1 litros entrega uma performance suave e potente.',
  },
  {
    id: 4,
    name: '1970 Dodge Charger R/T',
    brand: 'Dodge',
    model: 'Charger R/T',
    color: 'Laranja',
    year: 1970,
    motor: '7.2 V8',
    transmission: 'Manual',
    km: '8.500',
    location: 'Belo Horizonte',
    price: 'R$ 120.000,00',
    image: '/src/assets/imagens/carroprin4.png',
    description:
      'O Dodge Charger R/T é um dos muscle cars mais lendários da história, com seu design agressivo e motor V8 de alta performance. Este exemplar na cor laranja com faixas pretas é uma verdadeira máquina de potência e estilo, perfeito para quem busca um carro com presença e personalidade.',
    specifications:
      'O Charger R/T é famoso por seu motor V8 de 7.2 litros, que entrega uma potência impressionante. Além disso, seu design musculoso e imponente o torna um dos muscle cars mais icônicos de todos os tempos.',
  },
]

async function fetchFavoriteCars() {
  if (!user.value) {
    errorMessage.value = 'Você precisa estar logado para ver seus favoritos.'
    return
  }

  const { data, error } = await supabase
    .from('favorites')
    .select('car_id')
    .eq('user_id', user.value.id)

  if (error) {
    errorMessage.value = error.message
  } else {
    const favoriteCarIds = data.map(favorite => favorite.car_id)
    favoriteCars.value = cars.filter(car => favoriteCarIds.includes(car.id))
  }
}

fetchFavoriteCars()
</script>

<template>
  <HeaderPage></HeaderPage>
  <div>
    <h1>Favoritos</h1>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <div v-for="car in favoriteCars" :key="car.id" class="col-sm-2 uni-carros">
      <CarItemFav :car="car" />
    </div>
  </div>
</template>

<style scoped>
.error {
  color: red;
}
.car {
  margin-bottom: 20px;
}
</style>
