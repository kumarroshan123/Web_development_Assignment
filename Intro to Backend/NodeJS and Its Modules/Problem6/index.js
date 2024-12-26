const fs=require("fs");
fs.writeFileSync("./index.txt","This is the new file i created");

const arr=process.argv.slice(2);
switch(arr[0]){
    case 'read': console.log(fs.readFileSync(arr[1],"utf-8"));
                 break;
    case 'append': fs.appendFileSync(arr[2],arr[1],"utf-8");
                   console.log(`Text Appended in ${arr[2]}`);
                   break;
    case 'create':fs.writeFileSync("./test.txt","This is second File");
                  console.log("New file is created");
                  break;
    case 'delete':fs.unlinkSync(arr[1]);
                  console.log("file is deleted");
                  break;
    case 'rename':fs.renameSync(arr[1],arr[2]);
                  console.log(`file rename  ${arr[1]} to ${arr[2]}`);
                  break;
    case 'list': console.log(fs.readdirSync("."));
                  break;
}
