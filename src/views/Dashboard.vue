<script setup>
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue';
import Topbar from '@/components/Topbar.vue';
import Card from '@/components/Card.vue';
import Barchart from '@/components/Barchart.vue';
import Piechart from '@/components/Piechart.vue'

</script>

<template>
    <div class="app-display">
        <Topbar></Topbar>
        <Navbar></Navbar>
        <div class="dashboard">
            <div class="info-cards">
                <Card title="Sales" value="Rs.424,340"></Card>
                <Card title="Expenses" value="Rs.223,400"></Card>
                <Card title="Profits" value="Rs.123,400"></Card>
            </div>
            <div class="middle-div">
                <div class="revenue-graph">
                    <h2>Total Revenue</h2>
                    <Barchart :selectedRange="selectedRange" />
                </div>
                <div class="pie-chart">
                    <h2>Sales Percentage</h2>
                    <Piechart/>
                </div>
            </div>

        </div>
    </div>

</template>

<style scoped>
.app-display {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
     background-color:#e7e8e3;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.dashboard {
    margin-top: 30px;
    top: 2%;
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-left: 300px;
    width: 80%;
    padding: 30px;
    background-color: #F9FAFB;
    height: 100vh;
    overflow: hidden;
}

.info-cards {
    display: flex;
    justify-content: space-around;
}

.middle-div {
    display: flex;
    flex-direction: row;
    margin-left: 35px;
    margin-top: 30px;
}

.revenue-graph {
    margin: 30px;
    flex: 1;
    width: 700px;
    height: 450px;
    padding: 30px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
}

.pie-chart {
    flex: 1;
    width: 600px;
    height: 400px;
    margin: 30px;
}

.dropdown {
    float: right;
}
</style>