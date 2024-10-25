function getUserData(userid,callback){
    setTimeout(()=>{
        let user=fetch("https://jsonplaceholder.typicode.com/users");
        user.then(function(res){
            return res.json();
        }).then(function(data){
            const foundUser = data.find((user) => user.id === userid);
            if (foundUser) {
                callback(foundUser);
            } else {
                console.log(`User with ID ${userid} not found`);
            }
        })
    },2000);
}

function displayUser(user) {
    console.log(`User ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Username: ${user.username}`);
    console.log(`Email: ${user.email}`);
    console.log(`Address: ${user.address}`);
}

getUserData(1,displayUser);