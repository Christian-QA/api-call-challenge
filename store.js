const REQ = new XMLHttpRequest();
let order_butt = document.querySelector("#order_butt");
let data = '{"id": 1,"petId": 1,"quantity": 2,"shipDate": "2020-04-24T09:04:54.797Z","status": "placed","complete": true}';

function postOrders() {
    REQ.open("POST", "https://petstore.swagger.io/v2/store/order");
    REQ.setRequestHeader("Content-Type", "Application/json");
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
let postorder = document.querySelector("#postorder");
postorder.addEventListener("click", postOrders);
