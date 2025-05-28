<template>
  <Pie :data="chartData" :options="{ maintainAspectRatio: false }" />
</template>

<script setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  ArcElement
} from "chart.js";
import {Pie} from "vue-chartjs";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const chartData = {
  labels: [
    'Category1',
    'Category2',
    'Category3',
    'Category4'
  ],
  datasets: [{
    label: 'Sale Percentage',
    data: [30, 50, 100, 90],
    backgroundColor: [
      '#1e81b0',
      '#154c79',
      'black',
      'grey'
    ],
    hoverOffset: 4
  }]
};
</script>