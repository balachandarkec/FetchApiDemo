const count=false;

let countValue=new Promise((resolve ,reject)=>{
    resolve("promise succeeded!");
});

countValue.then(()=>{
    console.log("succeedes");
}).then(()=>{console.log("another callbacl")})
  .catch(()=>{console.log("Error Occured!");});
