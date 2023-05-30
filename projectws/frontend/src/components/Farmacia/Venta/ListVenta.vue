<template>
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <div class="d-flex justify-content-between align-items-center">
          <h2>Listado de Ventas</h2>
          <b-button size="sm" :to="{ name: 'CreateVenta' }" variant="success">Agregar una nueva venta</b-button>
        </div>
        <br><br>
        <div class="col-md-20">
          <b-table striped hover :items="ventas" :fields="fields">}
           <!-- <template v-slot:cell(cliente)="data">
              {{ getNombreCliente(data.item.cliente) }}
            </template>-->
            <template v-slot:cell(action)="data">
              <div class="d-flex justify-content-start">
                <b-button size="sm" variant="primary" :to="{ name: 'EditVenta', params: { ventaId: data.item.id } }">Editar</b-button>
                <b-button size="sm" variant="danger" class="ml-2" :to="{ name: 'DeleteVenta', params: { ventaId: data.item.id } }">Eliminar</b-button>
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
        { key: 'cliente', label: 'Cliente' },
        { key: 'fecha', label: 'Fecha' },
        { key: 'total', label: 'Total' },
        { key: 'action', label: 'Acción' },
      ],
      ventas: [],
    };
  },
  methods: {
    getVentas() {
      axios.get('http://127.0.0.1:8000/api/v1.0/ventas/')
        .then((response) => {
          this.ventas = response.data;
        })
        .catch((error) => {
          console.log('Error: ', error);
        });
    },
    getNombreCliente(clienteId) {
      // Realizar una solicitud adicional para obtener los detalles del cliente
      console.log(clienteId)
      axios.get(`http://127.0.0.1:8000/api/v1.0/clientes/${clienteId}/`)
        .then((response) => {
        console.log(response.data.nombre)
        var x = response.data.nombre
        return x

        })
        .catch((error) => {
          console.log('Error: ', error);
        });
    },
  },
  created() {
    this.getVentas();
  },
};
</script>

<style lang="css" scoped>
/* Estilos personalizados si es necesario */
</style>
