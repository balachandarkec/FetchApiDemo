//alert("Test Message!");
let btn=document.querySelector("#btn-add");

let cereateNode=(nodename)=>{return document.createElement(nodename)};

let addFruit=()=>{ 
    let text=document.querySelector("#inp-name").value;
    let target=document.querySelector("#fruit-list");
    let newItem=cereateNode("li");
    newItem.innerText=text;
    target.appendChild(newItem);
    console.log("Callback Called!");

};

btn.addEventListener("click",addFruit);