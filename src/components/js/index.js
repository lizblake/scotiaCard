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