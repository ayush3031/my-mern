const { getUser } = require("../service/auth");

async function restrictToLoggedinUserOnly(req,res,next)
{
    //console.log(req);
    const userUid = req.cookies.uid;
    //console.log(userUid.uid);

    if(!userUid) return res.status(404).json({message:"User not found"});
    const user = getUser(userUid);

    if(!user) return res.status(404).json({message:"User not found"});
   
    req.user = user;
    //console.log(user);
    console.log("oo");
    next();
}

async function checkAuth(req,res,next)
{
    const userUid = req.cookies.uid;
    //console.log(userUid);
    const user = getUser(userUid);
    //console.log(user);
    req.user = user;
    next();
}

module.exports= {
    restrictToLoggedinUserOnly,
    checkAuth,
}