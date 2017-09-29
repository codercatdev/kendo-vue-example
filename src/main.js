// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@progress/kendo-ui'
import '@progress/kendo-theme-material/dist/all.css'
import { KendoCalendar } from '@progress/kendo-dateinputs-vue-wrapper'
import { KendoGrid, KendoGridInstaller } from '@progress/kendo-grid-vue-wrapper'
import { KendoDataSource, KendoDataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper'

Vue.config.productionTip = false
Vue.component(KendoCalendar.name, KendoCalendar)
Vue.use(KendoGridInstaller)
Vue.use(KendoDataSourceInstaller)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
    KendoCalendar,
    KendoDataSource,
    KendoGrid
  }
})
