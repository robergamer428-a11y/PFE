import {useState} from "react";
export default function Calculadora(){
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [resultado, setResultado] = useState(0);
    function somar (e){

        return(
            <>
            <h1>Calculadora</h1>
            <form action = "">
                <label htmlFor="">Numero 1</label>
                <input type="number" value={n1} onChange={(e)=> setN1(e.target.value)}/>
                    <label htmlFor="">Numero 1</label>
                    <input type="number" value={n1} onChange={(e)=> setN1(e.target.value)}/>
                </form>
                </>
        )
        e.preventDefault();
        setResultado(Number(n1)+ Number(n2));
        return resultado;   
    }
}