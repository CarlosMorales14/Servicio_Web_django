<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
          <h2 class="card-title">¿Estas seguro que quieres eliminar esta categoria?</h2>

          <p>Titulo: {{ this.element.nombre }}</p>
          <div class="row">
            <div class="col">
              <b-button variant="danger" @click="deleteCategoria">Eliminar</b-button>
              <b-button type="submit" class="btn-large-space" :to="{name: 'ListCategoria'}">Cancelar</b-button>

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
        categoriaId: this.$route.params.categoriaId,
        element:{
          nombre: '',
          descripcion: '',
        }
      }
    },
    methods: {
      getCategoria(){
      var  x = this.categoriaId
      const path = 'http://127.0.0.1:8000/api/v1.0/categorias/'+x.toString()+'/'
      axios.get(path).then((response)=>{
        this.element.nombre = response.data.nombre
      }).catch((error)=>{
        console.log('Error: ',error)
      })
    },
    deleteCategoria(){
      var  x = this.categoriaId
      const path = 'http://127.0.0.1:8000/api/v1.0/categorias/'+x.toString()+'/'
      axios.delete(path).then((response)=>{
        swal("Categoria eliminado exitosamente!!!","","success").then((value) => {
          location.href = '/categoria';
        });
      }).catch((error)=>{
        swal.alert("No es posible eliminar la categoria","","error")
      })
    }

    },
    created() {
      this.getCategoria()
    }
  }
  </script>

  <style lang="css" scoped>

  </style>
