import mongoose  from "mongoose";

const todoschema = new mongoose.Schema({
    todo:{
        type:String,
        require:true
    }
})
export default mongoose.model("todo",todoschema)