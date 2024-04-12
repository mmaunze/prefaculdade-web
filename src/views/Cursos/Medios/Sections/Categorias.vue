<script setup>
import TransparentBlogCard from "@/components/cards/blogCards/TransparentBlogCard.vue";
</script>
<template>
  <section class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3 class="mb-5">Categoria de Cursos Medios</h3>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-4 col-sm-6">
          <TransparentBlogCard
            :action="{
              route: 'sobre',
              color: 'info',
              label: 'Buscar Cursos de Formação de Professores',
            }"
            title="Cursos de Educação"
            description=""
            />
        </div>
        <div class="col-lg-4 col-sm-6">
          <TransparentBlogCard
            :action="{
              route: 'sobre',
              color: 'info',
              label: 'Buscar cursos de saúde',
            }"
            title="Cursos de Saúde"
            description=""
                />
        </div>
        <div class="col-lg-4 col-sm-6">
          <TransparentBlogCard
            :action="{
              route: 'sobre',
              color: 'info',
              label: 'Buscar Cursos Agrarios',
            }"
            title="Cursos Agrarios"
            description="" 
            />
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-4 col-sm-6">
          <TransparentBlogCard
            :action="{
              route: 'sobre',
              color: 'info',
              label: 'Buscar Cursos de Formação em Comercio e Finanças',
            }"
            title="Cursos de Comercio e Finanças"
            description=""
            />
        </div>
        <div class="col-lg-4 col-sm-6">
          <TransparentBlogCard
            :action="{
              route: 'sobre',
              color: 'info',
              label: 'Buscar Cursos Técnicos e Industriais',
            }"
            title="Cursos Industriais"
            description=""
                />
        </div>
        <div class="col-lg-4 col-sm-6">
          <TransparentBlogCard
            :action="{
              route: 'sobre',
              color: 'info',
              label: 'Buscar Cursos Agrarios',
            }"
            title="Cursos Agrarios"
            description="" 
            />
        </div>
      </div>
    </div>
  </section>
</template>
