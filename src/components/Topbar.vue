<script setup>
import Company from '@/assets/company.png'
import User from '@/assets/user.png'
import logOut from '@/assets/log-out.png'
</script>

<template>
    <div id="topbar">
        <span class="logo"><img :src='Company'> <i>Company Admin</i></span>
        <span class="options">
            <span><img :src="User" /></span>
            <span><img :src="logOut" /></span>
        </span>
    </div>
</template>

<style scoped>
#topbar {
    width: 100%;
    height: 40px;
    background-color:#FAFAFA;
    border-bottom: 1px solid #e5e7eb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    position: fixed;
    z-index: 1;
    top:0;
    padding-right: 20px;
    cursor: pointer;
}

.logo {
    display: flex;
    font-size: 24px;
    margin-left: 5px;
    margin-top: 5px;
    margin-bottom: 10px;
}

.options{
    width: 50px;
    display: flex;
    justify-content: space-between;
    margin-right: 80px;
    
}

img {
    height: 30px;
    width: 30px;
    padding-left: 20px;
    
}
.logo img{
    height: 30px;
    width: 40px;
    padding-right: 10px;
    padding-top: 5px;
}
</style>