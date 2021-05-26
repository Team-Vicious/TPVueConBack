<template>
  <div class="productos">
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
import NavBar from '@/components/NavBar.vue';
import Instrumentos from '@/components/Instrumentos.vue';
export default {
  name: 'Productos',
  components: {
    NavBar,
    Instrumentos
  },
  //mounted es como un constructor, cuando se intancie va a llamar a getInstrumentos
  mounted() {
    this.getInstrumentos();
  },
  data() {
    return {
      instrumData: []
    };
  },
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

   