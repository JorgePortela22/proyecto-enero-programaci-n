import Layout from './layouts/Layout';
import Index from './pages/admin/Index';
import Contactos from  './pages/Contactos';
import IndexAdmin from './pages/admin/Index';
import IndexUsuarios from './pages/admin/usuarios/Index';
import './styles/styles.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LayoutAdmin from './layouts/LayoutAdmin';
import UsuarioGenerico from './pages/admin/usuarios/UsuarioGenerico';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Layout/>}>
        <Route path ='' element ={<Index/>}  />
        <Route path ='contactos' element ={<Contactos/>}  />
      </Route>
      <Route path = '/admin' element = {<LayoutAdmin/>}>
        <Route path ='' element ={<IndexAdmin/>}  />
        <Route path ='usuarios' element ={<IndexUsuarios/>}  />
        <Route path ='usuarios/:nombreusuario' element ={<UsuarioGenerico/>}  />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}
export default App;