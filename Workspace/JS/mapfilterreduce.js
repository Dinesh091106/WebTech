//!map
// let x=[1,2,3,4,5];
// x.map(function(element,index,org){
//     console.log(element,index,org);
// })

// let res=x.map((element,index)=>{
//     return element+2;
// })
// console.log(res);
// console.log(x);

// let res=x.map(iterate);
// function iterate(element,index){
//     return element+2;
// }
// console.log(res);

// let ul=document.querySelectorAll("ul li");
// console.log(ul);
// console.log(Array.isArray(ul));
// let shallowcopy=[...ul];
// console.log(shallowcopy);
// console.log(Array.isArray(shallowcopy));
// let res=shallowcopy.slice(1).map((element)=>{
//     return Number(element.textContent)*2;
// });
// console.log(res);
// let ol=document.createElement("ol");
// document.body.append(ol);
//!forEach
// let for1=res.forEach((element,index,org)=>{
//     let li=document.createElement("li");
//     ol.appendChild(li);
//     li.textContent=element;
// })
// console.log(for1);
// console.log("**************")
// let n1=Array.from(ul);
// console.log(n1);
// console.log(Array.isArray(n1));

// let table=document.querySelectorAll("table td");
// console.log(table);
// console.log(Array.isArray(table));
// let shallowcopy=[...table];
// console.log(shallowcopy);
// console.log(Array.isArray(shallowcopy));

//!filter
// let x=[1,2,3,4,5];
// let res=x.filter((element,index,org)=>{
//     console.log(element,index,org);
// })
// let res=x.filter((element,index,org)=>{
//     return element>2;
// })
// console.log(res);

// let ul=document.querySelectorAll("ul li");
// console.log(ul);
// console.log(Array.isArray(ul));
// let shallowcopy=[...ul];
// console.log(shallowcopy);
// console.log(Array.isArray(shallowcopy));
// let res=shallowcopy.slice(1).filter((element)=>{
//         return element.textContent>2;
// });
// console.log(res);
// let ol=document.createElement("ol");
// document.body.append(ol);
// let for1=res.forEach((element,index,org)=>{
//     let li=document.createElement("li");
//     ol.appendChild(li);
//     li.textContent=element.textContent;
// })

//!reduce
let x=[1,2,3,4,5];
// x.reduce((acc,element,index,org)=>{
//     console.log(acc,element,index,org);
// },10)
let res=x.reduce((acc,element,index,org)=>{
    return acc+=element;
},0)
console.log(res);




