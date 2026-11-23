
import { useState } from "react";
import { BookOpen } from "lucide-react";

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
          {activeSection.technologies.map(
            (technology) => (
              <div
                key={technology}
                className="skill-item"
              >
                <span className="skill-dot" />
                <span>{technology}</span>
              </div>
            )
          )}
        </div>
      </section>

      <div className="skills-learning">
        <BookOpen aria-hidden="true" />

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
