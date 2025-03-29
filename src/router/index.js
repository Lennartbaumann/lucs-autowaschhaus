import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ServicesPage from '../pages/ServicesPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import ImprintPage from '../pages/ImprintPage.vue'
import PrivacyPage from '../pages/PrivacyPage.vue'
import TermsPage from '../pages/TermsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      title: 'Startseite | Lucs Autowaschhaus',
      description: 'Willkommen bei Lucs Autowaschhaus – professionelle Autopflege in Siegburg.',
    },
  },
  {
    path: '/ueber-uns',
    name: 'About',
    component: AboutPage,
    meta: {
      title: 'Über uns | Lucs Autowaschhaus',
      description: 'Erfahre mehr über unser Team und unsere Philosophie als Autopflege-Profis.',
    },
  },
  {
    path: '/leistungen',
    name: 'Services',
    component: ServicesPage,
    meta: {
      title: 'Leistungen | Lucs Autowaschhaus',
      description: 'Professionelle Autoaufbereitung, Politur, Innen- & Außenreinigung in Siegburg.',
    },
  },
  {
    path: '/kontakt',
    name: 'Contact',
    component: ContactPage,
    meta: {
      title: 'Kontakt | Lucs Autowaschhaus',
      description: 'So erreichst du uns – telefonisch, per Mail oder direkt vor Ort in Siegburg.',
    },
  },
  {
    path: '/impressum',
    name: 'Imprint',
    component: ImprintPage,
    meta: {
      title: 'Impressum | Lucs Autowaschhaus',
      description: 'Rechtliche Angaben gemäß §5 TMG zu Lucs Autowaschhaus.',
    },
  },
  {
    path: '/datenschutz',
    name: 'Privacy',
    component: PrivacyPage,
    meta: {
      title: 'Datenschutz | Lucs Autowaschhaus',
      description: 'Hinweise zum Schutz deiner Daten und zur DSGVO-Konformität.',
    },
  },
  {
    path: '/agb',
    name: 'Terms',
    component: TermsPage,
    meta: {
      title: 'AGB | Lucs Autowaschhaus',
      description: 'Unsere Allgemeinen Geschäftsbedingungen im Überblick.',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// SEO: Seitentitel automatisch setzen
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Lucs Autowaschhaus'
  next()
})

export default router
