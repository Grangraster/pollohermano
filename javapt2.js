let line1 = document.getElementById("line1")
let line2 = document.getElementById("line2")
let line3 = document.getElementById("line3")

let burglist = document.querySelector(".mainul2")
let burgbar = document.querySelector(".burgbar")

let register = document.getElementById("regi");

document.querySelector(".burgbar").addEventListener("click", function(){

  burglist.classList.toggle("show")
  burgbar.classList.toggle("actual")
  burgbar.classList.toggle("fir")
});


let filter = document.getElementById("filterinput");
let containers = document.querySelectorAll(".menubox")

function search(serch){
  containers.forEach(function(item){
    
    if(item.innerText.toLowerCase().includes(serch.toLowerCase())){
      item.classList.remove("pop")
    } else {
      item.classList.add("pop")
    }
  })
}

filter.addEventListener("input", function(event){
  search(event.target.value);
})
