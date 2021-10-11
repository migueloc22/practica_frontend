<template>
  <div class="shadow container bg-light">
    <h1 class="text-danger">Registro</h1>
    <b-form>
      <b-row>
        <b-col>
          <b-form-group label="Nombre Establecimiento: ">
            <b-form-input  v-model="dataForm.nombreEstable" type="text" require placeholder ='Nombre Establecimiento'></b-form-input>
          </b-form-group>
          <b-form-group label="Tel/Cel: ">
            <b-form-input  v-model="dataForm.tel" type="number" require placeholder = 'Tel/Cel'></b-form-input>
          </b-form-group>
          <b-form-group label="Correo: ">
            <b-form-input  v-model="dataForm.correo" type="email" require placeholder='Correo'></b-form-input>
          </b-form-group>
          <b-button variant="outline-primary" @click="prueba" >Registrar </b-button>
        </b-col>
        <b-col>                      
            <b-form-group label="lat">
                <b-form-input  v-model="dataForm.lat" type="text" require="" placeholder=""></b-form-input>
            </b-form-group>
            <b-form-group label="lgn">
                <b-form-input  v-model="dataForm.lgn" type="text" require="" placeholder=""></b-form-input>
            </b-form-group>
          <mapa @nomHijo='nomPadre= $event' />
          
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>
<script>
import mapa from "@/components/mapa.vue";
export default {
  name: "rg_establecimiento",
  data() {
    return {
      nomPadre : '',
      dataForm:{
        nombreEstable:'',
        tel:'',
        correo:'',
        lat :'',
        lgn :''
      },
    }
  },
  methods: {
    prueba(){
       alert(this.nomPadre);
    },
  },
  components: {
    mapa
  }
};
</script>