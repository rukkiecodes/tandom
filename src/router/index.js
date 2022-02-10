import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Signin",
    component: () => import("../views/auth/Signin.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/auth/Signup.vue"),
  },
  {
    path: "/templates",
    name: "Templates",
    component: () => import("../views/template/Templates.vue"),
    children: [
      {
        path: "/templates",
        name: "Templates",
        component: () => import("../components/template/Templates.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
