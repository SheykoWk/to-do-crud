import axios from 'axios'

export const deleteTodo = async (id) => {
    const res = axios({
        method: 'DELETE',
        baseURL: 'http://todos-go.herokuapp.com/api/todos',
        url: `/${id}`
    })
    return res
}