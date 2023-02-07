<template> 
<div class="taskbar">
  <button class="add">Add</button>
  <button class="background">Background</button>
  <button class="title">Title</button>
  <button class="delete">Delete</button>
</div>
</template>
<script>
  export default {};
</script>
<style scoped>
button {
  border: solid;
  border-color: transparent;
  color: #220032;
  margin: 10px;
  border-radius: 15px;
  width: 200px;
  height: 30px;
  background-color: white;
  font-family: "Anton", sans-serif;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.6;
}

button:active {
  box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
  transform: translateY(4px);
}
button:hover, button:focus {
  background-color: white;
  color: #220032;
  border-color: transparent;
  box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
  opacity: 1;
}

.add, .background, .title, .delete {
  border-color: #220032;
    margin: 10px;
 }
.taskbar {
  display: block;
  width: 20%;
}

</style>
