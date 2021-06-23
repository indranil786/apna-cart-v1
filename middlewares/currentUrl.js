const currentUrl=(req,res,next)=>{
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    req.session.previousUrl=fullUrl;
    next();   
}
module.exports=currentUrl;