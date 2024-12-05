<script setup>
import HeaderPage from '@/components/HeaderPage.vue'
import FooterHome from '@/components/FooterHome.vue'
import { useCarStore } from '../stores/carStore'
import { useRouter } from 'vue-router'
import CarItem from '@/components/CarItem.vue'
import { supabase } from '../supabase'
import { useAuth } from '../auth'
import { ref } from 'vue'

const { user } = useAuth()


const router = useRouter()
const carStore = useCarStore()

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
      'O Passat TS é famoso por suas linhas angulares e seu design esportivo. Além disso, a cor vermelha vibrante deste exemplar destaca ainda mais suas formas agressivas e elegantes, conferindo-lhe uma presença marcante nas ruas. Ademais, os detalhes cromados, junto com as rodas clássicas, completam o visual, tornando este Passat uma verdadeira máquina do tempo.',
    interior:
      'O interior preto deste Passat TS é um reflexo da sofisticação e esportividade da época. Com bancos confortáveis e estofamento bem preservado, o interior oferece uma experiência agradável para motorista e passageiros. O painel de instrumentos clássico do TS, com seus mostradores analógicos, mantém toda a funcionalidade, entregando ao motorista as informações necessárias de maneira simples e direta.',
    photos: [
      '/src/assets/imagens/carro1_interior1.png',
      '/src/assets/imagens/carro1_interior2.png',
    ],
  },
  {
    id: 2,
    name: '1964 Porsche 356 C',
    brand: 'Porsche',
    model: '356 C',
    color: 'Preto',
    year: 1964,
    motor: '1600',
    transmission: 'Manual de 4 Velocidades',
    km: '100.000',
    location: 'São Paulo',
    price: 'R$ 1.590.000,00',
    image: '/src/assets/imagens/carroprin2.png',
    description:
      'O 1978 Volkswagen Passat TS é um dos ícones mais marcantes da história automotiva brasileira, combinando um design arrojado com o desempenho que conquistou gerações de entusiastas. Este exemplar na clássica cor vermelha com interior preto destaca-se como uma verdadeira peça de colecionador, representando a era de ouro dos esportivos nacionais.',
    specifications:
      'O Passat TS é famoso por suas linhas angulares e seu design esportivo. Além disso, a cor vermelha vibrante deste exemplar destaca ainda mais suas formas agressivas e elegantes, conferindo-lhe uma presença marcante nas ruas. Ademais, os detalhes cromados, junto com as rodas clássicas, completam o visual, tornando este Passat uma verdadeira máquina do tempo.',
    interior:
      'O interior preto deste Passat TS é um reflexo da sofisticação e esportividade da época. Com bancos confortáveis e estofamento bem preservado, o interior oferece uma experiência agradável para motorista e passageiros. O painel de instrumentos clássico do TS, com seus mostradores analógicos, mantém toda a funcionalidade, entregando ao motorista as informações necessárias de maneira simples e direta.',
    photos: [
      '/src/assets/imagens/carro2_interior1.png',
      '/src/assets/imagens/carro2_interior2.png',
    ],
  },

  {
    id: 3,
    name: '1970 Mercedes-Benz 280 SL',
    brand: 'Mercedes-Benz',
    model: '280 SL',
    color: 'Vermelho',
    year: 1970,
    motor: '2.8 L6',
    transmission: 'Manual',
    km: '10.235',
    location: 'São Paulo',
    price: 'R$ 1.100.000,00',
    image: '/src/assets/imagens/carroprin3.jpg',
    description:
      'O 1978 Volkswagen Passat TS é um dos ícones mais marcantes da história automotiva brasileira, combinando um design arrojado com o desempenho que conquistou gerações de entusiastas. Este exemplar na clássica cor vermelha com interior preto destaca-se como uma verdadeira peça de colecionador, representando a era de ouro dos esportivos nacionais.',
    specifications:
      'O Passat TS é famoso por suas linhas angulares e seu design esportivo. Além disso, a cor vermelha vibrante deste exemplar destaca ainda mais suas formas agressivas e elegantes, conferindo-lhe uma presença marcante nas ruas. Ademais, os detalhes cromados, junto com as rodas clássicas, completam o visual, tornando este Passat uma verdadeira máquina do tempo.',
    interior:
      'O interior preto deste Passat TS é um reflexo da sofisticação e esportividade da época. Com bancos confortáveis e estofamento bem preservado, o interior oferece uma experiência agradável para motorista e passageiros. O painel de instrumentos clássico do TS, com seus mostradores analógicos, mantém toda a funcionalidade, entregando ao motorista as informações necessárias de maneira simples e direta.',
    photos: [
      '/src/assets/imagens/carro3_interior1.png',
      '/src/assets/imagens/carro3_interior2.png',
    ],
  },
  {
    id: 4,
    name: '1970 Ford Bronco 4x4',
    brand: 'Ford',
    model: 'Bronco',
    color: 'Verde',
    year: 1970,
    motor: 'V8',
    transmission: 'Manual',
    km: '35.000',
    location: 'São Paulo',
    price: 'R$ 1.050.000,00',
    image: '/src/assets/imagens/carroprin4.jpg',
    description:
      'O 1978 Volkswagen Passat TS é um dos ícones mais marcantes da história automotiva brasileira, combinando um design arrojado com o desempenho que conquistou gerações de entusiastas. Este exemplar na clássica cor vermelha com interior preto destaca-se como uma verdadeira peça de colecionador, representando a era de ouro dos esportivos nacionais.',
    specifications:
      'O Passat TS é famoso por suas linhas angulares e seu design esportivo. Além disso, a cor vermelha vibrante deste exemplar destaca ainda mais suas formas agressivas e elegantes, conferindo-lhe uma presença marcante nas ruas. Ademais, os detalhes cromados, junto com as rodas clássicas, completam o visual, tornando este Passat uma verdadeira máquina do tempo.',
    interior:
      'O interior preto deste Passat TS é um reflexo da sofisticação e esportividade da época. Com bancos confortáveis e estofamento bem preservado, o interior oferece uma experiência agradável para motorista e passageiros. O painel de instrumentos clássico do TS, com seus mostradores analógicos, mantém toda a funcionalidade, entregando ao motorista as informações necessárias de maneira simples e direta.',
    photos: [
      '/src/assets/imagens/carro4_interior1.png',
      '/src/assets/imagens/carro4_interior2.png',
    ],
  },
  {
    id: 5,
    name: '1969 Chevrolet Camaro SS',
    brand: 'Chevrolet',
    model: 'Camaro SS',
    color: 'Amarelo',
    year: 1969,
    motor: 'V8 350',
    transmission: 'Manual',
    km: '22.000',
    location: 'São Paulo',
    price: 'R$ 105.000,00',
    image: '/src/assets/imagens/carroprin5.jpg',
    description:
      'O 1978 Volkswagen Passat TS é um dos ícones mais marcantes da história automotiva brasileira, combinando um design arrojado com o desempenho que conquistou gerações de entusiastas. Este exemplar na clássica cor vermelha com interior preto destaca-se como uma verdadeira peça de colecionador, representando a era de ouro dos esportivos nacionais.',
    specifications:
      'O Passat TS é famoso por suas linhas angulares e seu design esportivo. Além disso, a cor vermelha vibrante deste exemplar destaca ainda mais suas formas agressivas e elegantes, conferindo-lhe uma presença marcante nas ruas. Ademais, os detalhes cromados, junto com as rodas clássicas, completam o visual, tornando este Passat uma verdadeira máquina do tempo.',
    interior:
      'O interior preto deste Passat TS é um reflexo da sofisticação e esportividade da época. Com bancos confortáveis e estofamento bem preservado, o interior oferece uma experiência agradável para motorista e passageiros. O painel de instrumentos clássico do TS, com seus mostradores analógicos, mantém toda a funcionalidade, entregando ao motorista as informações necessárias de maneira simples e direta.',
    photos: [
      '/src/assets/imagens/carro5_interior1.png',
      '/src/assets/imagens/carro5_interior2.png',
    ],
  },
  {
    id: 6,
    name: '1991 Chevrolet Opala Diplomata SE',
    brand: 'Chevrolet',
    model: 'Opala Diplomata SE',
    color: 'Azul',
    year: 1991,
    motor: '1.6',
    transmission: 'Manual',
    km: '25.372',
    location: 'São Paulo',
    price: 'R$ 5.000,00',
    image: '/src/assets/imagens/carroprin6.png',
    description:
      'O 1978 Volkswagen Passat TS é um dos ícones mais marcantes da história automotiva brasileira, combinando um design arrojado com o desempenho que conquistou gerações de entusiastas. Este exemplar na clássica cor vermelha com interior preto destaca-se como uma verdadeira peça de colecionador, representando a era de ouro dos esportivos nacionais.',
    specifications:
      'O Passat TS é famoso por suas linhas angulares e seu design esportivo. Além disso, a cor vermelha vibrante deste exemplar destaca ainda mais suas formas agressivas e elegantes, conferindo-lhe uma presença marcante nas ruas. Ademais, os detalhes cromados, junto com as rodas clássicas, completam o visual, tornando este Passat uma verdadeira máquina do tempo.',
    interior:
      'O interior preto deste Passat TS é um reflexo da sofisticação e esportividade da época. Com bancos confortáveis e estofamento bem preservado, o interior oferece uma experiência agradável para motorista e passageiros. O painel de instrumentos clássico do TS, com seus mostradores analógicos, mantém toda a funcionalidade, entregando ao motorista as informações necessárias de maneira simples e direta.',
    photos: [
      '/src/assets/imagens/carro1_interior1.png',
      '/src/assets/imagens/carro1_interior2.png',
    ],
  },
  {
    id: 7,
    name: '1967 Volkswagen Karmann Ghia',
    brand: 'Volkswagen',
    model: 'Karmann Ghia',
    color: 'Preto',
    year: 1967,
    motor: '1600',
    transmission: 'Manual de 4 Velocidades',
    km: '100.000',
    location: 'São Paulo',
    price: 'R$ 1.590.000,00',
    image: '/src/assets/imagens/carroprin7.png',
    description:
      'O 1978 Volkswagen Passat TS é um dos ícones mais marcantes da história automotiva brasileira, combinando um design arrojado com o desempenho que conquistou gerações de entusiastas. Este exemplar na clássica cor vermelha com interior preto destaca-se como uma verdadeira peça de colecionador, representando a era de ouro dos esportivos nacionais.',
    specifications:
      'O Passat TS é famoso por suas linhas angulares e seu design esportivo. Além disso, a cor vermelha vibrante deste exemplar destaca ainda mais suas formas agressivas e elegantes, conferindo-lhe uma presença marcante nas ruas. Ademais, os detalhes cromados, junto com as rodas clássicas, completam o visual, tornando este Passat uma verdadeira máquina do tempo.',
    interior:
      'O interior preto deste Passat TS é um reflexo da sofisticação e esportividade da época. Com bancos confortáveis e estofamento bem preservado, o interior oferece uma experiência agradável para motorista e passageiros. O painel de instrumentos clássico do TS, com seus mostradores analógicos, mantém toda a funcionalidade, entregando ao motorista as informações necessárias de maneira simples e direta.',
    photos: [
      '/src/assets/imagens/carro2_interior1.png',
      '/src/assets/imagens/carro2_interior2.png',
    ],
  },

  {
    id: 8,
    name: '1970 Mercedes-Benz 280 SE',
    brand: 'Mercedes-Benz',
    model: '280 SE',
    color: 'Vermelho',
    year: 1970,
    motor: '2.8 L6',
    transmission: 'Manual',
    km: '10.235',
    location: 'São Paulo',
    price: 'R$ 1.100.000,00',
    image: '/src/assets/imagens/carroprin8.png',
    description:
      'O 1978 Volkswagen Passat TS é um dos ícones mais marcantes da história automotiva brasileira, combinando um design arrojado com o desempenho que conquistou gerações de entusiastas. Este exemplar na clássica cor vermelha com interior preto destaca-se como uma verdadeira peça de colecionador, representando a era de ouro dos esportivos nacionais.',
    specifications:
      'O Passat TS é famoso por suas linhas angulares e seu design esportivo. Além disso, a cor vermelha vibrante deste exemplar destaca ainda mais suas formas agressivas e elegantes, conferindo-lhe uma presença marcante nas ruas. Ademais, os detalhes cromados, junto com as rodas clássicas, completam o visual, tornando este Passat uma verdadeira máquina do tempo.',
    interior:
      'O interior preto deste Passat TS é um reflexo da sofisticação e esportividade da época. Com bancos confortáveis e estofamento bem preservado, o interior oferece uma experiência agradável para motorista e passageiros. O painel de instrumentos clássico do TS, com seus mostradores analógicos, mantém toda a funcionalidade, entregando ao motorista as informações necessárias de maneira simples e direta.',
    photos: [
      '/src/assets/imagens/carro3_interior1.png',
      '/src/assets/imagens/carro3_interior2.png',
    ],
  },
  {
    id: 9,
    name: '1975 Ford Maverick GT V8 302',
    brand: 'Ford',
    model: 'Maverick GT',
    color: 'Verde',
    year: 1975,
    motor: 'V8',
    transmission: 'Manual',
    km: '35.000',
    location: 'São Paulo',
    price: 'R$ 1.050.000,00',
    image: '/src/assets/imagens/carroprin9.png',
    description:
      'O 1978 Volkswagen Passat TS é um dos ícones mais marcantes da história automotiva brasileira, combinando um design arrojado com o desempenho que conquistou gerações de entusiastas. Este exemplar na clássica cor vermelha com interior preto destaca-se como uma verdadeira peça de colecionador, representando a era de ouro dos esportivos nacionais.',
    specifications:
      'O Passat TS é famoso por suas linhas angulares e seu design esportivo. Além disso, a cor vermelha vibrante deste exemplar destaca ainda mais suas formas agressivas e elegantes, conferindo-lhe uma presença marcante nas ruas. Ademais, os detalhes cromados, junto com as rodas clássicas, completam o visual, tornando este Passat uma verdadeira máquina do tempo.',
    interior:
      'O interior preto deste Passat TS é um reflexo da sofisticação e esportividade da época. Com bancos confortáveis e estofamento bem preservado, o interior oferece uma experiência agradável para motorista e passageiros. O painel de instrumentos clássico do TS, com seus mostradores analógicos, mantém toda a funcionalidade, entregando ao motorista as informações necessárias de maneira simples e direta.',
    photos: [
      '/src/assets/imagens/carro4_interior1.png',
      '/src/assets/imagens/carro4_interior2.png',
    ],
  },
  {
    id: 10,
    name: '1973 MG MGB Roadster',
    brand: 'MG',
    model: 'MG B',
    color: 'Amarelo',
    year: 1973,
    motor: 'V8 350',
    transmission: 'Manual',
    km: '22.000',
    location: 'São Paulo',
    price: 'R$ 105.000,00',
    image: '/src/assets/imagens/carroprin10.png',
    description:
      'O 1978 Volkswagen Passat TS é um dos ícones mais marcantes da história automotiva brasileira, combinando um design arrojado com o desempenho que conquistou gerações de entusiastas. Este exemplar na clássica cor vermelha com interior preto destaca-se como uma verdadeira peça de colecionador, representando a era de ouro dos esportivos nacionais.',
    specifications:
      'O Passat TS é famoso por suas linhas angulares e seu design esportivo. Além disso, a cor vermelha vibrante deste exemplar destaca ainda mais suas formas agressivas e elegantes, conferindo-lhe uma presença marcante nas ruas. Ademais, os detalhes cromados, junto com as rodas clássicas, completam o visual, tornando este Passat uma verdadeira máquina do tempo.',
    interior:
      'O interior preto deste Passat TS é um reflexo da sofisticação e esportividade da época. Com bancos confortáveis e estofamento bem preservado, o interior oferece uma experiência agradável para motorista e passageiros. O painel de instrumentos clássico do TS, com seus mostradores analógicos, mantém toda a funcionalidade, entregando ao motorista as informações necessárias de maneira simples e direta.',
    photos: [
      '/src/assets/imagens/carro5_interior1.png',
      '/src/assets/imagens/carro5_interior2.png',
    ],
  },
  {
    id: 11,
    name: '1979 Toyota Bandeirante',
    brand: 'Toyota',
    model: 'Bandeirante',
    color: 'Azul',
    year: 1979,
    motor: '4 Cilindros',
    transmission: 'Manual',
    km: '72.300',
    location: 'São Paulo',
    price: 'R$ 2.000,00',
    image: '/src/assets/imagens/carro11.png',
    description:
      'O 1979 Toyota Bandeirante é um veículo que personifica a robustez e a durabilidade, características que fizeram dele um ícone nas estradas e trilhas brasileiras. Este modelo, construído para enfrentar qualquer tipo de terreno, é altamente valorizado por entusiastas de carros clássicos e aventureiros que buscam um companheiro de viagem confiável e de fato resistente. Com uma herança que remonta às suas raízes na indústria automobilística, o Toyota Bandeirante certamente continua a impressionar por sua capacidade de enfrentar desafios com confiança e simplicidade.',
    specifications:
      'Equipado com um motor diesel 4 cilindros, o Bandeirante oferece um desempenho sólido e de fato consistente, adequado para enfrentar qualquer tipo de terreno. Além disso, o câmbio manual de quatro marchas é responsivo e robusto, garantindo que o motorista tenha total controle sobre o veículo em diferentes situações.',
    interior:
      'O interior do modelo é feito para suportar o uso intenso. O espaço interno é funcional e prático, ideal para aqueles que necessitam de um veículo confiável para o trabalho ou para o lazer. Os bancos, revestidos em couro estão acima de tudo em bom estado, proporcionando conforto durante longas jornadas, enquanto os detalhes no acabamento reforçam a durabilidade e a resistência.',
    photos: [
      '/src/assets/imagens/carro11_interior1.png',
      '/src/assets/imagens/carro11_interior2.png',
    ],
  },
  {
    id: 12,
    name: '1975 Dodge Charger R/T',
    brand: 'Dodge',
    model: 'Charger R/T',
    color: 'Vermelha',
    year: 1975,
    motor: 'V8 318',
    transmission: 'Manual',
    km: '51.667',
    location: 'São Paulo',
    price: 'R$ 4.500,00',
    image: '/src/assets/imagens/carro12.png',
    description:
      'O Dodge Charger é um modelo de automóvel comercializado pela Dodge em várias formas ao longo de sete gerações desde 1966. O primeiro Charger foi um show car em 1964. Um carro-conceito Charger II de 1965 lembrava a versão de produção de 1966. O Charger foi construído em três plataformas diferentes em vários tamanhos. Nos Estados Unidos, a placa de identificação Charger foi usada em hatchbacks subcompactos, sedãs de tamanho normal, muscle cars e cupês de luxo pessoais. A versão atual é um sedã de quatro portas.',
    specifications:
      'Este carro tem um V8 Dodge 318 e câmbio manual de 4 marchas com tudo funcionando normalmente. Recebeu revisão recentemente. Todos os sistemas funcionando.',
    interior:
      'Seu interior está em bom estado, sem rasgos ou imperfeições, suas capas de porta, carpete e forro de teto estão em muito bom estado de conservação.',
    photos: [
      '/src/assets/imagens/carro12_interior1.png',
      '/src/assets/imagens/carro12_interior2.png',
    ],
  },
  {
    id: 13,
    name: '1978 GM Veraneio Deluxo',
    brand: 'GM',
    model: 'Veraneio',
    color: 'Verde',
    year: 1978,
    motor: '6 Cilindros',
    transmission: 'Manual',
    km: '99.000',
    location: 'São Paulo',
    price: 'R$ 1.250,00',
    image: '/src/assets/imagens/carro13.png',
    description:
      'Veraneio é um utilitário esportivo (SUV) produzido pela Chevrolet do Brasil de 1964 a 1994 substituindo a Chevrolet Amazona, desenhada por Luther Whitmore Stier, inspirado na Chevrolet Suburban norte-americana.',
    specifications:
      'Essa unidade possui um motor 6 cilindros e câmbio manual na coluna, ambos funcionando normalmente.Painel original, sem manchas ou riscos, com todos acabamentos e botões. Tudo funcionando normalmente.',
    interior:
      'Seu interior original está em bom estado de conservação, sem rasgos ou imperfeições, suas capas de porta estão em muito bom estado.',
    photos: [
      '/src/assets/imagens/carro13_interior1.png',
      '/src/assets/imagens/carro13_interior2.png',
    ],
  },
  {
    id: 14,
    name: '1999 Volkswagen Kombi 1600',
    brand: 'Volkswagen',
    model: 'Kombi',
    color: 'Branca',
    year: 1999,
    motor: '1600',
    transmission: 'Manual',
    km: '57.700',
    location: 'São Paulo',
    price: 'R$ 3.000,00',
    image: '/src/assets/imagens/carro14.png',
    description:
      'O Volkswagen Kombi foi um veículo comercial ligeiro produzido pela empresa automotiva alemã Volkswagen, entre 1950 e 2013. Sua construção robusta monobloco (sem chassi), suspensão independente com barras de torção, além da excêntrica posição do motorista no automóvel (sentado sobre o eixo dianteiro e com a coluna de direção praticamente vertical), o tornam um veículo simples e robusto, de baixo custo de manutenção.',
    specifications:
      'Esse exemplar possui um motor VW 1600 e câmbio manual, ambos devidamente revisados e funcionando normalmente.Seu painel está em muito bom estado de conservação sem qualquer tipo de imperfeição ou trincos, seus mostradores foram revisados e funcionam normalmente.',
    interior:
      'Seu interior está em muito bom estado, sem rasgos ou imperfeições, suas capas de porta, carpete e forro de teto estão em muito bom estado de conservação.',
    photos: [
      '/src/assets/imagens/carro14_interior1.png',
      '/src/assets/imagens/carro14_interior2.png',
    ],
  },
  {
    id: 15,
    name: '1970 Volkswagen 1600',
    brand: 'Volkswagen',
    model: 'Variant',
    color: 'Bege',
    year: 1970,
    motor: 'VW',
    transmission: 'Manual',
    km: '1.140',
    location: 'São Paulo',
    price: 'R$ 1.200,00',
    image: '/src/assets/imagens/carro15.png',
    description:
      'A linha Volkswagen 1600 foi, juntamente com o Fusca e a Kombi, a base da presença da Volkswagen no mercado brasileiro até a chegada do Passat, em 1974. Todos eram equipados com motores traseiros refrigerados a ar e mesma plataforma mecânica do Fusca. Possuía uma fácil adaptação para sistemas de sobrealimentação, seja com turbocompressores ou superchargers (compressores).',
    specifications:
      'Essa unidade possui um motor VW e câmbio manual, ambos devidamente revisados e funcionando normalmente.Seu painel está em bom estado de conservação, seus mostradores foram revisados e funcionam normalmente.',
    interior:
      'Seu interior está em bom estado, sem rasgos ou imperfeições, suas capas de porta, carpete e forro de teto estão em muito bom estado de conservação.',
    photos: [
      '/src/assets/imagens/carro15_interior1.png',
      '/src/assets/imagens/carro15_interior2.png',
    ],
  },
]

