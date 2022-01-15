const multer= require("multer");
const Path =require("path");

const storage = multer.diskStorage({
    destination:function (req,file,cb){
        cb(null,"./uploads");
    },
    filename:function (req,file,cb){
        cb(null,Date.now()+"-"+file.originalname);
    }
});

const filerFilter= (req,file,callback)=>{
  const validExtension= [".png",".jpg",".jpeg"];
  if(!validExtension.includes(Path.extname(file.originalname))){
      return callback(new Error("Only .png, .jpeg & .jpg format allowed"));
  }

  const fileSize= parseInt(req.headers["content-length"]);
  if(fileSize > 1048576){
      return callback(new Error("File Size should be < 10MB"));
  }

  callback(null,true);

  let upload = multer({
      storage: storage,
      filerFilter:filerFilter,
      fileSize:1048576
  });

  module.exports= upload.single("productImage");
};