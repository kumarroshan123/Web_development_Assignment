const words = [
    "racecar",
    "hello",
    "deified",
    "world",
    "level",
    "programming",
    "radar",
    "civic",
    "javascript",
  ];
  
  let obj = words.filter((data)=>{
    let r=data.split('').reverse().join('');
    return r===data; 
  })

  console.log(obj);
  