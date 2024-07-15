const jwt = require('jsonwebtoken');
const secret = "Ayushna"
function setUser(user)
{
    const payload = {
        _id:user._id,
        email: user.email,
    }
    return jwt.sign(payload,secret,{expiresIn: '1h'});
}

function getUser(token)
{
    //console.log(token);
    if(!token) return null;
    try{
        return jwt.verify(token,secret);
    }
    catch(error){
        return null;
    }
}

module.exports = {
    setUser,
    getUser,
};