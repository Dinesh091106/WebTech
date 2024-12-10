// console.log("hello js from external") ;


//data literals
//!typeof 
//it is a special operator in javascript
//it is a unary operator(will workon only one operator)
//typeof-will check the datatype of an operand

//String
//?set of character or single character consider as string in javascript
//String can be declared in three ways they are
//1.single quotes
//2.double quotes
//3.backticks

// //single quotes
// let str='s';
// console.log(typeof str);
// //double quotes
// let str1="smith";
// console.log(typeof str1);
// //backticks
// let str2=`david`
// console.log(typeof str2);
// let str1='smith';let str2='david';
// console.log(str1);
// console.log(str2);
// let str=`sam said that is"'smith's phone"`;
// console.log(str); 
//!advantage of using backticks
//?no need to use +(concate) operator for concatination
//?no need to to use regular expression to go the next line
// let str='smith';
// let str1="phone";
// console.log(str+"\n"+str1);
//if you want to give the space betwwen two numbers just give the space using ${} and go to the next line just click the the enter button
// console.log(`${str} 
// ${str1}`)
//number
//number are cosidered as number in javascript
//!we don't have any datatypes in number but we have some range in numbers(2^53-1) to -(2^53-1)
//?cosidered as number datatype.
//when the range is getting exceeded we have to use bigint
//bigint stands for biginteger
//suffix of the number we have to use n
//should not mix number and bigint
// let num=99;
// let num1=99.1234;
// console.log(typeof num);
// console.log(typeof num1);
// console.log(2**53-1);
// console.log(-(2**53-1));
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(9007199254740991n+3n);
//?Boolean
//true and false keyword in javascript is considered as boolean datatypes 
//mostly we will get boolean on conditional based operations
//example:
// let confirm1=confirm("Please turn on your location"); 
// console.log(confirm1);
//?Null
//it is a keyword in javascript
//it has value in javascript
//when the absence the data we will be using the value called null
//typeof null nothing but object
//typeof typeof null is string
//example:
// let vijay=98;
// let priya=null;
// console.log(typeof typeof priya);
//?Undefined
//it is a keyword in javascript
//it has a value
//when a variable declared in javascript,javascript engine implicity assign a value called undefined
//?Not defined
//when a variable is not declared in javascript it is called as not defined
// var a;
// console.log(a);
// let b;
// console.log(b);
// console.log(typeof a);
//?Non primitive
//developer creating object
//?object
//any entity which is exis object can have
//behaviour-what object can do
//both state and behaviour considered as property in javascript
//property will be in the form of key and values
//javascript object nothing but collectioned of key value pairs
//?how to access object member
//objectref.member/objectref.memberfunction() 
// let person={
//     ename:"smith",
//     gender:"male",
//     behaviour:function(){
//         console.log("singing");
//     },
// };
// console.log(person.ename);
// person.behaviour();

// console.log(typeof person);
//?variable
//named block of memory
//to store the data/values
//there are three variables in javascript are var,let,const
//javascript is an dynamically typed language hence we can able to change the datatype during runtime of the execution
//javascript also called as weakly typed language
//hence declaring variable is mandatory 
//declaring datatype is not mandatory
//?characteristics of var,let and const
//variable declaration
//scope
//hoisting
//temporal dead zone
//!variable declaration
//?var
// var a;//Declaration
// a=10;//initialization
// console.log(a);
// a=80;//re-initialization
// console.log(a);
// var a=90;//re-declaration & re-initialization
// console.log(a);
// var b=80;//declaration & initialization
// console.log(a);
// //?let
// let love;//declaration
// love='priya';//intialization
// console.log(love);
// love='sharmila';//re-initialization
// console.log(love);
//let love='priya';//re-declaration is not possible re-initialization is not possible
// let love2='marriage'//declaration & intialization
// console.log(love2);
// //?const
// const loved='marriage';
// console.log(loved);
//re-declaration & re-initialization both are not possible
//!type coersion(process of converting one datatype to another datatype)
//classified into two types
//1.implicit type coersion
//2.explicit type coersion
//implicit type coercion-the process of converting one datatype to another datatype by javascript engine when the wrong datatype enter by developer or user nothing but implicit type coercion
// console.log(5+4);
//number converted into string
// console.log(5+"4");
//string converted into number
// console.log(5-"4");
//boolean converted to number
// console.log(5-false);
// console.log(5*"2");
// //!NaN stands for not a number
//when we are trying toconvert string into number as result we will get NaN(not a number)
//typeof NaN is number
//isNaN("35a")not a number//true
//is NaN("35")not not a number(or)number//false
// console.log(5-"4a");
// console.log(isNaN("35a"));
//explicit type coercion

