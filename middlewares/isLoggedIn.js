const isLoggedIn=(req,res,next)=>{
    
        if(!req.isAuthenticated()){
            req.flash('error','You need to login  to continue')
            // if(req.session){
            //     req.session.requestedUrl=req.headers.referer;
            // }
            res.redirect("/login")
            
        }
        else
        next();
}
module.exports=isLoggedIn;