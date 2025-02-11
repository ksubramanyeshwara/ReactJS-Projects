import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

function Skills() {
  const { PortfolioData } = useContext(PortfolioContext);
  const { user } = PortfolioData;
  const { skills, education } = user;
  return (
    <div
      style={{ padding: "20px", textAlign: "center", fontFamily: "sans-serif" }}
    >
      <h1 style={{ marginTop: "2em", marginBottom: "2em" }}>My Skills</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {skills.map((skill, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <img src={skill.image} alt={skill.name} width="80" height="80" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>

      <h1 style={{ marginTop: "3em" }}>Education</h1>
      <p style={{ marginBottom: "1em", marginTop: "1em" }}>
        <strong>{education.degree}</strong>
      </p>
      <p style={{ marginBottom: "1em" }}>{education.college}</p>
      <p>{education.university}</p>
    </div>
  );
}

export default Skills;
