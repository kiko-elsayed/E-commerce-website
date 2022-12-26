const bar =document.getElementById("bar")
const navbar =document.getElementById("navbar")
const close =document.getElementById("close")


bar.onclick = function(){
    navbar.classList.add('active');
}

if(close){

    close.addEventListener("click" , ()=>{
        navbar.classList.remove('active');
    })
}

//----------shop page--------------

var productClick = document.getElementById("productClick");

function openPage(){
    
    window.location.assign("./Sproduct.html")
}
productClick.onclick = openPage;

//---------- Sproduct page --------------

var MainImg =document.getElementById("MainImg");
var smallImg =document.getElementsByClassName("small-photo");

function replaceImg(smallImg) {
    MainImg.src =smallImg.src
}

