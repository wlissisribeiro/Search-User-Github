import React, { useState } from "react";
import { Search } from "../components/Search";

//types
import { userProps } from "../types/user";

export const Home = () => {
  const [user, setUser] = useState<userProps | null>(null);

  const loadUser = async(userName:string)=>{
    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json();
    console.log(data)

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
      {user && <p>{user.login}</p>}
    </div>
  );
};
