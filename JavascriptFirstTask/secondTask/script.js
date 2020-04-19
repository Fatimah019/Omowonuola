let mul3and5=[];
//let sum=0;
for (let i=0; i<60; i++){
    if((i%3===0)||(i%5===0)){
        //sum+=i;
        mul3and5.push(i);
    }
}

let sum=mul3and5.reduce((a, b)=>{
    return(a+b);
});
console.log(sum);

var arr=["hello", "you", "girl"];

arr.shift();
arr.unshift("yap");

