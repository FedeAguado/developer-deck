
import { useState } from "react";
import type { IconType } from "react-icons";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPhp,
  SiGit,
  SiGithub,
  SiDocker,
  SiNpm,
  SiPython,
} from "react-icons/si";

import { FaJava, FaDatabase, FaCode } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";


type SkillIcon = {
  icon: IconType;
  color: string;
};

const skillIcons: Record<string, SkillIcon> = {
  HTML5: { icon: SiHtml5, color: "#E34F26" },
  CSS3: { icon: SiCss, color: "#1572B6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  React: { icon: SiReact, color: "#61DAFB" },

  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  "Express.js": { icon: SiExpress, color: "#E5E7EB" },
  "REST APIs": { icon: FaCode, color: "#9CC9F5" },
  PostgreSQL: { icon: SiPostgresql, color: "#699ECA" },
  SQL: { icon: FaDatabase, color: "#D3AF79" },

  Java: { icon: FaJava, color: "#E76F51" },
  PHP: { icon: SiPhp, color: "#8892BF" },

  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#F5F5F5" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  npm: { icon: SiNpm, color: "#CB3837" },
  "VS Code": { icon: VscCode, color: "#29A7E8" },
};

type SkillsTab =
  | "frontend"
  | "backend"
  | "languages"
  | "tools";

const sections = {
  frontend: {
    label: "Frontend",
    title: "Building the Interface",
    description:
      "Technologies I've used to create web interfaces and interactive applications.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
    ],
  },

  backend: {
    label: "Backend & Data",
    title: "Behind the Scenes",
    description:
      "I've gained hands-on experience developing and testing REST APIs, working with server-side logic and relational databases.",
    technologies: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "PostgreSQL",
      "SQL",
    ],
  },

  languages: {
    label: "Languages",
    title: "Programming Languages",
    description:
      "Programming languages I've studied and used throughout my development journey.",
    technologies: [
      "JavaScript",
      "TypeScript",
      "Java",
      "PHP",
      "SQL",
    ],
  },

  tools: {
    label: "Tools",
    title: "My Development Toolkit",
    description:
      "Tools I use for version control, development, collaboration and working with applications.",
    technologies: [
      "Git",
      "GitHub",
      "Docker",
      "npm",
      "VS Code",
    ],
  },
};

export function Skills() {
  const [activeTab, setActiveTab] =
    useState<SkillsTab>("frontend");

  const activeSection = sections[activeTab];

  return (
    <article className="skills-section">
      <h2>Skills & Technologies</h2>

      <p className="skills-intro">
        The technologies and tools I've worked
        with throughout my learning journey
        and development projects.
      </p>

      <nav
        className="skills-tabs"
        aria-label="Skills categories"
      >
        {(
          Object.keys(sections) as SkillsTab[]
        ).map((tab) => (
          <button
            key={tab}
            type="button"
            className={`skills-tab ${
              activeTab === tab
                ? "skills-tab--active"
                : ""
            }`}
            aria-pressed={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {sections[tab].label}
          </button>
        ))}
      </nav>

      <section className="skills-content">
        <h3>{activeSection.title}</h3>

        <p>{activeSection.description}</p>

        
<div className="skills-grid">
  {activeSection.technologies.map((technology) => {
    const skill = skillIcons[technology];
    const Icon = skill?.icon ?? FaCode;

    return (
      <div key={technology} className="skill-item">
        <Icon
          className="skill-logo"
          style={{ color: skill?.color ?? "#D3AF79" }}
          aria-hidden="true"
        />

        <span>{technology}</span>
      </div>
    );
  })}
</div>

      </section>

      <div className="skills-learning">
        <SiPython
  aria-hidden="true"
  style={{ color: "#8AC6F0" }}
/>

        <div>
          <strong>Currently learning Python</strong>
          <p>
            Expanding my programming knowledge,
            one project at a time.
          </p>
        </div>
      </div>
    </article>
  );
}