const errorMessage = ref('')

async function fetchFavorites() {
  if (!user.value) return

  const { data, error } = await supabase
    .from('favorites')
    .select('car_id')
    .eq('user_id', user.value.id)

  if (error) {
    errorMessage.value = error.message
  } else {
    const favoriteCarIds = data.map(favorite => favorite.car_id)
    cars.forEach(car => {
      car.is_favorited = favoriteCarIds.includes(car.id)
    })
  }
}

fetchFavorites()

const rentCar = car => {
  carStore.selectCar(car)
  router.push(`/car/${car.id}`)
}
</script>

<template>
  <HeaderPage></HeaderPage>

  <main>
    <div class="conatiner">
      <div class="row carros">
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <div class="col-sm-2 uni-carros" v-for="car in cars" :key="car.id">
          <CarItem :car="car" />
          <button class="btn btn-dark botao-carro" @click="rentCar(car)">
            Alugar
          </button>
        </div>
      </div>
    </div>
  </main>

  <FooterHome></FooterHome>
</template>

<style scoped>
.favorite-icon {
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s;
  position: relative;
  right: 12vh;
  bottom: 10vw;

}

.favorite-icon:hover {
  color: rgb(212, 4, 4);
}

.carros {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 10vh;
  margin-bottom: 15vh;
  text-align: center;
}

.favorite-icon {
  border: none;
  background: none;
}

.botao-carro {
  margin-bottom: 15px;
}
</style>
