<template>
  <div class="dropdown">
    <select v-model="selectedRange">
      <option value="yearly">Yearly</option>
      <option value="monthly">Monthly</option>
      <option value="weekly">Weekly</option>
    </select>
  </div>
  <Bar :data="chartData" :options="options" />
</template>

<script setup>
import { monthlyRevenue, yearlyRevenue, weeklyRevenue } from '@/assets/data/data.js'
const selectedRange = ref("monthly");
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";
import { ref, watchEffect } from 'vue'
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const chartData = ref({
  labels: [],
  datasets: []
});

watchEffect(() => {
  let data;
  if (selectedRange.value == "monthly") {
    data = monthlyRevenue;
  } else if (selectedRange.value == "yearly") {
    data = yearlyRevenue;
  } else data = weeklyRevenue;

  chartData.value = {
    labels: data.labels,
    datasets: data.datasets
  };
});

const options = {
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      grid: {
        display: false
      }
    }
  }
};
</script>

<style>
  .dropdown{
    float: right;
  }
</style>