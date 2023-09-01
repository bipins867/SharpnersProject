import {Router,Request,Response} from 'express';
import {Todo} from '../models/todos';


const todos:Todo[]=[];

const router=Router();

router.get('/',(res:Request,res:Response,next)=>{
    res.status(200).json({todos:todos})
})

router.post('/todo',(req,res,next)=>{
    const newTodo:Todo={id:new Date().toISOString(),text:req.body.text};
    todos.push(newTodo);
})

export default router;


