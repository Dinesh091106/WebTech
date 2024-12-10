let color=document.getElementById("selection")
color.addEventListener("change",function(){
let color=document.getElementById("selection").value
document.body.style.backgroundColor=color;
});
let submit1 = document.getElementById("submit");
submit1.addEventListener("click",function(){
  let sigin = document.getElementById("sigin");
  sigin.style.display = "none";
  let login = document.getElementById("login");
  login.style.display = "block";
});
let loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click",function(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  console.log(`sigin username $ {username}`);
  console.log(`sigin password ${password}`);
  let loguser = document.getElementById("log-username").value;
  let logpass = document.getElementById("log-password").value;
  console.log(`login username ${loguser}`);
  console.log(`login username ${logpass}`);
  if (username == loguser && password == logpass) {
    alert("Log In Successfull");
  } else {
    alert("Incorrect Username Or Password");
  }
});
let loginBtn1 = document.getElementById('loginBtn1')
loginBtn1.addEventListener('click',function(){
  let sigin = document.getElementById("sigin");
  sigin.style.display = "none";
  let login = document.getElementById("login");
  login.style.display = "block";
})
let signBtn = document.getElementById('signBtn')
signBtn.addEventListener('click',function(){
  let sigin = document.getElementById("sigin");
  sigin.style.display = "block";
  let login = document.getElementById("login");
  login.style.display = "none";
})