//simple alert
// let item=5;
// let str=alert(`${item} item has been added`);
// console.log(typeof str);
//confirm alert
// let confirm1=confirm("Please turn on the location");
// console.log(confirm1);
// console.log(typeof confirm1);

// let temp=true;
// while(temp){
//     let confirm1=confirm("Please turn on your location");
//     if(confirm1){
//         window.location="https://www.wikipedia.com";
//         temp=false;
//     }
// }

// let temp;
// for(temp=true;temp;){
//     let confirm1=confirm("please turn on your location");
//     if(confirm1){
//         window.location="https://www.wikipedia.com";
//         temp=false;
//     }
// }
//!explicit type coercion
//the process of converting one datatype into another datatype by javascript developer
// let username=prompt("Please Enter your Name");
// console.log(username);
// console.log(typeof username);

// let age=Number(prompt("Please Enter your Age"));
// console.log(age);
// console.log(typeof age);

// let num1=Number(undefined);
// console.log(num1);//NaN
// console.log(typeof num1);

// let num2=Number(null);
// console.log(num2);//0
// console.log(typeof num2);

// let num3=Number(true);
// console.log(num3);//1,false-0
// console.log(typeof num3);

// let num4=Number("25");
// console.log(num4);//25 Number
// console.log(typeof num4);

// let num5=Number("smith");
// console.log(num5);//NaN Number
// console.log(typeof num5);

//!other datatype into string
// let str1=String(undefined);
// console.log(str1);//25 String
// console.log(typeof str1);

// let str2=String(null);
// console.log(str2);//null String
// console.log(typeof str2);

// let str3=String(true);
// console.log(str3);//true String
// console.log(typeof str3);

// let str4=String(25);
// console.log(str4);//25 String
// console.log(typeof str4);

// let str5=String(smith);
// console.log(str5);//smith String
// console.log(typeof str5);
//!other datatype to boolean
// let bool1=Boolean(0);
// console.log(bool1);//false
// console.log(typeof bool1);

// let bool2=Boolean("");
// console.log(bool2);//false
// console.log(typeof bool2);

// let bool3=Boolean(false);
// console.log(bool3);//false
// console.log(typeof bool3);

// let bool4=Boolean(null);
// console.log(bool4);//false
// console.log(typeof bool4);

// let bool5=Boolean(undefined);
// console.log(bool5);//false
// console.log(typeof bool5);

// let bool6=Boolean(NaN);
// console.log(bool6);//false
// console.log(typeof bool6);

// var a=10;
// {
//     let a=20;
//     console.log(a);
// }
// console.log(a);
//!scope

//scope-visibility of the member
//there are three kind of scope-global,local,lexical
//global-highest visibility of the member-var
//local-visibility only inside the block-let/const
//lexical-the ability of javascript engine search for a member inside the block,if member is not present it will go for global
//?scenarios:chid will go for parent,parent will go forglobal

// let a=50;
// var b=200;
// {
//     a=100;
//     console.log(a);
//     console.log(window.a);
//     console.log(window.b);
//     console.log(this.b);
// }
// console.log(a);
//?hoisting
//calling a variable before declaration is known as hoisting
//?temporal dead zone
//time gap between declaration and initialization
//let and const:declare and use it

// console.log(a);
// var a;
// a=10;
// console.log(a);

// var a=10;
// console.log(a);
// {
//     console.log(a);
//     let a=80;
//     console.log(a);
// }
// console.log(a);

//?reference error
//Accessing a variable that has't been declared
//Using a variable before it is declared due to scope issues. 
//Typographical error in variable names.
// var a=20;
// {
//     console.log(a);
//     let a=40;
//     console.log(a);
// }

