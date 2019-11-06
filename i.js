// alert ("WELCOME TO SMARTECH SOLUTIONS!");  

var headOne = document.querySelector("#one");



headOne.addEventListener("mouseover", function(){
    headOne.textContent = "Place Order";
    headOne.style.color = "#FFF"
})

headOne.addEventListener("mouseout", function(){
    headOne.textContent = "Click here";
    headOne.style.color = "#d3dfe4"
})


