<script setup>
import { onMounted, onUnmounted } from "vue";

//example components


import Header from "@/components/Header.vue";
import FilledInfoCard from "@/components/cards/infoCards/FilledInfoCard.vue";

//Vue Prefaculdade components
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";

// sections
import PresentationCounter from "./Sections/Contadores.vue";
import PresentationInformation from "./Sections/QuemSomos.vue";

//images
import vueMkHeader from "@/assets/img/vue-mk-header.jpg";
import wavesWhite from "@/assets/img/waves-white.svg";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <Header>
    <div
      class="page-header min-vh-75"
      :style="`background-image: url(${vueMkHeader})`"
      loading="lazy"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1
              class="text-white pt-3 mt-n5 me-2"
              :style="{ display: 'inline-block ' }"
            >
              Prefaculdade
            </h1>
            <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500' }">
              Orientação Vocacional e Profissional em Mocambique
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">

    <PresentationCounter />
    <PresentationInformation />
    <div class="py-5">
      <div class="container">
        <div class="row">
         
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <FilledInfoCard
            class="p-4"
            :color="{ text: 'white', background: 'bg-gradient-success' }"
            :icon="{ component: 'school', color: 'white' }"
            title="Cursos de Licenciatura"
            description="Check the possible ways of working with our product and the necessary files for building your own project."
            :action="{
              route:
                'https://www.creative-tim.com/learning-lab/vue/overview/material-kit/',
              label: { text: 'Buscar Cursos', color: 'white' }
            }"
          />
        </div>
        <div class="col-lg-4">
          <FilledInfoCard
            class="px-lg-1 mt-lg-0 mt-4 p-4"
            height="h-100"
            :icon="{ component: 'house', color: 'info' }"
            title="Instituicoes de Ensino Superior"
            description="Get inspiration and have an overview about the plugins that we
                used to create the Material Kit."
            :action="{
              route:
                'https://www.creative-tim.com/learning-lab/vue/input/material-kit/',
              label: { text: 'Buscar faculdades' , color: 'info' }
            }"
          />
        </div>
        <div class="col-lg-4">
          <FilledInfoCard
            class="px-lg-1 mt-lg-0 mt-4 p-4"
            :icon="{ component: 'quiz', color: 'info' }"
            title="Exames de Admissao"
            description="Material Kit is giving you a lot of pre-made elements. For those
                who want flexibility, we included many utility classes."
            :action="{
              route:
                'https://www.creative-tim.com/learning-lab/vue/utilities/material-kit/',
              label: { text: 'Buscar Exames' , color: 'info'}
            }"
          />
        </div>
      </div>
    </div>
  </div>

</template>
