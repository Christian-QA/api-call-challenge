//
// Pets - DELETE (Felix) modified by Ash:

const REQ = new XMLHttpRequest();
let deleteButton = document.querySelector("#deleteButton");

function deletePet() {
  REQ.onload = () => {
    if (REQ.status === 200) {
      console.dir(REQ);
      let responseObject = REQ.response;
      console.log(responseObject);
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
let iD = document.querySelector("#animalId").value;
let data = `{"category": {"id": ${iD}, "name": ${aniName}},"name": ${petName}, "photoUrls": ["string"]}`;

function addPet() {
  // REQ.setRequestHeader('Access-Control-Allow-Origin', '*');
  REQ2.onload = () => {
    if (REQ2.status === 200) {
      console.log(REQ2);
      let responseobj = REQ2.response;
      console.log(responseobj);
    } else {
      console.log(`Handle Error!`);
    }
  };
    REQ2.open("POST", "https://petstore.swagger.io/v2/pet");
    REQ2.setRequestHeader("Content-Type", "Application/json");
    REQ2.responseType = "json";
    REQ2.send(data);
}
butt.addEventListener("click", addPet);
