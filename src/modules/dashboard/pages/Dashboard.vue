<script setup>
import { RouterLink } from 'vue-router';
import Callout from '../components/Callout.vue'
import session from '../../../utils/session';

const userName = session.userName
</script>

<template>
    <div class="p-3">
        <article>

            <h1 class="mb-5">Sistema de Gestión de Historias Clínicas</h1>
            <p class="mb-5">Bienvenido {{ userName }}</p>
            <h5>
                En este dashboard encontrará todo lo necesario para utilizar la aplicación
            </h5>
            <hr>
            <h3>Historia clínica</h3>
            <p>
                Dentro de la historia Clinía podrá encontrar su historia cargada, 
                tendrá la posibilidad de crear una nueva en caso de no tener ninguna 
                o de editar la ya existente.
            </p>
            
        </article>
        <h2 class="mb-4">Novedades:</h2>
        <Callout type="info">
            <p>
                <b>Advertencia:</b> Aplicacion en desarrollo. En caso de error en las peticiones, 
                sugerimos reintentar las acciones varias veces, ya que nos hemos encontrado 
                con "<b>problemas de servidor</b>" en ocaciones, siendo el código es correcto. 
                Esto probablemente sea porque el backend es un servidor de pruebas que 
                está en Francia, lo cual cause lentitud y errores en las solicitudes.
            </p>
        </Callout>
    </div>
</template>