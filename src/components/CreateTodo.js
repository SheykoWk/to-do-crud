const CreateTodo = ({ handleSubmit, register, handleCreateTask, }) => {

    return (
        <form onSubmit={handleSubmit(handleCreateTask)}>
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
  
export default CreateTodo