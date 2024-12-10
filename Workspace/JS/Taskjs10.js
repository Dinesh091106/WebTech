
let table = document.querySelectorAll("table tr");
console.log(table);
let shallowcopy = [...table];
let stored = shallowcopy.slice(1).map((element)=>{
    return {
        sno:element.children[0].textContent,
        empname:element.children[1].textContent,
        salary:Number(element.children[2].textContent)+50,
        location:element.children[3].textContent,
    }
})
console.log(stored);
let table2=document.createElement("table");
document.body.append(table2);
table2.style.border="1px solid black";
table2.style.borderCollapse="collapse";
table2.style.marginTop="20px"
let tbody=document.createElement("tbody");
table2.appendChild(tbody);
console.log(table2);
let for1=stored.forEach((element,index,org)=>{
    let trow = document.createElement("tr");
    tbody.appendChild(trow);
    let tdata=document.createElement("td");
    trow.appendChild(tdata);
    tdata.style.padding="20px";
    tdata.textContent=element.sno;
    let tdata2=document.createElement("td");
    trow.appendChild(tdata2);
    tdata2.style.padding="20px";
    tdata2.textContent=element.empname;
    let tdata3=document.createElement("td");
    trow.appendChild(tdata3);
    tdata3.style.padding="20px";
    tdata3.textContent=element.salary;
    let tdata4=document.createElement("td");
    trow.appendChild(tdata4);
    tdata4.style.padding="20px";
    tdata4.textContent=element.location;
})
let filtered=stored.filter((element)=>element.salary>2000).map((element,index)=>{
    return{
        sno:index+1,
        empname:element.empname,
        location:element.location,
        salary:Number(element.salary)
    }
})
console.log(filtered);
let content=" ";
filtered.forEach((element)=>{
    content+=`<div class="mydiv">
            <div class="title_card">
                <h1>Title:${element.empname}</h1>
            </div>
            <div class="productprice">
                <h1>Price:${element.salary}</h1>
            </div>
        </div>`;
})
let root=document.getElementById("mydiv");
root.innerHTML=content;
console.log(content);
console.log(root);
