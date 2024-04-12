import { createRouter, createWebHistory } from "vue-router";
import Sobre from "@/views/LandingPages/Sobre/Sobre.vue";
import Home from "@/views/LandingPages/Home/Home.vue";
import Contacto from "@/views/LandingPages/ContactUs/ContactView.vue";
//cursos
import Curso from "@/views/Cursos/Curso.vue";
import Cursos from "@/views/Cursos/Cursos.vue";
import CursosLicenciatura from "@/views/Cursos/Licenciatura/CursosLicenciatura.vue";
import CursosMedios from "@/views/Cursos/Medios/CursosMedios.vue";
import CursosProfissionalizantes from "@/views/Cursos/Profissionalizantes/CursosProfissionalizantes.vue";
//Categoria de Cursos 
import Engenharia from "@/views/Cursos/Licenciatura/Engenharia/Engenharia.vue";


//instituicoes
import InstituicoesEnsino from "@/views/InstituicoesEnsino/InstituicoesEnsino.vue";
import EnsinoSuperior from "@/views/InstituicoesEnsino/Superior/EnsinoSuperior.vue";
import EnsinoMedio from "@/views/InstituicoesEnsino/Medio/EnsinoMedio.vue";
import Login from "@/views/LandingPages/SignIn/BasicView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/paginas/quem-somos",
      name: "sobre",
      component: Sobre,
    },
    {
      path: "/paginas/contacto",
      name: "contacto",
      component: Contacto,
    },
    {
      path: "/conteudos/cursos",
      name: "cursos",
      component: Cursos,
    },
    {
      path: "/conteudos/cursos/curso",
      name: "curso",
      component: Curso,
    },
    {
      path: "/conteudos/cursos/cursos-licenciatura",
      name: "cursos-licenciatura",
      component: CursosLicenciatura,
    },
    {
      path: "/conteudos/cursos/cursos-licenciatura/engenharia",
      name: "cursos-engenharia",
      component: Engenharia,
    },
    {
      path: "/conteudos/cursos/cursos-medios",
      name: "cursos-medios",
      component: CursosMedios,
    },
    {
      path: "/conteudos/cursos/curta-duracao",
      name: "cursos-curta-duracao",
      component: CursosProfissionalizantes,
    },
    {
      path: "/conteudos/insituicoes-ensino",
      name: "insituicoes-ensino",
      component: InstituicoesEnsino,
    },
    {
      path: "/conteudos/insituicoes-ensino/ensino-superior",
      name: "ensino-superior",
      component: EnsinoSuperior,
    },
    {
      path: "/conteudos/insituicoes-ensino/ensino-medio",
      name: "ensino-medio",
      component: EnsinoMedio,
    },
    {
      path: "/paginas/landing-pages/basic",
      name: "signin-basic",
      component: Login,
    },
    {
      path: "/:catchAll(.*)",
      redirect: { name: "home" }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  // Configurações de transição
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
});

export default router;
