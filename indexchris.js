const REQ = new XMLHttpRequest();

function getTodos() {
  REQ.onload = () => {
    if (REQ.status === 200) {
      // console.log(REQ);
      console.log(REQ.response);
      console.log(REQ.response.title);
      document.querySelector("#resp").innerHTML = REQ.response[0].title;
    } else {
      console.log(`Handle Error!`);
    }
  };
  REQ.open("GET", "https://petstore.swagger.io/v2/swagger.json/");
  REQ.setRequestHeader("Content-Type", "Application/json");
  // REQ.setRequestHeader("Access-Control-Allow-Origin", "*");
  REQ.responseType = "json";
  REQ.send();
}

let butt1 = document.querySelector("#butt1");
butt1.addEventListener("click", getTodos);
