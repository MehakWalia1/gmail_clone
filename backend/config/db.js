const mongoose=require("mongoose")

const connect=async()=>{
    await mongoose.connect('mongodb+srv://mehakwalia71:<db_password>@cluster0.2hf4gzl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
}

module.exports=connect;