import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue'
import MenuAddModal from '../views/MenuAddModal.vue'

const User = {
    template: '<div>User</div>'
  }

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/:pathMatch(.*)*',
        component: User
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router