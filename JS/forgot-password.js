const resetUsername = document.getElementById("resetUsername");

const resetBtn = document.getElementById("resetBtn");

const resetMessage = document.getElementById("resetMessage");

const savedUsername = localStorage.getItem("username");

resetBtn.addEventListener("click",()=>{

    if(resetUsername.value.trim() === ""){

        resetMessage.textContent = "Plaese Enter Username";

        resetMessage.style.color = "red";


        resetUsername.focus();

        return;
    }

    if(savedUsername === null){

        resetMessage.textContent = "No saved username found";

        resetMessage.style.color = "red";

        return;
    }

    if(resetUsername.value === savedUsername){

        resetMessage.textContent = "Username found";

        resetMessage.style.color = "green";
    }else{

        resetMessage.textContent = "Username not found";

        resetMessage.style.color = "red";
    }

});