document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modalImg");
  
  var img1 = document.getElementById("img1");
  var img2 = document.getElementById("img2");
  var img3 = document.getElementById("img3");
  
  img1.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  }
  
  img2.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  }
  
  img3.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  }
  
  var span = document.getElementsByClassName("close")[0];
  
  span.onclick = function() {
    modal.style.display = "none";
  }
});
