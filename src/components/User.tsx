import React from "react";
//type
import { userProps } from "../types/user";

import { Link } from "react-router-dom";

import { MdLocationPin } from "react-icons/md";

export const User = ({
  avatar_url,
  followers,
  following,
  location,
  login,
}: userProps) => {
  return (
    <div>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}

      <div>
        <div>
          <p>Seguidores: {followers}</p>
        </div>
        <div>
          <p>Seguindo: {following}</p>
        </div>
      </div>
      <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
    </div>
  );
};
