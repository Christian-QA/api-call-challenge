//
// Pets - DELETE (Felix):

const REQ = new XMLHttpRequest();
let demo = document.querySelector("#demo");
let deleteButton = document.querySelector("#deleteButton");

function deletePet() {
  REQ.onload = () => {
    if (REQ.status === 200) {
      // Status 200 code means "OK"
      console.log(`I responded with...`);
      console.dir(REQ);
      let responseObject = REQ.response;
      console.log(responseObject.username);
      demo.innerHTML = responseObject.username;
    } else {
      console.log("Oops, something went wrong");
    }
  };

  let deleteId = document.querySelector("#deleteId").value;

  REQ.open("DELETE", `http://petstore.swagger.io/v2/pet/${deleteId}`);
  REQ.setRequestHeader("Content-type", "Application/json");
  REQ.responseType = "json";
  REQ.send();
}
deleteButton.addEventListener("click", deletePet);

//
// Pets - ADD (Luke):

const REQ2 = new XMLHttpRequest();
let butt = document.querySelector("#addButton");
let aniName = document.querySelector("#animal");
let petName = document.querySelector("#animalName");
let data = `{"category: {"id": 1, "name": ${aniName.value}},name": ${petName.value}, "photoUrls": ["string"]}`;

function addPet() {
  REQ2.open("POST", "http://petstore.swagger.io/v2/pet");
  REQ2.setRequestHeader("Content-Type", "Application/json");
  // REQ.setRequestHeader('Access-Control-Allow-Origin', '*');
  REQ2.responseType = "json";
  REQ2.onload = () => {
    if (REQ2.status === 200) {
      console.log(REQ2);
      console.log(REQ2.response);
    } else {
      console.log(`Handle Error!`);
    }
  };
    REQ2.send(data);
}
butt.addEventListener("click", addPet);
