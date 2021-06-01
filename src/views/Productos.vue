<template>
  <div class="productos">
    <br>
    <b-button href="/crear" variant="success"
                >CREAR PRODUCTO</b-button>
    <b-container fluid>
      <b-card-group deck>
        <div
          v-for="instrum in instrumData"
         
          :key="instrum.id"
          style="margin-top:10px"
        >
          <Instrumentos :instrumentoParam="instrum"></Instrumentos>
        </div>
      </b-card-group>
    </b-container>
  </div>

</template>


<script>

import Instrumentos from '@/components/Instrumentos.vue';
export default {
  name: 'Productos',
  components: {  
    Instrumentos
  },
  //mounted es como un constructor, cuando se intancie va a llamar a getInstrumentos
  mounted() {
    this.getInstrumentos();
  },
  //la funcion data siempre retorna un array, en este caso son los instrumentos
  data() {
    return {
      instrumData: []
    };
  },
  //aca se hace tb un array de metodos
  methods: {
    async getInstrumentos() {
      const res = await fetch("http://localhost:8080/api/instrumento");
      const resJson = await res.json();
      console.log(resJson);
      //instrumData es el objeto donde voy a almacenar el Json de instrumentos
      this.instrumData = resJson;
    }

    
  }
};
</script>

   