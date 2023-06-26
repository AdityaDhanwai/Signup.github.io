function subform()
{
    if($("#first").val()==''|| $("#last").val()==''){alert("First and Last names are null");}
    else{
        if($("#e2").val()==''){alert("Kindly put your mail id !");}
        else{
            if($("#pass1").val()=='' || $("#pass2").val()==''){alert("Passwords are empty !")}
            else
            {
                if($("#pass1").val()!=$("#pass2").val()){alert("Passwords are not matched !")}
                else{
                    localStorage.setItem("email",$("#e2").val());
                    localStorage.setItem("password",$("#pass1").val());
                    alert("Sign up successfully");
                    window.location.href="index.html";
                }
            }
        }
    }
}

// function logform()
// {
//     if($("#e1").val()==''){alert("Enter Email-ID");}
//     else{

    
//     if($("#e1").val()==localStorage.getItem("email")){
//         if($("#pass").val()==localStorage.getItem("password"))
//         else{
//         alert("Sign in sucessfull");
//         window.location.href="welcome.html";
//     }
// }

// }
function logform()
{
    if($("#e1").val()==''){alert("Enter Email ID");}
    else{
        if($("#e1").val()==localStorage.getItem("email")){
            if($("#pass").val()==''){alert("Enter password");}
            else{
                if($("#pass").val()==localStorage.getItem("password")){
                    alert("Login successfull");
                    window.location.href="welcome.html";
                }
                else(alert("Wrong password"))
            }
        }
        else{
            alert("Invalid ID");
        }
    }
    
}