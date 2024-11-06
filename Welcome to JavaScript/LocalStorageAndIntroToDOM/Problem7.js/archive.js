let tablebody = document.querySelector(".tablebody");
let priority= document.querySelector("#priority");
let stat = document.querySelector("#status");
let archive = JSON.parse(localStorage.getItem("archive")) || [];

function display(archive){
    tablebody.innerHTML="";
    archive.forEach((ele,i) => {
    let body = document.createElement("tr");
    body.innerHTML = `<td>${ele.title}</td>
              <td>${ele.priority}</td>
              <td>${ele.status}</td>
              <td><button onclick="restore(${i})">Restore</button></td>
              <td><button onclick="delet(${i})">Delete</button></td>`;
              tablebody.append(body);
    });
}

function restore(i){
    let ele=archive[i];
    let todo= JSON.parse(localStorage.getItem("todo")) || [];
    todo.push(ele);
    localStorage.setItem("todo",JSON.stringify(todo));
    delet(i);
}

function delet(i){
   let ele=archive[i];
   archive=archive.filter((a)=>a!==ele);
   localStorage.setItem("archive",JSON.stringify(archive));
   display(archive);
}

priority.addEventListener("change",(e)=>{
    stat.value="";
    if(priority.value==="High"){
        let newarchive= archive.filter((ele)=>ele.priority==="High");
        display(newarchive);
    }else if(priority.value==="Medium"){
        let newarchive= archive.filter((ele)=>ele.priority==="Medium");
        display(newarchive);
    }else if(priority.value==="Low"){
        let newarchive= archive.filter((ele)=>ele.priority==="Low");
        display(newarchive);
    }else{
        display(archive);
    }
});

stat.addEventListener("change",(e)=>{
    priority.value="";
    if(stat.value==="Pending"){
        let newstatus= archive.filter((ele)=>ele.status==="Pending");
        display(newstatus);
    }else if (stat.value==="Completed"){
        let newstatus= archive.filter((ele)=>ele.status==="Completed");
        display(newstatus);
    }else{
        display(archive);
    }
});

display(archive);

