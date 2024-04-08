<script setup>
// example component
import HorizontalTeamCard from "@/components/cards/teamCards/HorizontalTeamCard.vue";

// images
import licenciatura from "@/assets/img/pages/inicio/licenciatura.png";
import ensino_medio from "@/assets/img/pages/inicio/medio.png";
import escolas from "@/assets/img/pages/inicio/escolas.png";
import dicas from "@/assets/img/pages/inicio/dicas.png";
</script>

<template>
  <section class="pb-5 position-relative bg-gradient-dark mx-n3">
    <div class="container">
      <div class="row">
        <div class="col-md-8 text-start mb-5 mt-5">
          <h3 class="text-white z-index-1 position-relative">
            Nossos Conteúdos 
          </h3>
          <p class="text-white opacity-8 mb-0">
            Nossos conteúdos são totalmente moçambicanos, 
            oferecendo uma perspectiva autêntica e localizada sobre uma variedade de tópicos,
nosso objetivo é fornecer um guia completo para ajudá-lo 
            a alcançar seus objetivos acadêmicos e profissionais em Moçambique
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
            description="Nossa plataforma oferece detalhes sobre diferentes instituições de ensino,
             seus programas acadêmicos, infraestrutura, corpo docente e muito mais, 
             para que você possa fazer escolhas informadas sobre sua jornada educacional. 
             Independentemente de seus interesses, queremos ser seu guia confiável na busca pelo conhecimento e crescimento pessoal. "
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="dicas"
            :profile="{ name: 'Dicas úteis e Sugestões' }"
            :position="{ label: 'orientação Vocacional', color: 'info' }"
            description="Fornecemos uma variedade de dicas úteis e sugestões para auxiliar no processo de orientação vocacional. 
            Reconhecemos a importância crucial de escolher uma carreira que esteja alinhada com seus interesses, habilidades e valores. 
            Por isso, nosso objetivo é oferecer orientação prática para ajudá-lo a tomar decisões informadas sobre seu futuro profissional."
          />
        </div>
      </div>
    </div>
  </section>
</template>
