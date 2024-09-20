
let subjectsHash = {
    1: "Javascript",
    2: "HTML",
    3: "CSS",
    4: "Java",
    5: "Rust",
  };
  
  let students = [
    { id: 1, name: "Prateek", subjectID: 5 },
    { id: 2, name: "Yogesh", subjectID: 2 },
    { id: 3, name: "Nrupul", subjectID: 4 },
    { id: 4, name: "Prateek", subjectID: 1 },
  ];
  

  let newObj = students.reduce((obj,student)=>{
    let name=student.name
    let id=student.subjectID
    if(!obj[name]){
        obj[name]=[];
    }
    obj[name].push(subjectsHash[id]);
    return obj;
  },{})

  console.log(newObj);
  