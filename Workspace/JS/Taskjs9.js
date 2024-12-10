
// document.addEventListener("DOMContentLoaded", function() {
//     let read = document.querySelectorAll('.read');
//     read.forEach((link)=> {
//         link.addEventListener('click',(event)=> {
//             event.preventDefault();
//             let span = this.nextElementSibling;
//             if (span.style.display === "none" || span.style.display === "") {
//                 span.style.display = "inline";
//                 this.textContent = ""; 
//             } else {
//                 span.style.display = "none";
//                 this.textContent = "Read more"; 
//             }
//         });
//     });
// });

let child=document.querySelectorAll("div p");
for(i=0;i<child.length;i++){
    child[i].className="para";
}
let div=document.getElementById("maindiv");
div.addEventListener("click",(element)=>{
    console.log(element.target.className);
    element.preventDefault();
    let para=document.getElementByClassName("para");
    if(para==para){
        let read=document.getElementById("read");
        let span=read.nextElementSibling;
        span.style.display="inline";
    }
})
