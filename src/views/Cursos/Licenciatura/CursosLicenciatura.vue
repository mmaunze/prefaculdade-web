<script setup>
// example components
import Header from "@/components/Header.vue";

// sections
import AreasFormacao from "./Sections/AreasFormacao.vue";
import Cursos from "./Sections/Cursos.vue";

// image
import image from "@/assets/img/city-profile.jpg";
</script>
<template>
  <Header>
    <div
      class="page-header min-height-400"
      :style="{ backgroundImage: `url(${image})` }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-8"></span>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
   <Cursos />
    <AreasFormacao />
  </div>
</template>
