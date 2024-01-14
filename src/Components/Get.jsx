import { useState } from "react";
import View from "./View";

const GetDatos = () => {
  const [search, setSearch] = useState("BigNight1");
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    const res = await fetch(`https://api.github.com/users/${search}`);
    const resData = await res.json();
    setUser(resData);
    console.log(resData)
  };

  return <View fetchUser={fetchUser} user={user} setSearch={setSearch}/>;
};

export default GetDatos;
