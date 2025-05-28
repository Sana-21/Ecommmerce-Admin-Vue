<script setup>
import { ref } from 'vue'
import { AgGridVue } from "ag-grid-vue3";
import { ModuleRegistry, AllCommunityModule, themeAlpine } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Upload from '@/assets/upload.png'
import { inventoryData } from '@/assets/data/inventory.js'

ModuleRegistry.registerModules([AllCommunityModule]);
const theme = ref(themeAlpine);
const rowData = ref(inventoryData);
const colDefs = ref([
    {field: "id"},
    {
        field: "image",
        headerName: "Image",
        cellRenderer: params => {
            return `<img src="${params.value}" style="height: 40px; width:40px" />`;
        }
    },
    { field: "Product", filter: true },
    { field: "Price", filter: true },
    { field: "Inventory", filter: true },
    { field: "Status", filter: true,}
]);
</script>

<template>
    <div class="theme">
        <ag-grid-vue :rowData="rowData" :columnDefs="colDefs" style="height: 800px; width:100%;" :theme="theme">
        </ag-grid-vue>
    </div>
</template>

<style scoped>
.theme{
    --ag-font-size: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
}
</style>