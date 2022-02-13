<template>
  <div class="row">
      <div class="col-12" 
       v-for="(pais, index) in paises" :key="index" >
          <Card :index="index" :pais="pais"/>
      </div>
  </div>
</template>

<script>
import {useStore} from 'vuex';
import {computed, onMounted} from 'vue'
import Card from './Card.vue';
export default {
  components: { Card },
    setup(){
        const store = useStore()
        const paises = computed(()=> store.getters.topPaisesPoblacion)
        onMounted(async() => {
           await store.dispatch('getPaises')
           await store.dispatch('filtrarRegion', 'Americas')

        })
           
        return{paises}
    }
}
</script>

<style>

</style>