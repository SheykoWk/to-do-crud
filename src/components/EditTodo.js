const EditTodo = ({ handleSubmit, register, handleEditTask }) => {

    return (
        <form onSubmit={handleSubmit(handleEditTask)}>
            <div>
                <label htmlFor='task'>Task</label>
                <input type='text'id='task' {...register('task', { required: true } )} />
            </div>
            <div>
                <label htmlFor='student'>User</label>
                <input type='text' id='student' {...register('student', { required: true })} />
            </div>
            <button>Submit</button>
        </form>
    )
}
  
export default EditTodo