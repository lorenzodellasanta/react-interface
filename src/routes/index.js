import React from 'react';
import {Routes, Route} from 'react-router-dom';


import Registro from '../Pages/Registro';
import Tabela from '../Pages/Tabela';
import Edição from '../Pages/Edição';

function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={<Registro/>} />
            <Route path='/tabela' element={<Tabela/>} />
            <Route path='/edição' element={<Edição/>} />
        </Routes>

        
    )
}

export default RoutesApp;
