
let table=document.createElement("table");
document.body.append(table);
table.style.border="1px solid black";
table.style.borderCollapse="collapse";

let thead=document.createElement("thead");
table.appendChild(thead);

let trhead=document.createElement("tr");
thead.appendChild(trhead);

let th1=document.createElement("th");
thead.appendChild(th1);
th1.textContent="SI.NO";
th1.style.border = "1px solid black";
th1.style.padding="40px"

let th2=document.createElement("th");
thead.appendChild(th2);
th2.textContent="Ename";
th2.style.border = "1px solid black";
th2.style.padding="40px"

let th3=document.createElement("th");
thead.appendChild(th3);
th3.textContent="Location";
th3.style.border = "1px solid black";
th3.style.padding="40px";
let trow2 = document.createElement("tr");
table.appendChild(trow2);
let tbody=document.createElement("tbody");
table.appendChild(tbody);
let count= Number(prompt("Enter No Of Employee"));
    for(i=0;i<count;i++){  
        let trow2 = document.createElement("tr");
        tbody.appendChild(trow2);
        for(j=0;j<3;j++){
            let tdata=document.createElement("td");
            if(j==0){
                tdata.textContent=i+1;
                trow2.appendChild(tdata);
                tdata.style.border = "1px solid black";
                tdata.style.padding="40px"
            }
            else if(j==1){
                let username = String(prompt("Enter the  Name:" +(i+1)));
                if(username){
                    tdata.textContent=username;
                    trow2.appendChild(tdata);
                    tdata.style.border = "1px solid black";
                    tdata.style.padding="40px"
                } 
                else {
                    j--;
                }
            }
            else if(j==2){
                let Elocation= String(prompt("Enter the  location:" +(i+1)));
                if(Elocation){
                    tdata.textContent=Elocation;
                    trow2.appendChild(tdata);
                    tdata.style.border = "1px solid black";
                    tdata.style.padding="40px"
                } 
                else {
                    j--;
                }
            }
        }
                    
                
    }




