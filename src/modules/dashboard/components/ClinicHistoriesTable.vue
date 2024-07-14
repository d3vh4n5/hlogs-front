<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { API_URL } from '../../../constants/apiURL'
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner.vue'
import { deleteClinicHistory } from '../services/clinicHistoryServices'

const clinicHistories = ref(null)

const loadTable = async () => {
    try {
        const resp = await axios.get(API_URL + '/clinic-histories/user-clinic-history')
        clinicHistories.value = resp.data
    } catch (error) {
        
    }
}

onMounted(()=>{ loadTable() })

</script>
<template>
    <div>
        <RouterLink 
            to="/dashboard/clinic-history/create-clinic-history"
            class="btn btn-primary" >+ Agregar historia clínica</RouterLink>
        <table class="table ">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>ultima visita</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="clinicHistory in clinicHistories">
                    <td>{{ clinicHistory.name }}</td>
                    <td>Fecha</td>
                    <td>
                        <RouterLink 
                            :to="`/dashboard/clinic-history/${clinicHistory.id}`" 
                            class="btn btn-primary">Ver</RouterLink>
                        <RouterLink
                            :to="`/dashboard/clinic-history/edit?id=${clinicHistory.id}`" 
                            class="btn btn-warning">Editar</RouterLink>
                        <button 
                            @click="deleteClinicHistory(
                                clinicHistory.id, 
                                loadTable
                            )"
                            class="btn btn-danger"
                            >Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>