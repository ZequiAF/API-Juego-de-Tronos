import React from "react";
import { Link ,Outlet, } from "react-router-dom";

export async function loader() {
  return null;
}

export default function Root() {
  return (
    <>
      <header>
        <a href="https://www.hbomax.com/es/es/series/urn:hbo:series:GVU2cggagzYNJjhsJATwo" className="prenav">
          <img src="//upload.gtarcade.com/got/2019/03/1552405117045.png" alt="got" className="img-fluid" />
        </a>
        <div className="row">
          <nav className="col-6 float-left navegador row">
            <div className="col"><Link to="/personajes"><button className="btn">Personajes</button></Link></div>
            <div className="col"><Link to="/casas"><button className="btn">Casas</button></Link></div>
            <div className="col"><Link to="/frases"><button className="btn">Frases</button></Link></div>
          </nav>
          <div className="col-1"></div>
          <h1 className="col-4 h1fix">Game Of Thrones</h1>
        </div>
      </header>
      <Outlet/>     
    </>
  );
}
