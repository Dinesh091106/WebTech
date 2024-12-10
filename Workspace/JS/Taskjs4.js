
let add=document.getElementById("add");
add.addEventListener("click",function(){
    let Number1=Number(document.getElementById("input1").value);
    let Number2=Number(document.getElementById("input2").value);
    let head=Number1+Number2;
    let display=document.getElementById("div2");
    let text1= document.createElement("h2");
    text1.textContent="Calc over :) ";
    text1.style.textAlign="center";
    display.appendChild(text1);
    let ans=document.createElement("h1");
    ans.textContent=`The result is ${head}`;
    ans.style.textAlign="center"
    display.appendChild(ans);
    document.body.append(display);
    display.style.display="block";
    // let button1 = document.createElement("button");
    // display.appendChild(button1);
    // button1.textContent="restart";
    // button1.addEventListener("click",function(){
    //     display.style.display="none";
    // let Number1 = document.getElementById("input1");
    // Number1.value="";
    // let Number2 = document.getElementById("input2");
    // Number2.value="";
        
    // })
})

let sub=document.getElementById("sub");
sub.addEventListener("click",function(){
    let Number1=Number(document.getElementById("input1").value);
    let Number2=Number(document.getElementById("input2").value);
    let head=Number1-Number2;
    let display=document.getElementById("div2");
    let text1= document.createElement("h2");
    // text1.textContent="Calc over :) ";
    // text1.style.textAlign="center";
    display.appendChild(text1);
    let ans=document.createElement("h1");
    ans.textContent=`The result is ${head}`;
    ans.style.textAlign="center"
    display.appendChild(ans);
    document.body.append(display);
    display.style.display="block";
    // let button1 = document.createElement("button");
    // display.appendChild(button1);
    // button1.textContent="restart";
    // button1.addEventListener("click",function(){
    //     display.style.display="none";
    // let Number1 = document.getElementById("input1");
    // Number1.value="";
    // let Number2 = document.getElementById("input2");
    // Number2.value="";
        
    // })
})

let div=document.getElementById("div");
div.addEventListener("click",function(){
    let Number1=Number(document.getElementById("input1").value);
    let Number2=Number(document.getElementById("input2").value);
    let head=Number1/Number2;
    let display=document.getElementById("div2");
    let text1= document.createElement("h2");
    // text1.textContent="Calc over :) ";
    // text1.style.textAlign="center";
    display.appendChild(text1);
    let ans=document.createElement("h1");
    ans.textContent=`The result is ${head}`;
    ans.style.textAlign="center"
    display.appendChild(ans);
    document.body.append(display);
    display.style.display="block";
    // let button1 = document.createElement("button");
    // display.appendChild(button1);
    // button1.textContent="restart";
    // button1.addEventListener("click",function(){
    //     display.style.display="none";
    // let Number1 = document.getElementById("input1");
    // Number1.value="";
    // let Number2 = document.getElementById("input2");
    // Number2.value="";
        
    // })
})
let reset=document.getElementById("reset");
reset.addEventListener("click",function(){
    let display1=document.getElementById("div1");
    display1.style.display="none";
    let Number1 = document.getElementById("input1");
    Number1.value="";
    let Number2 = document.getElementById("input2");
    Number2.value="";
    
})

