<script setup>
// example components
import Header from "@/components/Header.vue";

// sections
import Cursos from "./Sections/Cursos.vue";
import Info from "./Sections/Info.vue";

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
   <Info />
   <Cursos />
  </div>
</template>
