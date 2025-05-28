<script setup>
    const props = defineProps({
        title: String,
        value: String
    })
    
</script>
<template>
<div class="card">
    <h1>{{ value }}</h1>
    <p>{{ title }}</p>
</div>
</template>
<style scoped>
    .card{ 
        width: 450px;
        height: 200px;
        box-shadow: 6px 6px 8px 6px rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 40px;
        cursor: pointer;
    }
    h1{
        font-size: 45px;
    }
    p{
        font-size: 30px;
    }
</style>