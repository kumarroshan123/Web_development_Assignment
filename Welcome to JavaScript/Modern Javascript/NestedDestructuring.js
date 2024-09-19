function extractNestedData(obj){
    let {name:{firstName,lastName}} = obj;
    return {name:`${firstName} ${lastName}`}
}

console.log(extractNestedData({
    name: {
        firstName: "John",
        lastName: "Doe"
    },
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    }}));
