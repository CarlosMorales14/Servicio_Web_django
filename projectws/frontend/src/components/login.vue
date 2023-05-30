<template>
  <section class="text-center text-lg-start">
    <div class="card mb-3">
      <div class="row g-0 d-flex align-items-center">
        <div class="col-lg-4 d-none d-lg-flex">
          <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" alt="Trendy Pants and Shoes"
            class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
        </div>
        <div class="col-lg-8">
          <div class="card-body py-5 px-md-5">

            <form @submit="login">
              <!-- Email input -->
              <div class="form-outline mb-4">
                <input type="email" id="email" class="form-control" v-model="email" />
                <label class="form-label" for="email">Email address</label>
              </div>

              <!-- Password input -->
              <div class="form-outline mb-4">
                <input type="password" id="password" class="form-control" v-model="password" />
                <label class="form-label" for="password">Password</label>
              </div>

              <!-- 2 column grid layout for inline styling -->
              <div class="row mb-4">
                <div class="col d-flex justify-content-center">
                  <!-- Checkbox -->
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="rememberMe" checked />
                    <label class="form-check-label" for="rememberMe"> Remember me </label>
                  </div>
                </div>

                <div class="col">
                  <!-- Simple link -->
                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              <!-- Submit button -->
              <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

            </form>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },

  methods: {
    login() {
      // Obtén los valores de correo electrónico y contraseña del componente
      const email = 'adrian@gmail.com';
      const password = '1234';

      // Realiza la solicitud POST al endpoint de autenticación en Django
      axios.post('http://127.0.0.1:8000/api/v1.0/login', { email, password })
        .then(response => {
          // La solicitud fue exitosa, puedes manejar la respuesta aquí
          console.log(response.message);
        })
        .catch(error => {
          // Hubo un error en la solicitud, puedes manejarlo aquí
          console.error(error);
        });
    }
  }
}
</script>
