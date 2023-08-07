import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue';
import TutorsView from './views/TutorsView.vue';
import PricingView from './views/PricingView.vue'; 
import PaymentView from './views/PaymentView.vue';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tutors/',
      name: 'tutors',
      component: TutorsView
    },
    {
      path: '/pricing/',
      name: 'pricing',
      component: PricingView
    },
    {
      path: '/payment/',
      name: 'payment',
      component: PaymentView
    },
  ]
});