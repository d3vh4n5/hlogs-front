<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios'
import Swal from 'sweetalert2'
import { API_URL } from '../../../constants/apiURL.js'
import Callout from './Callout.vue'
import LoadingSpinner from './LoadingSpinner.vue'

const router = useRouter()

const form = ref({})
const loading = ref(false)

// const handleChange = (e) => {
//     form.value = {
//         ...form.value,
//         [e.target.name]: e.target.value
//     }
// }
// const handleCheckbox = (e) => {
//     form.value = {
//         ...form.value,
//         [e.target.name]: e.target.checked
//     }

//     console.log(form.value)
// }

const handleSubmit = async () => {
    try {
        loading.value = true
        const resp = await axios.post(API_URL + '/clinic-histories', { ...form.value })
        
        console.log({ resp })
        
        Swal.fire({
            text: "Historia Clinica creada correctamente",
            icon: "success",
            toast: true,
            position: 'bottom',
            timer: 3000,
            showConfirmButton: false
        });
        setTimeout(()=>{
            loading.value = false
            router.push('/pages/dashboard/clinic-history')
        }, 3000)
    } catch (error) {
        console.error(error)

        if (error.response.status === 422) {
            const errors = error.response.data.issues
            errors.forEach(err => {
                console.warn(`${err.path} invalid value`)
            })
            Swal.fire({
                title: "Validation Error",
                text: "Compruebe por favor que los datos requeridos estén correctos y completos.",
                icon: "error"
            });
        } else {
            Swal.fire({
                title: "Error",
                text: "Hubo un problema en el servidor.",
                icon: "error"
            });
        }
        loading.value = false
    }
}

