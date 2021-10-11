<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <FormLogin /> -->
   <BuscadorServicio />
   <Contacto />
   
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import FormLogin from "@/components/FormLogin.vue";
import BuscadorServicio from "@/components/BuscadorServicio.vue";
import Contacto from "@/components/Contac.vue";
import Menu from "@/components/Menu.vue";

export default {
  name: 'home',
  components: {
    FormLogin,
    BuscadorServicio,
    Menu,
    Contacto,
  }
}
</script>
<style >

</style>
