import React, { useState } from "react";
import { Search } from "../components/Search";
import { User } from "../components/User";
import { Error } from "../components/Error";

//types
import { userProps } from "../types/user";

export const Home = () => {
  const [user, setUser] = useState<userProps | null>(null);
  const [error, setError] = useState<boolean>(false);

  const loadUser = async(userName:string)=>{

    //reseta o erro e user
    setError(false);
    setUser(null)

    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json();


    //se tiver erro entao para de executar aqui
    if(res.status === 404){
        setError(true);
        return;
    }


    const {avatar_url, login, location, followers, following} = data;

    const userData:userProps = {
        avatar_url,
        location,
        login,
        followers,
        following
    };

    setUser(userData)
  }

  return (
    <div>
      <Search loadUser={loadUser}/>
      {user && <User {...user}/>}
      {error && <Error/>}
    </div>
  );
};
