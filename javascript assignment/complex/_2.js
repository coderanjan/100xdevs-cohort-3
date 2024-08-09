var users={
    name:"anjan",
    age:20,
    gender:"femal"
};

function greet(users){

    if(users.gender==="male"){
        console.log("Hi mr "+users.name+", your age is "+users.age)
    }else if(users.gender==="female"){
        console.log("Hi mrs "+users.name+", your age is "+users.age);
    }else{
        console.log("Hi others "+users.name+", your age is "+users.age)
    }
     
}

greet(users);