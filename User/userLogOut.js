const REQ = new XMLHttpRequest();

function getLogOut() {
  REQ.open(
    "GET","http://petstore.swagger.io/v2/user/logout"
  );
  REQ.setRequestHeader("Content-Type", "Application/json");
  REQ.onload = () => {
    if (REQ.status === 200) {
      console.log(REQ.response);
      sessionStorage.clear();
      
      document.getElementById("Logger").innerHTML = "hello";

      window.location.href = "http://127.0.0.1:5500/Group%20exercise%20gates/api-call-challenge/index.html";    

    } else {
      console.log(`Handle Error!`);
    }
  };

  REQ.send();
}

let userLogOut = document.querySelector("#userLogOut");
userLogOut.addEventListener("click", getLogOut);