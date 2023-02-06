<template>
<div id="app">
  <h1>To-Do List</h1>
  <ul>
    <li>
      <scotia-card-item></scotia-card-item>
    </li>
  </ul>
</div>
</template>

<script>
import ScotiaCardItem from './components/ScotiaCardItem.vue';

export default {
  name: "app",
  components: {
    ScotiaCardItem,
  },
};
</script>

<style>
</style>
