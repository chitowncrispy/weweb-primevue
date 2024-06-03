<template>
  <DataTable path="itemContent" :label="tableLabel" tableStyle="min-width: 50rem">
    <Column field="category" header="Category"></Column>
    <Column field="price" header="Price"></Column>
    <Column field="qty" header="Qty"></Column>
  </DataTable>
</template>

<script>
import Primevue from 'primevue/config'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Row from 'primevue/row'; 
import "primevue/resources/themes/lara-light-indigo/theme.css";

export default {
  beforeCreate: function () {
    this.$.appContext.app.use(Primevue)
    this.$.appContext.app.component('DataTable', DataTable)
    this.$.appContext.app.component('Column', Column)
    this.$.appContext.app.component('Row', Row)
  },
  props: {
    content: { type: Object, required: true },
  },
  computed: {
    tableLabel() {
      return this.content.tableData
    }
    // textStyle() {
    //   return {
    //     color: this.content.textColor,
    //   };
    // },
    
  },
};
</script>

<style lang="scss" scoped>
// .my-element {
//   p {
//     font-size: 18px;
//   }
// }
</style>
