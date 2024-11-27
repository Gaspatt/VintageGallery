<script setup>
import HeaderPage from '@/components/HeaderPage.vue';
import FooterHome from '@/components/FooterHome.vue';
import { useCarStore } from '../stores/carStore';
import { useRouter } from 'vue-router';

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
    specifications: 'O Passat TS é famoso por suas linhas angulares e seu design esportivo. Além disso, a cor vermelha vibrante deste exemplar destaca ainda mais suas formas agressivas e elegantes, conferindo-lhe uma presença marcante nas ruas. Ademais, os detalhes cromados, junto com as rodas clássicas, completam o visual, tornando este Passat uma verdadeira máquina do tempo.',
    interior: 'O interior preto deste Passat TS é um reflexo da sofisticação e esportividade da época. Com bancos confortáveis e estofamento bem preservado, o interior oferece uma experiência agradável para motorista e passageiros. O painel de instrumentos clássico do TS, com seus mostradores analógicos, mantém toda a funcionalidade, entregando ao motorista as informações necessárias de maneira simples e direta.',
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
    description: 'O 1978 Volkswagen Passat TS é um dos ícones mais marcantes da história automotiva brasileira, combinando um design arrojado com o desempenho que conquistou gerações de entusiastas. Este exemplar na clássica cor vermelha com interior preto destaca-se como uma verdadeira peça de colecionador, representando a era de ouro dos esportivos nacionais.',
    specifications: 'O Passat TS é famoso por suas linhas angulares e seu design esportivo. Além disso, a cor vermelha vibrante deste exemplar destaca ainda mais suas formas agressivas e elegantes, conferindo-lhe uma presença marcante nas ruas. Ademais, os detalhes cromados, junto com as rodas clássicas, completam o visual, tornando este Passat uma verdadeira máquina do tempo.',
    interior: 'O interior preto deste Passat TS é um reflexo da sofisticação e esportividade da época. Com bancos confortáveis e estofamento bem preservado, o interior oferece uma experiência agradável para motorista e passageiros. O painel de instrumentos clássico do TS, com seus mostradores analógicos, mantém toda a funcionalidade, entregando ao motorista as informações necessárias de maneira simples e direta.',
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
    description: 'O 1978 Volkswagen Passat TS é um dos ícones mais marcantes da história automotiva brasileira, combinando um design arrojado com o desempenho que conquistou gerações de entusiastas. Este exemplar na clássica cor vermelha com interior preto destaca-se como uma verdadeira peça de colecionador, representando a era de ouro dos esportivos nacionais.',
    specifications: 'O Passat TS é famoso por suas linhas angulares e seu design esportivo. Além disso, a cor vermelha vibrante deste exemplar destaca ainda mais suas formas agressivas e elegantes, conferindo-lhe uma presença marcante nas ruas. Ademais, os detalhes cromados, junto com as rodas clássicas, completam o visual, tornando este Passat uma verdadeira máquina do tempo.',
    interior: 'O interior preto deste Passat TS é um reflexo da sofisticação e esportividade da época. Com bancos confortáveis e estofamento bem preservado, o interior oferece uma experiência agradável para motorista e passageiros. O painel de instrumentos clássico do TS, com seus mostradores analógicos, mantém toda a funcionalidade, entregando ao motorista as informações necessárias de maneira simples e direta.',
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
    description: 'O 1978 Volkswagen Passat TS é um dos ícones mais marcantes da história automotiva brasileira, combinando um design arrojado com o desempenho que conquistou gerações de entusiastas. Este exemplar na clássica cor vermelha com interior preto destaca-se como uma verdadeira peça de colecionador, representando a era de ouro dos esportivos nacionais.',
    specifications: 'O Passat TS é famoso por suas linhas angulares e seu design esportivo. Além disso, a cor vermelha vibrante deste exemplar destaca ainda mais suas formas agressivas e elegantes, conferindo-lhe uma presença marcante nas ruas. Ademais, os detalhes cromados, junto com as rodas clássicas, completam o visual, tornando este Passat uma verdadeira máquina do tempo.',
    interior: 'O interior preto deste Passat TS é um reflexo da sofisticação e esportividade da época. Com bancos confortáveis e estofamento bem preservado, o interior oferece uma experiência agradável para motorista e passageiros. O painel de instrumentos clássico do TS, com seus mostradores analógicos, mantém toda a funcionalidade, entregando ao motorista as informações necessárias de maneira simples e direta.',
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
    description: 'O 1978 Volkswagen Passat TS é um dos ícones mais marcantes da história automotiva brasileira, combinando um design arrojado com o desempenho que conquistou gerações de entusiastas. Este exemplar na clássica cor vermelha com interior preto destaca-se como uma verdadeira peça de colecionador, representando a era de ouro dos esportivos nacionais.',
    specifications: 'O Passat TS é famoso por suas linhas angulares e seu design esportivo. Além disso, a cor vermelha vibrante deste exemplar destaca ainda mais suas formas agressivas e elegantes, conferindo-lhe uma presença marcante nas ruas. Ademais, os detalhes cromados, junto com as rodas clássicas, completam o visual, tornando este Passat uma verdadeira máquina do tempo.',
    interior: 'O interior preto deste Passat TS é um reflexo da sofisticação e esportividade da época. Com bancos confortáveis e estofamento bem preservado, o interior oferece uma experiência agradável para motorista e passageiros. O painel de instrumentos clássico do TS, com seus mostradores analógicos, mantém toda a funcionalidade, entregando ao motorista as informações necessárias de maneira simples e direta.',
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
    description: 'O 1978 Volkswagen Passat TS é um dos ícones mais marcantes da história automotiva brasileira, combinando um design arrojado com o desempenho que conquistou gerações de entusiastas. Este exemplar na clássica cor vermelha com interior preto destaca-se como uma verdadeira peça de colecionador, representando a era de ouro dos esportivos nacionais.',
    specifications: 'O Passat TS é famoso por suas linhas angulares e seu design esportivo. Além disso, a cor vermelha vibrante deste exemplar destaca ainda mais suas formas agressivas e elegantes, conferindo-lhe uma presença marcante nas ruas. Ademais, os detalhes cromados, junto com as rodas clássicas, completam o visual, tornando este Passat uma verdadeira máquina do tempo.',
    interior: 'O interior preto deste Passat TS é um reflexo da sofisticação e esportividade da época. Com bancos confortáveis e estofamento bem preservado, o interior oferece uma experiência agradável para motorista e passageiros. O painel de instrumentos clássico do TS, com seus mostradores analógicos, mantém toda a funcionalidade, entregando ao motorista as informações necessárias de maneira simples e direta.',
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
    description: 'O 1978 Volkswagen Passat TS é um dos ícones mais marcantes da história automotiva brasileira, combinando um design arrojado com o desempenho que conquistou gerações de entusiastas. Este exemplar na clássica cor vermelha com interior preto destaca-se como uma verdadeira peça de colecionador, representando a era de ouro dos esportivos nacionais.',
    specifications: 'O Passat TS é famoso por suas linhas angulares e seu design esportivo. Além disso, a cor vermelha vibrante deste exemplar destaca ainda mais suas formas agressivas e elegantes, conferindo-lhe uma presença marcante nas ruas. Ademais, os detalhes cromados, junto com as rodas clássicas, completam o visual, tornando este Passat uma verdadeira máquina do tempo.',
    interior: 'O interior preto deste Passat TS é um reflexo da sofisticação e esportividade da época. Com bancos confortáveis e estofamento bem preservado, o interior oferece uma experiência agradável para motorista e passageiros. O painel de instrumentos clássico do TS, com seus mostradores analógicos, mantém toda a funcionalidade, entregando ao motorista as informações necessárias de maneira simples e direta.',
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
    description: 'O 1978 Volkswagen Passat TS é um dos ícones mais marcantes da história automotiva brasileira, combinando um design arrojado com o desempenho que conquistou gerações de entusiastas. Este exemplar na clássica cor vermelha com interior preto destaca-se como uma verdadeira peça de colecionador, representando a era de ouro dos esportivos nacionais.',
    specifications: 'O Passat TS é famoso por suas linhas angulares e seu design esportivo. Além disso, a cor vermelha vibrante deste exemplar destaca ainda mais suas formas agressivas e elegantes, conferindo-lhe uma presença marcante nas ruas. Ademais, os detalhes cromados, junto com as rodas clássicas, completam o visual, tornando este Passat uma verdadeira máquina do tempo.',
    interior: 'O interior preto deste Passat TS é um reflexo da sofisticação e esportividade da época. Com bancos confortáveis e estofamento bem preservado, o interior oferece uma experiência agradável para motorista e passageiros. O painel de instrumentos clássico do TS, com seus mostradores analógicos, mantém toda a funcionalidade, entregando ao motorista as informações necessárias de maneira simples e direta.',
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
    description: 'O 1978 Volkswagen Passat TS é um dos ícones mais marcantes da história automotiva brasileira, combinando um design arrojado com o desempenho que conquistou gerações de entusiastas. Este exemplar na clássica cor vermelha com interior preto destaca-se como uma verdadeira peça de colecionador, representando a era de ouro dos esportivos nacionais.',
    specifications: 'O Passat TS é famoso por suas linhas angulares e seu design esportivo. Além disso, a cor vermelha vibrante deste exemplar destaca ainda mais suas formas agressivas e elegantes, conferindo-lhe uma presença marcante nas ruas. Ademais, os detalhes cromados, junto com as rodas clássicas, completam o visual, tornando este Passat uma verdadeira máquina do tempo.',
    interior: 'O interior preto deste Passat TS é um reflexo da sofisticação e esportividade da época. Com bancos confortáveis e estofamento bem preservado, o interior oferece uma experiência agradável para motorista e passageiros. O painel de instrumentos clássico do TS, com seus mostradores analógicos, mantém toda a funcionalidade, entregando ao motorista as informações necessárias de maneira simples e direta.',
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
    description: 'O 1978 Volkswagen Passat TS é um dos ícones mais marcantes da história automotiva brasileira, combinando um design arrojado com o desempenho que conquistou gerações de entusiastas. Este exemplar na clássica cor vermelha com interior preto destaca-se como uma verdadeira peça de colecionador, representando a era de ouro dos esportivos nacionais.',
    specifications: 'O Passat TS é famoso por suas linhas angulares e seu design esportivo. Além disso, a cor vermelha vibrante deste exemplar destaca ainda mais suas formas agressivas e elegantes, conferindo-lhe uma presença marcante nas ruas. Ademais, os detalhes cromados, junto com as rodas clássicas, completam o visual, tornando este Passat uma verdadeira máquina do tempo.',
    interior: 'O interior preto deste Passat TS é um reflexo da sofisticação e esportividade da época. Com bancos confortáveis e estofamento bem preservado, o interior oferece uma experiência agradável para motorista e passageiros. O painel de instrumentos clássico do TS, com seus mostradores analógicos, mantém toda a funcionalidade, entregando ao motorista as informações necessárias de maneira simples e direta.',
    photos: [
      '/src/assets/imagens/carro5_interior1.png',
      '/src/assets/imagens/carro5_interior2.png',
    ],
  },
  {
    id: 11,
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
    description: 'O 1978 Volkswagen Passat TS é um dos ícones mais marcantes da história automotiva brasileira, combinando um design arrojado com o desempenho que conquistou gerações de entusiastas. Este exemplar na clássica cor vermelha com interior preto destaca-se como uma verdadeira peça de colecionador, representando a era de ouro dos esportivos nacionais.',
    specifications: 'O Passat TS é famoso por suas linhas angulares e seu design esportivo. Além disso, a cor vermelha vibrante deste exemplar destaca ainda mais suas formas agressivas e elegantes, conferindo-lhe uma presença marcante nas ruas. Ademais, os detalhes cromados, junto com as rodas clássicas, completam o visual, tornando este Passat uma verdadeira máquina do tempo.',
    interior: 'O interior preto deste Passat TS é um reflexo da sofisticação e esportividade da época. Com bancos confortáveis e estofamento bem preservado, o interior oferece uma experiência agradável para motorista e passageiros. O painel de instrumentos clássico do TS, com seus mostradores analógicos, mantém toda a funcionalidade, entregando ao motorista as informações necessárias de maneira simples e direta.',
    photos: [
      '/src/assets/imagens/carro5_interior1.png',
      '/src/assets/imagens/carro5_interior2.png',
    ],
  },
  {
    id: 12,
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
    description: 'O 1978 Volkswagen Passat TS é um dos ícones mais marcantes da história automotiva brasileira, combinando um design arrojado com o desempenho que conquistou gerações de entusiastas. Este exemplar na clássica cor vermelha com interior preto destaca-se como uma verdadeira peça de colecionador, representando a era de ouro dos esportivos nacionais.',
    specifications: 'O Passat TS é famoso por suas linhas angulares e seu design esportivo. Além disso, a cor vermelha vibrante deste exemplar destaca ainda mais suas formas agressivas e elegantes, conferindo-lhe uma presença marcante nas ruas. Ademais, os detalhes cromados, junto com as rodas clássicas, completam o visual, tornando este Passat uma verdadeira máquina do tempo.',
    interior: 'O interior preto deste Passat TS é um reflexo da sofisticação e esportividade da época. Com bancos confortáveis e estofamento bem preservado, o interior oferece uma experiência agradável para motorista e passageiros. O painel de instrumentos clássico do TS, com seus mostradores analógicos, mantém toda a funcionalidade, entregando ao motorista as informações necessárias de maneira simples e direta.',
    photos: [
      '/src/assets/imagens/carro5_interior1.png',
      '/src/assets/imagens/carro5_interior2.png',
    ],
  },
  {
    id: 13,
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
    description: 'O 1978 Volkswagen Passat TS é um dos ícones mais marcantes da história automotiva brasileira, combinando um design arrojado com o desempenho que conquistou gerações de entusiastas. Este exemplar na clássica cor vermelha com interior preto destaca-se como uma verdadeira peça de colecionador, representando a era de ouro dos esportivos nacionais.',
    specifications: 'O Passat TS é famoso por suas linhas angulares e seu design esportivo. Além disso, a cor vermelha vibrante deste exemplar destaca ainda mais suas formas agressivas e elegantes, conferindo-lhe uma presença marcante nas ruas. Ademais, os detalhes cromados, junto com as rodas clássicas, completam o visual, tornando este Passat uma verdadeira máquina do tempo.',
    interior: 'O interior preto deste Passat TS é um reflexo da sofisticação e esportividade da época. Com bancos confortáveis e estofamento bem preservado, o interior oferece uma experiência agradável para motorista e passageiros. O painel de instrumentos clássico do TS, com seus mostradores analógicos, mantém toda a funcionalidade, entregando ao motorista as informações necessárias de maneira simples e direta.',
    photos: [
      '/src/assets/imagens/carro5_interior1.png',
      '/src/assets/imagens/carro5_interior2.png',
    ],
  },
  {
    id: 14,
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
    description: 'O 1978 Volkswagen Passat TS é um dos ícones mais marcantes da história automotiva brasileira, combinando um design arrojado com o desempenho que conquistou gerações de entusiastas. Este exemplar na clássica cor vermelha com interior preto destaca-se como uma verdadeira peça de colecionador, representando a era de ouro dos esportivos nacionais.',
    specifications: 'O Passat TS é famoso por suas linhas angulares e seu design esportivo. Além disso, a cor vermelha vibrante deste exemplar destaca ainda mais suas formas agressivas e elegantes, conferindo-lhe uma presença marcante nas ruas. Ademais, os detalhes cromados, junto com as rodas clássicas, completam o visual, tornando este Passat uma verdadeira máquina do tempo.',
    interior: 'O interior preto deste Passat TS é um reflexo da sofisticação e esportividade da época. Com bancos confortáveis e estofamento bem preservado, o interior oferece uma experiência agradável para motorista e passageiros. O painel de instrumentos clássico do TS, com seus mostradores analógicos, mantém toda a funcionalidade, entregando ao motorista as informações necessárias de maneira simples e direta.',
    photos: [
      '/src/assets/imagens/carro5_interior1.png',
      '/src/assets/imagens/carro5_interior2.png',
    ],
  },
  {
    id: 15,
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
    description: 'O 1978 Volkswagen Passat TS é um dos ícones mais marcantes da história automotiva brasileira, combinando um design arrojado com o desempenho que conquistou gerações de entusiastas. Este exemplar na clássica cor vermelha com interior preto destaca-se como uma verdadeira peça de colecionador, representando a era de ouro dos esportivos nacionais.',
    specifications: 'O Passat TS é famoso por suas linhas angulares e seu design esportivo. Além disso, a cor vermelha vibrante deste exemplar destaca ainda mais suas formas agressivas e elegantes, conferindo-lhe uma presença marcante nas ruas. Ademais, os detalhes cromados, junto com as rodas clássicas, completam o visual, tornando este Passat uma verdadeira máquina do tempo.',
    interior: 'O interior preto deste Passat TS é um reflexo da sofisticação e esportividade da época. Com bancos confortáveis e estofamento bem preservado, o interior oferece uma experiência agradável para motorista e passageiros. O painel de instrumentos clássico do TS, com seus mostradores analógicos, mantém toda a funcionalidade, entregando ao motorista as informações necessárias de maneira simples e direta.',
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
<HeaderPage></HeaderPage>

<main>
  <div class="conatiner">

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

</div>

</main>

<FooterHome></FooterHome>

</template>

<style scoped>
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

.botao-carro {
  margin-bottom: 15px;
}


</style>
