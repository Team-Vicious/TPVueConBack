<template>
  <div >
    <b-form @onSubmit="onSubmmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Instrumento"
        label-for="instrumento"
      >
        <b-form-input
          id="instrumento"
          v-model="form.instrumento"
          type="text"
         
          placeholder="Ingrese el nombre del instrumento"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Marca" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.marca"
          placeholder="Ingrese la marca"
        ></b-form-input>
      </b-form-group>

      <b-button type="crear" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        instrumento: "",
        marca: "",

      },
    };
  },
  methods: {
      crear(){
          axios.post('http://localhost:8080/api/instrumento/crear-con-foto/',form)
          .then(data =>{
              console.log(data)
          })
      }
     
    
    //   axios
    //     .get('http://localhost:8080/api/instrumento/crear-con-foto/', {
    //       params: {
    //         action: "POST",
    //         body: form
    //       }
    //     })
    //     .then(res => res.json())
    //       .then(json => console.log(json));

    //       alert("Instrumento creado, por favor redirijase al productos");
      
    },
    // crear() {
    //   form.add({
    //     instrumento: (this.form.instrumento = ""),
    //     marca: (this.form.marca = ""),
    //     modelo: (this.form.modelo = ""),
    //     precio: (this.form.precio = ""),
      //});

      //   const res = await fetch('http://localhost:8080/api/instrumento/crear-con-foto/', {
      //         method: 'POST',
      //         body: form
      //     })
      //     .then(res => res.json())
      //     .then(json => console.log(json));

      //     alert("Instrumento creado, por favor redirijase al productos");
    
    //}
    // onSubmmit : (event) =>{
    //  event.preventDefault();},
    // // console.log(this.state);

    // const FormData = require('form-data');
    // const form = new FormData();

    // form.append('instrument', this.state.instrument);
    // form.append('marca', this.state.marca);
    // form.append('modelo', this.state.modelo);
    // form.append('precio', this.state.precio);
    // form.append('costoEnvio', this.state.costoEnvio);
    // form.append('cantidadVendida', this.state.cantidadVendida);
    // form.append('descripcion', this.state.descripcion);
    // form.append('archivo',  this.state.foto);
  
  onReset(event) {
    event.preventDefault();
    // Reset our form values
    this.form.instrumento = "";
    this.form.marca = "";
    this.form.modelo = "";
    this.form.precio = "";
    this.form.cantidadVendida = "";
    this.form.marca = "";
    this.form.costoEnvio = "";
    this.form.descripcion = "";
    this.form.imagen = null;
    
  
  }
    };
  


</script>
