const REQ = new XMLHttpRequest();

function getLogin() {
  let loginData = `{"username": "${document.getElementById("username").value}","password": "${document.getElementById("password").value}"}`;
  let obj2 = JSON.parse(loginData);
  REQ.open("GET",`https://petstore.swagger.io/v2/user/login?username=${obj2.username}&password=${obj2.password}`);
  REQ.setRequestHeader("Content-Type", "Application/json");
  REQ.onload = () => {
    if (REQ.status === 200) {
      console.log(REQ.response);
    } else {
      console.log(`Handle Error!`);
    }
  };
  REQ.send(loginData);
}


function getUsername() {
  let loginData = `{"username": "${document.getElementById("username").value}","password": "${document.getElementById("password").value}"}`;
  let obj2 = JSON.parse(loginData);
  REQ.open("GET", `http://petstore.swagger.io/v2/user/${obj2.username}`);
  REQ.setRequestHeader("Content-Type", "Application/json");
  REQ.onload = () => {
    if (REQ.status === 200) {
      // console.log(REQ.response);
      let obj1 = JSON.parse(REQ.response);
      if (obj2.password === obj1.password){
        console.log("logging in...");

        setUserName(obj2.username);
        console.log("Welcome " + userName);

        // var helloUser = document.getElementById("helloUser");
        // helloUser.innerHTML = `Hello ${obj1.username}`;
           getLogin(); 
           changeUserstatus(obj1);
      } else{
        console.log("password incorrect");
      }
    } else {
      console.log(`Handle Error!`);
    }
  };
  REQ.send(loginData.username);
}

function changeUserstatus(detailsObject) {
  detailsObject.userStatus = 1;
  detailsJSON = JSON.stringify(detailsObject);
  REQ.open("PUT", `http://petstore.swagger.io/v2/user/${detailsJSON.username}`);
  REQ.setRequestHeader("Content-Type", "Application/json");
  REQ.onload = () => {
    if (REQ.status === 200) {
      console.log("logged in succesfully!");
        // change the page!
        // window.location.href = "http://127.0.0.1:5500/New%20Template/index.html";    
    } else {
      console.log(`Handle Error!`);
    }
  };
  REQ.send(detailsJSON);
}

function login2() {
  getUsername();
}


let buttGetLogin = document.querySelector("#getLogIn");
buttGetLogin.addEventListener("click", login2);
