<script>


</script>

<script setup>

</script>

<template>
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

    <div class="sobre">

    </div>

    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae esse illum doloribus recusandae nulla reiciendis eos quia suscipit ipsam expedita nobis molestias nam saepe aperiam aut, odit vitae quas? Repellendus.</div>

  </main>
</template>

<style scoped>

/*div sobre nós */

.sobre {
  background-color: rgb(14 14 14);
  height: 100vh;
}

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
  justify-content:center;
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
  height: 900px;
}
</style>
