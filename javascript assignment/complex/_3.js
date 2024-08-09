var users={
    name:"anjan",
    age:20,
    gender:"male",
};

function legal(users){

    if(users.age>18){
        console.log("you are legal to vote");
    }else{
        console.log("you are not legal to vote");
    }

}

legal(users);