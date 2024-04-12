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
          <h3 class="mb-5">Cursos Profissionalizantes</h3>
        </div>
      </div>
      <div class="row">
        <DefaultInfoCard
        col="col-12 justify-content justify-content-between"
        icon="dashboard"
        title=""
        description=""  />
      <DefaultInfoCard
      col="col-12 justify-content justify-content-between"
      
      title=""
      description=""  />
      </div>
    </div>
  </section>
</template>
