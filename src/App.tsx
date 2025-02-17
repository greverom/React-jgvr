import { BrowserRouter } from 'react-router-dom'
import { Navigation } from './components/sidebar/navigation/navigation'
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
