<script setup>
import {ref} from 'vue'
import Customers from '@/assets/customer.png'
import Dashboard from '@/assets/dashboard.png'
import Orders from '@/assets/orders.png'
import Products from '@/assets/products.png'

</script>

<template>
    <div>
        <ul>
            <li><img :src='Dashboard'><router-link to="/" class="custom-link">Dashboard </router-link></li>
            <li> <img :src='Products'><router-link to="/inventory" class="custom-link">Inventory</router-link></li>
            <li> <img :src='Orders'><router-link to="/Product" class="custom-link">Add Product</router-link></li>
            <li><img :src='Customers'>Customers</li>
        </ul>
    </div>
</template>

<style scoped>
div{
    width:250px;
    background-color: #FAFAFA;
    margin-top: 35px;
    margin-left:0px;
    display:flex;
    flex-direction: column;
    height: 100vh;
    box-shadow: 12px 0 15px rgba(0,0,0,0.1);
    position: fixed;
    z-index: 1;
    color: black ;
    text-decoration: none;
}

ul{
    margin-top: 20px;
}

div ul li{
 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 margin-bottom: 22px;
 font-weight: bold;
 display: flex;
 flex-direction: row;
 font-size: 20px;
 cursor: pointer;
}

img{
    height: 35px;
    width: 35px;
   padding-right: 10px;
}

.custom-link{
    color: inherit;
    text-decoration: none;
}

</style>