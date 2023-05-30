<template>
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <div class="d-flex justify-content-between align-items-center">
          <h2>Listado de Detalles de Venta</h2>
          <b-button size="sm" :to="{ name: 'CreateDetalleVenta' }" variant="success">Agregar un nuevo detalle de venta</b-button>
        </div>
        <br><br>
        <div class="col-md-20">
          <b-table striped hover :items="detallesVenta" :fields="fields">
            <template v-slot:cell(action)="data">
              <div class="d-flex justify-content-start">
                <b-button size="sm" variant="primary" :to="{ name: 'EditDetalleVenta', params: { detalleVentaId: data.item.id } }">Editar</b-button>
                <b-button size="sm" variant="danger" class="ml-2" :to="{ name: 'DeleteDetalleVenta', params: { detalleVentaId: data.item.id } }">Eliminar</b-button>
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
        { key: 'venta.fecha', label: 'Fecha de Venta' },
        { key: 'producto.nombre', label: 'Producto' },
        { key: 'cantidad', label: 'Cantidad' },
        { key: 'subtotal', label: 'Subtotal' },
        { key: 'action', label: 'Acción' },
      ],
      detallesVenta: [],
    };
  },
  methods: {
    getDetallesVenta() {
      axios.get('http://127.0.0.1:8000/api/v1.0/detalles-venta/')
        .then((response) => {
          this.detallesVenta = response.data;
        })
        .catch((error) => {
          console.log('Error: ', error);
        });
    },
  },
  created() {
    this.getDetallesVenta();
  },
};
</script>

<style lang="css" scoped>
/* Estilos personalizados si es necesario */
</style>
