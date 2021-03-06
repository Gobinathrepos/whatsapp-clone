import React from "react";
import "./App.css";
import Login from "./components/Login";
import useAuthUser from "./hooks/useAuthUser";
import useWindowSize from "./hooks/useWindowSize";


export default function App() {
  const page = useWindowSize();
  const user = useAuthUser();

  if(!user) {
      return (<Login />)
    }

  return (
    <div className="app" style={{ ...page }}>
      App
    </div>
  );
}
