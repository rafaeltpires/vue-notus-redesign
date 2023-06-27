import { createRouter, createWebHistory } from 'vue-router'
import userRoutes from "@/router/userRoutes";
import authRoutes from '@/router/authRoutes';
import adminRoutes from '@/router/adminRoutes';



// const allRoutes = routes.concat(userRoutes);   <- If we add more route files we have to concat them
let allRoutes = userRoutes.concat(authRoutes);
allRoutes = allRoutes.concat(adminRoutes);
// Create the router instance and pass the `routes` option
const router = createRouter({
  // Provide the history implementation to use.
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: allRoutes,
})

export default router
