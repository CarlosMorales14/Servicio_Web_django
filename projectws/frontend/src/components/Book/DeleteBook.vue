<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
          <h2 class="card-title">¿Estas seguro que quieres eliminar este libro?</h2>

          <p>Titulo: {{ this.element.nombre }}</p>
          <p>Descripción: {{ this.element.descripcion }}</p>
          <div class="row">
            <div class="col">
              <b-button variant="danger" @click="deleteBook">Eliminar</b-button>
              <b-button type="submit" class="btn-large-space" :to="{name: 'ListBook'}">Cancelar</b-button>

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
        bookId: this.$route.params.bookId,
        element:{
          nombre: '',
          descripcion: '',
        }
      }
    },
    methods: {
      getBook(){
      var  x = this.bookId
      const path = 'http://127.0.0.1:8000/api/v1.0/books/'+x.toString()+'/'
      axios.get(path).then((response)=>{
        this.element.nombre = response.data.nombre
        this.element.descripcion = response.data.descripcion
      }).catch((error)=>{
        console.log('Error: ',error)
      })
    },
    deleteBook(){
      var  x = this.bookId
      const path = 'http://127.0.0.1:8000/api/v1.0/books/'+x.toString()+'/'
      axios.delete(path).then((response)=>{
        swal("Libro eliminado exitosamente!!!","","success").then((value) => {
          location.href = '/book';
        });
      }).catch((error)=>{
        swal.alert("No es posible eliminar el libro","","error")
      })
    }

    },
    created() {
      this.getBook()
    }
  }
  </script>

  <style lang="css" scoped>

  </style>
