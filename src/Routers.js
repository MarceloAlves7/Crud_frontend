import { Routes, Route, Navigate } from 'react-router-dom';
import FormImage from './pages/FormImage';
import LoginPage from './pages/LoginPage';
import ShowImages from './pages/ShowImages';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import { AuthProvider, AuthContext } from './contexts/auth';
import { useContext } from 'react';



function Routers() {

    const Private = ({children}) => {
      
        const {authenticated, loading} = useContext(AuthContext)
        
        if(loading){
          return <div className='loading'>Carregando...</div>
        }


        if(!authenticated){
          return <Navigate to="/entrar" />
        }

        return children
    }

    return (
     <AuthProvider>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/entrar" element={<LoginPage />} />
          <Route path="/dashboard" element={<Private><Dashboard /></Private>} />
          <Route path="/dashboard/salvar-imagens" element={ <Private><FormImage /></Private>} />
        </Routes>
     </AuthProvider>
    );
  }
  
  export default Routers;