</script>
<template>
    <form @submit.prevent="handleSubmit">
        <pre>
            {{ form }}
        </pre>
        <fieldset class="border rounded mb-3 card ">
            <legend class="card-header text-bg-primary">
                <h3 class="form-titulo">Datos Personales</h3>
            </legend>
            <div class="card-body">

                <div class="row g3">
                    <div class="col-md-6">
                        <label for="inputNombre" class="form-label">Nombre y apellido</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="name" 
                            name="name"
                            v-model="form.name"
                            required
                            > 
                    </div>
                
                    
    
                    <div class="col-md-3">
                        <label for="inputFechaNacimiento" class="form-label">Fecha de Nacimiento</label>
                        <input 
                            @change="handleChange"
                            type="date" 
                            id="dateOfBirth" 
                            class="form-control" 
                            name="dateOfBirth"
                            required>
                        
                    </div>
    
                    <div class="col">
                        <label for="inputSexo" class="form-label">Sexo</label>
                        <select 
                            @change="handleChange"
                            id="gender"
                            name="gender" 
                            class="form-select"
                            required>
                        <option disabled selected>Sexo</option>
                        <option>Femenino</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Binario">Binario</option>
                        <option value="Prefiere No indicarlo">Prefiere No indicarlo</option>                      
                        </select>
                    </div>
                </div>
                <br>
                <div class="row g4">
                    <div class="col-md-3">
                        <label for="inputEstadoCivil" class="form-label">Estado Civil</label>
                        <select 
                            @change="handleChange"
                            id="maritalStatus" 
                            name="maritalStatus" 
                            class="form-select"
                            required>
                        <option disabled selected>Estado civil</option>
                        <option>Soltero/a</option>
                        <option>Casado/a</option>
                        <option>Divorciado/a</option>
                        <option>Viudo/a</option>
                        <option>Vínculo de hecho</option>
                        <option>Separado/a</option>        
                        </select>
                    </div>               
    
                    <div class="col-md-3">
                        <label for="inputPeso" class="form-label">Peso</label>
                        <input 
                            @change="handleChange"
                            type="number" 
                            class="form-control" 
                            id="weight" 
                            name="weight" 
                            required>
                    </div>
    
                    <div class="col-md-3">
                        <label for="inputAltura" class="form-label">Altura</label>
                        <input 
                            @change="handleChange"
                            type="number" 
                            class="form-control" 
                            id="height" 
                            name="height"
                            required>
                    </div>                                   
                
                    <div class="col-md-3">
                        <label for="inputGrupoSanguineo" class="form-label">Grupo Sanguíneo</label>
                        <select 
                            @change="handleChange"
                            id="bloodType" 
                            name="bloodType" 
                            class="form-select"
                            required>
                        <option value="" selected>Grupo Sanguíneo</option>
                        <option>A RH+</option>
                        <option>A RH-</option>
                        <option>B RH+</option>
                        <option>B RH-</option>
                        <option>AB RH+</option>
                        <option>AB RH-</option>
                        <option>O+</option>
                        <option>O-</option>
                        </select>
                    </div>
                </div>
            </div>
        </fieldset>

        <fieldset class="border rounded mb-3 card">
            <legend class="card-header">
                <h3 class="form-titulo">Datos Clínicos</h3>
            </legend>
            <div class="card-body">

                <div class="container text">
                    <div class="row align-items-start">
                        <div class="col">
                            <h4>Antecedentes Familiares</h4> 
                            <div class="form-check">
                                <input 
                                    @input="handleCheckbox"
                                    class="form-check-input" 
                                    type="checkbox" 
                                    id="hypertension" 
                                    name="hypertension">
                                <label class="form-check-label" for="flexCheckHipertension">
                                Hipertensión
                                </label>
                            </div>
                            <div class="form-check">
                                <input 
                                    @input="handleCheckbox"
                                    class="form-check-input" 
                                    type="checkbox" 
                                    id="diabetes" 
                                    name="diabetes">
                                <label class="form-check-label" for="flexCheckDiabetes">
                                Diabetes
                                </label>
                            </div>
                            <div class="form-check">
                                <input 
                                    @input="handleCheckbox"
                                    class="form-check-input" 
                                    type="checkbox" 
                                    id="asthma" 
                                    name="asthma">
                                <label class="form-check-label" for="flexCheckAsma">
                                Asma
                                </label>
                            </div>
                            <div class="form-check">
                                <input 
                                    @input="handleCheckbox"
                                    class="form-check-input" 
                                    type="checkbox" 
                                    id="allergies" 
                                    name="allergies">
                                <label class="form-check-label" for="flexCheckAlergias">
                                Alergias
                                </label>
                            </div>
                            <div class="form-check">
                                <input 
                                    @input="handleCheckbox"
                                    class="form-check-input" 
                                    type="checkbox" 
                                    id="heartFailure" 
                                    name="heartFailure">
                                <label class="form-check-label" for="flexCheckCorazon">
                                Insuficiencia Cardíaca
                                </label>
                            </div>
                                                
                        </div>
                        <div class="col">
                            <h4>Consumos Problemáticos</h4>  
                            <div class="form-check">
                                <input 
                                    @input="handleCheckbox"
                                    class="form-check-input" 
                                    type="checkbox"  
                                    id="tobacco" 
                                    name="tobacco">
                                <label class="form-check-label" for="flexCheckTabaco">
                                Tabaco
                                </label>
                            </div>
                            <div class="form-check">
                                <input 
                                    @input="handleCheckbox" 
                                    class="form-check-input" 
                                    type="checkbox" 
                                    id="alcohol" 
                                    name="alcohol">
                                <label class="form-check-label" for="flexCheckAlcohol">
                                Alcohol
                                </label>
                            </div>
                            <div class="form-check">
                                <input 
                                    @input="handleCheckbox" 
                                    class="form-check-input" 
                                    type="checkbox" 
                                    id="dope" 
                                    name="dope">
                                <label class="form-check-label" for="flexCheckMarihuana">
                                Marihuana
                                </label>
                            </div>
                            <div class="form-check">
                                <input 
                                    @input="handleCheckbox" 
                                    class="form-check-input" 
                                    type="checkbox" 
                                    id="cocaine" 
                                    name="cocaine">
                                <label class="form-check-label" for="flexCheckCocaina">
                                Cocaína
                                </label>
                            </div>                        
                            <div class="form-check">
                                <input 
                                    @input="handleCheckbox" 
                                    class="form-check-input" 
                                    type="checkbox" 
                                    id="otherDrugs" 
                                    name="otherDrugs">
                                <label class="form-check-label" for="flexCheckOtras">
                                Otras Drogas Peligrosas
                                </label>
                            </div> 
                        </div>
                    </div>
                </div>            
            </div>
        </fieldset>
            
            
        <div class="mb-2 d-flex gap-3">
            <button class="btn btn-success col-md-2" type="submit" >
                <span v-if="!loading">Registrar</span>
                <LoadingSpinner  v-else />
            </button>
            <input class="btn btn-warning col-md-2" type="reset" value="Resetear">
            <br>               
        </div>
    </form>   
</template>