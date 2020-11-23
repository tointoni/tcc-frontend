import React, {useState} from "react";
import api from "../services/api";

function Teste(){
    
    const [email, setEmail] = useState("");
    const [tokenCode, setToken] = useState();
    const [newPassword, setnewPassword] = useState("");
    const [password, setPassword] = useState("");

    async function handleReset(e) {
        e.preventDefault();

    
        await api.post("/resert-passwordclient", {email});
    
      }

    async function handleTeste(e){
        e.preventDefault();
        
        await api.post("/updatepasswordclient", {email, tokenCode, newPassword, password});
    }

    return(
        <div>
            <form onSubmit={handleReset}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                <button type="submit">enviar</button>
                </form>
            <form onSubmit={handleTeste}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                <input value={tokenCode} onChange={(e) => setToken(e.target.value)} />
                <input value={newPassword} onChange={(e) => setnewPassword(e.target.value)}  />
                <input value={password} onChange={(e) => setPassword(e.target.value)}  />
                <button type="submit">enviar</button>
            </form>
        </div>
    );
}
export default Teste;