setInterval(showtime,1000);
function showtime(){
    let dateandday=new Date();
    let hour=dateandday.getHours();
    let head=document.getElementById("head2");
    head.textContent=hour;

    let min=dateandday.getMinutes();
    let head2=document.getElementById("head4");
    head2.textContent=min;

    let sec=dateandday.getSeconds();
    let head3=document.getElementById("head6");
    head3.textContent=sec;

    let head4=document.getElementById("head8");
    head4.textContent="AM";
    
    let date=dateandday.getDate();
    let head5=document.getElementById("head10");
    head5.textContent=date;

    let monthcount=dateandday.getMonth();
    let month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let head6=document.getElementById("head12");
    head6.textContent=month[monthcount];

    let year=dateandday.getFullYear();
    let head7=document.getElementById("head14");
    head7.textContent=year;

    let daycount=dateandday.getDay();
    let day=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    let head8=document.getElementById("head16");
    head8.textContent=day[daycount];
}
