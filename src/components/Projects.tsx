
import { useState } from "react";
import {
  Code2,
  ExternalLink,
  FolderGit2,
  Layers3,
} from "lucide-react";

type ProjectId = "aula" | "deck";

interface Project {
  title: string;
  category: string;
  status: string;
  description: string;
  contributions: string[];
  technologies: string[];
  repositoryUrl?: string;
}

const projects: Record<ProjectId, Project> = {
  aula: {
    title: "Aula Circular",
    category: "Team Project · Educa360",
    status: "In development",
    description:
      "A collaborative web application for lending and exchanging educational resources.",
    contributions: [
      "Implemented REST API endpoints and PostgreSQL logic for reservations, handovers and cancellations.",
      "Added backend support for incident reporting and retiring affected resources.",
      "Verified API and database behavior through integration tests, including transaction rollbacks.",
    ],
    technologies: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "REST APIs",
      "Integration Testing",
    ],
    // Add a public repository URL here when ready.
    repositoryUrl: "",
  },

  deck: {
    title: "Developer Deck",
    category: "Personal Project",
    status: "In development",
    description:
      "Developer Deck is a personal portfolio inspired by my love for collective cards games. I wanted to create something that reflects both my passion for programming and my interests outside of it, turning a developer portfolio into a more personal and interactive experience.",
    contributions: [
      "Built a component-based interface using React and TypeScript.",
      "Created interactive cards with animated selection and transitions.",
      "Designed a responsive fantasy-themed interface to showcase my professional journey.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "CSS",
      "Motion",
    ],
    repositoryUrl: "",
  },
};

export function Projects() {
  const [activeProject, setActiveProject] =
    useState<ProjectId>("aula");

  const project = projects[activeProject];

  return (
    <article className="projects-section">
      <h2>Things I've Built</h2>

      <p className="projects-intro">
        A selection of projects where I've
        put my knowledge into practice.
      </p>

      <nav
        className="projects-tabs"
        aria-label="Choose a project"
      >
        <button
          type="button"
          className={`projects-tab ${
            activeProject === "aula"
              ? "projects-tab--active"
              : ""
          }`}
          aria-pressed={activeProject === "aula"}
          onClick={() => setActiveProject("aula")}
        >
          <Code2 aria-hidden="true" />
          Aula Circular
        </button>

        <button
          type="button"
          className={`projects-tab ${
            activeProject === "deck"
              ? "projects-tab--active"
              : ""
          }`}
          aria-pressed={activeProject === "deck"}
          onClick={() => setActiveProject("deck")}
        >
          <Layers3 aria-hidden="true" />
          Developer Deck
        </button>
      </nav>

      <section className="project-content">
        <div className="project-heading">
          <div>
            <span className="project-category">
              {project.category}
            </span>
            <h3>{project.title}</h3>
          </div>

          <span className="project-status">
            {project.status}
          </span>
        </div>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-contributions">
          <div className="project-subheading">
            <FolderGit2 aria-hidden="true" />
            <h4>
              {activeProject === "aula"
                ? "My Contributions"
                : "Features & Development"}
            </h4>
          </div>

          <ul>
            {project.contributions.map(
              (contribution) => (
                <li key={contribution}>
                  {contribution}
                </li>
              )
            )}
          </ul>
        </div>

        <h4 className="project-tech-title">
          Technologies Used
        </h4>

        <div className="project-technologies">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        {project.repositoryUrl && (
          <a
            className="project-link"
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Repository
            <ExternalLink aria-hidden="true" />
          </a>
        )}
      </section>
    </article>
  );
}
