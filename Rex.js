//get the button:
let mybutton = document.getElementById("mybtn");

// when the user scroll show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 20 ||
document.documentElement.scrollTop > 20){
    mybutton.style.display = "block";
}else{
    mybutton.style.display = "none";
}
}

//when the user click the button scroll to top
function topFunction(){
    document.body.scrollTop = 0; // for safari
    document.documentElement.scrollTop = 0; // for chrome firefox other website
}

