const loginForm = document.getElementById("loginForm");

const username = document.getElementById("username");

const password = document.getElementById("password");

const message = document.getElementById("message");

loginForm.addEventListener("submit", function(event){

    event.preventDefault();

    if(username.value.trim() === ""){

        message.textContent = "Please enter Username";

        message.style.color = "red";

        username.focus();

        return;

    }

     if(password.value.trim() === ""){

        message.textContent = "Please enter Password";

        message.style.color = "red";

        password.focus();

        return;

    }
    const validUsername = "tushar";
    const validPassword = "62061";


     if(username.value === validUsername && password.value === validPassword){

     message.textContent = "Login Successful";
     message.style.color = "green";
    } else{

     message.textContent ="Invalid Username or Password";
     message.style.color = "red";
    }
});
