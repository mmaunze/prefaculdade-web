<script setup>
defineProps({
  socials: {
    type: Array,
    icon: String,
    link: String,
    default: () => [
      {
        icon: '<i class="fab fa-facebook text-lg opacity-8"></i>',
        link: "https://www.facebook.com/prefaculdademz/",
      },
    
      {
        icon: '<i class="fab fa-youtube text-lg opacity-8"></i>',
        link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
      },
    ],
  },
  links: {
    type: Array,
    name: String,
    destino: String,
    default: () => [
      { destino: "home", name: "Home" },
      { destino: "sobre", name: "Sobre" },
      { destino: "cursos", name: "Cursos" },
      { destino: "insituicoes-ensino", name: "Instituições"},
      { destino: "home", name: "Exames" },
      { destino: "home", name: "Orientação" },
    ],
  },
});
</script>
<template>
  <footer class="footer py-5">
    <div class="container">
      <div class="row d-flex">
        <div class="col-lg-8 mb-4 mx-auto text-center">
          <router-link
            v-for="{ name, destino } of links"
            :key="name"
            :to="{ name : destino}"
            class="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
          >
            {{ name }}
          </router-link>
        </div>
        <div class="col-lg-8 mx-auto text-center mb-4 mt-2">
          <a
            v-for="{ icon, link } of socials"
            :key="link"
            :href="link"
            target="_blank"
            class="text-secondary me-xl-4 me-4"
            v-html="icon"
          >
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-8 mx-auto text-center mt-1">
          <p class="mb-0 text-secondary">
            Prefaculdade © {{ new Date().getFullYear() }}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
