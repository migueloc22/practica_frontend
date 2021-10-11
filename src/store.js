import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import { error } from 'util';
import VueAlertify from 'vue-alertify';
//se tuvo intalar el puxion de axios
Vue.use(Vuex, axios,VueAlertify)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {},
    repuesta:'2',
    test: 'TEs 123...',
    urlApi:'http://127.0.0.1:8000/api/',
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      },
    datoDepartamento: {},
    datoCiudad : {},
    datoTpDocumento : {}

  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token, user){
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    },
    SET_POST(state, dato) {
      state.datoDepartamento = dato

    },
    get_ciudad(state, dato){
       state.datoCiudad = dato
    },
    get_tp_documento(state, dato){
      state.datoTpDocumento = dato
    } 
  },
  actions: {
    Postsuario({ commit }, valor){
      //console.log(valor);
        axios
        .post(this.state.urlApi+"usuario",valor)
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        })
    },
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: 'http://127.0.0.1:8000/api/login', data: user, method: 'POST' })
          .then(resp => {
            const token = resp.data.token
            const user = resp.data.user
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    logout({commit}){
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    },
    PostLogin({ commit }, valor){
      axios.post(this.state.urlApi+"login",valor)
      .then(res=>{
        console.log(res);
      })
      .catch(error=>{console.log(error)});
    },
    ServicioCiudad({ commit }, valor) {   
  
      axios
        .get(this.state.urlApi+"ciudad/"+valor.valor)
        .then(res => {
          let dato = res.data.data;
           commit('get_ciudad', dato)
        })
        .catch(error => {
          console.log(error);
        })
    },
    ServicioTipoDocumento({ commit }){
        axios.get(this.state.urlApi+"tipoDocumento")
        .then(res => {
          let dato = res.data.data;
          commit('get_tp_documento',dato);
        })
        .catch(error => {
            console.log(error);
        })
    },
    ServicePost({ commit }, valor) {
      console.log(valor)
      axios
        .get(this.state.urlApi+"departamento")
        .then(res => {
          let dato = res.data;
          // for (let index of dato){
          //   console.log(index.ciudad+'1')
          // }
          commit('SET_POST', dato)
        })
        .catch(error => {
          console.log(error);
        })
    }

  },
  getters : {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  }
})
