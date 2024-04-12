<script setup>
// example components
import TransparentBlogCard from "@/components/cards/blogCards/TransparentBlogCard.vue";
import universidade from "@/assets/img/pages/escolas/university.jpg";
import faculdade from "@/assets/img/pages/escolas/facul2.jpg";
//Vue Prefaculdade components

</script>
<template>
  <section class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3 class="mb-5">Cursos Profissionalizantes
          </h3>
        </div>
      </div>
     
      <div class="row mt-5">
        <div class="col-lg-6 col-sm-6">
          <TransparentBlogCard
          :action="{
            route: 'sobre',
            color: 'info',
            label: 'Buscar universidades',
          }"
        :image="universidade"
            title="Universidades"
            description="Instituições que dispõem de capacidade humana e material para o ensino, investigação científica e extensão em vários domínios do conhecimento, proporcionando uma formação teórica e académica, estando autorizadas a conferir graus e diplomas académicos" 
            />
        </div>
        <div class="col-lg-6 col-sm-6">
          <TransparentBlogCard
          :image="faculdade"
          :action="{
            color: 'info',
          }"
          
            title="Faculdade"
            description="Unidades académicas primárias de uma universidade ou de um instituto superior que se ocupam do ensino,
            investigação, extensão e aprendizagem num determinado ramo do saber,
            envolvendo a interacção de vários departamentos académicos e a provisão de ensino conducente à obtenção de um grau ou diploma.
          "   />
        </div>
      </div>
      
    </div>
  </section>
</template>
