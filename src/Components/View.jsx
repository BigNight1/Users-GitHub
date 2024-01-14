import React from "react";
import { Github } from "../icon/github.jsx";
import styled from "styled-components";

const View = ({ fetchUser, user, setSearch }) => {
  return (
    <Mobile className="flex font-Rubik flex-col justify-center items-center h-[100vh] ">
      <div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
      <div >
        <div className="flex flex-col items-center justify-center bajar">
          <Github className="size-[10rem] desaparece" />
          <h1 className="font-semibold text-[3rem] ">GitHub Users</h1>
        </div>

        <Search className="py-1">
          <input
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                fetchUser();
              }
            }}
            type="text"
            placeholder="UserName"
            className="border-[1px]  border-solid border-black rounded-full p-2"
          />
          <button
            className="bg-slate-600 p-2 mx-1 rounded-[10px] text-white font-medium"
            onClick={fetchUser}
          >
            Search
          </button>
        </Search>
      </div>
      {user && user.name && (
        <Caja className="flex max-w-[700px]  rounded-[15px] p-2 m-4 px-2 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] ">
          <div className="flex flex-[4]  items-center justify-center py-3">
            <img
              className="rounded-full bg-cover bg-center"
              src={user.avatar_url}
              alt={user.login}
            />
          </div>
          <div className="flex flex-[5] justify-center text-pretty flex-col px-4 text-white font-medium text-xl">
            <div className="py-3">
              <h2>Name : {user.name}</h2>
              <p>Bio : {user.bio}</p>
            </div>

            <ul>
              <li>Followers : {user.followers}</li>
              <li>Following : {user.following}</li>
              <li>Repository : {user.public_repos}</li>
            </ul>
          </div>
        </Caja>
      )}
    </Mobile>
  );
};

const Mobile = styled.div`
  @media (max-width: 413px) {
    h1 {
      text-align: center;
      font-size: 2.4rem;
    }
    .desaparece{
      display: none;
    }
  }
`;
const Search = styled.div`
  @media (max-width: 390px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button {
    margin-top: 1rem;
  }
`;
const Caja = styled.div`
  @media (max-width: 749px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      object-fit: cover;
      max-width: 250px;
    }
  }
`;

export default View;
