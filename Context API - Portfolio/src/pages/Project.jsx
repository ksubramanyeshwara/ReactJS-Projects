import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import ProjectCard from "../components/ProjectCard";

function Project() {
  const { PortfolioData } = useContext(PortfolioContext);
  const { user } = PortfolioData;
  const { projects } = user; // Because projects are nested
  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Project;
