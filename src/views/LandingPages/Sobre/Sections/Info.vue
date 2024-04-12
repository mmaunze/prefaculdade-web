<script setup>
import RotatingCard from "@/components/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "@/components/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "@/components/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "@/components/cards/infoCards/DefaultInfoCard.vue";
import teste1 from "@/assets/img/pages/sobre/teste1.jpg";
import teste2 from "@/assets/img/pages/sobre/teste2.jpg";
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
          <div class="row justify-content-between">
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
              :image="teste1"
              icon="touch_app"
              title=" Fazer <br /> Teste Vicaccional"
              description="Faça agora o nosso teste de Orientação Vocacional e Profissional e dê o primeiro passo em direção a uma carreira que realmente faça sentido para você. "
            />

            <RotatingCardBack
              :image="teste2"
              title="Fazer Teste Vocacional"
              description="Responda o teste vocacional com sinceridade para descobrir sua verdadeira paixão e alcançar resultados mais precisos e gratificantes em sua carreira."
              :action="{
                route: 'curso',
                color: 'info',
              }"
            />
          </RotatingCard>
        </div>
      </div>
      <div class="row justify-content-between mt-5">
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
