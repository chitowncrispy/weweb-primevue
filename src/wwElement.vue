<template>
  <DataTable :value="products" tableStyle="min-width: 50rem">
    <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></Column>
  </DataTable>
</template>

<script>
import { ref } from 'vue';
import Primevue from 'primevue/config'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Row from 'primevue/row'; 
import "primevue/resources/themes/lara-light-indigo/theme.css";

export default {
  setup() {
    const products = ref();
    const columns = ref();
  },
  data() {
    return {
        products: null,
        columns: null
    };
  },
  mounted() {
    this.products = this.content.tableData || []
  },
  beforeCreate: function () {
    this.$.appContext.app.use(Primevue)
    this.$.appContext.app.component('DataTable', DataTable)
    this.$.appContext.app.component('Column', Column)
    this.$.appContext.app.component('Row', Row)
  },
  created() {
    this.columns = this.content.columns || []
  },
  props: {
    content: { type: Object, required: true },
  }
};
</script>

<style lang="scss" scoped>
// .my-element {
//   p {
//     font-size: 18px;
//   }
// }
</style>
