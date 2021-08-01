const TodoItem = ({task, student, isCompleted, handleDelete, handleEdit, id}) => {
    return(
        <div>
            <h3>{task}</h3>
            <h3>{student}</h3>
            {isCompleted ? "si" : "no"}
            <button onClick={() => handleDelete(id)}>Delete</button>
            <button onClick={() => handleEdit(id)}>Edit</button>
        </div>
    )
}
export default TodoItem