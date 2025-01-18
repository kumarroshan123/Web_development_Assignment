const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const app = express();
const upload = multer({ dest: "src/uploads" });

cloudinary.config({
    cloud_name: 'dezldcx0r',
    api_key: '342259184431556',
    api_secret: '*************',
  });

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/src/index.html");
  });

app.post("/upload",upload.single("file"),async(req,res)=>{
    try{
        const result=await cloudinary.uploader.upload(req.file.path);
        res.status(200).json({ message: "File uploaded successfully", imageUrl: result.secure_url })
    }catch(err){
        res.status(500).json({ message: "Upload failed", error: err.message });
    }
})

app.listen(3000, () =>{
     console.log("Server running on http://localhost:3000")
});