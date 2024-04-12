<script setup>
// example components
import TransparentBlogCard from "@/components/cards/blogCards/TransparentBlogCard.vue";

//Vue Prefaculdade components
import engenharia from "@/assets/img/pages/cursos/engenharia.jpg";
import saude from "@/assets/img/pages/cursos/saude.jpg";
import ciencias from "@/assets/img/pages/cursos/ciencias.jpg";

</script>
<template>
  <section class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3 class="mb-5">Lista de Cursos de Engenharia</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-6 mr-10">
          <TransparentBlogCard
            :action="{
              route: 'curso',
              color: 'info',
              label: 'Ver Detalhes do Curso',
            }"
            :image="engenharia"
            title="Engenharia"
            description="Engenharia é a aplicação do conhecimento científico, econômico, social e prático, com o intuito de inventar, desenhar, construir, manter e melhorar estruturas, máquinas, aparelhos, sistemas, materiais e processos. É também profissão em que se adquire e se aplicam os conhecimentos matemáticos e técnicos na criação, aperfeiçoamento e implementação de utilidades que realizem uma função ou objetivo."
          />
        </div>
        <div class="col-lg-4 col-sm-6 ml-10">
          <TransparentBlogCard
          :action="{
            route: 'curso',
            color: 'info',
            label: 'Ver Detalhes do Curso',
          }"
            :image="saude"
            title="  Ciencias de Saúde"
            description="Trata-se de uma área que apresenta um grande pot onencial tendo em vista, sobretudo, o aumento na expectativa de vida em diversos países. Os profissionais de saúde têm sido cada vez mais requisitados, principalmente em um cenário de escassez de médicos, que ocorre principalmente em locais mais distantes das áreas urbanas."
          />
        </div>
        <div class="col-lg-4 col-sm-6 mr-10">
          <TransparentBlogCard
          :action="{
            route: 'curso',
            color: 'info',
            label: 'Ver Detalhes do Curso',
          }"
            :image="ciencias"
            title="Ciencias Exactas"
            description="As ciências exatas são aquelas especializadas em lidar com problemas e situações, porém, por meio da matemática. Para fazer isso, seus profissionais têm como base recursos precisos e lógicos, que cheguem a um resultado exato – o que motiva também o próprio nome dessa ciência."
          />
        </div>
      </div>
    </div>
  </section>
</template>
