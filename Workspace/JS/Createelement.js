// //!create element using dom
// let mydiv=document.createElement("div");
// console.log(mydiv);
// console.log(document);
// document.body.append(mydiv);
// console.log(document);
// let para1=document.createElement("p");
// mydiv.appendChild(para1);
// para1.textContent="this is from dom";

// //!add attributes using dom
// mydiv.id="mydiv";
// console.log(document);
// mydiv.setAttribute("id","mydiv");
// mydiv.setAttribute("class","child");
// console.log(document);
// //!remove attribute
// mydiv.removeAttribute("class");
// console.log(document);
// let border=document.getElementById("mydiv");
// border.style.border="1px solid black";

//!task1
// let empname=prompt("Please Enter your Name");
// let emplocation=prompt("Please Enter the Location")
// // let mydiv=document.createElement("h1");
// // document.body.append(mydiv);
// // let mydiv1=document.createElement("h1");
// // document.body.append(mydiv1);
// // mydiv.textContent="Ename:"+empname;
// // mydiv1.textContent="Location:"+emplocation;
// let mydiv=document.createElement("div");
// document.body.append(mydiv);
// let h1=document.createElement("h1");
// mydiv.appendChild(h1);
// let h2=document.createElement("h1");
// mydiv.appendChild(h2);
// h1.textContent=`Ename: ${empname}`;
// h2.textContent=`Location: ${emplocation}`;

// //!task2
// let count=Number(prompt("Enter the number of Animals"));
// let ol=document.createElement("ol");
// document.body.append(ol);
// for(i=0;i<count;i++){
//     let li=document.createElement("li");
//     ol.appendChild(li);
//     li.textContent=prompt("Enter Animal Name:"+(i+1));
// }

//!task3
// let count=Number(prompt("Enter the number of Animals"));
// let ol=document.createElement("ol");
// document.body.append(ol);
// for(i=0;i<count;i++){
//     let li=document.createElement("li");    
//     let content=li.textContent=prompt("Enter Animal Name:"+(i+1));
//     if(content!=""){
//         ol.appendChild(li);
//     }
//     else
//         i--;
// }



