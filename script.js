var myName="Fatimah Daves";
var myCourses=["Html", "Css", "Javascript", "Nodejs"];
var i;

//display my name
console.log("My name is :" + " " + myName);
console.log("I offer the following courses:");
//display my courses
for (i in myCourses){
    
    console.log(myCourses[i]);
}
 
//functional component for even numbers from 1-200
function evenNumbers(){
    for (i=1; i<=200; i++){
        if((i%2==0)){
            console.log(i);
        }
    }
}

//functional component for odd numbers from 1-200
function oddNumbers(){
    for (i=1; i<=200; i++){
        if((i%2!=0)){
            console.log(i);
        }
    }
}

//display even numbers if number of courses is even and odd if numnuber of corses is odd
if ((myCourses.length%2)==0){
    evenNumbers();
}
else{
  oddNumbers();
}