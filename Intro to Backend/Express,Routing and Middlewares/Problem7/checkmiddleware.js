const fs=require("fs")

const checkmiddleware=(req,res,next)=>{
    const data=req.body;
    const validation=JSON.parse(fs.readFileSync("./check.json", "utf-8"));
    let error=[];
    for(const key in data){
        if(validation[key]==undefined){
            error.push(`${key} is wrong key name please check the format`);
        }
        else if(validation[key]== "array of strings"){
            if(Array.isArray(data[key]) && !data.every((ele)=>typeof ele == "string"))
            {
                error.push(`${key} must be an array of strings.`)
            }
        }
        else if(validation[key] !== typeof data[key]){
           error.push(`${key} must be in ${validation[key]}`);
        }
    }
    if(error.length>0){
        return res.status(400).json({
            message: "bad request. some data is incorrect.",
            error,
        });
    }
    next();
}

module.exports =checkmiddleware;