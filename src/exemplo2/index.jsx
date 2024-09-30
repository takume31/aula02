import { useEffect, useState } from "react";

export default function App() {
  
  const [usuario, setUsuario] = useState([]);

  useEffect(() => { 

    const buscarUsuario  = async () => {
        const resposta  = await fetch('https://jsonplaceholder.typicode.com/todos');
        const dados = await resposta.json();
        setUsuario(dados);
    }
    buscarUsuario();
  },[]);

  return(
    <>
      <h1>Usuário</h1>
      <ul>
        {
        usuario.map(informacao => (
          <li key={informacao.id}>
            <h2>{informacao.title}</h2>
            <p>{informacao.userId}</p>
            <p>{informacao.completed}</p>
        </li>
        ))}
      </ul>
    </>
  );
}