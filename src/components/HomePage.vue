<script setup></script>

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

    <div class="teste">fkasjdk fkasjdfk kfjaskd</div>
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

.teste {
  height: 400px;
}

</style>
