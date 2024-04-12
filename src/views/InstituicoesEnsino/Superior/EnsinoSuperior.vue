<script setup>
// example components
import Header from "@/components/Header.vue";

// sections

import Cursos from "./Sections/Info.vue";
import AcademiasInstitutosEscolasSuperiores from "./Sections/AcademiasInstitutosEscolasSuperiores.vue";
import AreasFormacao from "./Sections/UniversidadesFaculdades.vue";

// image
import faculdades from "@/assets/img/pages/escolas/facul.jpg";

</script>
<template>
  <Header>
    <div
      class="page-header min-height-400"
      :style="{ backgroundImage: `url(${faculdades})` }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-8"></span>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
   <Cursos />
    <AreasFormacao />
    <AcademiasInstitutosEscolasSuperiores />
  </div>
</template>
