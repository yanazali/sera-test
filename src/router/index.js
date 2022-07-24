import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Navbar = () =>
  import(/* webpackChunkName: "Header" */ "@/components/Navbar.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      navbar: Navbar,
      default: () =>
        import(
          /* webpackChunkName: "p-Home" */
          "@/views/Home"
        ),
    },
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(
        /* webpackChunkName: "p-login" */
        "@/views/Login.vue"
      ),
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(
        /* webpackChunkName: "p-register" */
        "@/views/Register.vue"
      ),
  },
  {
    path: "/blogposts",
    name: "blogposts",
    components: {
      navbar: Navbar,
      default: () =>
        import(
          /* webpackChunkName: "p-BlogPostsList" */
          "@/views/Crud/BlogPostsList"
        ),
    },
  },
  {
    path: '/add-blog-post',
    name: 'add-blog-post',
    components: {
      navbar: Navbar,
      default: () =>
        import(
          /* webpackChunkName: "p-FormBlogPost" */
          "@/views/Crud/FormBlogPost"
        ),
    },
  },
  {
    path: '/edit-blog-post/:id',
    name: 'edit-blog-post',
    components: {
      navbar: Navbar,
      default: () =>
        import(
          /* webpackChunkName: "p-FormBlogPost" */
          "@/views/Crud/FormBlogPost"
        ),
    },
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
