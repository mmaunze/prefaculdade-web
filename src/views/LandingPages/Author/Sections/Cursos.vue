<script setup>
// example components
import DefaultInfoCard from "@/components/cards/infoCards/DefaultInfoCard.vue";

//Vue Prefaculdade components
</script>
<template>
  <section class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3 class="mb-5">Cursos de Licenciatura</h3>
        </div>
      </div>
      <div class="row">
        <DefaultInfoCard
        col="col-12"
        icon="school"
        title="Apresentação dos Cursos        "
        description="Os cursos de licenciatura constituem a maior parte dos cursos de nível superior ministrado nas instituições de ensino superior moçambicanas, existem instituições com cursos de mestrado e doutoramento mas em menor número, como o foco do site são os cursos de licenciatura, disponibilizamos apenas informações sobre os cursos de Licenciatura mais vulgares, neste caso os mais consultados pelos estudantes."
      />
      <DefaultInfoCard
      col="col-12"
      icon=""
      title=""
      description="Moçambique oferece uma variedade de cursos de graduação para ajudar você a alcançar os resultados que deseja. Não sabe que curso seguir ou onde estudar? Podemos explicar quais cursos são os ideais para você e passar mais informações sobre os mesmos. Confira por categoria"
    />
      </div>
    </div>
  </section>
</template>
