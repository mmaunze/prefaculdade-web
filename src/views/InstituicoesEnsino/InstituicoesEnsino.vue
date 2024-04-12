<script setup>
// example components
import Header from "@/components/Header.vue";
import MaterialButton from "@/components/MaterialButton.vue";
// image
import faculdades from "@/assets/img/pages/escolas/facul.jpg";
</script>
<template>
  <Header>
    <div
      class="page-header min-height-250"
      :style="{ backgroundImage: `url(${faculdades})` }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-8"></span>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
    <div class="container">
      <h3 class="mb-5">Instituições de Ensino</h3>
      <div class="row justify-content-center">
        <div class="col-lg-4 text-center mx-auto my-auto mt-4">
          <p class="lead mb-4 mt-4 opacity-8">
            Explore uma variedade de recursos educacionais, incluindo cursos de
            licenciatura e técnicos profissionais, instituições de ensino médio
            e superior, orientação vocacional e profissional, além de exames de
            admissão personalizados.
          </p>
          <router-link :to="{ name: 'ensino-superior' }">
            <MaterialButton
              variant="gradient"
              color="success"
              class="mb-0 h-100 position-relative z-index-2"
            >
            Instituições de Ensino Superior
            </MaterialButton>
          </router-link>
        </div>

        <div class="col-lg-4 text-center mx-auto my-auto mt-4">
          <p class="lead mb-4 mt-4 opacity-8">
            Explore uma variedade de recursos educacionais, incluindo cursos de
            licenciatura e técnicos profissionais, instituições de ensino médio
            e superior, orientação vocacional e profissional, além de exames de
            admissão personalizados.
          </p>
          <router-link
            :to="{ name: 'ensino-medio' }"
          >
            <MaterialButton
              variant="gradient"
              color="success"
              class="mb-0 h-100 position-relative z-index-2"
            >
            Instituições de ensino médio
            </MaterialButton>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
