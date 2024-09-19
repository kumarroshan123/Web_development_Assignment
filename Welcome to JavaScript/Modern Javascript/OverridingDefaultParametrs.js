function createUser(username,role="user"){
    return {username,role};
}

console.log(createUser("Kumar Roshan",));
console.log(createUser("Kumar Roshan","Admin"));