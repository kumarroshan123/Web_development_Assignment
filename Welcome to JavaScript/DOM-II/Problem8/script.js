let user = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
    },
  ];

let id=11;
let editid=null;

let main=document.querySelector(".main");
let name=document.querySelector("#name");
let username=document.querySelector("#username");
let email=document.querySelector("#email");
let formbutton=document.querySelector("#form-button");

function display(){
    main.innerHTML="";
    user.forEach(ele => {
        let div=document.createElement("div");
        div.innerHTML=`<h2>Name:${ele.name}</h2>
                       <h2>Username:${ele.username}</h2>
                       <h2>Email:${ele.email}</h2>
                       <button onclick="edit(${ele.id})"><a href="#form">Edit</a></button>`;
        main.append(div);
    });
}
function edit(idnumber){
    let arr=user.filter((ele)=>ele.id===idnumber);
    name.value=arr[0].name;
    username.value=arr[0].username;
    email.value=arr[0].email;
    editid=idnumber;
}

formbutton.addEventListener("click",(e)=>{
    e.preventDefault();
    let newobj={id:editid||id,name:name.value,username:username.value,email:email.value};
    if(editid){
       user=user.map((ele)=>editid===ele.id?newobj:ele);
       editid=null;
    }else{
        user.push(newobj);
    }
    id++;
    display();
    name.value="";
    username.value="";
    email.value="";
})
display();