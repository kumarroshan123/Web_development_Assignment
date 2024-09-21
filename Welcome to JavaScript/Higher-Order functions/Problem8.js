const filePaths = [
    "/images/pic1.jpg",
    "/images/pic2.png",
    "/assets/img/background.jpg",
    "/assets/img/logo.png",
    "/downloads/document.pdf",
    "/downloads/image.png",
    "/downloads/image.jpg",
  ];

let obj = filePaths.filter((data)=>{
    return data[data.length-1]!='f'
})

console.log(obj);
