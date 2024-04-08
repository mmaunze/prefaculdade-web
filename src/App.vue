<script setup>
import { RouterView } from "vue-router";
import Navbar from "@/components/navbars/NavbarDefault.vue";
import Footer from "@/components/footers/FooterCentered.vue";
</script>

<template>
  <div class="position-sticky z-index-sticky top-0">
    <Navbar :sticky="true" />
  </div>
  <router-view />
 
  <div class=" bottom-0">
    <Footer />  
  </div>
</template>
