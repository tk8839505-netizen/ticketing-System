const isLoggedIn = localStorage.getItem("isLoggedIn");

if(isLoggedIn !== "true"){

    window.location.href = "../html/login.html";
}
else{

    document.body.style.visibility = "visible";
}