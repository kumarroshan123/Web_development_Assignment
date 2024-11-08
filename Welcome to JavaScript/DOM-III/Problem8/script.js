let box = document.querySelector(".box");
let title = document.querySelector("#title");
let description = document.querySelector("#description");
let status = document.querySelector("#status");
let submit = document.querySelector("#submit");
let filter= document.querySelector("#filter");


let task = JSON.parse(localStorage.getItem("task")) || [];
let id = JSON.parse(localStorage.getItem("id")) || 1;
let editid = null;

filter.addEventListener("change",()=>{
    if(filter.value!==""){
        let f=task.filter((ele)=>ele.status===filter.value);
        display(f);
    }else{
      display(task);
    }
});

submit.addEventListener("click", () => {
  if (title.value && description.value) {
    let newobj={
        id: id,
        title: title.value,
        description: description.value,
        status: status.value,
      };
    if(editid){
        task=task.map((ele)=>{
            return (ele.id===editid)?newobj:ele;
        });
        editid=null;
    }else{
        task.push(newobj);
    }
    id++;
    localStorage.setItem("id", JSON.stringify(id));
    localStorage.setItem("task",JSON.stringify(task));
    display(task);

    title.value="";
    description.value="";
    status.value="";
  } else {
    alert("Enter all the required fields");
  }
});

function display(task) {
  box.innerHTML = "";
  task.forEach((ele,i) => {
    let div = document.createElement("div");
    div.innerHTML = `<h2>${ele.title}</h2>
                       <p>${ele.description}</p>
                       <select name="" id="status${i}">
            <option value="pending" ${ele.status==="pending"?"selected":""}>Pending</option>
            <option value="completed" ${ele.status==="completed"?"selected":""}>Completed</option>
        </select>
       <a href="#form" onclick="edit(${ele.id})">Edit</a>
        <button onclick="delet(${ele.id})">Delete</button>`;
    box.append(div);

    let stat=div.querySelector(`#status${i}`);
    stat.addEventListener("change",()=>{
        task[i].status=stat.value;
        localStorage.setItem("task",JSON.stringify(task));
    });
  });
}

function edit(idno){
    editid=idno;
    let obj=task.find((ele)=> ele.id===editid);
    title.value=obj.title;
    description.value=obj.description;
    status.value=obj.status;
}

function delet(idno){
    task=task.filter((ele)=>ele.id!=idno);
    localStorage.setItem("task",JSON.stringify(task));
    display(task);
}

display(task)