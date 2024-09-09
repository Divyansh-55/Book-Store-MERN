import User from "../Modal/user.modal.js";
import bcrypt from "bcryptjs"
export const signUp = async (req, res) => {
    try {
        const { fullname, email, password } = req.body; 
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        
        const hashPassword=await bcrypt.hash(password,10);
        const createUser = new User({
            fullname:fullname, email:email, password:hashPassword
        });

        await createUser.save();
        res.status(201).json({ message: "Account created successfully",
            user:{
                _id:createUser._id,   
                fullname:createUser.fullname,
                email:createUser.email
            }
         });
    } catch (error) {
        console.error("Error", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const Login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user =await User.findOne({email});
        const isMatch=bcrypt.compare(password,user.password);
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid Email or Password"});
        }
        else {
            return res.status(200).json({message:"Loign Successfull",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
            }});
        }
    } catch (error) {
        console.log("Error"+error);
        return res.status(201).json({message:"Internal Server Error"});
    }
}
