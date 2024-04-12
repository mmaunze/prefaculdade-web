<script setup>
import DefaultInfoCard from "@/components/cards/infoCards/DefaultInfoCard.vue";
</script>
<template>
  <section class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3 class="mb-5">Instituições de Ensino Superior</h3>
        </div>
      </div>
      <div class="row">
        <DefaultInfoCard
        col="col-12 justify-content justify-content-between"
        icon="dashboard"
        title="O Ensino Superior"
        description="O ensino superior é um subsistema do Sistema Nacional de Educação e compreende os diferentes tipos e processos de ensino e aprendizagem proporcionados por estabelecimentos de ensino pós-secundário, autorizados a constituírem-se como instituições de ensino superior pelas autoridades competentes, cujo acesso está condicionado ao preenchimento de requisitos específicos.
        O subsistema de ensino superior estrutura-se por forma a permitir a mobilidade dos discentes entre os vários cursos e instituições."
      />
      <DefaultInfoCard
      col="col-12 justify-content justify-content-between"
      
      title="As Instituições de Ensino Superior"
      description="As instituições de ensino superior são pessoas colectivas de direito público ou privado, com personalidade jurídica, que gozam de autonomia científica e pedagógica, administrativa, disciplinar, financeira e patrimonial, e se classificam consoante a sua missão ou tipo de propriedade e financiamento.
      As instituições de ensino superior públicas são aquelas cuja fonte principal de receita é o Orçamento de Estado e são por este supervisionadas por outro lado As instituições de ensino superior privadas são as instituições pertencentes a pessoas colectivas privadas ou mistas, cujas fontes principais de receita são privadas, podendo-se classificar em lucrativas e não lucrativas e revestir a forma de associação, fundação, sociedade comercial ou cooperativa."
    />
      </div>
    </div>
  </section>
</template>
