document.querySelector(".details").addEventListener("click", function (e) {
    var pTag = document.querySelector("p");
    if(pTag.style.display === "none") {
        pTag.style.display = "block";
    } else {
      pTag.style.display = "none";
    }
}); 