const isAdmin=(req,res,next)=>{
if( req.user.role!=="Admin"){
    req.flash("error","You need to be a Admin to continue..")
    console.log("\n\n\n\n\ This is the Admin url \n\n\n\n")
    console.log(req.session.previousUrl)
    res.redirect(req.session.previousUrl)
}
else{
    next();
}
}
module.exports=isAdmin;