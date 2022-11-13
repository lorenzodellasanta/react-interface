import './register.css';
import InputMask from 'react-input-mask';
import { useState } from 'react';
import { Link } from 'react-router-dom';

//Bootstrap e tostify
import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form';
import { toast } from 'react-toastify';

//Firebase
import { db } from '../../firebaseConnection';
import { doc,setDoc } from 'firebase/firestore';

export default function Registro(){

const[nome,setNome] = useState('')
const[email,setEmail] = useState('')
const[cpf,setCpf] = useState('')
const[ra,setRa] = useState('')


//Validação dos Campos


//Cadastro dos Dados
async function handleCadastro(e){
  e.preventDefault();
  if(!nome=='' && !email==''&& !cpf==''&& !ra==''){
    await setDoc(doc(db,'users',ra),{
      nome: nome,
      email: email,
      cpf: cpf,
      ra: ra,
  })
  .then(()=>{
   toast.success('Dados Registrados com Sucesso !!!')
    })
    .catch((error)=>{
      console.log('falha ao cadastrar' + error)
    })
  }else{
    toast.warn('Preencha todos os campos')
  }
  
}


//FORMULÁRIO DE REGISTRO
 return (
<Form className='cadastro' onSubmit={handleCadastro} >
                   
<Form.Group className="input-nome" value={nome} 
onChange={(e)=> setNome(e.target.value) } >
<Form.Label>Nome</Form.Label>
<Form.Control
   name='nome'
    type="text"
     placeholder="Insira Nome..."
/>
</Form.Group>

<Form.Group className="input-email" value={email} 
onChange={(e)=> setEmail(e.target.value) } >
  <Form.Label>Email</Form.Label>
  <Form.Control 
  name='email' 
  type="email" 
  placeholder="Insira Email..."
  />
</Form.Group>

<Form.Group className="input-cpf" value={cpf} 
onChange={(e)=> setCpf(e.target.value) }   >
  <Form.Label>CPF</Form.Label>
  <Form.Control
  name='cpf' 
  type="text"  as ={InputMask} mask='999.999.999-99' 
  placeholder="insira seu CPF..."/>
</Form.Group>

<Form.Group className="input-ra" value={ra} 
onChange={(e)=> setRa(e.target.value) }   >
  <Form.Label>Registro Academico</Form.Label>
  <Form.Control 
  name='ra' 
  type="text" 
  placeholder="Insira seu RA..."/>
</Form.Group>

<Button className='botao' type="submit">
  Cadastrar
</Button>

  
<Link className ='button-link' to='/tabela'>
 Ver Registros
</Link>
</Form>
)
 }
