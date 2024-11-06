<script>

</script>



<template>
  <div class="background">
    <RouterLink to="/">
      <button class="back"><i class="fas fa-arrow-left"></i></button>
    </RouterLink>

    <div class="form">
      <h1 class="title">FALE CONOSCO!</h1>

      <div class="input-group">
        <i class="fas fa-user icon"></i>
        <input type="text" name="name" placeholder="Nome:" />
      </div>

      <div class="input-group">
        <i class="fas fa-envelope icon"></i>
        <input type="email" name="email" placeholder="Email:" />
      </div>

      <div class="input-group">
        <i class="fas fa-tag icon"></i>
        <input type="text" name="tile" placeholder="Assunto:" />
      </div>

      <div class="input-group">

        <textarea name="text" placeholder="Fale aqui!"></textarea>
      </div>

      <button class="btn-enviar">ENVIAR</button>
    </div>
  </div>
</template>

<style scoped>
.background {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #000000, #4a1f66);
  width: 100vw;
  height: 100vh;
  position: relative;
}

.back {
  width: 60px;
  height: 60px;
  border: none;
  color: #000000;
  background-color: #fff;
  border-radius: 50px;
  position: absolute;
  top: 20px;
  left: 20px;
  transition: 0.3s;
}

.back:hover {
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
}

i {
  font-size: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 500px;
  padding: 30px;
  border-radius: 10px;
  gap: 15px;
}

.input-group {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #dfdcdc;
  border-radius: 10px;
  padding: 10px;
}

.input-group:hover {
  background-color: #bebebe;
}

.icon {
  color: #888;
  margin-right: 10px;
}

input, textarea {
  width: 100%;
  border: none;
  background: none;
  color: #000000;
  outline: none;
  font-size: 16px;
}


textarea {
  height: 100px;
  resize: none;
}

.title {
  font-size: 25px;
  margin-bottom: 20px;
}

.btn-enviar {
  background-color: #4a1f66;
  border: none;
  color: #fff;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  transition: 0.3s;
}

.btn-enviar:hover {
  background-color: #210335;
}
</style>
