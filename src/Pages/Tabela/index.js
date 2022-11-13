//React
import { useEffect, useState } from 'react'
import'./tabela.css';
import '../../Components/Modal';
//Firebase
import { db } from '../../firebaseConnection';
import { collection, doc, deleteDoc, onSnapshot} from 'firebase/firestore';
//React-BootStrap
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FiEdit3, FiTrash2 } from 'react-icons/fi';

export default function Tabela() {

  const [dados,setDados] = useState([]);
  const [modalShow,setModalShow] = useState(false);
  const [edit, setEdit] = useState();

  


  useEffect(()=>{
    async function updateDados(){
      const update = onSnapshot(collection(db, 'users'), (snapshot) => {
        let tabelaup = [];
  
        snapshot.forEach((doc)=>{
          tabelaup.push({
            nome: doc.data().nome,
            email: doc.data().email,
            cpf: doc.data().cpf,
            ra: doc.id,
          })
        })
        setDados(tabelaup);
      })
    }
    updateDados();
  },[dados])

  async function excluirUser(ra){
    const docRef = doc(db,'users',ra)
    await deleteDoc(docRef)
    .then(()=>{
     //toastfy item exluido com sucesso
    })
  }

  function toogleEditModal(dado){
    setModalShow(!modalShow)
    setEdit(dado);
      
  }   


//Tabela
return(
 <div className='table-responsive'>
    <Table bordered striped hover variant='dark' className='userTable'>
    <thead>
     <tr>
      <th>Nome</th>
      <th>Email</th>
      <th>CPF</th>
      <th>RA</th>
      <th></th>
     </tr>
    </thead>
    <tbody>
      {dados.map( (dado) =>{
        return(
          <tr key={dado.id}>
           <td> {dado.nome}</td>
           <td> {dado.email}</td>
           <td> {dado.cpf}</td>
           <td> {dado.ra}</td>
           <td>
           <button className='action' style={{backgroundColor:'rgb(202 138 4)'}} onClick={()=>toogleEditModal(dado)}>
            <FiEdit3/></button>
           <button className='action'style={{backgroundColor:'rgb(136 19 55)'}} onClick={ ()=> excluirUser(dado.ra) }>
            <FiTrash2/></button>
           </td>  
          </tr>
        )
      })}
    </tbody>
    </Table >

    {modalShow && (
      <Modal
      conteudo={edit}
      close={toogleEditModal}
      />
    )}

 </div>   
 )
}
