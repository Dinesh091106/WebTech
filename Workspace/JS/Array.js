//!Array
// let x=[1,2,3,4,5];
// console.log(x);
// console.log(x[2]);
// console.log(typeof x);
// let ul=document.querySelectorAll("ul li");
// console.log(ul);
// console.log(Array.isArray(ul));
// console.log(Array.isArray(x));

//!How to iterate element inside an array
// let x=[1,2,3,4,5];
// let ul=document.createElement("ul");
// document.body.append(ul);
// for(i=0;i<x.length;i++){
//     console.log(x[i]);
//     let li=document.createElement("li");
//     li.textContent=x[i];
//     ul.appendChild(li);
// }

//!for-of elemennt inside another element
// let x=[1,2,3,4,5];
// for(x1 of x){
//     console.log(x1);
// }
// let ol=document.createElement("ol");
// document.body.append(ol);
// for(x1 of x){
//     if(x1%2==0){
//         console.log(x1);
//         let li=document.createElement("li");
//         li.textContent=x1;
//         ol.appendChild(li);
//     }
// }

//!for-in will iterate only index value
// let favplace=["Chennai","Trichy","Coimbatore","Bangalore","Hyderabad"];
// for(x in favplace){
//     console.log(favplace[x]+":element<=====>index:"+x);
// }
// let favplace=["Chennai","Trichy","Coimbatore","Bangalore","Hyderabad"];
// for(x in favplace){
//     if(x%2==0 && x!=0){
//         console.log(favplace[x]);
//     }
// }

//!array in js will accept both homogeneous and hetrogeneous datatype
// let arr=["smith",true,false,25,25n,null,undefined,{ename:"smith"},function(){
//     console.log("Am from Array");
// }]
// let count=0;
// console.log(arr);
// for(array of arr){
//     if(array==true || array==false){
//         count++;
//     }
// }
// console.log(count);

//!destructing array
//Scenario 1:
// let x=["Smith","Allen","James"];
// let [emp1,emp2,emp3]=x;
// console.log(emp1);
// console.log(emp2);
// console.log(emp3);
//Scenario 2:
// let [emp1,,emp3]=x;
// console.log(emp1);
// console.log(emp3);
//Scenario 3:Using rest operator(...exp)
// let[emp1,...emp]=x;
// console.log(emp1);
// console.log(emp);
//!rest and spread(...exp)
// let x=[1,2,3,4,5];
// function identifier(a,b,c,d,e){
//     console.log(a,b,c,d,e);
// }
//Spread operator
// identifier(...x);

// function identifier(...a){
//     console.log(a);
// }
// identifier(10,20,30,40,50);
//!Shallow copy and deep copy
//?Deep copy
// let x=[1,2,3,4,5];
// let deepcopy=x;
// deepcopy[0]="smith";
// console.log(x);
// console.log(deepcopy);
//?Shallow copy
// let x=[1,2,3,4,5];
// let shallowcopy=[...x];
// x[0]="smith";
// console.log(x);
// console.log(shallowcopy);
//!Way to create an array-using array literal,new keyword with one value,new keyword with multiple values
// let arr=new Array(5,2,3);
// console.log(arr);
// var hobbies=[
//     "football",
//     "singing",
//     "reading",
//     "cooking",
//     "travelling",
//     "sleeping",
//     "house cleaning",
//     "driving",
//     "cycling",
//     "trekking",
//     "reading"
// ];
//?1.find length
// console.log(hobbies.length);

//?2.shift-remove the element from the start
// hobbies.shift();
// console.log(hobbies.length);

//?3.unshift-add element from the start
// hobbies.unshift("listening","grooming");

//?4.push-add element in the tail
// hobbies.push("playing cricket","swimming");
// console.log(hobbies);

//?5.pop-remove element from the last index(tail)
// hobbies.pop();
// console.log(hobbies);

//?6.isArray
// let isarray=Array.isArray(hobbies);
// console.log(isarray);

//?7.includes-check whether element present inside or not
// let iselementpresent=hobbies.includes("cooking");
// console.log(iselementpresent);

//?8.indexof-is used to find the index of particular element
// let index1=hobbies.indexOf("reading");
// console.log(index1);

//?9.reverse-it is used to reverse the element inside the array
// let reversed=hobbies.reverse().join(" ");
// console.log(reversed);

//?10.split-it is used to split the word to single words
// let name1="smith";
// let reversed1=name1.split("").reverse().join("");
// console.log(reversed1);
// let word="this is smith";
// let reversed2=word.split("").reverse().join("");
// console.log(reversed2);
// let result=reversed2.split(" ").reverse().join(" ");
// console.log(result);

//?11.sort-it is used to sort the element through alphabetical order
// console.log(hobbies.sort());

//?12.Splice-it will modify the original array and accept three values(start index,delete count,element to be added)element to be added is optional
// let splicedelement=hobbies.splice(2,4,"smith","allen","james");
// console.log(splicedelement);
// console.log(hobbies);

//?13.slice-it will not modify not the original array instead it will create new array and accept two values(start index,end index-1)
//!scemario 1
// let slicedelement=hobbies.slice(2,4);
// console.log(slicedelement);
// console.log(hobbies);
//!scenario 2
// let slicedelement=hobbies.slice(2);
// console.log(slicedelement);
// console.log(hobbies);
//!scenario 3
// let slicedelement=hobbies.slice(-4,-2);
// console.log(slicedelement);
// console.log(hobbies);
//!scenario 4
// let slicedelement=hobbies.slice(-2);
// console.log(slicedelement);
// console.log(hobbies);

