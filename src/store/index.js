import { createStore } from 'vuex'

export default createStore({
  state: {
    paises: [],
    paisesFilter: []

  },
  mutations: {
    setPaises(state, payload){
      state.paises = payload
    },
    setPaisesFilter(state, payload){
      state.paisesFilter = payload
    }

  },
  actions: {
    async getPaises({commit}){
      try{
        const res = await fetch('api.json');
        const paises = await res.json()
        commit('setPaises', paises)
        //console.log(paises)
      }catch(error){
        console.log('no consumio', error)
      }

    },
    filtrarRegion({commit, state}, region){
      //Filter va a retornar todos los pais.region que sean igual === a region 
      const filtro = state.paises.filter(pais => pais.region.includes(region))
      commit('setPaisesFilter', filtro)
    },
    filtrarNombre({commit,state}, texto){
      const textoCliente = texto.toLowerCase()
      const filtro = state.paises.filter(pais=>{
      const textoApi = pais.name.toLowerCase()
      if(textoApi.includes(textoCliente)){
        return pais
      }
      })
      commit('setPaisesFilter', filtro)
    }

  },
  getters: {
    topPaisesPoblacion(state){
      return state.paisesFilter.sort((a, b)=> a.population < b.population ? 1 : -1)
    }
  },
  modules: {
  }
})
