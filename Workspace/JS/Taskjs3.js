
// let add=document.getElementById("add");
// add.addEventListener("click",function(){
//     let Number1=Number(document.getElementById("input1").value);
//     let Number2=Number(document.getElementById("input2").value);
//     head=Number1+Number2;
//     let ans=document.getElementById("head");
//     ans.textContent=`The result is ${head}`;
//     document.body.appendChild(ans);
// })



let add= document.getElementById("add")
add.addEventListener("click",function(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value );
    let val= num1+num2;
    let disp = document.getElementById("div2");
    let text1= document.createElement("h2");
    text1.textContent="Calc over :) ";
    text1.style.textAlign="center";
    disp.appendChild(text1);
    let value1 = document.createElement("h2");
    value1.textContent=`The result is ${val}`;
    value1.style.textAlign="center"
    disp.appendChild(value1);
    document.body.append(disp);
    disp.style.display="block";
    let button1 = document.createElement("button");
    disp.appendChild(button1);
    button1.textContent="restart";
    button1.addEventListener("click",function(){
        disp.style.display="none";
    let num1 = document.getElementById("num1");
    num1.value="";
    let num2 = document.getElementById("num2");
    num2.value="";
        
    })
    })  

//     let sub = document.getElementById("sub");
//     sub.addEventListener("click",function(){
//         let num1 = Number(document.getElementById("num1").value);
//         let num2 = Number(document.getElementById("num2").value );
//         let val= num1-num2;
//         let disp = document.getElementById("div2");
//         let text1= document.createElement("h2");
//         text1.textContent="Calc over :) ";
//         text1.style.textAlign="center";
//         disp.appendChild(text1);
//         let value1 = document.createElement("h2");
//         value1.textContent=`The result is ${val}`;
//         value1.style.textAlign="center";
//         disp.appendChild(value1);
//         document.body.append(disp);
//         disp.style.display="block";
//         let button1 = document.createElement("button");
//         disp.appendChild(button1);
//         button1.textContent="restart";
//         button1.addEventListener("click",function(){
//             disp.style.display="none";
//         let num1 = document.getElementById("num1");
//         num1.value="";
//         let num2 = document.getElementById("num2");
//         num2.value="";
            
//         })
//         })  

        

// let div= document.getElementById("div");
// div.addEventListener("click",function(){
//     let num1 = Number(document.getElementById("num1").value);
//     let num2 = Number(document.getElementById("num2").value );
//     let val= num1/num2;
//     let disp = document.getElementById("div2");
//     let text1= document.createElement("h2");
//     text1.textContent="Calc over :) ";
//     text1.style.textAlign="center";
//     disp.appendChild(text1);
//     let value1 = document.createElement("h2");
//     value1.textContent=`The result is ${val}`;
//     value1.style.textAlign="center"
//     disp.appendChild(value1);
//     document.body.append(disp);
//     disp.style.display="block";
//     let button1= document.createElement("button");
//     disp.appendChild(button1);
//     button1.textContent="restart";
//     button1.addEventListener("click",function(){
//         disp.style.display="none";
//     let num1 = document.getElementById("num1");
//     num1.value="";
//     let num2 = document.getElementById("num2");
//     num1.value="";
        
//     })
//     })