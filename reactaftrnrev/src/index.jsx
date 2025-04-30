import {createRoot} from 'react-dom/client'
import Movies from "./Movies"
import Message from "./Message"
import Shyam from "./Shyam"
createRoot(document.getElementById('root')).render(<div><Movies/><Message/><Shyam/></div>)
    
// createRoot(document.getElementById('root')).render(<Shyam/>)

