import { Routes, Route } from 'react-router-dom';
import FormImage from './pages/FormImage';
import Login from './pages/Login';
import ShowImages from './pages/ShowImages';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import  UploadImage  from './pages/UploadImage'





function Routers() {

    return (
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/entrar" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/minhas-imagens" element={<ShowImages />} />
        <Route path="/dashboard/salvar-imagens" element={<FormImage />} />
      </Routes>
    );
  }
  
  export default Routers;