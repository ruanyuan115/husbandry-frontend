import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => import("@/views/dashboard/Index"),
      meta: {
        needLogin: true
      },
      children: [
        {
          path: "/register",
          component: () => import("@/views/login/register")
        },
        {
          path: "/login",
          component: () => import("@/views/login/login")
        },
        {
          path: "/home",
          component: () => import("@/views/dashboard/Home"),
          children: [
            // Dashboard
            {
              name: "index",
              path: "data",
              component: () => import("@/views/dashboard/Dashboard"),
              meta: {
                needLogin: true
              }
            },
            {
              name: "User Profile",
              path: "pages/user",
              component: () => import("@/views/dashboard/pages/UserProfile"),
              meta: {
                needLogin: true
              }
            },
            // Pages
            {
              name: "fundamentalInfo",
              path: "user",
              component: () => import("@/views/dashboard/UserHome"),
              children:[
                {
                  name: "feeding",
                  path: "feeding",
                  component: () => import("@/views/userHome/Feeding"),
                  meta: {
                    needLogin: true
                  }
                },
                {
                  name: "type",
                  path: "type",
                  component: () => import("@/views/userHome/Type"),
                  meta: {
                    needLogin: true
                  }
                },
                {
                  name: "fence",
                  path: "fence",
                  component: () => import("@/views/dashboard/Dashboard"),
                  meta: {
                    needLogin: true
                  }
                },
                {
                  name: "lair",
                  path: "lair",
                  component: () => import("@/views/dashboard/Dashboard"),
                  meta: {
                    needLogin: true
                  }
                },
              ],
              meta: {
                needLogin: true
              }
            },
            {
              name: "environment",
              path: "environment",
              component: () =>
                import("@/views/dashboard/component/Notifications"),
              meta: {
                needLogin: true
              }
            },
            {
              name: "warehouse",
              path: "warehouse",
              component: () => import("@/views/dashboard/component/Icons"),
              meta: {
                needLogin: true
              }
            },
            {
              name: "reproduce",
              path: "reproduce",
              component: () => import("@/views/dashboard/component/Typography"),
              meta: {
                needLogin: true
              }
            },
            // Tables
            {
              name: "produce",
              path: "produce",
              component: () => import("@/views/dashboard/tables/RegularTables"),
              meta: {
                needLogin: true
              }
            },
            // Maps
            {
              name: "selling",
              path: "selling",
              component: () => import("@/views/dashboard/maps/GoogleMaps"),
              meta: {
                needLogin: true
              }
            },
            {
              name: "settings",
              path: "settings",
              component: () => import("@/views/dashboard/maps/GoogleMaps"),
              meta: {
                needLogin: true
              }
            },
          ]
        }
      ]
    }
  ]
});
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.meta.needLogin === true) {
    var token = localStorage.getItem('Authorization');
    if (token === null || token === "") {
      next("/login");
    } else {
      if (to.path === "/") next(Vue.prototype.global.homeUrl);
      else next();
    }
  } else {
    next();
  }
});

export default router;
