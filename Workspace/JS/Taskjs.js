//!Header
let mydiv=document.createElement("header");
document.body.append(mydiv);
mydiv.textContent="Header";
mydiv.setAttribute("id","header");
mydiv.style.textAlign="center";
mydiv.style.border="1px solid black";
mydiv.style.padding="20px";
mydiv.style.backgroundColor="blue";
//!Nav 
let mydiv2=document.createElement("nav");
document.body.append(mydiv2);
mydiv2.textContent="Home Contact About Cart Register";
mydiv2.style.border="1px solid black";
mydiv2.style.wordSpacing="260px";
mydiv2.style.padding="20px";
mydiv2.style.borderTopStyle="none";
mydiv2.style.backgroundColor="aqua";
mydiv2.setAttribute("id","navigation");
//!Div
let mydiv3=document.createElement("div");
document.body.append(mydiv3);
mydiv3.setAttribute("id","div");
mydiv3.style.border="1px solid black";
mydiv3.style.display="grid";
mydiv3.style.gridTemplateColumns="1fr 1fr";
mydiv3.style.borderTopStyle="none";
mydiv3.style.height="80vh";
//!Section1
let section=document.createElement("section");
mydiv3.appendChild(section);
//!Image
let img=document.createElement("img");
section.appendChild(img);
img.setAttribute("src","../Assests/Image/audi.jpg");
img.style.height="513px";
img.style.width="665px";
//!Section2
let section2=document.createElement("section");
mydiv3.appendChild(section2);
//!Video
let video=document.createElement("video");
section2.appendChild(video);
video.setAttribute("src","../Assests/Videos/Premalu (2024).mkv");
video.controls=true;
video.style.height="513px";
video.style.width="665px";
//!Footer
let footer=document.createElement("footer");
document.body.append(footer);
footer.textContent="Footer";
footer.setAttribute("id","header");
footer.style.textAlign="center";
footer.style.border="1px solid black";
footer.style.padding="20px";
footer.style.backgroundColor="aqua";
footer.style.borderTopStyle="none";

console.log(document);