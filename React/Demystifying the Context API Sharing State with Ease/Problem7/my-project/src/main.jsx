
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Themevalue } from './components/themecontext.jsx'
import { Uservalue } from './components/usercontext.jsx'

createRoot(document.getElementById('root')).render(
   <Themevalue>
    <Uservalue>
       <App />
    </Uservalue>
    </Themevalue>
)
