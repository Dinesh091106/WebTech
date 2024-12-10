let temp=0;
let interval;
let head;
let start=document.getElementById("start");
start.addEventListener("click",fun);
function fun(){
    interval=setInterval(()=>{
        head=document.getElementById("head");
        head.textContent=`Wait:${temp++}`;
        if(temp==10){
            confirm("Click Ok for Image Tab");
            window.location="https://pixabay.com/photos/bird-peacock-fauna-animal-plumage-8897237/"
        }
    },1000)
    start.removeEventListener("click",fun);
}
let stop1=document.getElementById("stop");
stop1.addEventListener("click",stop);
function stop(){
    clearInterval(interval);
    head.textContent=`Window will be launched in ${10-temp} secs`;0
    start.addEventListener("click",fun);
}
