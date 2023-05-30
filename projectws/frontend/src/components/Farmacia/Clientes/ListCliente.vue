<template>
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <div class="d-flex justify-content-between align-items-center">
          <h2>Listado de Clientes</h2>
          <b-button size="sm" :to="{ name: 'CreateCliente' }" variant="success">Agregar un nuevo cliente</b-button>
        </div>
        <br><br>
        <div class="col-md-20">
          <b-table striped hover :items="clientes" :fields="fields">
            <template v-slot:cell(action)="data">
              <div class="d-flex justify-content-start">
                <b-button size="sm" variant="primary" :to="{ name: 'EditCliente', params: { clienteId: data.item.id } }">Editar</b-button>
                <b-button size="sm" variant="danger" class="ml-2" :to="{ name: 'DeleteCliente', params: { clienteId: data.item.id } }">Eliminar</b-button>
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
      clientes: [],
    };
  },
  methods: {
    getClientes() {
      axios.get('http://127.0.0.1:8000/api/v1.0/clientes/')
        .then((response) => {
          this.clientes = response.data;
        })
        .catch((error) => {
          console.log('Error: ', error);
        });
    },
  },
  created() {
    this.getClientes();
  },
};
</script>

<style lang="css" scoped>
/* Estilos personalizados si es necesario */
</style>
