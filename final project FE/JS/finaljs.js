function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


 /*Login/Reg*/ 
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
  
function register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
  
function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}


/*Slider
var a= document.getElementById("img1");
var b= document.getElementById("img2");
var c= document.getElementById("img3");
var slider = [a, b, c]
var i= 0

function back(){
  i++
  if(i>slider.length-1){
      i = 0;
      
    }
}

function next(){
  i--
  if(i<0){
      i=slider.length-1
  }
  }*/ 
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider");
    if (n > slides.length){
      slideIndex = 1}
    if (n < 1){
      slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }

