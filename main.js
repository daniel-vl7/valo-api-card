import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from "primevue/config";

// App Theme
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

// Add PrimeFlex
import 'primeflex/primeflex.css';

// Add Components
import Card from "primevue/card";
import Button from "primevue/button";
import SplitButton from "primevue/splitbutton"
import Menu from "primevue/menu";
import Menubar from "primevue/menubar";
import Toolbar from "primevue/toolbar";

createApp(App)
    .use(PrimeVue, { ripple: true })
    .component('pv-card', Card)
    .component('pv-button', Button)
    .component('pv-menu', Menu)
    .component('pv-menubar', Menubar)
    .component('pv-toolbar', Toolbar)
    .component('pv-split', SplitButton)
    .mount('#app')

