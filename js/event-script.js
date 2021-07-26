
document.body.addEventListener('click',(e)=>{
if(e.target.className.includes('add-wishlist')){
    console.log("Target Clicked!");
    console.log(e.target.parentNode);
   let item=e.target.parentNode.cloneNode(true);
    console.log("cloned Item : "+item.children.textContent);
    
   let modified_item= item.querySelector("button");
   modified_item.textContent="Delete";
   modified_item.classList="btn-sm btn-primary del-wishlist";

    document.querySelector("#wishlist").appendChild(item);
}
  
});



document.body.addEventListener('click',(e)=>{
    if(e.target.className.includes('del-wishlist')){
        console.log("Target Clicked!");
        console.log(e.target.parentNode);
      
        
    
        document.querySelector("#wishlist").removeChild(e.target.parentNode);
    }
      
    });