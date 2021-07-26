var name="Ram";
{
    var name="Vinay";
    console.log("Inside block  "+name);
}
console.log("Outside block  "+name);



let name="Ram";
{
    let name="Vinay";
    console.log("Inside block  "+name);
}
console.log("Outside block  "+name);



let addition=function(a,b){
    return a+b;
};

let addition=(x,y=20)=>x+y;



let addition=function(a,b=20){
    return a+b;
};


const fname="Anbu";
const lname="malar";

let message1='Welcome '+fname+'!';
let message=`Welcome ${fname}!`;
console.log(message);


//  Object 

const person={
    name:"Malar",
    age:"28",
    gender:"female",
    display:()=>{console.log(`My Name is ${person.name}`);}

    
}


// let name=person.name;

// let age=person.age;

// let gender=person.gender;

let {name,age,gender}=person;










class Person{
    constructor(name){
        this.name=name;
    }
}


const p1=new Person("Anbu");

console.log(p1.name);



// Timeout Function 

let myFunction=()=>console.log("Well come to all");


setTimeout(myFunction,3000);


// Example 
var timeout_id
let showTime=()=>{
       let dateTime=new Date();
       let time=dateTime.toLocaleTimeString();

       console.log(`Time is ......${time}`);
       timeout_id=setTimeout(showTime,3000);
};

showTime();


// Call Back Fucntion


let myFunction=()=>console.log("Well come to all");


let greet=(name,callback=>{console.log("Well come "+name);
 callback();
};

greet("Ravi",myFunction);












// 

const count=false;

let countValue=new Promise((resolve ,reject)=>{
    if(count){
        resolve(" Count Value Setted !");
    }else{
        reject("vount value is not defined");
    }
});



console.log(countValue);