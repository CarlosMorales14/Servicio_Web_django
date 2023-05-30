<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title">¿Estás seguro de que quieres eliminar este producto?</h2>

            <p>Nombre: {{ this.element.nombre }}</p>
          <p>Descripción: {{ this.element.descripcion }}</p>
            <div class="row">
              <div class="col">
                <b-button variant="danger" @click="deleteProducto">Eliminar</b-button>
                <b-button type="submit" class="btn-large-space" :to="{ name: 'ListProductos' }">Cancelar</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import swal from 'sweetalert'

  export default{
    data(){
      return{
        productoId: this.$route.params.productoId,
        element:{
          nombre: '',
        }
      }
    },
    methods: {
      getProducto(){
      var  x = this.productoId
      console.log(x)
      const path = 'http://127.0.0.1:8000/api/v1.0/productos/'+x.toString()+'/'
      axios.get(path).then((response)=>{
        this.element.nombre = response.data.nombre
        this.element.descripcion = response.data.descripcion
      }).catch((error)=>{
        console.log('Error: ',error)
      })
    },
    deleteProducto(){
      var  x = this.productoId
      const path = 'http://127.0.0.1:8000/api/v1.0/productos/'+x.toString()+'/'
      axios.delete(path).then((response)=>{
        swal("Producto eliminado exitosamente!!!","","success").then((value) => {
          location.href = '/cliente';
        });
      }).catch((error)=>{
        swal.alert("No es posible eliminar el producto","","error")
      })
    }

    },
    created() {
      this.getProducto()
    }
  }
  </script>

  <style lang="css" scoped>

  </style>


