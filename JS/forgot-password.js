const resetUsername = document.getElementById("resetUsername");

const verifyBtn = document.getElementById("verifyBtn");

const verifyMessage = document.getElementById("verifyMessage");

const resetBtn = document.getElementById("resetBtn");

const resetPasswordMessage = document.getElementById("resetPasswordMessage");

const savedUsername = localStorage.getItem("username");

const passwordSection = document.getElementById("passwordSection");

const newPassword = document.getElementById("newPassword");

const confirmPassword = document.getElementById("confirmPassword");

passwordSection.style.display = "none";

verifyBtn.addEventListener("click",()=>{

    if(resetUsername.value.trim() === ""){

        verifyMessage.textContent = "Plaese Enter Username";

        verifyMessage.style.color = "red";


        resetUsername.focus();

        return;
    }

    if(savedUsername === null){

        verifyMessage.textContent = "No saved username found";

        verifyMessage.style.color = "red";

        return;
    }

    if(resetUsername.value === savedUsername){

        verifyMessage.textContent = "Username found";

        verifyMessage.style.color = "green";

        passwordSection.style.display = "block";
    }else{

        verifyMessage.textContent = "Username not found";

        verifyMessage.style.color = "red";
    }
});


resetBtn.addEventListener("click", ()=>{

    if(newPassword.value.trim() === ""){

        resetPasswordMessage.textContent = "please Enter New Password";

        resetPasswordMessage.style.color = "red";

        newPassword.focus();

        return;
    }

    if(confirmPassword.value.trim() === "") {

        resetPasswordMessage.textContent = "Please Confirm Password";

        resetPasswordMessage.style.color = "red";

        confirmPassword.focus();

        return;
    }

    if(newPassword.value !== confirmPassword.value) {

        resetPasswordMessage.textContent = "Passwords do not match";

        confirmPassword.value = "";

        resetPasswordMessage.style.color = "red";

        confirmPassword.focus();

        return;
    }
      resetPasswordMessage.textContent =
       "Password reset successful";

      resetPasswordMessage.style.color = "green";

       newPassword.value = "";

       confirmPassword.value = "";

       setTimeout(() => {

        window.location.href = "../html/login.html";

       },500);

});