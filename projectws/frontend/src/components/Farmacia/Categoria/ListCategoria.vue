<template>
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <div class="d-flex justify-content-between align-items-center">
          <h2>Listado de Categorías</h2>
          <b-button size="sm" :to="{ name: 'CreateCategoria' }" variant="success">Agregar una nueva categoría</b-button>
        </div>
        <br><br>
        <div class="col-md-20">
          <b-table striped hover :items="categorias" :fields="fields">
            <template v-slot:cell(action)="data">
              <div class="d-flex justify-content-start">
                <b-button size="sm" variant="primary" :to="{ name: 'EditCategoria', params: { categoriaId: data.item.id } }">Editar</b-button>
                <b-button size="sm" variant="danger" class="ml-2" :to="{ name: 'DeleteCategoria', params: { categoriaId: data.item.id } }">Eliminar</b-button>
              </div>
            </template>
          </b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      fields: [
        { key: 'nombre', label: 'Nombre' },
        { key: 'descripcion', label: 'Descripción' },
        { key: 'action', label: 'Acción' },
      ],
      categorias: [],
    };
  },
  methods: {
    getCategorias() {
      axios.get('http://127.0.0.1:8000/api/v1.0/categorias/')
        .then((response) => {
          this.categorias = response.data;
        })
        .catch((error) => {
          console.log('Error: ', error);
        });
    },
  },
  created() {
    this.getCategorias();
  },
};
</script>

<style lang="css" scoped>
/* Estilos personalizados si es necesario */
</style>
