import { BrowserRouter } from 'react-router-dom'
import { Navigation } from './components/ui/sidebar/sidebar'
import { AuthProvider } from './context/authProvider'

function App() {

  return (
    <AuthProvider>  
      <BrowserRouter>  
        <Navigation />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
