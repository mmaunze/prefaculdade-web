<script setup>
// example components
import Header from "@/components/Header.vue";
import curso from './cursos'
import MaterialButton from "@/components/MaterialButton.vue";
// image
import capa from "@/assets/img/pages/escolas/facul.jpg";

</script>
<template>
  <Header>
    <div class="page-header min-height-250" :style="{ backgroundImage: `url(${capa})` }" loading="lazy">
      <span class="mask bg-gradient-dark opacity-8"></span>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
    <div v-if="curso" class="container">
      <h3 class="mb-5">Curso de {{ curso.nome }}</h3>
      <div class="row justify-content-between">
        <div class="col-lg-7 text-justify mx-auto my-auto mt-4">
          <div class="lead mb-4 mt-4 opacity-8">
            <h4 class="mb-3">{{ "Breve descricao do curso de " + curso.nome }}</h4>
            {{ curso.descricao }}
          </div>
        </div>
        <div class="col-lg-7 text-justify mx-auto my-auto mt-4">
          <div class="lead mb-4 mt-4 opacity-8">
            <h4 class="mb-3">{{ "Plano Curricular do curso de " + curso.nome }}</h4>
            <ul class="d-flex p-0" v-for="disciplinas in curso.plano_curricular">
              <li class="list-inline list-inline-item" v-for="disciplina in disciplinas">
                {{ disciplina }};
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-7 text-justify mx-auto my-auto mt-4">
          <div class="lead mb-4 mt-4 opacity-8">
            <h4 class="mb-3">
              {{ "Saidas Profissionais do curso de " + curso.nome }}
            </h4>
            <ul class="p-0">
              <li class="list-unstyled" v-for="saida_profissional in curso.saidas_profissionais">
                {{ saida_profissional }}
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-7 text-justify mx-auto my-auto mt-4">
          <div class="lead mb-4 mt-4 opacity-8">
            <h4 class="mb-3">
              {{ "Instituicoes de Ensino para frequentar o curso de " + curso.nome }}
            </h4>
            <ul class="p-0">
              <li class="list-unstyled " v-for="instituicao in curso.instituicoes">
                {{ instituicao }}
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-7 text-justify mx-auto my-auto mt-4">
          <div class="lead mb-4 mt-4 opacity-8">
            <h4 class="mb-3">
              {{ "Requisitos gerais para frequentar o curso de " + curso.nome }}
            </h4>
            <ul class="p-0">
              <li class="list-unstyled " v-for="requisito in curso.requisitos">
                {{ requisito }}
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-7 text-justify mx-auto my-auto mt-4">
          <div class="lead mb-4 mt-4 opacity-8">
            <h4 class="mb-3">
              Cursos Relacionados
            </h4>
            <ul>
              <li class="list-unstyled" v-for="cursinho in curso.cursos_relacionados">
                {{ cursinho.titulo }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="container">
      <h3 class="mb-5">Curso nao encontrado</h3>
      <div class="row justify-content-between">
        <div class="col-lg-7 text-center mx-auto my-auto mt-4">
          <div class="lead mb-4 mt-4 opacity-8">
            <h4 class="mb-3">Nao foi possivel encontrar o curso solicitado</h4>
            <router-link
            class="text-center"
            :to="{ name: 'cursos' }"
          >
            <MaterialButton
              variant="gradient"
              color="success"
              class="mb-0 h-100 position-relative z-index-2"
            >
              Buscar Outro Curso
            </MaterialButton>
          </router-link>
          </div>
        </div>
      </div>
      </div>
  </div>
</template>
