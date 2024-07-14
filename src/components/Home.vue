<script setup>
import HeaderComponent from './HeaderComponent.vue'
</script>
<template>
    <section class="d-flex flex-column">
        <HeaderComponent />
        <div class="container d-flex flex-column align-items-center justify-content-center">
            <h1 class="mb-5">Sistema de Gestión de Historias Clínicas</h1>
            <img
                class="w-50"
            src="https://sesmi.es/wp-content/uploads/2019/04/Logotipo-Medicina-tradiconal-china-215x200.jpg" alt="">
        </div>
    </section>
</template>
<style scoped>
section {
    height: 100vh;
}
.container{
    flex: 1;
}
</style>