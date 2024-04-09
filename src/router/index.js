import { createRouter, createWebHistory } from "vue-router";
import Sobre from "@/views/Sobre/Sobre.vue";
import Home from "@/views/LandingPages/Home/Home.vue";
import Contacto from "@/views/LandingPages/ContactUs/ContactView.vue";
import CursosLicenciatura from "@/views/LandingPages/Author/CursosLicenciatura.vue";
import EnsinoSuperior from "@/views/InstituicoesEnsino/Superior/EnsinoSuperior.vue";

//por ekiminar
import SignInBasicView from "@/views/LandingPages/SignIn/BasicView.vue";
import PageHeaders from "@/layouts/sections/page-sections/page-headers/HeadersView.vue";
import PageFeatures from "@/layouts/sections/page-sections/features/FeaturesView.vue";
import NavigationNavbars from "@/layouts/sections/navigation/navbars/NavbarsView.vue";
import NavigationNavTabs from "@/layouts/sections/navigation/nav-tabs/NavTabsView.vue";
import NavigationPagination from "@/layouts/sections/navigation/pagination/PaginationView.vue";
import InputAreasInputs from "@/layouts/sections/input-areas/inputs/InputsView.vue";
import InputAreasForms from "@/layouts/sections/input-areas/forms/FormsView.vue";
import ACAlerts from "@/layouts/sections/attention-catchers/alerts/AlertsView.vue";
import ACModals from "@/layouts/sections/attention-catchers/modals/ModalsView.vue";
import ACTooltipsPopovers from "@/layouts/sections/attention-catchers/tooltips-popovers/TooltipsPopoversView.vue";
import ElAvatars from "@/layouts/sections/elements/avatars/AvatarsView.vue";
import ElBadges from "@/layouts/sections/elements/badges/BadgesView.vue";
import ElBreadcrumbs from "@/layouts/sections/elements/breadcrumbs/BreadcrumbsView.vue";
import ElButtons from "@/layouts/sections/elements/buttons/ButtonsView.vue";
import ElButtonGroups from "@/layouts/sections/elements/button-groups/ButtonGroupsView.vue";
import ElDropdowns from "@/layouts/sections/elements/dropdowns/DropdownsView.vue";
import ElProgressBars from "@/layouts/sections/elements/progress-bars/ProgressBarsView.vue";
import ElToggles from "@/layouts/sections/elements/toggles/TogglesView.vue";
import ElTypography from "@/layouts/sections/elements/typography/TypographyView.vue";
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
      path: "/sections/page-sections/page-headers",
      name: "page-headers",
      component: PageHeaders,
    },
    {
      path: "/sections/page-sections/features",
      name: "page-features",
      component: PageFeatures,
    },
    {
      path: "/sections/navigation/navbars",
      name: "navigation-navbars",
      component: NavigationNavbars,
    },
    {
      path: "/sections/navigation/nav-tabs",
      name: "navigation-navtabs",
      component: NavigationNavTabs,
    },
    {
      path: "/sections/navigation/pagination",
      name: "navigation-pagination",
      component: NavigationPagination,
    },
    {
      path: "/sections/input-areas/inputs",
      name: "inputareas-inputs",
      component: InputAreasInputs,
    },
    {
      path: "/sections/input-areas/forms",
      name: "inputareas-forms",
      component: InputAreasForms,
    },
    {
      path: "/sections/attention-catchers/alerts",
      name: "ac-alerts",
      component: ACAlerts,
    },
    {
      path: "/sections/attention-catchers/modals",
      name: "ac-modals",
      component: ACModals,
    },
    {
      path: "/sections/attention-catchers/tooltips-popovers",
      name: "ac-tooltips-popovers",
      component: ACTooltipsPopovers,
    },
    {
      path: "/sections/elements/avatars",
      name: "el-avatars",
      component: ElAvatars,
    },
    {
      path: "/sections/elements/badges",
      name: "el-badges",
      component: ElBadges,
    },
    {
      path: "/sections/elements/breadcrumbs",
      name: "el-breadcrumbs",
      component: ElBreadcrumbs,
    },
    {
      path: "/sections/elements/buttons",
      name: "el-buttons",
      component: ElButtons,
    },
    {
      path: "/sections/elements/button-groups",
      name: "el-button-groups",
      component: ElButtonGroups,
    },
    {
      path: "/sections/elements/dropdowns",
      name: "el-dropdowns",
      component: ElDropdowns,
    },
    {
      path: "/sections/elements/progress-bars",
      name: "el-progress-bars",
      component: ElProgressBars,
    },
    {
      path: "/sections/elements/toggles",
      name: "el-toggles",
      component: ElToggles,
    },
    {
      path: "/sections/elements/typography",
      name: "el-typography",
      component: ElTypography,
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
