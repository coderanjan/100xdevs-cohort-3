// function newarray(num){

//     var ans=[];

//     for(let i=0;i<num.length;i++){
        
//         if(num[i]%2==0){
//             ans.push(num[i]);

//         }

    
//     }

//     return ans;

// }


// var newans=newarray([1,2,3,4,5,6]);

//  for(let i=0;i<newans.length;i++){
//     console.log(newans[i]);
//  }

function newarr(num){
    
     let ans= num.filter(answer => answer%2===0);

     return ans;

    
}

var ans=newarr([1,2,3,4,5,6]);
for(let i=0;i<ans.length;i++){
    console.log(ans[i]);
}

