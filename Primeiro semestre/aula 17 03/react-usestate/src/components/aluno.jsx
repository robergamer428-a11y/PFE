import {useState} from 'react';
export default function Aluno({titulo}){
    const [nome,setNome] = useState('Lucas');
    const [idade,setIdade] = useState('17');
    const [RA,setRA] = useState('39393939');
    const [nota,setNota] = useState('10');

    return (
        <>
        <h2>(titulo)</h2>
        <h2>(nome)</h2>
        <h2>(idade)</h2>
        <h2>(RA)</h2>
        <h2>(nota)</h2></>
    )
    

}