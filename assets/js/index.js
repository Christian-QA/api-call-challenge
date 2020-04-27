var helloUser = document.getElementById("helloUser");



if (sessionStorage.getItem("name")==null){
helloUser.innerHTML = "Heilo Pet Store ";
document.getElementById("userLogOut").style.display = "none";
document.getElementById("deleteUser").style.display = "none";
} else {
document.getElementById("userLogin").style.display = "none";
document.getElementById("register").style.display = "none";
helloUser.innerHTML = "Hello " + sessionStorage.getItem("name");
}