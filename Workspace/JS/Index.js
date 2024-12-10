// console.log(window.document);
// let arr=[1,2,3,4,5,6];
// console.log(Array.isArray(arr));
// console.log(document.all[6]);
//?how to manipulate existing dom

// console.log(document);

//!methods
//?getElementById("attributevalue");
// let mydiv=document.getElementById("maindiv");
// console.log(mydiv);
// mydiv.style.backgroundColor="aqua";

//?getElementByClassName("attributevalue");
// let children=document.getElementsByClassName("child");
// console.log(children);
// // children.style.backgroundColor="aqua";
// for(i=0;i<children.length;i++){
//     children[i].style.backgroundColor="aqua";
//     children[i].textContent="this is the content from dom";
// }

//?getElementByTagName("attributevalue");
// let list=document.getElementsByTagName("li");
// console.log(list);
// list[0].textContent="Amazon";
// list[1].textContent="Ballon";

//!queryselector-css selector
// let mydiv=document.querySelector("#maindiv");
// console.log(mydiv);
// mydiv.style.backgroundColor="red";

// let child=document.querySelector(".child");
// console.log(child);
// let child=document.querySelectorAll(".child");
// console.log(child);

// let li=document.querySelector("li");
// console.log(li);
// let li1=document.querySelectorAll("li");
// console.log(li1);

// let li1=document.querySelectorAll("ul li");
// console.log(li1);

//!Properties
// let mydiv=document.getElementById("maindiv");
// mydiv.firstChild.textContent="this is from dom";
// mydiv.firstElementChild.textContent="this is from dom child1";
// mydiv.lastChild.textContent="this is from dom";
// mydiv.lastElementChild.textContent="this is from dom child3";
// mydiv.children[1].textContent="this is from dom child2";
// // mydiv.parentElement.textContent="this is from dom parent";
// mydiv.nextSibling.textContent="red";
// mydiv.nextElementSibling.textContent="this is from dom";
// mydiv.previousSibling.textContent="blue";
// mydiv.previousElementSibling.textContent="this is from dom";

let para=document.getElementsByClassName("child")[1];
console.log(para.parentElement.nextElementSibling.children[1].style.backgroundColor="red");

