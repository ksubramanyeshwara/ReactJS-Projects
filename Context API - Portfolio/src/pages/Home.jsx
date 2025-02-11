import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

function Home() {
  const { PortfolioData } = useContext(PortfolioContext);
  console.log(PortfolioData);

  const { user } = PortfolioData;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        src={user.profileImage}
        alt="Profile"
        width="250"
        style={{ borderRadius: "50%", marginBottom: "2em", marginTop: "2em" }}
      />
      <h1
        style={{ marginBottom: "1em", fontFamily: "monospace", fontSize: "4em" }}
      >
        {user.fullName}
      </h1>
      <h1
        style={{
          marginBottom: "1em",
          fontFamily: "cursive",
          fontSize: "2em",
        }}
      >
        Aspiring Developer
      </h1>
      <div style={{ display: "flex", gap: "1em" }}>
        <a
          href={user.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#ff1",
            textDecoration: "none",
            fontFamily: "cursive",
            fontSize: "2em",
          }}
        >
          GitHub
        </a>{" "}
        <a
          href={user.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#ff1",
            textDecoration: "none",
            fontFamily: "cursive",
            fontSize: "2em",
          }}
        >
          LinkedIn
        </a>
        <a
          href={user.socialLinks.x}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#ff1",
            textDecoration: "none",
            fontFamily: "cursive",
            fontSize: "2em",
          }}
        >
          X
        </a>{" "}
      </div>
    </div>
  );
}

export default Home;
