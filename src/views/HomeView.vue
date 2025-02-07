<template>
  <div class="home">
    <ag-grid-vue
      :rowData="rowData"
      :columnDefs="colDefs"
      :theme="myTheme"
      :rowSelection="rowSelection"
      style="height: 80vh; width: auto"
    >
    </ag-grid-vue>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { themeQuartz, RowSelectionOptions } from "ag-grid-community";
import { AgGridVue } from "ag-grid-vue3"; // Vue Data Grid Component

export default {
  name: "HomeView",
  components: {
    AgGridVue,
  },
  setup() {
    const myTheme = themeQuartz.withParams({
      headerHeight: 35,
      rowHeight: 35,
      columnBorder: { style: "dotted", color: "#9696C8" },
    });

    const rowSelection = ref<RowSelectionOptions | "single" | "multiple">({
      mode: "multiRow",
    });
    // Row Data: The data to be displayed.
    const rowData = ref([
      { make: "Tesla", model: "Model Y", price: 64950, electric: true },
      { make: "Ford", model: "F-Series", price: 33850, electric: false },
      { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    ]);

    // Column Definitions: Defines the columns to be displayed.
    const colDefs = ref([
      {
        field: "make",
        cellRenderer: (params: any) => {
          // put the value in bold
          return "Value is <b>" + params.value + "</b>";
        },
        filter: true,
        floatingFilter: true,
      },
      {
        field: "model",
        filter: true,
        floatingFilter: true,
      },
      {
        field: "price",
        valueFormatter: (p: any) => "£" + p.value.toLocaleString(),
        filter: true,
        floatingFilter: true,
      },
      {
        field: "electric",
        filter: true,
        floatingFilter: true,
      },
    ]);

    return {
      myTheme,
      rowSelection,
      rowData,
      colDefs,
    };
  },
};
</script>
