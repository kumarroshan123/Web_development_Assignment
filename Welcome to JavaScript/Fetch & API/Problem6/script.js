let cat=document.querySelector("#get-category-data");
let ing=document.querySelector("#get-ingrediant-data");

cat.addEventListener('click',()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then((res)=>{
        return res.json(); 
    }).then((data)=>{
        console.log(data)
    }).catch(error=>{
        console.log("Something Went Wrong");
    });
})

ing.addEventListener('click',()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast").then((res)=>{
        return res.json(); 
    }).then((data)=>{
        console.log(data)
    }).catch(error=>{
        console.log("Something Went Wrong");
    })
})


