<template>
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <h2>Editar usuario</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <form @submit="onSubmit">

              <div class="form-group row">
                <label for="nombre" class="col-sm-2 col-form-label">Nombre</label>
                <div class="col-sm-6">
                  <input type="text" name="nombre" id="nombre" placeholder="Nombre" class="form-control" v-model.trim="form.nombre">
                </div>
              </div>

              <div class="form-group row">
                <label for="direccion" class="col-sm-2 col-form-label">Dirección</label>
                <div class="col-sm-6">
                  <input type="text" name="direccion" id="direccion" placeholder="Dirección" class="form-control" v-model.trim="form.direccion">
                </div>
              </div>

              <div class="form-group row">
                <label for="telefono" class="col-sm-2 col-form-label">Teléfono</label>
                <div class="col-sm-6">
                  <input type="text" name="telefono" id="telefono" placeholder="Teléfono" class="form-control" v-model.trim="form.telefono">
                </div>
              </div>

              <div class="form-group row">
                <label for="email" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-6">
                  <input type="email" name="email" id="email" placeholder="Email" class="form-control" v-model.trim="form.email">
                </div>
              </div>

              <div class="rows">
                <div class="col text-left">
                  <b-button type="submit" variant="primary">Guardar</b-button>
                  <b-button type="submit" class="btn-large-space" :to="{ name: 'ListCliente' }">Cancelar</b-button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';

export default {
  data() {
    return {
      form: {
        nombre: '',
        direccion: '',
        telefono: '',
        email: ''
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();

      const userId = this.$route.params.clienteId;
      const path = `http://127.0.0.1:8000/api/v1.0/clientes/${userId}/`;
      axios
        .put(path, this.form)
        .then(response => {
          swal('Usuario actualizado exitosamente!', '', 'success').then(() => {
            this.$router.push({ name: 'ListCliente' });
          });
        })
        .catch(error => {
          console.log('Error: ', error);
          swal('No se pudo actualizar el usuario', '', 'error');
        });
    },
    getUserData() {

      const userId = this.$route.params.clienteId;
      console.log('userid: '+userId)
      const path = `http://127.0.0.1:8000/api/v1.0/clientes/${userId}/`;
      axios
        .get(path)
        .then(response => {
          this.form.nombre = response.data.nombre;
          this.form.direccion = response.data.direccion;
          this.form.telefono = response.data.telefono;
          this.form.email = response.data.email;
        })
        .catch(error => {
          console.log('Error: ', error);
          swal('No se pudo obtener la información del usuario', '', 'error');
        });
    }
  },
  created() {
    this.getUserData();
  }
};
</script>

<style lang="css" scoped>
/* Estilos CSS específicos para esta vista */
</style>
