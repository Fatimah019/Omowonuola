//array of objects "data"
let data=[
    {"Principal":2500, "time":1.8},
    {"Principal":1000, "time":5},
    {"Principal":3000, "time":1},
    {"Principal":2000, "time":3}
]; 
let rate, interest, interestData=[];

var InterestCalculator=(array)=>{
    //for each of the objects in the data array, consider the following conditions
    array.forEach((i)=>{
        //conditions for outputing the rate values
        if ((i.Principal>=2500) && (i.time>1<3)){
            rate=3;
        }
        else if ((i.Principal>=2500) && (i.time>=3)){
            rate=4;
        }
        else if ((i.Principal<2500) || (i.time<=1)){
            rate=2;
        }
        else{
            rate=1;
        }

        //calcualte the interest on each object
        interest=(i.Principal*rate*i.time)/100;

        //push result to interestData array created
        interestData.push({'Principal':i.Principal, 'rate':rate, 'time':i.time, 'interest':interest});
    
    });
    //display result on the console
    console.log(...interestData);
    return(interestData);
    
};
//return data
InterestCalculator(data);