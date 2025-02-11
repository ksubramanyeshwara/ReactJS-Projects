/* eslint-disable react/prop-types */
import { useState } from "react";
import { PortfolioContext } from "./PortfolioContext";

export function PortfolioProvider({ children }) {
  const [PortfolioData] = useState({
    user: {
      fullName: "K Subramanyeshwara",
      profileImage: "/assets/profile.jpg",
      socialLinks: {
        github: "https://github.com/ksubramanyeshwara",
        linkedin: "https://www.linkedin.com/in/ksubramanyeshwara",
        x: "https://x.com/ksubramanyaa",
      },
      projects: [
        {
          id: 1,
          title: "Lift Simulation",
          image: "/assets/project1.png",
          techStack: ["HTML", "CSS", "JavaScript"],
          description:
            "Built a lift simulation web app using HTML, CSS and JavaScript, focusing on local storage, event handling and queue.",
          github: "https://github.com/ksubramanyeshwara/lift-simulation",
          liveDemo: "https://liftsimulation101.netlify.app",
        },
        {
          id: 2,
          title: "React Router",
          image: "/assets/project2.png",
          techStack: ["HTML", "CSS", "JavaScript", "ReactJS", "React Router"],
          description:
            " Developed a multi-page React application using React Router v7, implementing dynamic routing and nested route configurations for improved navigation and user experience.",
          github: "",
          liveDemo: "https://reactrouter-101.netlify.app/",
        },
      ],
      skills: [
        { name: "HTML", image: "/assets/html5.png" },
        { name: "CSS", image: "/assets/css3.png" },
        { name: "JavaScript", image: "/assets/javascript.png" },
        { name: "React", image: "/assets/react.png" },
        { name: "React Router", image: "/assets/reactrouter.png" },
        { name: "Git", image: "/assets/git.png" },
      ],
      education: {
        degree: "B.E in Computer Science and Engineering",
        college: "BMS Institute of Technology and Management",
        university: "Visvesvaraya Technological University",
      },
    },
  });
  return (
    <PortfolioContext.Provider value={{ PortfolioData }}>
      {children}
    </PortfolioContext.Provider>
  );
}
