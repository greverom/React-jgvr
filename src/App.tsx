import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Store/Auth/authProvider'
import Layout from './components/layout/layout'

function App() {

  return (
    <AuthProvider>  
      <BrowserRouter>  
        <Layout />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
