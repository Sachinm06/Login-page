function login(){

uname=username.value

localStorage.setItem("uname",uname)

    window.location="home.html"
}

usern=localStorage.getItem("uname")

d1.innerHTML=usern

function logout(){
    window.location="index.html"
    localStorage.removeItem("uname")
}