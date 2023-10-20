import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TodosProvideer } from './Store/Todos.tsx'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <TodosProvideer>
        <App />
      </TodosProvideer>
    </BrowserRouter>

  </React.StrictMode>,
)