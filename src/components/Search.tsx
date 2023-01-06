import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";

import style from "./search.module.css";

type SearchProps = {
  loadUser: (user: string) => Promise<void>;
};

export const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState<string>("");

  //buscar ao pressionar ENTER
  const handleKeyDown = (e:KeyboardEvent) => {
    if(e.key==="Enter"){
      loadUser(userName)
    }
  };

  return (
    <div className={style.search}>
      <h2>Busque por um usuário</h2>
      <p>Conheça os melhores repositórios</p>
      <div className={style.search_container}>
        <input
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Digite um nome de usuário"
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};
