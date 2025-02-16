import { BrowserRouter } from 'react-router-dom'
import { Navigation } from './sidebar/routes/navigation'

function App() {

  return (
    <BrowserRouter>  
      <Navigation />
    </BrowserRouter>
  )
}

export default App
