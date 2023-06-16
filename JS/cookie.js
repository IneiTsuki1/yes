const cookieBox = document.querySelector(".wrapper");
acceptBtn = cookieBox.querySelector(".buttons button");

acceptBtn.onclick = ()=>{
    //setting cookie for 1 month, after 1 month cookie will expire automatically
    document.cookie = "Cookies; max-age="+60*60*24*30;
    if(document.cookie){ //if above cookie set
            cookieBox.classList.add("hide"); //hide cookie box once cookie is set
    }else{
        alert("Cookie can't be set!"); //if cookie cant be set hen alert an error
    }
}

// hide the cookie box if cookie is set and not expired
let checkCookie = document.cookie.indexOf("Cookies"); // checking set cookie
//if cookie is set hide the cookie box else show it
checkCookie !=1 ? cookieBox.classList.add("hide"): cookieBox.classList.remove("hide");