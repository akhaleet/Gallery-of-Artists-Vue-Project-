import { createRouter, createWebHistory } from 'vue-router'
import Pocetna from '../views/Pocetna.vue'
import Umetnine from '../views/Umetnine.vue'
import Umetnici from '../views/Umetnici.vue'
import MojNalog from '../views/MojNalog.vue'
import Onama from '../views/Onama.vue'
import Slike from '../views/Slike.vue'
import Skulpture from '../views/Skulpture.vue'
import Ostalo from '../views/Ostalo.vue'


const routes = [
  {
    path: '/',
    name: 'Pocetna',
    meta: { title: 'Početna' },
    component: Pocetna,
    
  },
  {
    path: '/umetnine',
    name: 'Umetnine',
    component: Umetnine,
    meta: { title: 'Umetnine' },
    children: [
      {
        path: 'slike',
        name: 'Slike',
        component: Slike,
        meta: { title: 'Slike' },
      },
      {
        path: 'skulpture',
        name: 'Skulpture',
        component: Skulpture,
        meta: { title: 'Skulpture' },
      },
      {
        path: 'ostalo',
        name: 'Ostalo',
        component: Ostalo,
        meta: { title: 'Ostalo' },
      }
    ]
  },
  {
    path: '/umetnici',
    name: 'Umetnici',
    component: Umetnici,
    meta: { title: 'Umjetnici' },
  },
  {
    path: '/mojnalog',
    name: 'MojNalog',
    component: MojNalog,
    meta: { title: 'Moj nalog' },
  },
  {
    path: '/onama',
    name: 'Onama',
    component: Onama,
    meta: { title: 'O nama' },
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to);
  document.title = to.meta.title;
  next();
});

export default router
