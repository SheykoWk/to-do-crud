import axios from 'axios'


export const updateTodo = async (id, body) => {
    const res = axios({
        method: 'PUT',
        baseURL: 'http://todos-go.herokuapp.com/api/todos',
        url: `/${id}`,
        body: body
    })
    return res
}