import { NavLink } from "react-router";
import Button from "./Button";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "10px",
        justifyContent: "space-between",
      }}
    >
      <NavLink
        to="/"
        style={{
          color: "#ff1",
          textDecoration: "none",
          fontFamily: "monospace",
          fontSize: "2em",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/projects"
        style={{
          color: "#ff1",
          textDecoration: "none",
          fontFamily: "monospace",
          fontSize: "2em",
        }}
      >
        Projects
      </NavLink>
      <NavLink
        to="/skills"
        style={{
          color: "#ff1",
          textDecoration: "none",
          fontFamily: "monospace",
          fontSize: "2em",
        }}
      >
        Skills
      </NavLink>
      <Button />
    </nav>
  );
}

export default Navbar;
