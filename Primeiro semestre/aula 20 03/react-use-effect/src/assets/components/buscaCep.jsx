import {useState, useEffect} from "react";
export default function BuscaCep(){

    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState(null);
    useEffect(() => {
        fetch(`https://viacep.com.br/ws/$(cep)/json/`),then(response => response.json()).then(data => {
            if(!data.erro){
                setEndereco(data)
            } else{
                setEndereco(null)
            }
        })
    })
}
