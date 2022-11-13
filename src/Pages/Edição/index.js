import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form';
import { toast } from 'react-toastify';

import { db } from '../../firebaseConnection';
import { doc,updateDoc } from 'firebase/firestore';

export default function Edição() {

const[nome,setNome] = useState('')
const[email,setEmail] = useState('')
const[edit,setEdit] = useState('')

async function editarUser(e){
e.preventDefault();
const docRef = doc(db,'users','')
if(!nome=='' && !email==''){
await updateDoc(docRef(db, 'users'),{
    nome:nome,
    email:email
})
.then(()=>{
   toast.success('Dados Alterados com Sucesso')
  })
 .catch((error)=>{
  console.log('falha ao cadastrar' + error)
 })
 }else{
    toast.warn('Preencha todos os campos')
 }
}
 return (
  <div>
<Form className='cadastro' onSubmit={editarUser} >
                   
<Form.Group className="input-nome" value={nome} 
onChange={(e)=> setNome(e.target.value) } >
<Form.Label>Nome</Form.Label>
    <Form.Control
    name='nome'
    type="text"
    placeholder="Insira Nome..."
/>
</Form.Group>

<Form.Group className="input-nome" value={email} 
onChange={(e)=> setEmail(e.target.value) } >
<Form.Label>Email</Form.Label>
    <Form.Control
    name='email'
    type="email"
    placeholder="Insira Email..."
/>
</Form.Group>

<Button className='botao' type="submit">
  Alterar
</Button>

<Link className ='button-link' to='/tabela'>
 Voltar para Tabela
</Link>

</Form>
  </div>
  );
}