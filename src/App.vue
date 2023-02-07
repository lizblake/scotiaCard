<template>
<div id="app">
   <taskbar-item></taskbar-item>
   <scotia-card-item></scotia-card-item>
</div>
</template>

<script>
import ScotiaCardItem from './components/ScotiaCardItem.vue';
import TaskbarItem from './components/TaskbarItem.vue';

export default {
  name: "app",
  components: {
    ScotiaCardItem, 
    TaskbarItem,
  },
};
</script>
<style>
</style>
