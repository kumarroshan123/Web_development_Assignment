let arr=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjvf_5z7NfotQvnjY9prvPTltGm8bR0hhkWw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrzQvTP70zhs0FkunKsu0NEwXX3-ZwngwWEQ&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7sKGlm7yVS-Rngp_6EXr8Rg2kkO3Vfd4MQg&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbyV0XHHjdYGKLHwCbn_HGG3ZCzqFaGSkcg&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReqs2Zp0UYVjJhRU7a48ieUB-bIbLeJRZ88A&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YZLbquJWhXbhPqSNGAUrOswzw-Wf-ODuXw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPbAKgIcRb7wnzz5aexhNsxupOdn-7orQawg&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwwjiOy4xdD5RUe3Hio3gQBa-vARJpjOWxg&s"]

let cur=0;
let interval=null;
let pic=document.querySelector('.pic-box');
pic.innerHTML=`<img src="${arr[cur]} alt="""> `;
let start=document.querySelector('.play');
let pause=document.querySelector('.pause');
let previous=document.querySelector('.previous');
let next=document.querySelector('.next');
let url=document.querySelector('.img-url');
let index=document.querySelector('.img-pos');
let add=document.querySelector('.add');

start.addEventListener('click',function(){
    if (interval===null){
        interval=setInterval(()=>{
            cur+=1;
            if(cur>=arr.length){
                cur=0;
            }
            pic.innerHTML=`<img src="${arr[cur]} alt="""> `;
        },3000);
    }
});

pause.addEventListener('click',function(){
    clearInterval(interval);
    interval=null;
});

previous.addEventListener('click',function(){
    clearInterval(interval);
    interval=null;
    cur=(cur>0)?cur-1:arr.length-1;
    pic.innerHTML = `<img src="${arr[cur]}" alt="">`;
    start.click();
});

next.addEventListener('click',function(){
    clearInterval(interval);
    interval=null;
    cur=(cur<arr.length-1)?cur+1:0;
    pic.innerHTML = `<img src="${arr[cur]}" alt="">`;
    start.click();
});

add.addEventListener('click',function(){
    let urlvalue=url.value;
    let indexvalue=index.value;
    if(urlvalue && indexvalue>=0 && indexvalue<=arr.length){
        arr.splice(indexvalue,0,urlvalue);
        alert('Image added to the slideshow!');
    }else{
        alert('Invalid image URL or position.');
    }
});