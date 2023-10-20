import './App.css'
import Addtodo from './Componentes/Addtodo'
import Input from './Componentes/Input'
import Navbar from './Componentes/Navbar'

function App() {

  return (
    <main>
    <h1>Todo List React + TypeScript</h1>
    <Navbar />
     <Addtodo />
     <Input />
    </main>
  )
}

export default App