//?syntax error
//Missing or mismatched parathesis,brackets or braces.
//Incorrect use of punctuation marks.
//Using reserved keywords improperly.
//Incorrect string literals(missing quotes etc..)
//example 1:
// lt a=10;
// console.log(a);
//example 2:
// let a=10;
// {
//     {
//         var a=20;
// }
// let str="smith";
// let str1=new String("smith");
// console.log(str);
// console.log(str1);
//! new keyword in javascript
//it is a keyword in javascript
//it is a special operator in javascript
//it will create a new memory(instance/xereox) followed by constructorfunction.
//! instanceof
//it is a keyword in javascript
//it is a special operator in javascript
//when you are trying to create object using new keyword we can able to check instanceof.

// console.log(str1 instanceof String);

// let str="smith";
// let str1=str[0]="z";
// console.log(str);
// console.log(str1);

// let arr=[1,2,3,4,5]
// arr[0]="smith"
// console.log(arr);
// let naveen={
//     laptop:"good",
// }
// console.log(naveen);
// let akash=naveen;
// console.log(akash);
// akash.laptop="bad";
// console.log(akash);
// console.log(naveen);

// let naveen="java";
// let akash=naveen;
// console.log(naveen);
// console.log(akash);
// akash="web";
// console.log(akash);
// console.log(naveen);
//?In equals(==)primitive primitive is possible primitive non-primitive is possible non-pimitive non-primitive is not possible
// console.log(5=="5");
// console.log(1==true);

// let str="smith";
// let str1=new String("smith");
// let str2=new String("smith")
// console.log(str==str1);
// console.log(str1==str2.valueOf());

//?In strictly equals(===)primitive primitive is possible primitive non-primitive is not possible non-pimitive non-primitive is not possible
// console.log(5===5);
// console.log(1===true);
// let str="smith";
// let str1=new String("smith");
// let str2=new String("smith");
// console.log(str===str1.valueOf());
// console.log(str1.valueOf()===str2.valueOf());

//?functions
//!function declaration
// console.log("start");
// var str="smith";
// function sum(a1,b1){
//     console.log(a1+b1);
// }
// console.log(sum);
// sum(10,20);
// sum(20,20);
// console.log(b1);
// console.log("end");

// console.log("start");
// function addition(a1){
//     var b1=20;
//     var c1=20;
//     console.log(a1+b1+c1);
// }
// console.log(addition(20));
// console.log(addition);
// console.log(b1);
// console.log("end");

// console.log("start");
// function fire(){
//     console.log("am fire");
//     water();
//     console.log("work completed");
// }
// function water(){
//     console.log("am water");
// }
// fire();
// console.log("end");

//!function expression
// console.log("start");
// var globe="global";
// let add=function sum(a1,b1){
//     console.log(a1+b1);
// }
// add(10,20);
// console.log(sum);
// console.log("end");

// console.log("start");
// var globe="global";
// let sum=function(a1,b1){
//     var c1=20;
//     console.log(a1+b1+c1);
// }
// sum(10,10);
// sum=80;
// console.log(sum);
// sum();
// console.log("end");

// console.log("start");
// let task=function(a1,b1){
//     sum(a1,b1);
//     sub(a1,b1);
// }
// function sum(a,b){
//     console.log(a+b);
// }
// function sub(a,b){
//     console.log(a-b);
// }
// task(10,5);
// console.log("end");

// console.log("start");
// sum(10,20)
// function sum(a1,b1){
//     var c1=20;
//     console.log(a1+b1+c1);
// }
// add(10,20)
// let add=function(a1,b1){
//     console.log(a1+b1);
// }
// console.log("end");

// let x=2;
// if(x==2){
//     console.log("x is equal to 2");
// }

// let x=2;
// if(x==2){
//     console.log("x is equal to 2");
// }
// else{
//     console.log("x is not equal to 2");
// }

// let x=4;
// if(x==4){
//     console.log("x is not equal to 2");
// }
// else if(x==2){
//     console.log("x is equal to 2");
// }
// else{
//     console.log("x is not equal to 2 or 4");
// }

// let exp=0;
// if(exp){
//     console.log(`${exp} is true value`);
// }
// else if(exp==""&& typeof exp=="string"){
//     console.log(`"" is false value`);
// }
// else
// console.log(`${exp} is false value`);

// console.log(typeof ""=="string");
// console.log(typeof 0=="string");

