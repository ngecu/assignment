var b = parseInt(localStorage.getItem('bidden'));
var t = parseInt(localStorage.getItem('trump'));



window.addEventListener("DOMContentLoaded", function() {
    if (b > t) {
        document.body.style.backgroundImage = "url('../images/america.jpg')";
    }
    else{
        document.body.style.backgroundImage = "url('../images/america2.jpg')";
    
    }  });



