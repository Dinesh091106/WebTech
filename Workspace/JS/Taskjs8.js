
let butto=document.getElementsByClassName("button1");
for(let th of butto){
    th.addEventListener("click",(element)=>{
    element.target.remove();
})
}