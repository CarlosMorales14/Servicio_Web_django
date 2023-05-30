
<template lang="html">

  <div class="container">
    <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item>Inicio</b-nav-item>

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Opciones" right>
          <b-dropdown-item :to="{name: 'ListProductos'}">Productos</b-dropdown-item>
          <b-dropdown-item :to="{name: 'ListCategoria'}">Categorias</b-dropdown-item>
          <b-dropdown-item :to="{name: 'ListCliente'}">Clientes</b-dropdown-item>
          <b-dropdown-item :to="{name: 'ListProveedores'}">Proveedores</b-dropdown-item>
          <b-dropdown-item :to="{name: 'ListVenta'}">Ventas</b-dropdown-item>
          <b-dropdown-item :to="{name: 'ListDetalle'}">Detalle Ventas</b-dropdown-item>

        </b-nav-item-dropdown>

      </b-navbar-nav>
    </b-navbar>
  </div>
    <div class="row">
      <div class="col text-left">
        <div class="d-flex justify-content-between align-items-center">
          <h2>Listado de Productos</h2>
          <b-button size="sm" :to="{ name: 'CreateProducto' }" variant="success">Agregar un nuevo producto</b-button>
        </div>
        <br><br>
        <div class="col-md-20">
          <b-table striped hover :items="productos" :fields="fields">
            <template v-slot:cell(action)="data">
              <div class="d-flex justify-content-start">

                <b-button size="sm" variant="primary" :to="{ name: 'EditProductos', params: { productoId: data.item.id } }">Editar</b-button>
                <b-button size="sm" variant="danger" class="ml-2" :to="{ name: 'DeleteProducto', params: { productoId: data.item.id } }">Eliminar</b-button>
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
import { BNavbar, BNavbarNav, BNavItem, BNavItemDropdown, BDropdownItem } from 'bootstrap-vue';

export default {
  data() {
    return {
      fields: [
        { key: 'codigo', label: 'Código' },
        { key: 'nombre', label: 'Nombre' },
        { key: 'descripcion', label: 'Descripción' },
        { key: 'precio', label: 'Precio' },
        { key: 'stock', label: 'Stock' },
        { key: 'proveedor', label: 'Proveedor' },
        { key: 'categoria', label: 'Categoría' },
        { key: 'action', label: 'Acción' },
      ],
      productos: [],
    };
  },
  methods: {
    getProductos() {
      axios.get('http://127.0.0.1:8000/api/v1.0/productos/')
        .then((response) => {
          this.productos = response.data;
        })
        .catch((error) => {
          console.log('Error: ', error);
        });
    },
  },
  created() {
    this.getProductos();
  },
  components: {
    BNavbar,
    BNavbarNav,
    BNavItem,
    BNavItemDropdown,
    BDropdownItem,
  },
};
</script>

<style lang="css" scoped>
/* Estilos personalizados si es necesario */
</style>
