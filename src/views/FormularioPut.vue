<template>
  <div >
    <b-form v-on:submit.prevent="editar">
      <b-form-group
        id="input-group-1"  label="instrumento"  label-for="input-1"      >
        <b-form-input
          id="input-1"
          v-model="form.instrument"      
         
          placeholder="Ingrese el nombre del instrumento"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="marca" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.marca"
          placeholder="Ingrese la marca"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"  label="modelo"  label-for="input-3"      >
        <b-form-input
          id="input-3"
          v-model="form.modelo"      
         
          placeholder="Ingrese el modelo del instrumento"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-4"  label="precio"  label-for="input-4"      >
        <b-form-input
          id="input-4"
          v-model="form.precio"      
         
          placeholder="Ingrese el precio del instrumento"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-5"  label="costoEnvio"  label-for="input-5"      >
        <b-form-input
          id="input-5"
          v-model="form.costoEnvio"      
         
          placeholder="Ingrese el costo de Envio del instrumento"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-6"  label="cantidadVendida"  label-for="input-6"      >
        <b-form-input
          id="input-6"
          v-model="form.cantidadVendida"      
         
          placeholder="Ingrese la cantidad Vendida del instrumento"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-7"  label="descripcion"  label-for="input-7"      >
        <b-form-input
          id="input-7"
          v-model="form.descripcion"      
         
          placeholder="Ingrese una descripcion del instrumento"
        ></b-form-input>
      </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
    form:{
      id:"",
       instrument:'',
          marca:'',
          modelo:'',
          precio:'',
          cantidadVendida:'',
          costoEnvio:'',
          descripcion:'',
    }
      
    };
  },
  methods: {
  
   
      editar(){

              alert("Instrumento creado, por favor redirijase al productos");
         axios.post('http://localhost:8080/api/instrumento'+this.form.id,this.form)
           .then((res) =>{
              console.log(res)
           })
          },

  },
  
}
  


</script>
