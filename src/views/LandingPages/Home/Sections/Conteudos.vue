<script setup>
// example component
import HorizontalTeamCard from "@/components/cards/teamCards/HorizontalTeamCard.vue";

// images
import licenciatura from "@/assets/img/pages/inicio/licenciatura.jpg";
import ensino_medio from "@/assets/img/pages/inicio/licenciatura.jpg";
import escolas from "@/assets/img/ivana-squares.jpg";
import exames from "@/assets/img/ivana-square.jpg";
</script>

<template>
  <section class="pb-5 position-relative bg-gradient-dark mx-n3">
    <div class="container">
      <div class="row">
        <div class="col-md-8 text-start mb-5 mt-5">
          <h3 class="text-white z-index-1 position-relative">
            Nossos Conteudos
          </h3>
          <p class="text-white opacity-8 mb-0">
            Todas informacoes que vais encontrar aqui sao 100% Mocambicanos
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4"
            :image="licenciatura"
            :profile="{ name: 'Cursos de Licenciatura', }"
            :position="{ label: 'Ensino Superior', color: 'info' }"
            description="Moçambique oferece uma variedade de cursos de graduação para ajudar você a alcançar os resultados que deseja. 
            Não sabe que curso seguir ou onde estudar? 
            Podemos explicar quais cursos são os ideais para você e passar mais informações sobre os mesmos"
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5"
            :image="ensino_medio"
            :profile="{ name: 'Cursos Tecnicos Profissionais' }"
            :position="{ label: 'Ensino Medio', color: 'info' }"
            description="Ao contrário dos cursos de licenciatura no ensino superior, 
             que tendem a ter uma abordagem mais abrangente e teórica, 
             os cursos técnicos profissionais são projetados para fornecer treinamento prático e habilidades específicas que os alunos podem aplicar diretamente no mercado de trabalho."
          />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4 z-index-2"
            :image="escolas"
            :profile="{ name: 'Escolas, Faculdades e Institutos', link: 'javascript:;' }"
            :position="{ label: 'instituicoes de Ensino', color:'info' }"
            description="Artist is a term applied to a person who engages in an
                    activity deemed to be an art."
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="exames"
            :profile="{ name: 'Exames de Admissao' }"
            :position="{ label: 'JS Developer', color: 'info' }"
            description="Artist is a term applied to a person who engages in an
                    activity deemed to be an art."
          />
        </div>
      </div>
    </div>
  </section>
</template>
