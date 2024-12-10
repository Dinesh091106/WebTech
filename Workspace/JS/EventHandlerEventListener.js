function fun(){
    alert("this is from event");
}

function fun(){
    let maindiv=document.getElementById("maindiv");
    maindiv.style.backgroundColor="red";
}

// function fun(){
//     let empname=prompt("Please Enter your Name");
//     let emplocation=prompt("Please Enter the Location");
//     let mydiv=document.createElement("div");
//     document.body.appendChild(mydiv);
//     let h1=document.createElement("h1");
//     mydiv.appendChild(h1);
//     let h2=document.createElement("h1");
//     mydiv.appendChild(h2);
//     h1.textContent=`Ename: ${empname}`;
//     h2.textContent=`Location: ${emplocation}`;
// }

//!toggle
// function fun(){
//     let maindiv=document.getElementById("maindiv");
//     let red=maindiv.style.backgroundColor;
//     if(red=="red"){
//         red=maindiv.style.backgroundColor="blue";
//     }
//     else
//         red=maindiv.style.backgroundColor="red";
// }
// //!toggle
// function fun(){
//     let maindiv=document.getElementById("maindiv");
//     let none=maindiv.style.display;
//     if(none=="none"){
//         none=maindiv.style.display="block";
//     }
//     else
//         none=maindiv.style.display="none";
// }

// function fun(){
//     let chooseplace=document.getElementById("chooseplace");
//     // console.log(chooseplace.value);
//     let h1=document.getElementById("h1")
//     h1.textContent=`Your Selection:${chooseplace.value}`;
// }

let chooseplace=document.getElementById("chooseplace");
chooseplace.addEventListener("change",function(){
    let head=document.getElementById("h1");
    head.textContent=`Your Selection:${chooseplace.value}`;
},false
);