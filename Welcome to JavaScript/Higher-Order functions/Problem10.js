const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "She sells seashells by the seashore.",
    "I have a dream that one day this nation will rise up.",
    "To be or not to be, that is the question.",
    "In the beginning, God created the heavens and the earth.",
  ];
  
  let obj = sentences.forEach((data,i)=>{
    let a=data.split(" ")
    console.log(`Sentence ${i+1} contains ${a.length} words. `);
    
  });
  
  