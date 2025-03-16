const User = require("../models/user");
const { setUser } = require("../service/auth");

async function handleUserSignUp(req, res) {
    const { name, username, email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });
        const usernameExists = await User.findOne({ username });
        if (userExists || usernameExists) {

            return res.status(400).json({ message: 'User already exists' });
        }
        const user = await User.create({
            name: name,
            username: username,
            email: email,
            password: password,
        });

        const token = setUser(user);
        res.cookie("uid", token, {
            "Access-Control-Allow-Credentials": "true"
        });
        res.status(201).json({ message: 'User created successfully' });
    }
    catch (error) {
        console.log('heloo');
        res.status(500).json({ message: 'Server error no' });
    }
};

async function handleUserLogin(req, res) {
    const { email, password } = req.body;
    try {
        //console.log(req.body);
        const user = await User.findOne({ email, password });
        if (!user) {
            console.log('hi');
            return res.status(400).json({ message: 'Invalid email id' });
        }
        const token = setUser(user);
        //console.log(token);
        /*return res
            .writeHead(200, {
                "Set-Cookie": `${token}`,
                "Access-Control-Allow-Credentials": "true",
                "message":"Login Successfull"
            })
            .send();*/
            res.cookie("uid", token, {
                "Access-Control-Allow-Credentials": "true"
            });
            
        //console.log(token);
        return res.json({ message: "Login Succesfull" });
    }
    catch (error) {
        res.json({ message: "Server error" });
    }
}


module.exports = {
    handleUserSignUp,
    handleUserLogin,
    
};