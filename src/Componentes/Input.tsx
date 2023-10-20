import { useTodos } from "../Store/Todos";
import { useSearchParams } from "react-router-dom";


const Input = () => {

    const { Todos , toggleTodoAsCompleted , handleDeleteTodo } = useTodos();
    
    const [searchParams] = useSearchParams();
    
    let todosData = searchParams.get("todos")
 
    let filterdata = Todos;

    if (todosData === "active") {
        filterdata = filterdata.filter((task) => !task.completed)
    }

    if (todosData === "completed") {
        filterdata = filterdata.filter((task) => task.completed)
    }

    return (

        <ul className="main-task">
            {
                filterdata.map((todo) => {
                    return <li key={todo.id}>
                        <input type="checkbox" checked={todo.completed}
                            id={`todo- ${todo.id}`}
                            onChange={() => toggleTodoAsCompleted(todo.id)} />
                        <label htmlFor={`todo- ${todo.id}`}>{todo.task}</label>

                        {
                            todo.completed && (
                                <button type="button" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                            )
                        }
                    </li>
                })
            }
        </ul>
    )
}

export default Input
