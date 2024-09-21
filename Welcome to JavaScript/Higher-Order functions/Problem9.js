const strings = [
    "Hello",
    "world",
    "this",
    "is",
    "an",
    "example",
    "array",
    "of",
    "strings",
  ];

  let obj = strings.map((item)=>{
      let a= item.split('');
      [a[0],a[a.length-1]]=[a[a.length-1],a[0]]
      return a.join('')
  })

  console.log(obj);
  