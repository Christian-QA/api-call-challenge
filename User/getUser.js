

// GET USER

const REQ2 = new XMLHttpRequest();
let createUserButton = document.querySelector("#createUser");
let username = document.querySelector("user.username");

function getUser() {
  REQ2.onload = () => {
    if (REQ2.status === 200) {
      console.dir(REQ2);
      let responseObject = REQ2.response;
      console.log(responseObject);
    } else {
      console.log(`something went wrong`);
      window.alert(`Oh no! Something went wrong :(`);
    }
  };

  REQ2.open("GET", `https://petstore.swagger.io/v2/user/${username}`);
  REQ2.setRequestHeader("Content-type", "Application/json");
  REQ2.responseType = "json";
  REQ2.send();
}

createUserButton.addEventListener("click", getUser);
