import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Signup",
    component: () => import("../views/auth/Signup.vue"),
  },
  {
    path: "/signin",
    name: "Signin",
    component: () => import("../views/auth/Signin.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/editor",
    name: "Editor",
    component: () => import("../views/Editor.vue"),
  },
  {
    path: "/Template",
    name: "Template",
    component: () => import("../views/template/Template.vue"),
    children: [
      {
        path: "cataloge",
        name: "Cataloge",
        component: () => import("../views/template/Cataloge.vue")
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
