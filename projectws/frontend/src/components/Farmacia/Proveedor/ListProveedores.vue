<template>
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <div class="d-flex justify-content-between align-items-center">
          <h2>Listado de Proveedores</h2>
          <b-button size="sm" :to="{ name: 'CreateProveedor' }" variant="success">Agregar un nuevo proveedor</b-button>
        </div>
        <br><br>
        <div class="col-md-20">
          <b-table striped hover :items="proveedores" :fields="fields">
            <template v-slot:cell(action)="data">
              <div class="d-flex justify-content-start">
                <b-button size="sm" variant="primary" :to="{ name: 'EditProveedor', params: { proveedorId: data.item.id } }">Editar</b-button>
                <b-button size="sm" variant="danger" class="ml-2" :to="{ name: 'DeleteProveedor', params: { proveedorId: data.item.id } }">Eliminar</b-button>
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
        { key: 'direccion', label: 'Dirección' },
        { key: 'telefono', label: 'Teléfono' },
        { key: 'email', label: 'Email' },
        { key: 'action', label: 'Acción' },
      ],
      proveedores: [],
    };
  },
  methods: {
    getProveedores() {
      axios.get('http://127.0.0.1:8000/api/v1.0/proveedores/')
        .then((response) => {
          this.proveedores = response.data;
        })
        .catch((error) => {
          console.log('Error: ', error);
        });
    },
  },
  created() {
    this.getProveedores();
  },
};
</script>

<style lang="css" scoped>
/* Estilos personalizados si es necesario */
</style>
