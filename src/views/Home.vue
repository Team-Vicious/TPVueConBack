<template>
  <div class="home">
    <b-jumbotron  >  
   
      <b-container fluid>
        <h1>Musical Hendrix</h1>
        <p>
          Es una tienda de instrumentos musicales con ya más de 15 años de
          experiencia.
        </p>
        <p>
          Tenemos el conocimiento y la capacidad como para informarte acerca de
          las mejores elecciones para tu compra musical.
        </p>
        <b-button variant="success" href="/productos"
          >conoce nuestros productos</b-button
        >
        <br>
        <b-img src="/images/local.jpg" fluid alt="Responsive image"></b-img>
      </b-container>
    </b-jumbotron>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Home",
  components: {
    NavBar,
  },
};
</script>
