<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <!-- <a class="navbar-brand" href="#">Navbar</a> -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink to="/" class="nav-link" active-class="active">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/about" class="nav-link" active-class="active">About</RouterLink>
                    </li>
                    <li class="nav-item">
                    </li>
                </ul>
            </div>
            <RouterLink to="/auth/login" class="btn btn-primary" active-class="active">Login</RouterLink>
        </div>
    </nav>  
</template>