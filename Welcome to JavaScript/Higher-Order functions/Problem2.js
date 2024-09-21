let prateekMarksData = {
    name: "Prateek",
    subject1: "Javascript",
    subject2: "HTML",
    subject3: "CSS",
    subject4: null,
    subject5: null,
    marks1: 90,
    marks2: 81,
    marks3: 80,
    marks4: null,
    marks5: null,
  };
  
  let nrupulMarksData = {
    name: "Nrupul",
    subject1: "Java",
    subject2: "Python",
    subject3: null,
    subject4: null,
    subject5: null,
    marks1: 95,
    marks2: 85,
    marks3: null,
    marks4: null,
    marks5: null,
  };
  
  let allStudentsMarksData = [prateekMarksData, nrupulMarksData];
  
 
  let obj = allStudentsMarksData.map((data)=> {
        let res=[]
        for(let i=1;i<=5;i++){
            if (data[`marks${i}`]!=null){
                res.push({subject:data[`subject${i}`],score:data[`marks${i}`]})
            }
        }
        
        return{
            name:data.name,
            marks:res,
        }
  });

  console.log(obj);
  