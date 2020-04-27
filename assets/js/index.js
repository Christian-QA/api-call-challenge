var helloUser = document.getElementById("helloUser");

if (sessionStorage.getItem("name")==null){
helloUser.innerHTML = "Heilo Pet Store ";
} else {
helloUser.innerHTML = "Hello " + sessionStorage.getItem("name");
}