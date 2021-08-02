
let order_butt = document.querySelector("#order_butt");


function postOrder1() {
    // id=1;
    let data = `{"id": ${1},"petId": 1,"quantity": 2,"shipDate": "${new Date().valueOf()}","status": "placed","complete": false}`;
    REQ.open("POST", "https://petstore.swagger.io/v2/store/order");
    REQ.setRequestHeader("Content-Type", "Application/json");
    REQ.onload = () => {
        if (REQ.status === 200) {
            console.log(REQ.response);
            alert("You purchased Ghost");
        } else {
            console.log(`Handle Error!`);
        }
    };
    REQ.send(data);
}

function postOrder2() {
    // id=1;
    let data = `{"id": ${2},"petId": 2,"quantity": 2,"shipDate": "${new Date().valueOf()}","status": "placed","complete": false}`;
    REQ.open("POST", "https://petstore.swagger.io/v2/store/order");
    REQ.setRequestHeader("Content-Type", "Application/json");
    REQ.onload = () => {
        if (REQ.status === 200) {
            console.log(REQ.response);
            alert("You purchased Andrex");
        } else {
            console.log(`Handle Error!`);
        }
    };
    REQ.send(data);
}

function postOrder3() {
    // id=1;
    let data = `{"id": ${3},"petId": 3,"quantity": 2,"shipDate": "${new Date().valueOf()}","status": "placed","complete": false}`;
    REQ.open("POST", "https://petstore.swagger.io/v2/store/order");
    REQ.setRequestHeader("Content-Type", "Application/json");
    REQ.onload = () => {
        if (REQ.status === 200) {
            console.log(REQ.response);
            alert("You purchased Albert");
        } else {
            console.log(`Handle Error!`);
        }
    };
    REQ.send(data);
}

function postOrder4() {
    // id=1;
    let data = `{"id": ${4},"petId": 4,"quantity": 2,"shipDate": "${new Date().valueOf()}","status": "placed","complete": false}`;
    REQ.open("POST", "https://petstore.swagger.io/v2/store/order");
    REQ.setRequestHeader("Content-Type", "Application/json");
    REQ.onload = () => {
        if (REQ.status === 200) {
            console.log(REQ.response);
            alert("You purchased Fermat");
        } else {
            console.log(`Handle Error!`);
        }
    };
    REQ.send(data);
}

let buy1 = document.querySelector("#buy1");
buy1.addEventListener("click", postOrder1);

let buy2 = document.querySelector("#buy2");
buy2.addEventListener("click", postOrder2);

let buy3 = document.querySelector("#buy3");
buy3.addEventListener("click", postOrder3);

let buy4 = document.querySelector("#buy4");
buy4.addEventListener("click", postOrder4);
