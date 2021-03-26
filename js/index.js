function validateForm() {
    var username= document.forms["myForm"]["username"].value;
    var password = document.forms["myForm"]["username"].value;
    if (username != "Ngecu" && password !="Ngecu") {
      alert("Wrong Credentials");
      return false;
    }
    else{
      window.location.assign("http://www.google.com/")
      
    }

  } 