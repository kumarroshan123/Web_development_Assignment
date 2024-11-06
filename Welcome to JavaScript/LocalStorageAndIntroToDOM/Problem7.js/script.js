let text = document.querySelector("#text");
let option = document.querySelector("#options");
let tablebody = document.querySelector(".tablebody");
let todo = JSON.parse(localStorage.getItem("todo")) || [];

function Addtodo() {
  let textval = text.value;
  let optionvalue = option.value;
  if (textval) {
    let obj = { title: textval, priority: optionvalue, status: "Pending🔄" };
    todo.push(obj);
    localStorage.setItem("todo", JSON.stringify(todo));
    display();
    text.value="";
  } else {
    alert("Todo cannot be Empty");
  }
}

function display() {
    tablebody.innerHTML = "";
    todo.forEach((ele,i) => {
    let body = document.createElement("tr");
    body.innerHTML = `<td>${ele.title}</td>
              <td class="${ele.priority}">${ele.priority}</td>
              <td><select id="status-choice${i}">
            <option value="Completed✅" ${ele.status==="Completed✅"? "selected":""}>Completed✅</option>
            <option value="Pending🔄" ${ele.status==="Pending🔄"? "selected":""}>Pending🔄</option>
          </select></td>
              <td><button onclick="Archieve(${i})">Archieve</button></td>`;


    let statuschoice=body.querySelector(`#status-choice${i}`);
    statuschoice.addEventListener('change',()=>{
        todo[i].status=statuschoice.value;
        localStorage.setItem("todo", JSON.stringify(todo));
    });
    tablebody.append(body);
  });
}

function Archieve(i){
    let ele=todo[i];
    let archive= JSON.parse(localStorage.getItem("archive")) || [];
    archive.push(ele);
    localStorage.setItem("archive",JSON.stringify(archive));
    todo=todo.filter((a)=>a!==ele);
    localStorage.setItem("todo",JSON.stringify(todo));
    display();
}
display();
