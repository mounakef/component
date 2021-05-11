import logo from "./logo.svg";
import "./App.css";
import react from "react" ;
import { Component } from "react";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Adress from "./Component/Profile/Adress";
function App() {
  return (
    <div className="App">
      <ProfilePhoto></ProfilePhoto>
      <FullName />
      <Adress></Adress>
    </div>
  );
}
export default App;