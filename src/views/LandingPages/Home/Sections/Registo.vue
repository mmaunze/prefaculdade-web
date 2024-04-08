<script setup>
import { onMounted } from "vue";
//Vue Prefaculdade components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>
<template>
  <section class="my-5 pt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6 m-auto">
          <h4>Inscreva-se agora para receber atualizações exclusivas, 
            conteúdo relevante diretamente na sua caixa de entrada.</h4>
          <p class="mb-4">
            Não perca nenhuma novidade! Ao se inscrever você terá acesso a conteúdos exclusivos, 
            informações sobre os novos cursos e updates, 
            Esteja sempre um passo à frente e mantenha-se atualizado sobre as últimas tendências, 
            dicas úteis e muito mais. 
            Inscreva-se agora e não deixe escapar nada do que preparamos especialmente para você
          </p>
          <div class="row">
            <div class="col-8">
              <MaterialInput
                class="input-group-outline"
                id="email"
                :label="{ text: 'Email', class: 'form-label' }"
                type="email"
              />
            </div>
            <div class="col-4 ps-0">
              <MaterialButton
                variant="gradient"
                color="success"
                class="mb-0 h-100 position-relative z-index-2"
                >Inscrever</MaterialButton
              >
            </div>
          </div>
        </div>
        <div class="col-md-5 ms-auto mt-6 md-mt-0">
          <div class="position-relative">
            <img
              class="max-width-50 w-100 position-relative z-index-2"
              src="@/assets/img/macbook.png"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
