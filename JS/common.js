
function checkLogin(){

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if(isLoggedIn !=="true"){

        window.location.href = "../html/loging.html";
    }
}

function logout(){

    localStorage.removeItem("isLoggedIn");

    window.location.href = "../html/login.html";
}
checkLogin();


const logoutBtn = document.getElementById("logoutBtn");

if(logoutBtn){

    logoutBtn.addEventListener("click",logout);
}