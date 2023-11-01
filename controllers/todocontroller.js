import todomodel from "../modles/todomodel.js"

export const getTodo= async(req,res)=>{
    console.log("inside getTodo")
    const todoData =await todomodel.find()
    res.send(todoData)

}
export const saveTodo= async(req,res)=>{
    console.log("first",req.body)
    const {todo}=req.body
    const newTodo=new todomodel({todo})
    try{
        await newTodo.save()
    }catch(err){
        console.log(err)
    }
    res.status(200).send({message:"successfully added"})

}
export const updateTodo=(req,res)=>{
    const {id}= req.params
    const {todo}= req.body

    todomodel.findByIdAndUpdateDelete(id)
    .then(()=>{
        res.status(200).send({message:"deleted successfully"})
    })
    .catch((err)=>{
        console.log("error in deleting..",err)
    })

}
export const deleteTodo=(req,res)=>{

}
