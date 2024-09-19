function formatMessage(name,status){
    if(status){
    return `Welcome back, ${ name }! Your status is: active.`
    }
}

console.log(formatMessage("Kumar Roshan",true));