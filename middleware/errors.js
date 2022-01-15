const {type} = require("express/lib/response");
function errorHandler(err,req,res,next){
    if(typeof err=="string"){
        return res.status(400).json({message:err});
    }
    if(err.name=="VaidationError"){
        return res.status(400).json({message:err.message});
    }

    return res.status(500).json({message:err.message});
}

module.exports ={
    errorHandler
}