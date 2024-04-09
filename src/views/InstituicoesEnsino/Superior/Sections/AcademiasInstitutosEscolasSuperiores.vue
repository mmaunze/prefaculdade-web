<script setup>
// example components
import TransparentBlogCard from "@/components/cards/blogCards/TransparentBlogCard.vue";

//Vue Prefaculdade components
</script>
<template>
  <section class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3 class="mb-5">Academias, institutos, Escolas superiores</h3>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-4 col-sm-6">
          <TransparentBlogCard
            :action="{
              route: 'sobre',
              color: 'info',
              label: 'Buscar Institutos superiores',
            }"
            title="Universidades"
            description="Instituições filiadas ou não a uma universidade, que se dedicam à formação e investigação no domínio das ciências e da tecnologia ou das profissões, bem como à extensão e que estão autorizadas a conferir graus e diplomas académicos."
          />
        </div>
        <div class="col-lg-4 col-sm-6">
          <TransparentBlogCard
            :action="{
              route: 'sobre',
              color: 'info',
              label: 'Buscar Academias',
            }"
            title="Academias"
            description="instituições de ensino superior que se dedicam ao ensino em áreas específicas, nomeadamente, as artes, a literatura, habilidades técnicas tais como as militares e policiais, a formação especializada e o comércio, estando autorizadas a conferir graus e diplomas académicos;"
          />
        </div>
        <div class="col-lg-4 col-sm-6">
          <TransparentBlogCard
            :action="{
              route: 'sobre',
              color: 'info',
              label: 'Buscar Escolas Superiores',
            }"
            title="Escolas Superiores"
            description="instituições de ensino superior filiadas ou não a uma universidade, a um instituto superior ou a uma academia, que se dedicam ao ensino num determinado ramo do conhecimento e à extensão e que estão autorizadas a conferir graus e diplomas académicos."
          />
        </div>
      </div>
    </div>
  </section>
</template>
