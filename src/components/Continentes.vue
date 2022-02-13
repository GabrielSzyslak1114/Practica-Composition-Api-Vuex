<template>
    <div class="filtro-container">
        <h2> Continentes</h2>
        <div class="group-filtro">
            <button @click="filtrar('Americas')" class="button-filter">AM</button>
            <button @click="filtrar('Europe')" class="button-filter">EU</button>
            <button @click="filtrar('Asia')" class="button-filter">AS</button>
            <button @click="filtrar('Oceania')" class="button-filter">OC</button>
            <button @click="filtrar('Africa')" class="button-filter">AF</button>
            <button @click="filtrar('')" class="button-filter">Todos</button>
        </div>  
    </div>
</template>

<script>
import {useStore} from 'vuex'
export default {
setup(){
    const store = useStore()
    const filtrar = (region)=> store.dispatch('filtrarRegion', region)  
    
    return{filtrar}
}

}
</script>

<style>
.filtro-container{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 90%;

    padding: 5px;
    margin: 0 auto;
}

.group-filter{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    height: 100%;
}

.button-filter{
    padding: 5px 20px;
    width: 90px;
    margin: 0 1px;
    transition: 0.3s ;
    background: #26d7dd;
    border: none;
    border-radius: 1px;
    color: #fcfcfc;

}

.button-filter:hover{
    background: #23c1c7;
    transform: translateY(-5px);
}

h2{
    color: #1a1717;
}
</style>