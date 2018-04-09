/*JAVASCRIPT DOCUMENT */
var bottom = document.querySelector(".bottom");
var contain = document.querySelector(".contain");
var submit = document.querySelector("#add");
var InputText = document.querySelector("#text");
var back = document.querySelector(".back");
var exit = document.querySelector(".exit");






bottom.addEventListener("click", function(){
    contain.style.display = "block";
    bottom.style.display="none";

  
});

 exit.addEventListener("click", function(){
        contain.style.display = "none";
        bottom.style.display = "block";
        


 });