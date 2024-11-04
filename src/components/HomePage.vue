<script>
export default {
  data() {
    return {
      images: [
        '/src/assets/imagens/carro1.png',
        '/src/assets/imagens/carro2.png',
        '/src/assets/imagens/carro3.png',
        // Adicione mais URLs de imagens conforme necessário
      ],
      activeIndex: 0,
    };
  },
  methods: {
    nextImage() {
      this.activeIndex = (this.activeIndex + 1) % this.images.length;
    },
    prevImage() {
      this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
    },
  },
};
</script>

<template>
 <section id="secback">
        <div class="homeback">

          <div class="txt">
            <h1>VINTAGE GALLERY</h1>
          <P>Viva a nostalgia ao volante! Alugue carros antigos para eventos, ensaios e passeios únicos. Uma experiência clássica e inesquecível!</P>
          </div>

        </div>
  </section>
  <main>

    <div class="carrossel">
      <div class="carrossel-container">
        <div class="carrossel-item" v-for="(image, index) in images" :key="index" :class="{ active: index === activeIndex, 'half-visible': index !== activeIndex }">
          <img :src="image" alt="Carrossel Image">
        </div>
      </div>
      <button class="carrossel-button left" @click="prevImage">‹</button>
      <button class="carrossel-button right" @click="nextImage">›</button>
    </div>
  </main>
</template>

<style scoped>

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

.carrossel {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carrossel-container {
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(calc(-100% * var(--active-index)));
  gap: 154px; /* Adiciona espaçamento entre as imagens */
}

.carrossel-item {
  min-width: calc(33.33% - 154px); /* Ajusta a largura das imagens para considerar o espaçamento */
  transition: transform 0.5s ease;
  overflow: hidden; /* Garante que a imagem seja cortada */
}

.carrossel-item img {
  width: 684px;
  height: 402px;
  object-fit: cover;
}

.carrossel-item.half-visible img {
  transform: translateX(-50%); /* Move a imagem para a esquerda para cortar pela metade */
}

.carrossel-item.active img {
  transform: translateX(0); /* Garante que a imagem central seja exibida inteira */
}



.carrossel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.carrossel-button.left {
  left: 10px;
}

.carrossel-button.right {
  right: 10px;
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
  height: 900px;
}

</style>
