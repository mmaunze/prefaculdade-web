<script setup>
import DefaultCounterCard from "@/components/cards/counterCards/DefaultCounterCard.vue";
</script>

<template>
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
          <div class="row">
            <div class="justify-content-between col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Cursos"
                description="Cursos Medios e Superiores Bem detalhados
                  covered"
                :count="376"
                suffix=""
                :duration="3800"
                divider="vertical"
              />
            </div>
            <div class="justify-content-between col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Instituições de Ensino"
                description="Universidades, Institutos, Escolas Medias e Superiores
                  creativity"
                :count="152"
                suffix=""
                :duration="3500"
                divider="vertical"
              />
            </div>
            <div class="col-md-4">
              <DefaultCounterCard
                color="success"
                title="Exames de Admissao"
                description="Exames de Admissao Personalizados Baseado em Exames Nacionais"
                :count="662"
                :duration="3000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
