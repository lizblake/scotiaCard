<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
//add
document.querySelector(".add").addEventListener("click", function (e) {
  const node1 = document.querySelector(".card");
  let node2 = node1.cloneNode(true);
  document.body.appendChild(node2);
});
//hover
document.querySelector(".card").addEventListener("mouseenter", function (e) {
  document
    .querySelector(".card")
    .setAttribute("style", "box-shadow: 7px 6px 28px 1px rgba(0, 0, 0.25, 0.25);");     
});
document.querySelector(".card").addEventListener("mouseleave", function (e) {
  document
    .querySelector(".card")
    .setAttribute("style", "box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0);");
});
//background
document.querySelector(".background").addEventListener("click", function (e) {
  document.querySelectorAll(".card").forEach((item, index) => {
    if (!item.classList.contains("lighten")) {
      item.classList.add("lighten");
    } else {
      item.classList.remove("lighten");
    }
  });
});
//title
document.querySelector(".title").addEventListener("click", function (e) {
  document.querySelector("h1").innerHTML = "something else";
});

//delete
document.querySelector(".delete").addEventListener("click", function (e) {
  var once = false;
  document.querySelectorAll(".card").forEach((item, index) => {
    if (index != 0 && !once) {
      item.remove();
      once = true;
    }
  });
});
//details
document.querySelector(".details").addEventListener("click", function (e) {
  var pTag = document.querySelector("p");
  if(pTag.style.display === "none") {
      pTag.style.display = "block";
  } else {
    pTag.style.display = "none";
  }
 }); 

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");

@keyframes card_hover {
  from {
    background-color: dark grey;
  }
  to {
    background-color: #46055b;
  }
  from {
    color: black;
  }
  to {
    color: white;
  }
}
.card {
  color: #220032;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  padding: none;
  width: 400px;
  border-radius: 10px;
  background-color: grey;
  background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 1)
  );
}

:hover.card {
  animation-name: card_hover;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.title {
  text-align: center;
  font-family: "Anton", sans-serif;
  margin: none;
  padding: none;
}
.paragraph {
  text-align: center;
  font-family: "Anton", sans-serif;
  font-size: 12px;
  padding: 10px;
  padding-top: none;
  padding-bottom: none;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 370px;
  width: 70%;
  border: none;
}
.btn {
  text-align: center;
  visibility: hidden;
}

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

h1 {
  margin: 0;
  padding-top: 20px;
}

p {
  margin: 0;
  padding-bottom: 5px;
  display: none;
}

.add, .background, .title, .delete {
  border-color: #220032;
    margin: 10px;
 }
.taskbar {
  display: block;
  width: 20%;
}

@media screen and (max-width: 800px) and (min-width: 500px) {
  .btn {
    visibility: visible;
  }
}

@media screen and (max-width: 500px) {
  .card {
    transform: scale(0.7);
  }
}

.lighten {
  background-color: lightblue;
}
</style>
