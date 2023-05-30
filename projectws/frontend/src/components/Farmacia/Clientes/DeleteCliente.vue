<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title">¿Estás seguro de que quieres eliminar este cliente?</h2>

            <p>Nombre: {{ this.element.nombre }}</p>
            <div class="row">
              <div class="col">
                <b-button variant="danger" @click="deleteClient">Eliminar</b-button>
                <b-button type="submit" class="btn-large-space" :to="{ name: 'ListCliente' }">Cancelar</b-button>
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
        clienteId: this.$route.params.clienteId,
        element:{
          nombre: '',
        }
      }
    },
    methods: {
      getCliente(){
      var  x = this.clienteId
      console.log(x)
      const path = 'http://127.0.0.1:8000/api/v1.0/clientes/'+x.toString()+'/'
      axios.get(path).then((response)=>{
        this.element.nombre = response.data.nombre
      }).catch((error)=>{
        console.log('Error: ',error)
      })
    },
    deleteClient(){
      var  x = this.clienteId
      const path = 'http://127.0.0.1:8000/api/v1.0/clientes/'+x.toString()+'/'
      axios.delete(path).then((response)=>{
        swal("Cliente eliminado exitosamente!!!","","success").then((value) => {
          location.href = '/cliente';
        });
      }).catch((error)=>{
        swal.alert("No es posible eliminar el cliente","","error")
      })
    }

    },
    created() {
      this.getCliente()
    }
  }
  </script>

  <style lang="css" scoped>

  </style>


