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

 register.addEventListener("click", function(){
 document.querySelector(".extr").classList.add("bongus")
});

document.querySelector(".closebutton").addEventListener('click', function(){
  document.querySelector(".extr").classList.remove("bongus")
});


let userN = document.getElementById("user").value;
let password1 = document.getElementById("pass1").value;
let password2 = document.getElementById("pass2").value;



 let errors= {}

 document.getElementById("form").addEventListener("submit", function(event){
 event.preventDefault();

 let formal = event.target

 

 if (userN.length < 6 || userN == ""){
  errors.userN = "Username is to short";
 };

 if (password1.length < 5 || password1 == ""){
  errors.password1 = "Password is to short";
 };

 if(password2 != password1){
  errors.password2 = "Passwords do not match";
 };
 
 formal.querySelectorAll(".span").forEach(function(element){
 element.textContent = "";
 });
  
 

 for(let wheel in errors){
  

  let spans = document.getElementById("errors_" + wheel);
  

  if(spans){
    spans.textContent = errors[wheel];

  }
  // if(Object.keys(errors).length ==0){
  //   document.getElementById("regi").textContent = ""
  //   document.getElementById("regi").textContent = userN

  //   formal.submit()
  // }

  //gamarjobat tu amas naxulobt ver avamushave formis validacia tu shegidliat rodesac shemimowmebt damiwerot ra iyo shecdoma.

}
console.log(errors)

});

let posta = new XMLHttpRequest();
posta.addEventListener("load", function(){
  
   let postaparse = JSON.parse(this.responseText)
   console.log(postaparse)





let slideinfo = [{
  d: 1,
  Name: "- willy",
  picture: "happycustomer.png",
  text: "The Chicken tasted like grape fruit 10/10"
  
},

{
  d: 2,
  Name: "- billy",
  picture: "happycustomer2.jpg",
  text:  "chicken was very chicken" 

 
  
},
{
  d: 3,
  Name: "Walter",
  picture: "https://static.wikia.nocookie.net/breakingbad/images/c/c0/WaltS5.jpg/revision/latest?cb=20120620012205",
  text: "My name is Walter Hartwell White. I live at 308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104. This is my confession. If you're watching this tape, I'm probably dead, murdered by my brother-in-law Hank Schrader. Hank has been building a meth empire for over a year now and using me as his chemist. Shortly after my 50th birthday, Hank came to me with a rather, shocking proposition. He asked that I use my chemistry knowledge to cook methamphetamine, which he would then sell using his connections in the drug world."   

  
},

{
  d: 4,
  Name: "-" + " "+ postaparse.data[1].first_name,
  picture: postaparse.data[1].avatar,
  text: "the chicken was pretty funky"   
},

{
  d: 5,
  Name: "-" +" "+ postaparse.data[2].first_name,
  picture: postaparse.data[2].avatar,
  text: "The Greatest chicken i have never tasted"   
}

]

let divbox = document.querySelector(".slider")



let count = 0;

function creator(event){
  
let imog = document.createElement("img")
imog.setAttribute("src", event.picture);
imog.setAttribute("class", "quickfixtf2");

  
return imog

}

function creator2(event){
  let review = document.createElement("p")
  review.textContent = event.text
  review.setAttribute("class", "slidefont")

return review
}

function creator3(event){
  let name = document.createElement("h4")
  name.textContent = event.Name 
  name.setAttribute("class", "nametag")

  return name
}


function switcher(){
  divbox.innerHTML = ""
  let final = creator(slideinfo[count]);
  divbox.appendChild(final);
  let finalname = creator3(slideinfo[count]);
  divbox.appendChild(finalname);
  let finaltext = creator2(slideinfo[count]);
  divbox.appendChild(finaltext);

}



function right(){
  if(count == slideinfo.length - 1){
    count = 0
    switcher()
    return;
  }
  count++
  switcher()

  console.log(count)

}

setInterval(function(event){
  right()
  console.log(count)
}, 12000)



switcher()

});

posta.open("GET", "https://reqres.in/api/users?page=1");
posta.send();



let droppers = document.querySelectorAll(".rotator");

let answers = document.querySelectorAll(".content");


for(let whol = 0; whol < droppers.length; whol++){
droppers[whol].addEventListener("click", function(event){
  event.target.classList.toggle("tate")
  
  
answers[whol].classList.toggle("reveal")

});

};



let value = 0;

let moyai = localStorage.getItem("moyai"); 

if(!moyai){
  value = 1;
}else{
  value = parseInt(moyai) + 1;
}


localStorage.setItem("moyai", value);


let greetingbox = document.querySelector(".greeting")

if(value >= 2){
  greetingbox.classList.add("greet")

  setTimeout(function(){
    greetingbox.classList.remove("greet")
  }, 7000)

}


document.querySelector(".end").addEventListener("click", function(){
  window.scrollTo({
    top:0,
    behavior: "smooth"
})

})








