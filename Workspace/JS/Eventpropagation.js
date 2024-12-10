//!methods of Eventpropagation
//?1.eventPhase()
//?2.stopPropagation()
//?3.currentTarget(only gp will get target)
//?4.target(particular element from the parent element)
//?5.remove()
//?6.preventDefault

let gp=document.getElementById("gp");
gp.addEventListener("click",(element)=>{
    gp.style.backgroundColor="red";
    console.log("Grandparent clicked");
    console.log("Event Phase:"+element.eventPhase);
    // console.log(element.currentTarget);
    // element.currentTarget.remove();
    console.log(element.target);
    // element.target.remove();
});
let parent=document.getElementById("parent");
parent.addEventListener("click",(element)=>{
    parent.style.backgroundColor="green";
    console.log("Parent clicked");
    console.log("Event Phase:"+element.eventPhase);
    // element.stopPropagation();
});
let child=document.getElementById("child");
child.addEventListener("click",(element)=>{
    child.style.backgroundColor="yellow";
    console.log("child clicked");
    console.log("Event Phase:"+element.eventPhase);
},true);

// let input1=document.getElementById("input1");
// input1.addEventListener("whr",(element)=>{
//     element.preventDefault();
//     element.stopPropagation();
//     let head=document.getElementById("head");
//     head.textContent="Check Box Prevented";
// })