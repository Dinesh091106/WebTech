
// let person={
//     ename:"smith",
//     age:30,
//     behaviour:function(){
//         console.log("He can Sing")
//     }
// }
//How to access object property
//!we can access object property in two ways-dot notation,square bracket 
//!dot notation
// console.log(person.ename);
// person.behaviour();
//!square bracket
// console.log(person["ename"]);
//!delete property of an object
// delete person.age;
// console.log(person);
//!how to add property of an object 
//!we can access object property in two ways-dot notation,square bracket 
// person.gender="male";
// console.log(person);
// person["25"]=5;
// console.log(person);
// let sum=5;
// person[sum]="smith";
// console.log(person);

// let arr=[1,1,1,2,2,3,3,3,4,4,5];
// let res=arr.reduce((acc,element,index,org)=>{
//     if(!acc[element]){
//         acc[element]=1;
//     }
//     else
//         acc[element]++;
//     return acc;
// },{})
// console.log(res);

//!how to iterate an object
// let person={
//     ename:"smith",
//     age:30,
//     gender:"male"
// };
// for(let emp in person){
//     console.log(emp+":key<====>value:"+person[emp]);
// }

//!values that you can able to pass in object property value
//!value as am expression
// let std1={
//     studentname:"smith",
//     grade:"A"
// }
// let std2={
//     studentname:"david",
//     grade:"B"
// }
// let studentinformation={
//     sno1:std1,
//     sno2:std2
// }
// console.log(studentinformation.sno1.studentname);

//!value as function(object method)
// let person={
//     ename:"smith",
//     age:29,
//     behaviour:function(){
//         console.log("I can sing");
//     }
// }
// person.behaviour();

//!how to use this keyword inside the object literal
//?In object literal this can be used inside the object method that is inside the function
//?this kesyword in object literal it will always point current object.
// let person={
//     ename:"smith",
//     age:29,
//     behaviour:function(){
//         console.log(this);
//         console.log(`My name is ${this.ename} and my age is ${this.age}`)
//     }
// }
// person.behaviour();

//!how not to use this keyword inside the object literal
// var empname="david";
// let person={
//     ename:this.empname,//we do not use this keyword in this format 
//     age:29,
//     behaviour:function(){
//         console.log(`My name is ${this.ename} and my age is ${this.age}`)
//     }
// }
// person.behaviour();

//!non primitive as an value
// let bag={
//     java:[{
//         intro:"Java is a high level programming language"
//     },"tokens","variables","object","string"],
//     web:["intro","tokens","varaiable","function","string"]
// }
// console.log(bag.java[0]);

//!destructing the object
// let obj={
//     ename:"smith",
//     age:29,
//     gender:"male"
// }
//!scenario1
// let {ename,age,gender}=obj;
// console.log(ename);
// console.log(age);
// console.log(gender);
//!scenario2
// let {ename,...emp}=obj;
// console.log(ename);
// console.log(emp);
//!scenario3
// let obj={
//     ename:"smith",
//     age:29,
//     gender:"male"
// }
// function emp({ename,age,gender}){
//     console.log(ename,age,gender);
// }
// emp({...obj});
//!scenario4
// let obj={
//     ename:"smith",
//     age:29,
//     gender:"male"
// }
// let exp={...obj,gender:"female"};
// console.log(exp);

//!way to create an object 
//?three ways to create an object
//?2nd way to create an object
// let obj1=new Object();
// obj1.ename="smith";
// obj1.gender="male";
// obj1.age=29;
// console.log(obj1);
// delete obj1.age;
// console.log(obj1);
// console.log(obj1.gender);

// //?3rd way to create an object
// function Person(ename,age,gender){
//     this.ename1=ename;
//     this.age=age;
//     this.gender=gender;
//     // console.log(this);
// }
// let p1=new Person("smith",29,"male");
// p1.job="manager";
// console.log(p1);
// delete p1.job;
// console.log(p1);
// console.log(p1.ename1);
// let p2=new Person("david",28,"male");
// console.log(p2);

// let s1=new String("smith");
// console.log(s1);

let result=fetch("https://fakestoreapi.com/products");
console.log(result);
let res=result.then((data)=>{
    console.log(data);
    return data.json();
}).then((data)=>{
    console.log(data);
    console.log(res);
})
