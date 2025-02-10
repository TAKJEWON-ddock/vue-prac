import { createMemoryHistory, createRouter } from "vue-router";
import SignUpView from "../view/SignUpView.vue";
import LoginView from "../view/LoginView.vue";

const routes = [
  { path: "/", component: SignUpView },
  {
    path: "/login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
