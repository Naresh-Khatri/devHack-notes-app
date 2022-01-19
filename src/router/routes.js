const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Index.vue"),
        name: "Home",
        meta: {
          showMenu: true,
          statusBarStyle: { color: "#5455e5" },
        },
      },
      {
        path: "signup",
        component: () => import("src/pages/Signup.vue"),
        name: "Login/Signup",
        meta: {
          showMenu: true,
          statusBarStyle: { color: "#5455e5" },
        },
      },
      {
        path: 'forum', component: () => import('pages/Forum.vue'), name: "Forum",
        meta: {
          showMenu: false, statusBarStyle: { color: '#5455e5' }
        }
      },
      {
        path: 'profile', component: () => import('pages/Profile.vue'), name: "Profile",
        meta: {
          showMenu: false, statusBarStyle: { color: '#5455e5' }
        }
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
