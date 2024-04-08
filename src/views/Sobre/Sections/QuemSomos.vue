<script setup>
import RotatingCard from "@/components/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "@/components/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "@/components/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "@/components/cards/infoCards/DefaultInfoCard.vue";
</script>
<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <DefaultInfoCard
              col="col-12"
              icon="info"
              title="Pré Faculdade"
              description="É uma iniciativa que visa apoiar os jovens pré universitários e que desejam ingressar o ensino superior a ter maior visão e conhecimento sobre as carreiras profissionais que desejam seguir, deste modo, aqui você encontrará todas informações necessárias sobre as faculdades públicas e privadas de Moçambique bem como informações sobre os diferentes cursos de licenciatura nas diferentes áreas profissionais."
            />
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard
              col="col-12"
              icon=""
              title=""
              description="Escolher uma profissão é algo extremamente complexo e certamente uma das principais dificuldades que temos. Até porque, temos que fazer uma escolha muito cedo, para algo que levaremos para o resto da vida. Mesmo na fase adulta, tomar uma decisão desse porte nunca é algo fácil. E a primeira questão que você deve decidir é acerca da área: qual delas devo seguir? A área de ciências exatas? Ciências biológicas? Humanas, ou sociais? Engenharia ou medicina? Arquitetura ou línguas? Para lhe auxiliar nessa escolha, criamos este site para ti."
            />
          </div>
        </div>

        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              image="https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              icon="touch_app"
              title="Feel the <br /> Material Kit"
              description="All the Bootstrap components that you need in a development have been
        re-design with the new look."
            />

            <RotatingCardBack
              image="https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80"
              title="Discover More"
              description="You will save a lot of time going from prototyping to full-functional
                code because all elements are implemented."
              :action="[
                {
                  route: './/sections/page-sections/hero-sections.html',
                  label: 'Start with Headers',
                },
              ]"
            />
          </RotatingCard>
        </div>
      </div>
      <div class="row justify-content-start mt-5">
        <DefaultInfoCard
          class="mt-3"
          icon="price_change"
          title="Informações actualizadas"
          description="Temos disponível informações sobre as escolas de ensino superior, 
          os cursos de graduação assim como dicas de carreira e recomendações sobre a universidade a seguir."
        />
        <DefaultInfoCard
          class="mt-3"
          icon="devices"
          title="Material de preparação"
          description="Encontrará também todo material necessário para sua preparação ao ensino superior, 
          e esperamos que seja um estudante de sucesso, este é o teu portal de orientação para o Ensino Superior"
        />
      </div>
    </div>
  </section>
</template>
