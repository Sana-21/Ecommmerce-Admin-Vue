<script setup>
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Topbar from '@/components/Topbar.vue'
import List from '@/components/List.vue'
</script>

<template>
    <div class="app-display">
        <Topbar></Topbar>
        <Navbar></Navbar>
        <div class="inventory-list-table">
            <h2>Inventory List</h2>
            <List />
        </div>
    </div>
</template>

<style>
.app-display {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
    background-color: #e7e8e3;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.inventory-list-table {
    top: 2%;
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-left: 450px;
    width: 65%;
    padding: 40px;
    background-color: #F9FAFB;
    height: 100vh;
    overflow: hidden;
}
</style>