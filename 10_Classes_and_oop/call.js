function SetUsename(username){
//    complex db calls 
    this.username = username;
}

function createUser(username, email, password){
    SetUsename.call(this, username)

       this.email = email;
       this.password = password;
}

const chai = new createUser('chai', 'chai@gmail.com', '123');
console.log(chai);