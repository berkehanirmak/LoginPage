import React, { useState } from 'react'
import Input from './components/Input/Input'
import Button from './components/Button/Button'
import Form  from './components/Form/Form'
import "./App.css"

const App = () => {
const [user,setUser]=useState({name:"",password:""})
const handleChange=(e)=>{
  if(e.target.type==="text"){
    
  setUser({...user,name: e.target.value});
  console.log(user);
  }
  else if(e.target.type==="password"){
    
  setUser({...user,password: e.target.value});
  console.log(user);
  }
};
const handleClick=()=>{
  if(user.name===""){
    alert("Kullanıcı adı boş geçilemez !!");
  }
  else if(user.password===""){
    alert("Şifre boş geçilemez !!")
  }
  else {
  alert("Kullanıcı Adı : "+user.name+" başarılı bir şekilde giriş yaptı ✔️" )
}
}
  return (
    <div className='App'>     
      <Form>
      <h1>Login</h1>
      <Input type={"text"} placeholder="Kullanıcı Adı" onChange={handleChange} value={user.name}/>
      <Input type={"password"} placeholder="Şifre" onChange={handleChange} value={user.password}/>
      <Button text={"Giriş Yap"} onClick={handleClick} />
      </Form>
      </div>
  )
}
export default App