import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);


  const  user = {
    name:"Liza",
    city: "NewYork",
    bio: "I made this!",
    links: {
    github: "https://github.com/liza",
    linkedin: "https://www.linkedin.com/in/liza/"
    }
  };
function App(){
  return (
    <div>
      <NavBar />
      <Home  name = {user.name} city = {user.city} />
      <About  bio = {user.bio} github = {user.github} linkedin = {user.linkedin} />
    </div>
  );
}


export default App;
