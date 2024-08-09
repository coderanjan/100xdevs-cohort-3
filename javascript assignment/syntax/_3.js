function canvote(age){
    if(age>18){
        return true;
    }else{
        return false;
    }
}

var vote1=canvote(20);
var vote2=canvote(15);

console.log(vote1);
console.log(vote2);
