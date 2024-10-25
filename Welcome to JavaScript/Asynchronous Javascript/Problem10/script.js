let minutes=0;
    let seconds=0;
    let intervalId = null;
    let h= document.querySelector('.number');
    h.innerHTML= `00:00`;
    let start=document.querySelector('.btn-start');
    let stop=document.querySelector('.btn-stop');
    let reset= document.querySelector('.btn-reset');
    start.addEventListener('click',function(){
        if(intervalId===null){
        intervalId=setInterval(()=>{
           seconds+=1
           if(seconds==60)
           {
             seconds=0;
             minutes+=1;
           }
           if(seconds<10 && minutes<10){
             h.innerHTML=`0${minutes}:0${seconds}`
           }else if(minutes<10){
             h.innerHTML=`0${minutes}:${seconds}`
           }else if(seconds<10){
             h.innerHTML=`${minutes}:0${seconds}`;
           }else{
            h.innerHTML=`${minutes}:${seconds}`;
           }
        },1000);
       }
    });
    stop.addEventListener('click',function(){
        clearInterval(intervalId);
        intervalId=null;
    })
    reset.addEventListener('click',function(){
        minutes=0;
        seconds=0;
        clearInterval(intervalId);
        intervalId=null;
        h.innerHTML=`00:00`;
    });