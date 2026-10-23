export default function MeuAvatar({ nome,idade, foto, estiloMusical, disciplina }) {
  return (
    <div>
      <h2>Meu nome: {nome}</h2>
      <h3>Idade: {idade}</h3>
      <img src= {foto} alt="Foto de perfil"/>
      <p>{estiloMusical}</p>
      <p>{disciplina}</p>
     
    </div>
  );
}