/*

const REQ = new XMLHttpRequest();
//// Add Pic of Pet
let form = document.querySelector("#form");
let petID = document.querySelector("#petID");
let name = document.querySelector("#additionalMetadata");
let pic = document.querySelector("#pic1");

// POSTING INFORMATION TO THE SERVER
let data = `{"petID": ${petID.value},"additionalMetadata": "${name.value}","file": "${pic.value}"}`;

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
  REQ.onload = () => {
    if (REQ.status === 200) {
      // console.log(REQ);
      document.querySelector("#picpet");
      console.log(REQ);
      console.log(REQ.response);
    } else {
      console.log(`Handle Error!`);
      window.alert(`Oh no! Something has gone wrong :()`);
    }
  };
  REQ.open("POST", `https://petstore.swagger.io/v2/pet/${petID.value}/uploadImage`);
  REQ.setRequestHeader("Content-Type", "Application/json");
  //   REQ.toString(data);
  ///REQ.responseType = "json";
  REQ.send(result);
}

let butt1 = document.querySelector("#butt1");
butt1.addEventListener("click", (event) => {
  event.preventDefault();
  postPetPic();
});

*/