<script setup>
import { onMounted, onUnmounted } from "vue";
//image
import capa from "@/assets/img/bg9.jpg";
//dep
import Typed from "typed.js";

//sections
import Info from "./Sections/Info.vue";
import Conteudos from "./Sections/Conteudos.vue";
import Registo from "./Sections/Registo.vue";

const body = document.getElementsByTagName("body")[0];
//hooks
onMounted(() => {
  body.classList.add("about-us");
  body.classList.add("bg-gray-200");

  if (document.getElementById("typed")) {
    // eslint-disable-next-line no-unused-vars
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 100,
      backSpeed: 90,
      backDelay: 100,
      startDelay: 300,
      loop: true,
    });
  }
});

onUnmounted(() => {
  body.classList.remove("about-us");
  body.classList.remove("bg-gray-200");
});
</script>
<template>
  <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-75"
      :style="{ backgroundImage: `url(${capa})` }"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto mt-4">
            <h1 class="text-white"><span class="text-white" id="typed"></span></h1>
            <div id="typed-strings">
              <h1>Cursos de Licenciatura.</h1>
              <h1>Cursos Tecnicos Profissionais.</h1>
              <h1>Instituições de Ensino Médio.</h1>
              <h1>Instituições de Ensino Superior.</h1>
              <h1>Orientação Vocacional</h1>
              <h1>Orientação Profissional</h1>
              <h1>Exames de Admissão Personalizados.</h1>
            </div>
            <p class="lead mb-4 mt-4 text-white opacity-8">
              Explore uma variedade de recursos educacionais, 
              incluindo cursos de licenciatura e técnicos profissionais,
               instituições de ensino médio e superior, orientação vocacional e profissional,
                além de exames de admissão personalizados.
            </p>
            <router-link 
            :to ="{ name :'sobre' }"
            class="btn bg-white text-dark">
              Saber Mais
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <Info />
    <Conteudos />
    <Registo />
  </div>
</template>
