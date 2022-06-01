import { createRouter, createWebHistory } from 'vue-router'

import Inicio from '@/views/Inicio.vue' 
import Nosotros from '@/views/Nosotros.vue' 


const routes = [
    // http://localhost:3000/
    {path: "/", name:"Inicio", component: Inicio},

    // http://localhost:3000/nosotros
    {path: "/nosotros", name:"Nosotros", component: Nosotros}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router