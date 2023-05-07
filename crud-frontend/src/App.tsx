import { useEffect, useState } from 'react'
import './App.css'
import { CrudForm } from './components/Form'
import { CrudDisplayData } from './components/Data'
import axios from 'axios'

import { Button } from 'react-bootstrap'
function App() {

  const [userslist, Setuserlist] = useState([]);
  const [Showuser, Setshowuser] = useState(false);

  useEffect(() => {
      axios.get('http://localhost:4444/users')
      .then(res => Setuserlist(res.data))
      .catch(err => alert(err))
  },[])

  return (
    <div className='container' >
      <h2>REACT-TS-CRUD</h2>
      <CrudForm />
      <br />
      <Button onClick={() => Setshowuser(!Showuser)} style={{ position: 'relative', left: 180, bottom: 61 }}>
         {Showuser ? "HIDE" : "SHOW"} USER
      </Button>
      {Showuser && <CrudDisplayData UsersType={userslist} />}
      
    </div>
  )
}

export default App
