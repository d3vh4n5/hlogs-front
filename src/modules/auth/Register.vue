<script setup>
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import axios from 'axios';
import { API_URL} from '../../constants/apiURL'

const router = useRouter()

const name = ref('')
const email = ref('')
const password = ref('')

const handleSubmit = async () => {
    try {
        const resp = await axios.post(API_URL + '/auth/register', 
            JSON.stringify({
                name: name.value,
                email: email.value,
                password: password.value
            })
        )

        if (resp.status >= 200 && resp.status < 300){
            alert("Te registraste correctamente!")
        } else {
            alert("No se pudo registrar")
        }
    } catch (error) {
        console.error(error)
        alert("Hubo un error")
    }
}

</script>
<template>
    <section class="bg-light d-flex align-items-center p-3">
        <div class="col-12 col-md-6 col-lg-3 mx-auto">
            <form @submit.prevent="handleSubmit" class="bg-white p-3 rounded-3 shadow-sm">
                <h1 class="text-center my-5">Register</h1>
                <div class="mb-3">
                    <div class="form-label">Nombre</div>
                    <input type="text" class="form-control" v-model="name">
                </div>
                <div class="mb-3">
                    <div class="form-label">
                        Email
                    </div>
                    <input type="email" class="form-control" v-model="email">
                </div>
                <div class="mb-3">
                    <div class="form-label">Contraseña</div>
                    <input type="password" class="form-control" v-model="password">
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">
                        Acepto los <a href="#">Términos y condiciones</a>.
                    </label>
                </div>
                <button class="btn btn-primary w-100 my-4">Entrar</button>
                <RouterLink to="/auth/login">Login</RouterLink>
                <br>
                <RouterLink to="/">Home</RouterLink>
            </form>
        </div>
    </section>
</template>
<style scoped>
section{
    min-height: 100vh;
}
</style>