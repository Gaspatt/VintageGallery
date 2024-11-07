<script setup>

import { ref, onMounted } from 'vue';

const isMenuActive = ref(false);
const isTransparent = ref(true);

// função do menu hamburguer

function toggleMenu() {
  isMenuActive.value = !isMenuActive.value;
}

// Monitora o scroll para controlar a opacidade do nav
function handleScroll() {
  const h1Element = document.querySelector('h1');
  if (window.scrollY > h1Element.offsetTop - 100) {
    isTransparent.value = false;
  } else {
    isTransparent.value = true;
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

</script>

<template>

  <!--HEADER-->

  <header>
    <div :class="['nav-1', { transparent: isTransparent }]">

      <!--hamburguer-->
      <div class="hamburguer" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>

      <!--nav lateral-->

      <div :class="['nav-menu-lateral', { active: isMenuActive }]">

        <router-link to="/"><img src="/src/assets/imagens/logo.png" alt="logo" class="logo-img-lateral"></router-link>

        <i class="fas fa-times fa-2x" @click="toggleMenu"></i>

        <ul class="ul-mobile">
          <li class="nav-item-mobile">
            <router-link to="/" class="nav-link-mobile">HOME</router-link>
          </li>
          <li class="nav-item-mobile">
            <router-link to="/cars" class="nav-link-mobile">CARROS</router-link>
          </li>
          <li class="nav-item-mobile">
            <router-link to="/contact" class="nav-link-mobile">CONTATO</router-link>
          </li>
        </ul>
      </div>

      <!--nav bar-->

      <RouterLink to="/"> <img src="/src/assets/imagens/logo.png" alt="logo" class="logo-img">
      </RouterLink>


      <ul class="nav-menu">
        <li class="nav-item">
          <router-link to="/" class="nav-link">HOME</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link to="/cars" class="nav-link">CARROS</router-link>
        </li> -->
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">CONTATO</router-link>
        </li>

      </ul>

      <!--elementos header-->

      <div class="elementos">
        <div class="search-container-Desk">
          <input class="search" type="text" placeholder="Search...">
          <i class="fas fa-search search-icon"></i>
        </div>


        <div class="favorite-icon">

          <router-link to="/favorite" class="favorite-icon"><i class="fas fa-heart"></i></router-link>

        </div>


        <button @click="btnlogin" class="btn"><router-link to="/login"
            class="nav-link-login">LOGIN</router-link></button>
      </div>


    </div>

    <!--nav de baixo-->

    <div :class="['nav-2', { transparent: isTransparent }]">
      <!--pesquisa-->
      <div class="search-container-Mob">
        <input class="search" type="text" placeholder="Search...">
        <i class="fas fa-search search-icon"></i>
      </div>
    </div>
  </header>

</template>

<style scoped>
/*header fixo*/

header {
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  z-index: 1000;
}

/*nav de cima*/

.nav-1 {
  display: flex;
  align-items: center;
  background-color: #000;
  height: 50px;
  padding: 40px;
  transition: 1s;

}

/*logo*/

.logo-img {
  color: #fff;
  width: 90px;
  height: 90px;
}

/*botão*/

.btn {
  display: flex;
  align-items: center;
  justify-content: center; /* Centraliza o texto no botão */
  font-weight: bold;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 5px;
  width: 90px;
  height: 30px;
  transition: 0.3s;
}

.btn:hover {
  background-color: #acabab;
}


.elementos {
  display: flex;
  margin-left: auto;
  align-items: center;
  gap: 20px;
}

/* barra de pesquisa */

.search-container-Desk {
  position: relative;
  width: 300px;
  display: flex;
  align-items: center; /* Centraliza o ícone verticalmente */
}

.search {
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  padding-left: 35px;
  box-sizing: border-box;
  transition: 0.3s;
}

.search-icon {
  position: absolute;
  left: 10px;
  top: 50%; /* Alinha o ícone verticalmente */
  transform: translateY(-50%);
  color: #888;
  pointer-events: none;
}

.search:hover {
  background-color: #f1f1f1;
}

/*icon de favoritos*/

.favorite-icon {
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
}

.favorite-icon:hover {
  color: rgb(212, 4, 4);
}

/*nav de baixo*/

.nav-2 {
  background-color: #292828;
  padding: 10px;
  transition: 0.3s;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 3rem;
  justify-content: center;
  margin-left: 120px;
  margin-top: 2vh;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  position: relative;
  padding: 3px;

}

.nav-link-login {
  color: #000000;
  text-decoration: none;
  position: relative;
  padding: 3px;

}

/* afeter e hover*/

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  background-color: #ffffff;
  bottom: 0;
  left: 0;
  transition: width 0.3s ease-in-out;
}

.nav-link:hover::after {
  width: 100%;
}

/*nav lateral hambuguer*/

.bar {
  display: block;
  width: 25px;
  height: 3px;
  border-radius: 2px;
  margin: 5px auto;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
}

/*hamburguer*/

.hamburguer {
  display: none;
  cursor: pointer;
}

.nav-menu-lateral.active {
  left: 0
}

/* nav bar*/

.nav-link-mobile {
  text-decoration: none;
  color: #ffffff;
  transition: 0.3s;
}


.nav-item-mobile {
  margin-top: 50px;
}

.logo-img-lateral {
  width: 80px;
  height: 80px;
  display: flex;
}


.nav-menu-lateral i {
  position: absolute;
  top: 20px;
  right: 30px;
  cursor: pointer;
  color: rgb(255, 255, 255);
}

.nav-menu-lateral ul {
  list-style: none;
}

.nav-menu-lateral {
  position: fixed;
  left: -100%;
  top: 70px;
  background-color: #000000;
  text-align: center;
  width: 90%;
  height: 100%;
  transition: 0.7s;
  z-index: 1000;
  top: 0;
  height: 100vh;

}

/*responsividade*/

@media (max-width: 1200px) {


  .search-container-Desk {
    display: none;
  }

  .nav-menu {
    display: none;
  }

  .search-container-Mob {
    max-width: 500px;
    margin: 0 auto;
    position: relative;
  }

  .hamburguer {
    display: block;
  }

  .nav-1 {
    height: 30px;
  }

  .btn {
    padding: 2px;
    width: 80px;
  }

  .logo-img {
    margin-left: 10px;
    width: 70px;
    height: 70px;
  }

}

/*desktop*/

@media (min-width: 1201px) {

  .search-container-Mob {
    display: none;
  }

  .nav-2 {
    display: none
  }

  .nav-menu-lateral {
    display: none;
  }

}

</style>
