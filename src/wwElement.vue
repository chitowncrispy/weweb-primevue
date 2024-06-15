<template>
  <DataTable :value="products" :stripedRows="dynamicStripedRows" :removableSort="dynamicRemovableSort" :paginator="dynamicPaginator" :rows="20" :rowsPerPageOptions="[5, 10, 20, 50]" paginatorTemplate="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown" currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" v-model:filters="filters" tableStyle="min-width: 50rem">
    <template v-if="dynamicHeader" #header>
      <div class="flex justify-content-end">
        <IconField iconPosition="left">
          <InputIcon class="pi pi-search" />
          <InputText v-model="filters['global'].value" :placeholder="dynamicSearchPlaceHolder" />
        </IconField>
      </div>
    </template>
    <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" :sortable="col.sortable" :style="col.customStyle"></Column>
  </DataTable>
</template>

<script>
import { ref } from 'vue';
import { FilterMatchMode } from 'primevue/api';
import Primevue from 'primevue/config'
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import { ProductService } from './ProductService.js'

export default {
  setup() {
    const columns = ref();
    const dynamicHeader = ref();
    const dynamicPaginator = ref();
    const dynamicRemovableSort = ref();
    const dynamicSearchPlaceHolder = ref();
    const dynamicStripedRows = ref();
    const filters = ref();
    const products = ref();
    // const dynamicGlobalFilterFields = ref();
  },
  data() {
    return {
        products: null,
        columns: null,
        // dynamicGlobalFilterFields: null,
        dynamicStripedRows: false,
        dynamicHeader: false,
        dynamicPaginator: false,
        dynamicRemovableSort: false,
        dynamicSearchPlaceHolder: "Search",
        filters: {
          global: { value: null, matchMode: FilterMatchMode.CONTAINS }
        }
    };
  },
  mounted() {
    this.products = this.content.tableData || [];
    this.dynamicStripedRows = this.content.stripedRowsControl || false;
    this.dynamicHeader = this.content.showHeaderControl || false;
    this.dynamicPaginator = this.content.paginatorControl || false;
    this.dynamicRemovableSort = this.content.removeableSortControl || false;
    this.dynamicSearchPlaceHolder = this.content.searchInputPlaceholder || "Search";
  },
  beforeCreate: function () {
    this.$.appContext.app.use(Primevue)
    this.$.appContext.app.component('DataTable', DataTable)
    this.$.appContext.app.component('Column', Column)
    this.$.appContext.app.component('IconField', IconField)
    this.$.appContext.app.component('InputIcon', InputIcon)
    this.$.appContext.app.component('InputText', InputText)
  },
  created() {
    // The following line is for testing
    // this.columns = ProductService.getColumns();
    this.columns = this.content.columns || [];
    // this.dynamicGlobalFilterFields = this.columns.map(column => column.field);
  },
  props: {
    content: { type: Object, required: true },
  }
};
</script>

<style lang="scss" scoped>
@import url('https://unpkg.com/primeicons@7.0.0/primeicons.css');
@import url('https://unpkg.com/primeflex@3.3.1/primeflex.css');
// .my-element {
//   p {
//     font-size: 18px;
//   }
// }
</style>
