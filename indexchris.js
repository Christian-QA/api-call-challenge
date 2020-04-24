const REQ = new XMLHttpRequest();

let petID = document.querySelector("#petID");
let name = document.querySelector("#name1");
let pic = document.querySelector("#pic1");

// POSTING INFORMATION TO THE SERVER
let data = `{"petID": "${petID}","file": "${name1}","additionalMetadata": "${pic1}"}`;

function postPetPic() {
  REQ.onload = () => {
    if (REQ.status === 200) {
      // console.log(REQ);
      document.querySelector("#petID").innerHTML = REQ.response[0].petID;
      document.querySelector("#pic1").innerHTML = REQ.response[0].file;
      document.querySelector("#name1").innerHTML =
        REQ.response[0].additionalMetadata;
    } else {
      console.log(`Handle Error!`);
    }
  };
  REQ.open("POST", "https://petstore.swagger.io/v2/pet/1/uploadImage");
  REQ.setRequestHeader("Content-Type", "Application/json");
  REQ.toString(data);
  ///REQ.responseType = "json";
  REQ.send(data);
}

let butt1 = document.querySelector("#butt1");
butt1.addEventListener("click", (event) => {
  event.preventDefault();
  postPetPic();
});
