import axios from 'axios'

export const readTodo = async () => {
    const res = await axios({
        method: 'GET',
        baseURL: 'http://todos-go.herokuapp.com/api',
        url: '/todos'
    })
    return res
}