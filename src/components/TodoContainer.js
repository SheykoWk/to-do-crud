import {useEffect, useState,} from 'react'
import { useForm } from 'react-hook-form'
import { createTodo } from '../services/createTodo';
import { readTodo } from '../services/readTodo';
import { deleteTodo } from '../services/deleteTodo';
import { updateTodo } from '../services/updateTodo';
import CreateTodo from './CreateTodo';
import TodoItem from './TodoItem';
import EditTodo from './EditTodo'

const TodoContainer = () => {
    //initial useState
    const [data, setData] = useState([]);
    const [editing, setEditing] = useState(false);
    const [editingTask, setEditingTask] = useState({})
    const { register, handleSubmit } = useForm()

    //useEffects
    useEffect(() => {
        readTodo().then(res =>{
            setData(res.data.todos)
            console.log(res.data.todos)
        })
    }, [])
    //create task
    const onCreateTask = (value) => {
        const promise = async () =>{
            const res = await createTodo(value)
            setData(prevData => [res.data, ...prevData])
        }
        promise()
    }
    //edit task

    const editRow = task => {
        setEditing(true);
        setEditingTask({
            id: task.id,
            task: task.task,
            student: task.student,
            isCompleted: task.isCompleted
        })
    }
    const editTask = (id, updatedData) => {
        setEditing(false)
        setData(prevData => prevData.map((item) => (item.id === id ? updatedData : item)))
    }
    const onEditTask = (id, data) => {
        const promise = async () => {
            const res = await updateTodo(id)
            console.log(res)
            setData((prevData) => prevData.map((item) => {
                if(id === item.id){
                    const newData = {
                        task : data.task,
                        student: data.student,
                        isCompleted: false
                    }
                    return newData
                } else {
                    return item
                }
            }))
        }
        promise()
    }
    const onDeleteTask = (id) => {
        const promise = async () =>{
            const res = await deleteTodo(id)
            console.log(res.data)
            setData(prevId => prevId.filter(value => value.id !== id))
        }
        promise()
    }


        const list = data.map((item) => 
            <TodoItem key={item.id} id={item.id} isCompleted={item.isCompleted} student={item.student} task={item.task} handleDelete={onDeleteTask} handleEdit={onEditTask}/>)
    return(
        <div>
            {editing ? (
                <div>
                    <h3>Edit Task</h3>
                    <EditTodo 
                        setEditing={setEditing}
                        editingTask={editingTask}
                        editTask={editTask}
                        register={register}
                        handleEditTask={onEditTask}
                    />
                </div>
            ) : (
                <div>
                    <h3>Create Task</h3>
                    <CreateTodo 
                        handleSubmit={handleSubmit}
                        register={register}
                        handleCreateTask={onCreateTask}
                    />
                </div>
            )}
            {list}
        </div>
    )
}
export default TodoContainer