import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  BootstrapVue,
  IconsPlugin,
  LayoutPlugin,
  ModalPlugin,
  CardPlugin,
  VBScrollspyPlugin,
  DropdownPlugin,
  TablePlugin,
} from "bootstrap-vue";

import "./assets/style/main.scss";
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(LayoutPlugin);
Vue.use(ModalPlugin);
Vue.use(CardPlugin);
Vue.use(VBScrollspyPlugin);
Vue.use(DropdownPlugin);
Vue.use(TablePlugin);

// /* import the fontawesome core */
// import { library } from "@fortawesome/fontawesome-svg-core";

// /* import font awesome icon component */
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// /* import specific icons */
// import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
// /* add icons to the library */
// library.add(faUserSecret);

/* add font awesome icon component */
// Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
