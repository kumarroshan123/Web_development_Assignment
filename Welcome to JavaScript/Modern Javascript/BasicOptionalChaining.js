function getusercity(user){
    let c=user.address?.city;
    return c;
}

console.log(getusercity({
    name: "Alice",
    age: 28,
    address: {
        city: "Los Angeles",
        country: "USA"
    }
}));
