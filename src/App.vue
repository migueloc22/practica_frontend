<template>
  <div id="app">
           <Menu id="nav"/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <!-- <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/" >Link</b-nav-item>
            <b-nav-item to="/about">Disabled</b-nav-item>
          </b-navbar-nav>         
        </b-collapse>
      </b-navbar>
    </div> -->
    <router-view/>
  </div>
</template>
<script>

import Menu from "@/components/Menu.vue";
export default {  
  components: {
    Menu
  },
  created: function () {
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch(logout)
        }
        throw err;
      });
    });
  }
}
</script>

<style>

</style>
