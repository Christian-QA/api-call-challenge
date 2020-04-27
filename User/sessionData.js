function setUserName(userInput){
    this.userName=userInput;
    sessionStorage.setItem("name", userName);
}