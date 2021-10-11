<template>
  <div class="bg-cover">
    <b-jumbotron bg-variant="transparent" text-variant="white">
      <template slot="header">
        <h1 class="text-center text-danger">Munarca</h1>
      </template>

      <template slot="lead">
          <p class="text-center">Buscar Tu mejor serviciod de mantenimiento de celular y pc, con la mejor calidad y a mejor precio </p> 
      </template>
    </b-jumbotron>
    <div class="fondo">
      <b-card bg-variant="transparent" class="text-center">
        <b-form>
          <b-input-group>
            <b-form-input placeholder="Ciudad"></b-form-input>
            <b-form-input placeholder="Servicios"></b-form-input>
            
              
          </b-input-group>
          <br>
          <b-button block variant="outline-danger full">Buscar</b-button>
        </b-form>
      </b-card>
    </div>
    
    <br>
    <br>
  </div>
</template>
<script>
export default {
  name: "BuscadorServicio"
};
</script>
<style>
.fondo {
    margin: 0 auto;
    width: 40%;
  background-color: rgba(255, 255, 255, 0.329);
  border-radius: 5px;
}
.bg-cover {
  background-image: url("../assets/fondoBuscar.jpg");
}
.bg-cover {
  background-size: cover;
  /* color: white; */
  background-position: center center;
  position: relative;
  /* z-index: -2; */
}
</style>