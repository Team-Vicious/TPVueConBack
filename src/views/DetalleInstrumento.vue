<template>
 
    <b-container >
      <b-row>
        <b-col>
          <img 
            
            :src="'/images/' + instrumentoEncontrado.imagen"/>
            <b-row >
                <b-col >
                    <h2 class="minAltoImg" >Descripción</h2>
                    <h1 style="fontSize:15px"  >{{instrumentoEncontrado.descripcion}}</h1>
                </b-col>
            </b-row>  
             <b-row>
            <b-col
              ><b-button href="/productos" variant="primary"
                >VOLVER</b-button
              ></b-col>
          </b-row>   
        </b-col>
        <b-col>
          <br>
          <b-row>
            <b-col><h2 style="fontSize:15px">{{ instrumentoEncontrado.cantidadVendida }} Vendidos</h2></b-col>
          </b-row>
          <b-row>
            <b-col><h1>{{ instrumentoEncontrado.instrumento }}</h1></b-col>
          </b-row>
          <b-row>
            <b-col><h1 style="color:grey">$ {{ instrumentoEncontrado.precio }}</h1></b-col>
          </b-row>
          <b-row>
            <b-col><h2 style="fontSize:15px">Marca: {{ instrumentoEncontrado.marca }}</h2></b-col>
          </b-row>
          <b-row>
            <b-col><h2 style="fontSize:15px">Modelo: {{ instrumentoEncontrado.modelo }}</h2></b-col>
          </b-row>
            <b-row>
                <b-col><h1 style="fontSize:20px">Costo de envío:</h1>

                <div v-if="instrumentoEncontrado.costoEnvio == 'G'" style="color:green">
          Envio gratis a todo el pais</div>
        <div v-else style="color:red"> Envio: $ {{ instrumentoEncontrado.costoEnvio }}</div>
                </b-col>
            </b-row>      
         
        </b-col>
      </b-row>
    </b-container>
  
</template>


<script>
export default {
  name: "DetalleInstrumento",
  components: {},
  mounted() {
    this.getInstrumentoXId();
  },
  data() {
    return {
      instrumentoEncontrado: []
    };
    
  },
  methods: {
    async getInstrumentoXId() {
      const parametroId = this.$route.params.id;
      const res = await fetch("http://localhost:8080/api/instrumento"+ parametroId);
      const resJson = await res.json();
      console.log(resJson);
      this.instrumentoEncontrado = resJson
      console.log(this.instrumentoEncontrado);
    }
  }
};
</script>


<style scoped>
.minAltoImg{
  font-family:Helvetica;

} 
</style>