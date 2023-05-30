<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
          <h2 class="card-title">¿Estas seguro que quieres eliminar este proveedor?</h2>

          <p>Titulo: {{ this.element.nombre }}</p>
          <div class="row">
            <div class="col">
              <b-button variant="danger" @click="deleteProveedor">Eliminar</b-button>
              <b-button type="submit" class="btn-large-space" :to="{name: 'ListProveedores'}">Cancelar</b-button>

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
        proveedorId: this.$route.params.proveedorId,
        element:{
          nombre: '',
          descripcion: '',
        }
      }
    },
    methods: {
      getProveedor(){
      var  x = this.proveedorId
      const path = 'http://127.0.0.1:8000/api/v1.0/proveedores/'+x.toString()+'/'
      axios.get(path).then((response)=>{
        this.element.nombre = response.data.nombre
      }).catch((error)=>{
        console.log('Error: ',error)
      })
    },
    deleteProveedor(){
      var  x = this.proveedorId
      const path = 'http://127.0.0.1:8000/api/v1.0/proveedores/'+x.toString()+'/'
      axios.delete(path).then((response)=>{
        swal("Proveedor eliminado exitosamente!!!","","success").then((value) => {
          location.href = '/proveedor';
        });
      }).catch((error)=>{
        swal.alert("No es posible eliminar el Proveedor","","error")
      })
    }

    },
    created() {
      this.getProveedor()
    }
  }
  </script>

  <style lang="css" scoped>

  </style>
