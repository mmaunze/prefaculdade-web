<script setup>
// example components
import TransparentBlogCard from "@/components/cards/blogCards/TransparentBlogCard.vue";

//Vue Prefaculdade components
import engenharia from "@/assets/img/pages/cursos/engenharia.jpg";
import saude from "@/assets/img/pages/cursos/saude.jpg";
import ciencias from "@/assets/img/pages/cursos/ciencias.jpg";
import business from "@/assets/img/pages/cursos/business.jpg";
import artes from "@/assets/img/pages/cursos/artes.jpg";
</script>
<template>
  <section class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3 class="mb-5">Categoria de Instituições de Ensino Medio</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-6 mr-10">
          <TransparentBlogCard
            :action="{
              route: 'sobre',
              color: 'info',
              label: 'Ver Institutos de Formação de Professores ',
            }"
            :image="engenharia"
            title="Institutos de Professores"
            description=""
          />
        </div>
        <div class="col-lg-4 col-sm-6 ml-10">
          <TransparentBlogCard
            :action="{
              route: 'sobre',
              color: 'info',
              label: 'Ver Institutos de Formação Saúde',
            }"
            :image="saude"
            title="Institutos de Saúde"
            description=""
          />
        </div>
        <div class="col-lg-4 col-sm-6 mr-10">
          <TransparentBlogCard
            :action="{
              route: 'sobre',
              color: 'info',
              label: 'Ver Institutos Agrarios',
            }"
            :image="ciencias"
            title="Institutos Agrarios"
            description=""
          />
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-6 col-sm-6">
          <TransparentBlogCard
            :action="{
              route: 'sobre',
              color: 'info',
              label: 'Ver Institutos e Gestao e Finanças',
            }"
            :image="business"
            title="Institutos de Comercio e Gestao"
            description=" "
          />
        </div>
        <div class="col-lg-6 col-sm-6">
          <TransparentBlogCard
            :action="{
              route: 'sobre',
              color: 'info',
              label: 'Ver cursos de Artes',
            }"
            :image="artes"
            title="Ver Institutos Comerciais e Industriais"
            description=""
          />
        </div>
      </div>
    </div>
  </section>
</template>
