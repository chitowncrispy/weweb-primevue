<template>
  <DataTable :value="products" :stripedRows="dynamicStripedRows" :paginator="dynamicPaginator" :rows="20" :rowsPerPageOptions="[5, 10, 20, 50]" paginatorTemplate="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown" currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" tableStyle="min-width: 50rem">
    <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" :sortable="col.sortable"></Column>
  </DataTable>
</template>

<script>
import { ref } from 'vue';
import Primevue from 'primevue/config'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Row from 'primevue/row'; 
import "primevue/resources/themes/lara-light-indigo/theme.css";
import { ProductService } from './ProductService.js'

export default {
  setup() {
    const products = ref();
    const columns = ref();
    const dynamicStripedRows = ref();
    const dynamicPaginator = ref();
  },
  data() {
    return {
        products: null,
        columns: null,
        dynamicStripedRows: false,
        dynamicPaginator: false
    };
  },
  mounted() {
    this.products = this.content.tableData || [];
    this.dynamicStripedRows = this.content.stripedRowsControl || false;
    this.dynamicPaginator = this.content.paginatorControl || false;
  },
  beforeCreate: function () {
    this.$.appContext.app.use(Primevue)
    this.$.appContext.app.component('DataTable', DataTable)
    this.$.appContext.app.component('Column', Column)
  },
  created() {
    // The following line is for testing
    // this.columns = ProductService.getColumns()
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
