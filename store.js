//CREATE AN ORDER

let order_butt = document.querySelector("#order_butt");
let data = '{"petId": 2, "quantity": 2}';

function orderPet() {
    REQ.open("POST", "https://petstore.swagger.io/v2/store/order");
    REQ.setRequestHeader("Content-Type", "Application/json");
    // REQ.setRequestHeader('Access-Control-Allow-Origin', '*');
    REQ.responseType = "json";
    REQ.onload = () => {
        if (REQ.status === 200) {
            console.log(REQ);
            console.log(REQ.response);
        } else {
            console.log(`Handle Error!`);
        }
    };
    REQ.send(data);
}