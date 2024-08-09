// for(let i=0;i<5;i++){
//     console.log(i);
// }

// let j=0;
// while(j<5){
//     console.log(j);
//     j++;
// }

function sum(num){
    var ans=0;

    for(let i=1;i<=num;i++){
        ans=ans+i
    }
    return ans;
}

console.log(sum(5));