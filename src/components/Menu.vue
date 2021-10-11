<template>
  <div>
    <b-modal id="modal-1" hide-footer title="Iniciar Sesión">
      <!-- <p class="my-4">Hello from modal!</p> -->
      <FormLogin/>
    </b-modal>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <h3 class="text-danger">Munarca</h3>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!-- <b-nav-item v-if="isLoggedIn" href="#">Link</b-nav-item>
          <b-nav-item v-if="isLoggedIn" href="#" disabled>Disabled</b-nav-item> -->
           <b-nav-item-dropdown v-if="isLoggedIn" text="Usuario" right>
            <b-dropdown-item  to="/registroUser">Registro de usuario</b-dropdown-item>
          </b-nav-item-dropdown>
           <b-nav-item-dropdown v-if="isLoggedIn" text="Establecimiento" right>
            <b-dropdown-item to="/registroEstablecimiento">Registro de Establecimiento</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form v-if="!isLoggedIn">
            <b-form-input size="sm" class="mr-sm-2" placeholder="Buscar Negocio"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
          </b-nav-form>

          <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>-->

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content">
              <em>Usuario</em>
            </template>
            <b-dropdown-item v-if="!isLoggedIn" v-b-modal.modal-1>Iniciar Sesión</b-dropdown-item>
            <b-dropdown-item v-if="!isLoggedIn" to="/registroUser">Registrar</b-dropdown-item>
            <b-dropdown-item v-if="isLoggedIn">
              <a @click="logout">Logout</a>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import FormLogin from "./FormLogin.vue";
export default {
  name: "Menu",
  components: {
    FormLogin
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout: function() {
      let timerInterval;
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/");
        Vue.swal({
          title: "Auto close alert!",
          html: "I will close in <strong></strong> seconds.",
          timer: 2000,
          onBeforeOpen: () => {
            Swal.showLoading();
            timerInterval = setInterval(() => {
              Swal.getContent().querySelector(
                "strong"
              ).textContent = Swal.getTimerLeft();
            }, 100);
          },
          onClose: () => {
            clearInterval(timerInterval);
          }
        }).then(result => {
          if (
            // Read more about handling dismissals
            result.dismiss === Swal.DismissReason.timer
          ) {
            console.log("I was closed by the timer");
          }
        });
      });
    }
  }
};
</script>