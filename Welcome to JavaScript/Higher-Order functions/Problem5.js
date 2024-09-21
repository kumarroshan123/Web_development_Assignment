const strings = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "pear",
    "apple",
  ];

  let obj = strings.reduce((res,data)=>{
    if(!res[data]){
        res[data]=1;
    }
    else{
        res[data]+=1;
    }
    return res;
  },{});

  console.log(obj);
  