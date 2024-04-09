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
      <div class="row ">
        <div class="col-lg-12 justify-content-between">
          <FilledInfoCard
            class="p-4"
            :color="{ text: 'white', background: 'bg-gradient-success' }"
            :icon="{ component: 'school', color: 'white' }"
            
            title="Cursos de Licenciatura"
            description="Os cursos de licenciatura constituem a maior parte dos cursos de nível superior ministrado nas instituições de ensino superior moçambicanas,
             existem instituições com cursos de mestrado e doutoramento mas em menor número,
              como o foco do site são os cursos de licenciatura, 
              disponibilizamos apenas informações sobre os cursos de Licenciatura mais vulgares, 
              neste caso os mais consultados pelos estudantes."
            :action="{
              route: 'cursos-licenciatura',
              label: { text: 'Buscar Cursos', color: 'white' }
            }"
          />
        </div>
        <div class="col-lg-12 justify-content-between">
          <FilledInfoCard
            class="px-lg-1 mt-lg-0 mt-4 p-4"
            height="h-100"
            :icon="{ component: 'house', color: 'info' }"
            title="Instituicoes de Ensino Superior"
            description="As instituições de ensino superior são pessoas colectivas de direito público ou privado, com personalidade jurídica, que gozam de autonomia científica e pedagógica, administrativa, disciplinar, financeira e patrimonial, e se classificam consoante a sua missão ou tipo de propriedade e financiamento.

            As instituições de ensino superior públicas são aquelas cuja fonte principal de receita é o Orçamento de Estado e são por este supervisionadas por outro lado As instituições de ensino superior privadas são as instituições pertencentes a pessoas colectivas privadas ou mistas, cujas fontes principais de receita são privadas, podendo-se classificar em lucrativas e não lucrativas e revestir a forma de associação, fundação, sociedade comercial ou cooperativa.
            
            "
            :action="{
              route:
                'cursos-licenciatura',
              label: { text: 'Buscar faculdades' , color: 'info' }
            }"
          />
        </div>
        <div class="col-lg-12 justify-content-between">
          <FilledInfoCard
            class="px-lg-1 mt-lg-0 mt-4 p-4"
            :icon="{ component: 'quiz', color: 'info' }"
            title="Exames de Admissao"
            description="Material Kit is giving you a lot of pre-made elements. For those
                who want flexibility, we included many utility classes."
            :action="{
              route:
                'cursos-licenciatura',
              label: { text: 'Buscar Exames' , color: 'info'}
            }"
          />
        </div>
      </div>
    </div>
  </div>

</template>
