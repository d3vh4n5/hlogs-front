import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import { AxiosInterceptor } from "./interceptors/axios.interceptor";

AxiosInterceptor()

const app = createApp(App);
app.use(router);
app.mount("#app");
