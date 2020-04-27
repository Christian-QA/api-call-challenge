
function deleteUser() {
    REQ.open('DELETE', `http://petstore.swagger.io/v2/user/${sessionStorage.getItem("name")}`);
    REQ.setRequestHeader('Content-Type', 'Application/json');
    // REQ.setRequestHeader('Access-Control-Allow-Origin', '*'); leave this out, it throws error
    REQ.onload = () => {
        if (REQ.status === 200) {
            console.log(REQ.response);
            getLogOut();
        } else {
            console.log('handle error');
        }
    }
    REQ.send(); // Waht we want to send across
}

let buttDeleteUser = document.querySelector('#deleteUser');
buttDeleteUser.addEventListener('click', deleteUser);


