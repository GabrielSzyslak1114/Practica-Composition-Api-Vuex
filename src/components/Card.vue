<template>
  <div class="card mb-2">
      <div class="card-body">
          <h5 class="text-center">{{index + 1}} - {{pais.name}}</h5>
          <div class="box-image">
              <img :src="pais.flag" :alt="`bandera:${pais.name}`" class="img-fluid w-50">
          </div>
          <div class="card-text">
          <span class="badge badge-dark d-block mb-1">Población: {{numeroF(pais.population)}}</span><br/>
          <span class="badge badge-dark d-block mb-1">Nombre nativo: {{pais.nativeName}}</span><br/>
            <span class="badge badge-dark d-block mb-1">Capital: {{pais.capital}}</span><br/>
          <span class="badge badge-dark d-block mb-1">Región: {{pais.region}}</span>
     
          </div>
 </div>
  </div>
</template>

<script>
export default {
    props: ['pais', 'index'],
    setup(props){
        //fORMATEAR VALOR = separar los numeros con .
        const numeroF = (num)=> new Intl.NumberFormat("de-DE").format(num)
        return{numeroF}
    }
}
</script>

<style>

</style>