function validateForm() {
    var username= document.forms["myForm"]["username"].value;
    var password = document.forms["myForm"]["username"].value;
    if (username == "Ngecu" && password =="Ngecu") {
      alert("Login Successful");
        document.location.href="http://www.google.com/";
    }
    else{
      alert("Access denied. Valid username and password is required.");      
    }

  } 