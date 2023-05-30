<template>
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <h2>Editar Producto</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <form @submit="onSubmit">

              <div class="form-group row">
                <label for="codigo" class="col-sm-2 col-form-label">Código</label>
                <div class="col-sm-6">
                  <input type="text" name="codigo" id="codigo" placeholder="Código" class="form-control" v-model.trim="form.codigo">
                </div>
              </div>

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

              <div class="form-group row">
                <label for="precio" class="col-sm-2 col-form-label">Precio</label>
                <div class="col-sm-6">
                  <input type="number" name="precio" id="precio" placeholder="Precio" class="form-control" v-model.trim="form.precio">
                </div>
              </div>

              <div class="form-group row">
                <label for="stock" class="col-sm-2 col-form-label">Stock</label>
                <div class="col-sm-6">
                  <input type="number" name="stock" id="stock" placeholder="Stock" class="form-control" v-model.trim="form.stock">
                </div>
              </div>

              <div class="form-group row">
                <label for="proveedor" class="col-sm-2 col-form-label">Proveedor</label>
                <div class="col-sm-6">
                  <select name="proveedor" id="proveedor" class="form-control" v-model="form.proveedor">
                    <option value="" disabled selected>Seleccionar proveedor</option>
                    <option v-for="proveedor in proveedores" :key="proveedor.id" :value="proveedor.id">
                      {{ proveedor.nombre }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="form-group row">
                <label for="categoria" class="col-sm-2 col-form-label">Categoría</label>
                <div class="col-sm-6">
                  <select name="categoria" id="categoria" class="form-control" v-model="form.categoria">
                    <option value="" disabled selected>Seleccionar categoría</option>
                    <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.id">
                      {{ categoria.nombre }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="rows">
                <div class="col text-left">
                  <button type="submit" class="btn btn-primary">Guardar</button>
                  <router-link to="/producto" class="btn btn-secondary">Cancelar</router-link>
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
        codigo: '',
        nombre: '',
        descripcion: '',
        precio: 0,
        stock: 0,
        proveedor: null,
        categoria: null
      },
      proveedores: [],
      categorias: []
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();

      const productoId = this.$route.params.productoId;
      const path = `http://127.0.0.1:8000/api/v1.0/productos/${productoId}/`;
      axios
        .put(path, this.form)
        .then(response => {
          swal('Producto actualizado exitosamente!', '', 'success').then(() => {
            this.$router.push({ path: '/producto' });
          });
        })
        .catch(error => {
          console.log('Error: ', error);
          swal('No se pudo actualizar el producto', '', 'error');
        });
    },
    getProductoData() {
      const productoId = this.$route.params.productoId;
      const path = `http://127.0.0.1:8000/api/v1.0/productos/${productoId}/`;
      axios
        .get(path)
        .then(response => {
          this.form.codigo = response.data.codigo;
          this.form.nombre = response.data.nombre;
          this.form.descripcion = response.data.descripcion;
          this.form.precio = response.data.precio;
          this.form.stock = response.data.stock;
          this.form.proveedor = response.data.proveedor.id;
          this.form.categoria = response.data.categoria.id;
        })
        .catch(error => {
          console.log('Error: ', error);
          swal('No se pudo obtener la información del producto', '', 'error');
        });
    },
    getProveedores() {
      const path = 'http://127.0.0.1:8000/api/v1.0/proveedores/';
      axios
        .get(path)
        .then(response => {
          this.proveedores = response.data;
        })
        .catch(error => {
          console.log('Error: ', error);
          swal('No se pudo obtener la lista de proveedores', '', 'error');
        });
    },
    getCategorias() {
      const path = 'http://127.0.0.1:8000/api/v1.0/categorias/';
      axios
        .get(path)
        .then(response => {
          this.categorias = response.data;
        })
        .catch(error => {
          console.log('Error: ', error);
          swal('No se pudo obtener la lista de categorías', '', 'error');
        });
    }
  },
  created() {
    this.getProductoData();
    this.getProveedores();
    this.getCategorias();
  }
};
</script>

<style scoped>
/* Estilos CSS específicos para esta vista */
</style>