// let x=2;
// switch(typeof x){
//     case "string":
//         console.log(`${x} is a string`);
//         break;
//     case "number":
//         console.log(`${x} is a number`);
//         break;
//     case "boolean":
//         console.log(`${x} is a boolean`);
//         break;
//     default:
//         console.log(`${x} is not matched`);
//         break;
// }

// let color="red";
// let alpha="a";
// switch(true){
//     case color=="red" && alpha=="a":
//         console.log(`${color} and ${alpha} are the match`);
//         break;
//     case color=="yellow" && alpha=="b":
//         console.log(`${color} and ${alpha} are the match`);
//         break;
//     case color=="pink" && alpha=="c":
//         console.log(`${color} and ${alpha} are the match`);
//         break;
//     default:
//         console.log(`${color} and ${alpha} are not match`);
// }

// console.log(""===0);
// console.log(false===0);
// console.log(""===false);

// console.log(NaN==0);
// console.log(NaN==undefined);
// console.log(NaN==null);
// console.log(undefined==NaN);
// console.log(undefined==null);
// console.log(undefined==0);
// console.log(null==NaN);
// console.log(null==undefined);
// console.log(null==0);

// console.log(null===undefined);

// for(i=0;i<3;i++){
//     for(j=0;j<3;j++){
//         if(i==j){
//             console.log("i & j are equal");
//         }
//         console.log("inner loop");
//     }
//     console.log("outer loop");
// }
//?break
//break is a keyword in javascript used as control transfer statement
//break followed by any line never get execute
//break the entire iterations of current loop
// for(i=0;i<3;i++){
//     for(j=0;j<3;j++){
//         if(i==j){
//             console.log("i & j are equal");
//             break;
//         }
//         console.log("inner loop");
//     }
//     console.log("outer loop");
// }
//?continue
//continue is a keyword in javascript used as control transfer statement
//continue followed by any line never get execute
//continue will continue the iterations of current loop
// for(i=0;i<3;i++){
//     for(j=0;j<3;j++){
//         if(i==j){
//             console.log("i & j are equal");
//             continue;
//         }
//         console.log("inner loop");
//     }
//     console.log("outer loop");
// }
//?return
//return is a keyword in javascript used as control transfer statement
//return followed by any line never get execute
//return followed by expression will carry the data and sent to the caller
//return without any fuction is a illegal statement
// console.log("start");
// function task(){
//     for(i=0;i<3;i++){
//         for(j=0;j<3;j++){
//             if(i==j){
//                 console.log("i & j are equal");
//                 return i;
//             }
//             console.log("inner loop");
//         }
//         console.log("outer loop");
//     }
// }
// console.log(task());
// console.log("end");

// console.log("start");
// function outer(){
//     var a=10;
//     console.log(a);
//     function innermost(){
//         var b=20;
//         return b;
//     }
//     return innermost();
// }
// // outer();
// console.log(outer());
// console.log("end");

// console.log("start");
// var globe="global";
// function outer(){
//     var a=10;
//     console.log(globe);
//     console.log(a);
//     function inner(){
//         var b=20;
//         console.log(b);
//         console.log(a);
//         console.log(globe);
//     }
//     return inner;
// }
// outer()();
// // console.log(outer());
// console.log("end");

// console.log("start");
// function teamlead(task,a,b){
//     return task(a,b);
// }
// function d1(a1,b1){
//     return a1+b1;
// }
// console.log(teamlead(d1,10,20));
// console.log("end");

// console.log("start");
// function teamlead(task,a,b){
//     let res=task(a,b);
//     return res;
// }
// console.log(teamlead(function(a1,b1){
//     return a1+b1
// },10,20))

// function operation (a, b, task) {
// let res = task (a, b);
// return res;
// }
// let res1 = operation (10, 20, function (a, b) {
// return a + b;
// });
// let res2 = operation (30,20, function (a, b) {
// return a-b;
// });
// let res3 = operation (10,5, function (a, b) {
// return a/b;
// });
// console.log(res1);
// console.log(res2);
// console.log(res3);

// console.log("start");
// let sum=(function(a1,b1){
//     console.log(a1+b1)
// })(10,20);
// console.log("end");

//!arrow function
// console.log("start");
// let add=a1=>{
//     console.log("hey this is arrow function");
//     return a1+25;
// }
// console.log(add(10));
// console.log("end");



