const REQ = new XMLHttpRequest();
function createUser() {
    let data = `[{"id": 0,"username": "${document.getElementById("username").value}","firstName": "${document.getElementById("firstname").value}", "lastName": "${document.getElementById("surname").value}","email": "${document.getElementById("email").value}","password": "${document.getElementById("password").value}","phone": "${document.getElementById("phone").value}","userStatus": 0}]`;
    REQ.onload = () => {
        if (REQ.status === 200) {
            console.log(REQ.response);
            console.log("user created");
            window.location.href = "http://127.0.0.1:5500/Group%20exercise%20gates/api-call-challenge/index.html";
        } else {
            console.log('handle error');
        }
    }
    REQ.open('POST', 'http://petstore.swagger.io/v2/user/createWithArray');
    REQ.setRequestHeader('Content-Type', 'Application/json');
    //REQ.setRequestHeader('Access-Control-Allow-Origin', '*');
    REQ.send(data); // Waht we want to send across
}

let buttCreateUser = document.querySelector('#createUser');
buttCreateUser.addEventListener('click', createUser);

