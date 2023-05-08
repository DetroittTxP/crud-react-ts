import { useEffect, useState } from 'react'
import './App.css'
import { CrudForm } from './components/Form'
import { CrudDisplayData } from './components/Data'
import { FormType } from './interface/DataType'
import axios from 'axios'
import {Route,Routes,useLocation} from 'react-router-dom'
import { Edit } from './components/Edit'
import { Button } from 'react-bootstrap'



function App() {

  const [userslist, Setuserlist] = useState<FormType[]>([]);
  const [Showuser, Setshowuser] = useState(false);
  const [editdata,Seteditdata] = useState({
    id:0,
    user_name:'',
    user_id:'',
    user_password:'',
    user_email:'',
    user_tel:''
  })
  const [id,Setid] = useState(0)
  const location = useLocation();

  useEffect(() => {
      axios.get('http://localhost:4444/users')
      .then(res => Setuserlist(res.data))
      .catch(err => alert(err))
  },[])

  const onGetnewdata=(data:FormType) => {
        
     Setuserlist((prev) =>{
      return [data,...prev]
     })
  }

  const onGetnewDeletedData=(data:FormType[])=>{
    Setuserlist(data)
  }

  const onGetEditData=(id:number)=>{
       Setid(id)

       const filetered = userslist.filter(value => value.id === id)
       console.log(filetered[0]);
       
       Seteditdata(filetered[0])
       
  }



  return (
    <div className='container' >
      <h2>REACT-TS-CRUD</h2>

      <Routes>
          <Route path='/' element={<CrudForm onClickSubmit={onGetnewdata} />}/>
          <Route path='/edit' element={<Edit UsersType={editdata} id={id} />}/>
      </Routes>

      


      <br />
      { location.pathname  === '/' && <Button onClick={() => Setshowuser(!Showuser)} style={{ position: 'relative', left: 180, bottom: 61 }}>
         {Showuser ? "HIDE" : "SHOW"} USER
      </Button>}
      {Showuser && location.pathname === '/' &&  <CrudDisplayData ongetEdit={onGetEditData} ongetdeletedata={onGetnewDeletedData} UsersType={userslist}  />}
      
    </div>
  )
}

export default App
