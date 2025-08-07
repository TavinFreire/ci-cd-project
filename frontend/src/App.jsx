import { useState } from 'react'
import './App.css'

function App() {
    const [ count, setCount ] = useState(0);

    return (
        <>
        <h1>Rodando projeto com sucesso!</h1>
        <button onClick={() => setCount(x => x+1)}>Clique aqui</button>
        <p>Contador: {count}</p>
        </>
    )
}

export default App
