const user = {
    username: "dipali",
    loginCount: 8,
    signIn: true,

    getUserDetails: function(){
        // console.log("got user details");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());


function User(username,loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }
    
    return this
}

const userOne = new User("dipali", 8, true);
const userTwo = new User("rupali", 10, true);
console.log(userOne);
console.log(userTwo);