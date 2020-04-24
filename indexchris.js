const REQ = new XMLHttpRequest();

//// Add Pic of Pet
let form = document.querySelector("#form");
let petID = document.querySelector("#petID");
let name = document.querySelector("#additionalMetadata");
let pic = document.querySelector("#pic1");

// POSTING INFORMATION TO THE SERVER
let data = `{"petID": "${petID.value}","additionalMetadata": "${name.value}","file": "${pic.value}"}`;

let result = "'{";
function getData() {
  for (let i = 0; i < form.elements.length - 1; i++) {
    result += '"' + form.elements[i].id + '":"' + form.elements[i].value + '",';
  }
  result = result.substring(0, result.length - 1);
  console.log((result += "}'"));
  //console.log(JSON.parse(result));
}

function postPetPic() {
  getData();
  REQ.open("POST", "https://petstore.swagger.io/v2/pet/1/uploadImage");
  REQ.setRequestHeader("Content-Type", "multipart/form-data; charset=utf-8");
  REQ.setRequestHeader("Access-Control-Allow-Origin", "*/*");
  REQ.onload = () => {
    if (REQ.status === 200) {
      // console.log(REQ);
      document.querySelector("#picpet");
      console.log(REQ);
      console.log(REQ.response);
    } else {
      console.log(`Handle Error!`);
    }
  };

  //   REQ.toString(data);
  ///REQ.responseType = "json";
  REQ.send(result);
}

let butt1 = document.querySelector("#butt1");
butt1.addEventListener("click", (event) => {
  event.preventDefault();
  postPetPic();
});

/*
///// Add User Array
let id = document.querySelector("#id");
let username = document.querySelector("#username");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let phone = document.querySelector("#phone");
let userStatus = document.querySelector("#userStatus");

// POSTING INFORMATION TO THE SERVER
let data2 = `{"id": "${id.value}","username": "${username.value}","firstName": "${firstName.value}", "lastName": "${lastName.value}",
"email": "${email.value}","password": "${password.value}","phone": "${phone.value}", "userStatus": "${userStatus.value}"}`;

function postUserArray() {
  REQ.onload = () => {
    if (REQ.status === 200) {
      console.log(REQ);
      console.log(REQ.response);
    } else {
      console.log(`Handle Error!`);
    }
  };
  REQ.open("POST", "https://petstore.swagger.io/v2/user/createWithArray");
  REQ.setRequestHeader("Content-Type", "Application/json");
  ///REQ.responseType = "json";
  REQ.send(data2);
}

let butt2 = document.querySelector("#butt2");
butt2.addEventListener("click", (event) => {
  event.preventDefault();
  postPetPic();
});
*/
