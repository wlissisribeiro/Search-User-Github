import React, { useState } from "react";
import { Search } from "../components/Search";

//types
import { userProps } from "../types/user";

export const Home = () => {
  const [user, setUser] = useState<userProps | null>(null);
  return (
    <div>
      <Search />
    </div>
  );
};
