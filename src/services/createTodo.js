import axios from 'axios'


export const createTodo = async newTask =>{
    const res = await axios({
        method: 'POST',
        url: 'https://todos-go.herokuapp.com/api/todos',
        data: newTask
    })
    return res
}