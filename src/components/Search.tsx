import { useState } from "react";
import { BsSearch } from "react-icons/bs";

type SearchProps = {
  loadUser: (user: string) => Promise<void>;
};

export const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState<string>("");

  return (
    <div>
      <h2>Busque por um usuário</h2>
      <p>Conheça os melhores repositórios</p>
      <div>
        <input onChange={e=>setUserName(e.target.value)} type="text" placeholder="Digite um nome de usuário" />
        <button onClick={()=>loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};
