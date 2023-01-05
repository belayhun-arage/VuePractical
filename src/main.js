import { createApp } from 'vue'
import App from './App.vue'
import './styles/app.css'; 
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {faMinus} from '@fortawesome/free-solid-svg-icons'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faMinus)
library.add(faPlus)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
