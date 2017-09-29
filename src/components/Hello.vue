<template>
  <div class="hello">
    <h1></h1>
    <kendo-calendar :value="new Date()"></kendo-calendar>
    <kendo-datasource ref="datasource1"
                        :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Products'"
                        :transport-read-data-type="'jsonp'"
                        :page-size='10'>
    </kendo-datasource>

    <kendo-grid :height="550"
                :data-source-ref="'datasource1'">
    </kendo-grid>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Hello Kendo UI for Vue.js'
    }
  }
}
</script>
