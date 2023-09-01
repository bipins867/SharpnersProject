import {Router,Request,Response} from 'express';
import {Todo} from '../models/todos';


const todos:Todo[]=[];

const router=Router();

router.get('/',(req:Request,res:Response,next)=>{
    res.status(200).json({todos:todos})
})

router.post('/todo',(req,res,next)=>{
    const newTodo:Todo={id:new Date().toISOString(),text:req.body.text};
    todos.push(newTodo);
})


router.put('/todo/:todoId',(req,res,next)=>{
    const tid=req.params.todoId;
    const todoIndex=todos.findIndex(todoItem=>todoItem.id===tid)
    if(todoIndex>=0){
        todos[todoIndex]={id:tid,text:req.body.text};
        return res.status(200).json({message:"Updated"})
    }
})


export default router;


