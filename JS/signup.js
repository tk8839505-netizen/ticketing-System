const signupForm = document.getElementById("signupForm");

const signupUsername = document.getElementById("signupUsername");

const signupEmail = document.getElementById("signupEmail");

const signupPassword = document.getElementById("signupPassword");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const confirmSignupPassword = document.getElementById("confirmSignupPassword");

const signupMessage = document.getElementById("signupMessage");

signupForm.addEventListener("submit",(event)=>{


    event.preventDefault();
 
    if(signupUsername.value.trim() ===  ""){

        signupMessage.textContent = "plese Enter Username";

        signupMessage.style.color = "red";

        signupUsername.focuse();

        return;

    }
    else if(signupEmail.value.trim() === ""){

        signupMessage.textContent = "Please Enter Email";

        signupMessage.style.color = "red";

        signupEmail.focus();

        return;

    }

   else if(!emailPattern.test(signupEmail.value)){

    signupMessage.textContent = "please Enter a Valid Email";

    signupMessage.style.color = "red";

    signupEmail.focus();

    return;

   }


    else if(signupPassword.value.trim() ===  ""){

        signupMessage.textContent = "plese Enter Password";

        signupMessage.style.color = "red";

        signupPassword.focuse();

        return;

    }
    else if(signupPassword.value.length < 6 || signupPassword.value.length > 12){

        signupMessage.textContent =  "Password must be  6 to 12 charecters";

        signupMessage.style.color = "red";

        signupPassword.focus();

        return;

    }

    else if(confirmSignupPassword.value.trim() ===  ""){

        signupMessage.textContent = "plese Enter Confirm Password";

        signupMessage.style.color = "red";

        confirmSignupPassword.focus();

        return;

    }

    else if(signupPassword.value !== confirmSignupPassword.value){

            signupMessage.textContent = "Passwords do not match";

            signupMessage.style.color = "red";

            confirmSignupPassword.focus();

            return;

    }
    else{

        signupMessage.textContent = "All details are valid!";

        signupMessage.style.color = "green";

        signupForm.reset();

        setTimeout(()=>{

         window.location.href = "../html/login.html";
 

        },1000);

      }


});