/* eslint-disable react/prop-types */
function ProjectCard({ project }) {
  return (
    <div
      style={{
        width: "300px",
        padding: "15px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        width="100%"
        height="150px"
        style={{ borderRadius: "8px", marginBottom: ".5em" }}
      />
      <h2 style={{ marginBottom: "1em", fontFamily: "sans-serif" }}>
        {project.title}
      </h2>
      <p style={{ marginBottom: "1em", fontFamily: "sans-serif" }}>
        {project.description}
      </p>
      <p style={{ marginBottom: "1em", fontFamily: "sans-serif" }}>
        <strong>Tech Stack:</strong> {project.techStack.join(", ")}
      </p>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: "sans-serif",
          color: "#ff1",
          textDecoration: "none",
        }}
      >
        GitHub
      </a>{" "}
      |
      <a
        href={project.liveDemo}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: "sans-serif",
          color: "#ff1",
          textDecoration: "none",
        }}
      >
        {" "}
        Live Demo
      </a>
    </div>
  );
}

export default ProjectCard;
