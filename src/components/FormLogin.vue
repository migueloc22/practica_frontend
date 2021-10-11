<template>
  <div>
    <b-form @submit="login" @reset="onReset">
      <b-form-group id="input-group-2" label="Correo" label-for="input-2">
        <b-form-input required type="email" v-model="form.email" placeholder="Correo"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Contraseña:" label-for="input-2">
        <b-form-input required type="password" v-model="form.password" placeholder="Contraseña"></b-form-input>
      </b-form-group>
      <b-form-group>
        <router-link to="/registroUser">Registro</router-link>
      </b-form-group>
      <b-button-group>
        <b-button type="submit" variant="primary">Ingresar</b-button>
        <b-button type="reset" variant="danger">Limpiar</b-button>
      </b-button-group>
    </b-form>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
export default {
  name: "FormLogin",
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    // onSubmit() {
    //   axios
    //     .post(this.$store.state.urlApi + "login", this.form)
    //     .then(res => {
    //       console.log(res.data);
    //       let token = res.data.token;
    //       if (!token) {
    //         Vue.swal({
    //           position: "top-end",
    //           type: "error",
    //           title: "Usuario Invalido",
    //           showConfirmButton: false,
    //           timer: 1500
    //         });
    //       } else {
    //         let objSession = { token: token };
    //         localStorage.setItem("obsession", JSON.stringify(objSession));
    //         // this.$refs['modal-1'].hide();
            
    //         Vue.swal({
    //           position: "top-end",
    //           type: "success",
    //           title: "Usuario valido",
    //           showConfirmButton: false,
    //           timer: 1500
    //         });
    //         this.$root.$emit("bv::hide::modal", "modal-1", "#btnShow");
    //       }
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });

    //   console.log(this.$store.state.urlApi);
    // },

    login () {
        // let email = this.email 
        // let password = this.password
        var token;
        this.$store.dispatch('login', this.form)
       .then((res) => {
         //  this.$router.push('/')
               console.log(res.data.token);               
               token = res.data.token;
          if (!token) {
            Vue.swal({
              position: "top-end",
              type: "error",
              title: "Usuario Invalido",
              showConfirmButton: false,
              timer: 1500
            });
          } else {            
            Vue.swal({
              position: "top-end",
              type: "success",
              title: "Usuario valido",
              showConfirmButton: false,
              timer: 1500
            });
            this.$root.$emit("bv::hide::modal", "modal-1", "#btnShow");
            this.$router.push('comerciante');
          }


       })
       .catch(err => console.log(err))
      },
    onReset() {}
  }
  // computed: {
  //   ...mapState(['repuesta'])
  // }
};
</script>