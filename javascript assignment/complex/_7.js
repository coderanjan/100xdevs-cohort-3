const users=[{
      name:"anjan",
      age:20,
      gender:"male"
},{
     name:"hikirat",
     age:22,
     gender:"male"
},{
     name:"anuska",
     age:23,
     gender:"female"
}]


var ans =users.filter(answer => answer.age>18 && answer.gender==="male");


console.log(ans);