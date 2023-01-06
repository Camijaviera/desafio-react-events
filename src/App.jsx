import Input from "./components/Input"
import { useState } from "react";
import "../src/App.css"


const App=()=>{

    const [name, setName]=useState("");
    const [password, setPassword]=useState("");

  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Desafío Estado de los Componentes y Eventos en REACT</h1>
      <Input input1={name} input2={password} setState1={setName} setState2={setPassword}/>
    </div>
  )
}

export default App;
