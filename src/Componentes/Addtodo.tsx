import { FormEvent, useState } from "react"
import { useTodos } from "../Store/Todos"


const Addtodo = () => {

    const [Todo, setTodo] = useState("")

    const {handaleAddtodo} = useTodos()

    const handaleFormSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handaleAddtodo(Todo);
        setTodo("");
    }



  return (
    <form onSubmit={handaleFormSubmit} >
        <input type="text" name="" value={Todo} onChange={(e) => setTodo(e.target.value)} />
        <button type="submit">Add</button>
    </form>
  )
}

export default Addtodo
