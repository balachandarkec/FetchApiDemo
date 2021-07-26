let createNode=(element)=>{
    return document.createElement(element);
};

let append=(parent,child)=>{
return parent.appendChild(child);
};



const allUserList=document.querySelector("#allItems");

fetch("https://randomuser.me/api/?results=5")
    .then((response)=>response.json())
     .then((res_json)=>{
          console.log(res_json.results);
          let users=res_json.results;
          // return users.forEach((user)=>{
          //   console.log( user.name.first);
          // }
           return users.map((user)=>{
              let li=createNode('li');
              let span=createNode('span');
              let img=createNode('img');
              img.src=user.picture.thumbnail;
              span.innerHTML=`${user.name.title}, ${user.name.first} ${user.name.last}`;
              append(li,img);
              append(li,span);
              append(allUserList,li);
               });
          
          

     }).catch(()=>{console.log("Error in response");});