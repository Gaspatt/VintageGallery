<script setup>
import { useRouter } from 'vue-router';
import { useCarStore } from '../stores/carStore';
import HeaderHome from '@/components/HeaderHome.vue';

const router = useRouter();
const carStore = useCarStore();

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
    description: 'O 1978 Volkswagen Passat TS é um dos ícones mais marcantes da história automotiva brasileira, combinando um design arrojado com o desempenho que conquistou gerações de entusiastas. Este exemplar na clássica cor vermelha com interior preto destaca-se como uma verdadeira peça de colecionador, representando a era de ouro dos esportivos nacionais.',
    specifications: 'Especificações detalhadas do carro 1...',
    interior: 'Detalhes sobre o interior e painel do carro 1...',
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
    description: 'Descrição do carro 2',
    specifications: 'Especificações detalhadas do carro 2...',
    interior: 'Detalhes sobre o interior e painel do carro 2...',
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
    description: 'Descrição do carro 3',
    specifications: 'Especificações detalhadas do carro 3...',
    interior: 'Detalhes sobre o interior e painel do carro 3...',
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
    description: 'Descrição do carro 4',
    specifications: 'Especificações detalhadas do carro 4...',
    interior: 'Detalhes sobre o interior e painel do carro 4...',
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
    description: 'Descrição do carro 5',
    specifications: 'Especificações detalhadas do carro 5...',
    interior: 'Detalhes sobre o interior e painel do carro 5...',
    photos: [
      '/src/assets/imagens/carro5_interior1.png',
      '/src/assets/imagens/carro5_interior2.png',
    ],
  },
  {
    id: 6,
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
    description: 'O 1978 Volkswagen Passat TS é um dos ícones mais marcantes da história automotiva brasileira, combinando um design arrojado com o desempenho que conquistou gerações de entusiastas. Este exemplar na clássica cor vermelha com interior preto destaca-se como uma verdadeira peça de colecionador, representando a era de ouro dos esportivos nacionais.',
    specifications: 'Especificações detalhadas do carro 1...',
    interior: 'Detalhes sobre o interior e painel do carro 1...',
    photos: [
      '/src/assets/imagens/carro1_interior1.png',
      '/src/assets/imagens/carro1_interior2.png',
    ],
  },
  {
    id: 7,
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
    description: 'Descrição do carro 2',
    specifications: 'Especificações detalhadas do carro 2...',
    interior: 'Detalhes sobre o interior e painel do carro 2...',
    photos: [
      '/src/assets/imagens/carro2_interior1.png',
      '/src/assets/imagens/carro2_interior2.png',
    ],
  },

  {
    id: 8,
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
    description: 'Descrição do carro 3',
    specifications: 'Especificações detalhadas do carro 3...',
    interior: 'Detalhes sobre o interior e painel do carro 3...',
    photos: [
      '/src/assets/imagens/carro3_interior1.png',
      '/src/assets/imagens/carro3_interior2.png',
    ],
  },
  {
    id: 9,
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
    description: 'Descrição do carro 4',
    specifications: 'Especificações detalhadas do carro 4...',
    interior: 'Detalhes sobre o interior e painel do carro 4...',
    photos: [
      '/src/assets/imagens/carro4_interior1.png',
      '/src/assets/imagens/carro4_interior2.png',
    ],
  },
  {
    id: 10,
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
    description: 'Descrição do carro 5',
    specifications: 'Especificações detalhadas do carro 5...',
    interior: 'Detalhes sobre o interior e painel do carro 5...',
    photos: [
      '/src/assets/imagens/carro5_interior1.png',
      '/src/assets/imagens/carro5_interior2.png',
    ],
  },

];

const rentCar = (car) => {
  carStore.selectCar(car);
  router.push(`/car/${car.id}`);
};
</script>

