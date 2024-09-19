function getUserInfo(user){
    let {name,...rest}=user;
    return {name,rest};
}

console.log(getUserInfo({
    name: {
        firstName: "John",
        lastName: "Doe"
    },
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    }
}));
