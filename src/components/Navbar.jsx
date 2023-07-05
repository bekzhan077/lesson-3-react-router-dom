import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "50px",
        width: "100%",
        backgroundColor: "#aaa234",
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        alignItems: "center",
      }}
    >
      {/* <Link to="/">Home</Link>
      <Link to="/about">AboutUs</Link> */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">AboutUs</NavLink>
      {/* <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/about")}>AboutUs</button> */}
    </div>
  );
}

export default Navbar;
