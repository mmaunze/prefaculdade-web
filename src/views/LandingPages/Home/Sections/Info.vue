<script setup>
// example components
import DefaultInfoCard from "@/components/cards/infoCards/DefaultInfoCard.vue";
import CenteredBlogCard from "@/components/cards/blogCards/CenteredBlogCard.vue";
import orientacao_vocacional from "@/assets/img/pages/inicio/orientacao_vocacional.jpg"

</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="row justify-content-start">
            <DefaultInfoCard
              color="info"
              icon="school"
              title="Cursos"
              description="Todos Detalhes de Cursos Medios e Superiores num so lugar"
            />
            <DefaultInfoCard
              color="info"
              icon="dashboard"
              title="Escolas"
              description="Descubra opcoes Instituições de Ensino para sua Formação profissional"
            />
          </div>
          <div class="row justify-content-start mt-4">
            <DefaultInfoCard
              color="info"
              icon="quiz"
              title="Exames"
              description="Encontre Exames Anteriores de Todas Instituições ou realize um ecame gerado pela plataforma"
            />
            <DefaultInfoCard
              color="info"
              icon="help"
              title="Dicas"
              description="Fique actualizado sobre as Tendencias de Acadenia e do Mercado Profissional em Mocambique"
            />
          </div>
        </div>
        <div class="col-lg-4 ms-auto mt-lg-0 mt-6">
          <CenteredBlogCard
          :image="orientacao_vocacional"
          :actions ="{ route: 'curso' }" 
          title="Orietacao Vocacional e Profissional"
            description="Descubra o seu caminho profissional ideal! 
             Faça agora o nosso teste de Orientação Vocacional e Profissional 
            e dê o primeiro passo em direção a uma carreira que realmente faça sentido para você."
          />
        </div>
      </div>
    </div>
  </section>
</template>
