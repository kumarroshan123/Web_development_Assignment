import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Todovalue } from './components/todocontext.jsx'

createRoot(document.getElementById('root')).render(
    <Todovalue>
    <App />
    </Todovalue>
)
