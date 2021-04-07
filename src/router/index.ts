import { createRouter, createWebHistory } from "vue-router";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () =>
        import(
          /* webpackChunkName: "basicLayout" */ "../layouts/BasicLayout.vue"
        ),
    },
    {
      path: "/",
      redirect: "/passport",
    },
    {
      path: "/passport",
      component: () =>
        import(
          /* webpackChunkName: "userLayout" */ "../layouts/UserLayout.vue"
        ),
      children: [
        {
          path: "/passport",
          redirect: "/passport/login",
        },
        {
          path: "/passport/login",
          name: "login",
          component: () =>
            import(
              /* webpackChunkName: "login" */ "../views/account/Login.vue"
            ),
        },
      ],
    },
  ],
});
router.beforeEach((to, from, next) => {
  Nprogress.start();
  next();
});

router.afterEach(() => {
  Nprogress.done();
});

export default router;
