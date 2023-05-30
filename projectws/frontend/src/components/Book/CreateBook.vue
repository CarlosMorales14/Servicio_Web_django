<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <h2>Agregar libro</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <form @submit="onSubmit">

              <div class="form-group row">
                <label for="titulo" class="col-sm-2 col-form-label">Titulo</label>
                <div class="col-sm-6">
                  <input type="text" name="titulo" id="titulo" placeholder="Título" class="form-control" v-model.trim="form.nombre">
                </div>
              </div>

              <div class="form-group row">
                <label for="autor" class="col-sm-2 col-form-label">Autor</label>
                <div class="col-sm-6">
                  <input type="text" name="autor" id="autor" placeholder="Autor" class="form-control" v-model.trim="form.autor">
                </div>
              </div>

              <div class="form-group row">
                <label for="editorial" class="col-sm-2 col-form-label">Editorial</label>
                <div class="col-sm-6">
                  <input type="text" name="editorial" id="editorial" placeholder="Editorial" class="form-control" v-model.trim="form.editorial">
                </div>
              </div>

              <div class="form-group row">
                <label for="descripcion" class="col-sm-2 col-form-label">Descripción</label>
                <div class="col-sm-6">
                  <textarea name="descripcion" id="descripcion" class="form-control" placeholder="Descripción" rows="3" v-model.trim="form.descripcion"></textarea>
                </div>
              </div>

              <div class="form-group row">
                <label for="stock" class="col-sm-2 col-form-label">Unidaes disponibles</label>
                <div class="col-sm-6">
                  <input type="number" name="stock" id="stock" placeholder="Unidades" class="form-control" v-model.trim="form.stock">
                </div>
              </div>

              <div class="form-group row">
                <label for="precio" class="col-sm-2 col-form-label">Precio</label>
                <div class="col-sm-6">
                  <input type="number" name="precio" id="precio" placeholder="Precio" class="form-control" v-model.trim="form.precio" step="any">
                </div>
              </div>

              <div class="rows">
                <div class="col text-left">
                  <b-button type="submit" variant="primary">Agregar</b-button>
                  <b-button type="submit" class="btn-large-space" :to="{name: 'ListBook'}">Cancelar</b-button>
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
import axios from 'axios'
import swal from 'sweetalert'
export default{
  data(){
    return{
      form: {
        nombre:'',
        autor:'',
        editorial:'',
        descripcion:'',
        stock:'',
        precio:'',
      }
    }
  },
  methods:{
    onSubmit(evt){
      evt.preventDefault()

      const path = 'http://127.0.0.1:8000/api/v1.0/books/'
      axios.post(path,this.form).then((response)=>{

        this.form.nombre = response.data.nombre
        this.form.autor = response.data.autor
        this.form.editorial = response.data.editorial
        this.form.descripcion = response.data.descripcion
        this.form.stock = response.data.stock
        this.form.precio = response.data.precio
        swal("Libro agregado exitosamente!!!","","success").then((value) => {
          location.href = '/book';
        });
      }).catch((error)=>{
        console.log('Error: ',error)
        swal("No se pudo agregar el libro","","error")

      })
    },
  },
  created(){
  }
}
</script>

<style lang="css" scoped>

</style>
