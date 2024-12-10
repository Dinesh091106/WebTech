let tab = document.getElementById('maintab');
tab.style.borderCollapse="collapse";
let submit = document.getElementById("submit");
submit.addEventListener("click",function(){

    let tr1 = document.createElement("tr");
    tab.append(tr1);
    tr1.style.padding='20px 20px';
    let name = document.getElementById("c1").value;
    let bike = document.getElementById("c2").value;
    let checkin = document.getElementById("c3").value;
    let checkout = document.getElementById("c4").value;
    
    let td1=document.createElement("td");
    td1.textContent=name;
    tr1.append(td1);
    td1.style.border="1px solid black";
    let td2=document.createElement("td");
    td2.textContent=bike;
    tr1.append(td2);
    td2.style.border="1px solid black";
    let td3=document.createElement("td");
    td3.textContent=checkin;
    tr1.append(td3);
    td3.style.border="1px solid black";
    let td4=document.createElement("td");
    td4.textContent=checkout;
    tr1.append(td4);
    td4.style.border="1px solid black";
    console.log(tr1);
})