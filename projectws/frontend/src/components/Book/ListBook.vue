<template lang="html">
<div class="container">
  <div class="row">
    <div class="col text-left">
      <div class="d-flex justify-content-between align-items-center" >
      <h2>Listado de libros</h2>
      <b-button size="sm" :to="{name:'CreateBook'}" variant="success">Agregar un nuevo libro</b-button>
    </div>
    <br><br>
      <div class="col-md-20">
        <b-table striped hover :items="books" :fields="fields">
          <template v-slot:cell(action)="data">
            <div class="d-flex justify-content-start">
              <b-button size="sm" variant="primary" :to="{name:'EditBook', params: {bookId: data.item.id}}">Editar</b-button>
              <b-button size="sm" variant="danger" class="ml-2" :to="{name:'DeleteBook', params: {bookId: data.item.id}}">Eliminar</b-button>
            </div>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import axios from 'axios'
export default{
  data(){
    return{
      fields:[
        {key: 'nombre', label: 'Titulo'},
        {key: 'autor', label: 'Autor'},
        {key: 'editorial', label: 'Editorial'},
        {key: 'descripcion', label: 'Descripción'},
        {key: 'stock', label: 'Unidades disponibles'},
        {key: 'precio', label: 'Precio'},
        {key: 'action', label: 'Accion'},
      ],
      books: [],
    }
  },
  methods: {
    getBooks(){
      axios.get('http://127.0.0.1:8000/api/v1.0/books/').then((response) =>{
        this.books = response.data
      }).catch((error)=>{
        console.log('error: ',error)
      })
    }
  },
  created() {
    this.getBooks()
  }
}
</script>

<style lang="css" scoped>

</style>
