function getFirstFriend(user){
    return user.friends?.[0];
}

console.log(getFirstFriend({
    name: "Bob",
    age: 25,
    friends: [
        { name: "Alice", age: 28 },
        { name: "Charlie", age: 26 },
        { name: "David", age: 27 }
    ]
}));

console.log(getFirstFriend({
    name: "Bob",
    age: 25,
    
}));
