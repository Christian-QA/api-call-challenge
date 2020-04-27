let deleteData = '{"username" : "Korbinian"}'

function deleteUser() {
    let obj = JSON.parse(deleteData);
    REQ.open('DELETE', `http://petstore.swagger.io/v2/user/${obj.username}`);
    REQ.setRequestHeader('Content-Type', 'Application/json');
    // REQ.setRequestHeader('Access-Control-Allow-Origin', '*'); leave this out, it throws error
    REQ.onload = () => {
        if (REQ.status === 200) {
            console.log(REQ.response);
        } else {
            console.log('handle error');
        }
    }
    REQ.send(deleteData); // Waht we want to send across
}

let buttDeleteUser = document.querySelector('#buttDeleteUser');
buttDeleteUser.addEventListener('click', deleteUser);


