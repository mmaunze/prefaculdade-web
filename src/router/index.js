import { createRouter, createWebHistory } from "vue-router";
import Sobre from "@/views/Sobre/Sobre.vue";
import Home from "@/views/LandingPages/Home/Home.vue";
import Contacto from "@/views/LandingPages/ContactUs/ContactView.vue";
import CursosLicenciatura from "@/views/Cursos/Licenciatura/CursosLicenciatura.vue";
import EnsinoSuperior from "@/views/InstituicoesEnsino/Superior/EnsinoSuperior.vue";
import SignInBasicView from "@/views/LandingPages/SignIn/BasicView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/pages/quem-somos",
      name: "sobre",
      component: Sobre,
    },
    {
      path: "/pages/contacto",
      name: "contacto",
      component: Contacto,
    },
    {
      path: "/conteudos/cursos/cursos-licenciatura",
      name: "cursos-licenciatura",
      component: CursosLicenciatura,
    },
    {
      path: "/conteudos/insituicoes-ensino/ensino-superior",
      name: "ensino-superior",
      component: EnsinoSuperior,
    },
    {
      path: "/pages/landing-pages/basic",
      name: "signin-basic",
      component: SignInBasicView,
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
