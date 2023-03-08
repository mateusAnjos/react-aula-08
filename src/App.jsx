import { useState } from 'react'
import './App.css'

function App() {
  const [userNameInput, setUserNameInput] = useState("")
  const [userAgeInput, setUserAgeInput] = useState("")

  const [userList, setUserList] = useState([])

const addUserList =()=>{
    const newUser ={
      name: userNameInput,
      age: userAgeInput,
    }

    setUserList([...userList, newUser])
    setUserNameInput("")
    setUserAgeInput("")
}



  return (
    <div>
      <div>
        <h1>Cadastro de Usuário</h1>
        <form>
            <input type="text" value={userNameInput} onChange={(event)=> setUserNameInput(event.target.value)}></input>
            <input type="text" value={userAgeInput} onChange={(event)=> setUserAgeInput(event.target.value)}></input>
            <input type="button" value="Cadastrar" onClick={addUserList}/>
        </form>
        <ul>
          {userList.map((item,index)=>(<li key={index}>{item.name} - {item.age}</li>))}
        </ul>
      </div>
    </div>
  )
}

export default App