<template>
  <HeaderHome></HeaderHome>
  <section id="secback">
    <div class="homeback">
      <div class="txt">
        <h1>VINTAGE GALLERY</h1>
        <p>Viva a nostalgia ao volante! Alugue carros antigos para eventos, ensaios e passeios únicos. Uma experiência
          clássica e inesquecível!</p>
      </div>
    </div>
  </section>
  <main>

    <div class="carrossel">
      <swiper-container navigation="true" space-between="670" slides-per-view="3">
        <swiper-slide><img src="/src/assets/imagens/carro2.png" alt="carro1"></swiper-slide>
        <swiper-slide><img src="/src/assets/imagens/carro3.png" alt="carro2"></swiper-slide>
        <swiper-slide><img src="/src/assets/imagens/carro1.png" alt="carro3"></swiper-slide>
        <swiper-slide><img src="/src/assets/imagens/carro3.png" alt="carro4"></swiper-slide>
        <swiper-slide><img src="/src/assets/imagens/carro2.png" alt="carro5"></swiper-slide>
      </swiper-container>
    </div>

    <section class="sobre">
      <div class="imgsobre">
        <img src="/src/assets/imagens/imgsobre.png" alt="carro1">
      </div>
      <div class="textosobre">
        <h1>Vintage Gallery</h1>
        <p>Bem-vindo à Vintage DGallery, onde o encanto do passado encontra o prazer de dirigir. Somos uma empresa especializada na locação de carros vintage, oferecendo uma seleção exclusiva de veículos clássicos para tornar momentos especiais ainda mais inesquecíveis. Nosso objetivo é proporcionar uma experiência autêntica e sofisticada, permitindo que nossos clientes vivam o charme e a elegância de outra época, com toda a comodidade moderna.</p>
      </div>
    </section>

    <div class="row carros">
      <div class="col-sm-2 uni-carros" v-for="car in cars" :key="car.id">
        <img :src="car.image" :alt="car.name">
        <div class="textocarro">
          <span>{{ car.name }}</span>
          <ul>
            <li><i class="bi bi-gear-fill"></i>{{ car.brand }}</li>
            <li><i class="bi bi-speedometer"></i>{{ car.year }}</li>
          </ul>
          <div class="botaocarro">
            <button class="btn btn-dark botao-carro" @click="rentCar(car)">Alugar</button>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<style scoped>

.carros {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 5vh;
  margin-bottom: 15vh;
  text-align: center;
  }

  .botao-carro {
    margin-bottom: 15px;
  }

/*div sobre nós */


.sobre {
  background-color: rgb(14, 14, 14);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 20px;
}

/* Imagem na seção "sobre" */
.imgsobre img {
  width: 100%;
  max-width: 450px;
  height: auto;
  object-fit: cover;
  margin: 20px;
}

/* Texto na seção "sobre" */
.textosobre {
  color: #fff;
  max-width: 600px;
  padding: 10px;
  text-align: center;
}

.textosobre h1 {
  font-size: 2.5em;
  margin-bottom: 1em;
}

.textosobre p {
  font-size: 1.1em;
  line-height: 1.6;
}

/* Responsividade para telas menores sobre */
@media (max-width: 768px) {
  .sobre {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .textosobre h1 {
    font-size: 2em;
  }

  .textosobre p {
    font-size: 1em;
  }

  .imgsobre img {
    max-width: 350px;
  }
}

@media (max-width: 480px) {
  .textosobre h1 {
    font-size: 1.5em;
  }

  .textosobre p {
    font-size: 0.9em;
  }

  .imgsobre img {
    max-width: 100%;
    height: auto;
  }
}


/*div img sobre nós */

.imgsobre img {
  width: 450px;
  height: 585px;
  object-fit: cover;
  margin-left: 10vh;
}

/*textos sobre nós */

.textosobre {
  color: #fff;
  width: 50%;
  padding-left: 10vh;

}

.textosobre h1 {
  font-size: 40pt;
  margin-bottom: 10vh;
}

.textosobre p {
  font-size: 15pt;
}

/*TUDO SOBRE OS CARROS ESTÃO NO main.css!! */

/*section img */

#secback {
  background: url(/src/assets/imagens/homeback.png);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  height: 100vh;
}

/* div img*/

.homeback {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 100%;
  height: 100vh;
  padding-left: 5%;
  box-sizing: border-box;
  overflow: hidden;
}

/* titulo e textos homeback */

.homeback h1 {
  color: #fff;
  z-index: 1000;
  font-size: 40pt;
}

.homeback p {
  color: #fff;
  font-size: 15pt;
}

.txt {
  color: #fff;
  max-width: 500px;
}

/*carrossel*/

swiper-container {
  width: 100%;
  height: 100%;
}

swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

swiper-slide img {
  display: block;
  width: 684px;
  height: 422px;
  object-fit: cover;
}



/*responsividade*/

@media (max-width: 700px) {

  /*alteração nos textos responsive*/

  .homeback h1 {
    color: #ffffff;
    font-size: 20pt;
  }

  .homeback p {
    color: #fff;
    font-size: 10pt;
  }
}

/*ANIMAÇÃO*/

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


@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

/*aplicação da animação*/

.homeback h1 {
  animation: slideUp 2s ease-out;
}

.homeback p {
  animation: slideUp 2.5s ease-out;
}

.carrossel {
  height: 600px;
}
</style>
