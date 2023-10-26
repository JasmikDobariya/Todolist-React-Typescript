import { ReactNode, createContext, useContext, useState } from "react";

export type TodosProviderProps = {
    children: ReactNode
}

export type Todo = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
}

export type TodoContext = {
    Todos: Todo[];
    handaleAddtodo: (task: string) => void
    toggleTodoAsCompleted: (id: string) => void
    handleDeleteTodo: (id: string) => void
}

export const todoContext = createContext<TodoContext | null>(null)

export const TodosProvideer = ({ children }: TodosProviderProps) => {

    const [Todos, setTodos] = useState<Todo[]>(() => {

        try {
            const newTodos = localStorage.getItem('todos') || "[]";
            return JSON.parse(newTodos) as Todo[]

        } catch (error) {
            return [];
        }
    })

    const handaleAddtodo = (task: string) => {
        setTodos((prev) => {
            const newTodos: Todo[] = [
                {
                    id: Math.random().toString(),
                    task: task,
                    completed: false,
                    createdAt: new Date()
                },
                ...prev
            ]
            localStorage.setItem("todos", JSON.stringify(newTodos))
            return newTodos

        })
    }

    const toggleTodoAsCompleted = (id: string) => {
        setTodos((prev) => {
            let newTodos = prev.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo;
            })
            localStorage.setItem("todos", JSON.stringify(newTodos))
            return newTodos
        })
    }

    const handleDeleteTodo = (id: string) => {
        setTodos((prev) => {
            let newTodos = prev.filter((filtertodo) => (filtertodo.id !== id))
            localStorage.setItem("todos", JSON.stringify(newTodos))
            return newTodos;
        })
    }


    return <todoContext.Provider value={{ Todos, handaleAddtodo, toggleTodoAsCompleted, handleDeleteTodo }} >
        {children}
    </todoContext.Provider>
}

export const useTodos = () => {

    const todosConsumer = useContext(todoContext);

    if (!todosConsumer) {
        throw Error('askjdsfhdfh')
    }
    return todosConsumer;
}


