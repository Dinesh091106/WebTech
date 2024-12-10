//?Synchronous Code-Code blocking statement

// console.log("start");
// console.log("a");
// alert("b");
// console.log("c");
// console.log("end");

// console.log("start");
// console.log("a");
// //Asynchronous code
// setTimeout(()=>{
//     alert("b");
// },2000)
// console.log("c");
// console.log("end");

// console.log("start");
// console.log("a");
//Asynchronous code
let temp=0;
let set;
let start=document.getElementById("button1");
start.addEventListener("click",fun);
function fun(){
    set=setInterval(()=>{
        console.log("b");
        let head=document.getElementById("head");
        head.textContent=`Timer:${temp++}`;
    },1000)
    start.removeEventListener("click",fun)
}
let stop1=document.getElementById("button2");
stop1.addEventListener("click",stop);
function stop(){
    clearInterval(set);
    start.addEventListener("click",fun);
}
console.log("c");
console.log("end");

// let dateandday=new Date();
// console.log(dateandday.getDate());
// let monthcount=dateandday.getMonth();
// let month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
// console.log(month[monthcount]);

// let hour=13;
// console.log(hour-12);

// setInterval(showtime,1000);
// function showtime(){
//     let dateandday=new Date();
//     let sec=dateandday.getSeconds();
//     let head=document.getElementById("head");
//     head.textContent=sec;
// }