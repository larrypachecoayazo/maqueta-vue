<script setup>

import HelloWorld from '@/components/HelloWorld.vue' 
import Topbar from '@/components/Topbar.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import ButtonVue from '@/components/form/Button.vue';

</script> 

<template>

<Topbar />
<Navbar />


<div class="bg-gray-400 py-5">
<div class="bg-white container mx-auto px-5 py-4 rounded-xl">
<router-view></router-view>
</div>
</div>



<Footer />

</template>

<style>
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/
</style>
