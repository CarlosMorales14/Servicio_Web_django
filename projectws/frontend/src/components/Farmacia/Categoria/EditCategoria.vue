<template>
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <h2>Editar Categoría</h2>
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
                <label for="descripcion" class="col-sm-2 col-form-label">Descripción</label>
                <div class="col-sm-6">
                  <textarea name="descripcion" id="descripcion" placeholder="Descripción" class="form-control" v-model.trim="form.descripcion"></textarea>
                </div>
              </div>

              <div class="rows">
                <div class="col text-left">
                  <button type="submit" class="btn btn-primary">Guardar</button>
                  <router-link to="/categoria" class="btn btn-secondary">Cancelar</router-link>
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
        descripcion: ''
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();

      const categoriaId = this.$route.params.categoriaId;
      const path = `http://127.0.0.1:8000/api/v1.0/categorias/${categoriaId}/`;
      axios
        .put(path, this.form)
        .then(response => {
          swal('Categoría actualizada exitosamente!', '', 'success').then(() => {
            this.$router.push({ path: '/categoria' });
          });
        })
        .catch(error => {
          console.log('Error: ', error);
          swal('No se pudo actualizar la categoría', '', 'error');
        });
    },
    getCategoriaData() {
      const categoriaId = this.$route.params.categoriaId;
      const path = `http://127.0.0.1:8000/api/v1.0/categorias/${categoriaId}/`;
      axios
        .get(path)
        .then(response => {
          this.form.nombre = response.data.nombre;
          this.form.descripcion = response.data.descripcion;
        })
        .catch(error => {
          console.log('Error: ', error);
          swal('No se pudo obtener la información de la categoría', '', 'error');
        });
    }
  },
  created() {
    this.getCategoriaData();
  }
};
</script>

<style scoped>
/* Estilos CSS específicos para esta vista */
</style>
