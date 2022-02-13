<template>
    <input type="text"
    placeholder="ingrese pais"
    v-model="texto" @keyup="procesarInput" class="form form-control">
</template>

<script>
import {ref} from 'vue'
import {useStore} from 'vuex'

export default {
    setup(){
        const store = useStore()
        const texto = ref('')
        const procesarInput = ()=> store.dispatch('filtrarNombre', texto.value)
        return{texto, procesarInput}
    }
}
</script>
