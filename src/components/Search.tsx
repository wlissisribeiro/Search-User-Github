import {BsSearch} from 'react-icons/bs'
export const Search = () => {
  return (
    <div>
        <h2>Busque por um usuário</h2>
        <p>Conheça os melhores repositórios</p>
        <div>
            <input type="text" placeholder='Digite um nome de usuário'/>
            <button><BsSearch/></button>
        </div>
    </div>
  )
}
