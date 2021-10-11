<template>
  <div>
    <h1 class="text-center text-danger">Registro</h1>

    <div class="container bg-light">
      <h3 class="text-warning">Datos Personales</h3>
      <b-form @submit="onSubmit" @reset="onReset">
        <b-row>
          <b-col>
            <b-form-group label="Nombres :" label-for="input-2">
              <b-form-input v-model="form.nombre" required="required" placeholder="Nombres"></b-form-input>
            </b-form-group>
            <b-form-group label="Apellidos :" label-for="input-2">
              <b-form-input v-model="form.apellido" required="required" placeholder="Apellidos"></b-form-input>
            </b-form-group>
            <b-form-group label="Tipo Documento :" label-for="input-2">
              <b-form-select v-model="form.tp_documento">
                <option selected :value="null">Selección..</option>
                <option
                  v-for="(item,index) in datoTpDocumento"
                  :key="index.id"
                  :value="item.id "
                >{{item.tp_documento}}</option>
              </b-form-select>
              <b-form-group label="Numero Documento :" label-for="input-2">
                <b-form-input
                  v-model="form.num_documento"
                  required="required"
                  placeholder="Numero Documento"
                ></b-form-input>
              </b-form-group>
            </b-form-group>
            <b-form-group label="Departamento :" label-for="input-2">
              <b-form-select v-model="selectedValue" @change="cargarCiudad(selectedValue)">
                <option :selected="true" :value="null">Selección..</option>
                <option
                  v-for="(item,index) in datoDepartamento"
                  :key="index.id"
                  :value="{ number: item.id }"
                >{{item.name}}</option>
              </b-form-select>
            </b-form-group>
            <b-form-group label="Ciudad :" label-for="input-2">
              <b-form-select v-model="form.ciudad">
                <option selected :value="null">Selección..</option>
                <option
                  v-for="(item,index) in datoCiudad"
                  :key="index.id"
                  :value=" item.id "
                >{{item.name}}</option>
              </b-form-select>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="Correo : " label-for="input-2">
              <b-form-input v-model="form.correo" required="required" placeholder="Correo"></b-form-input>
            </b-form-group>
            <b-form-group label="Genero : " label-for="input-2">
              <b-form-select v-model="form.genero" :options="arrayGenero"></b-form-select>
            </b-form-group>
            <b-form-group label="Telefono :" label-for="input-2">
              <b-form-input v-model="form.telefono" required="required" placeholder="Telefono"></b-form-input>
            </b-form-group>
            <b-form-group label="Fecha nacimiento :" label-for="input-2">
              <b-form-input
                v-model="form.fecha_nac"
                required="required"
                type="date"
                placeholder="Fecha nacimiento"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Dirección :" label-for="input-2">
              <b-form-input v-model="form.dir" required="required" placeholder="Dirección"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="Contraseña:" label-for="input-2">
              <b-form-input
                v-model="form.contrasena"
                required="required"
                type="password"
                placeholder="Contraseña:"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Confirmar Contraseña:" label-for="input-2">
              <b-form-input required="required" type="password" placeholder="Confirmar Contraseña"></b-form-input>
            </b-form-group>
            <b-button-group>
              <b-button type="submit" variant="outline-danger">Guardar</b-button>
              <b-button type="reset" variant="outline-secondary">Cancelar</b-button>
            </b-button-group>
          </b-col>
        </b-row>
      </b-form>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "formRegisterUser",
  data() {
    return {
      selectedValue: [],
      form: {
        nombre: "",
        apellido: "",
        tp_documento: "",
        num_documento: "",
        ciudad: "",
        correo: "",
        genero: "",
        telefono: "",
        fecha_nac: "",
        dir: "",
        contrasena: "",
        tipo_usuario: "2"
      },
      arrayGenero: [
        { value: null, text: "Seleccion..." },
        { value: "Masculino", text: "Masculino" },
        { value: "Femenino", text: "Femenino" }
      ]
    };
  },
  methods: {
    cargarCiudad(e) {
      console.log(this.selectedValue.number);
      let valor = this.selectedValue.number;
      this.$store.dispatch("ServicioCiudad", { p: "halo", valor: valor });
    },
    onSubmit(evt) {
      evt.preventDefault();
      // alert(JSON.stringify(this.form));
      this.$store.dispatch("Postsuario", this.form);
    },
    onReset() {}
  },
  mounted() {
    this.$store.dispatch("ServicePost", { p: "halo" });
    this.$store.dispatch("ServicioTipoDocumento");
  },
  computed: {
    ...mapState(["datoDepartamento", "datoCiudad", "datoTpDocumento"])
  }
};
</script>