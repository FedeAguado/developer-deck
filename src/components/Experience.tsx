
import { useState } from "react";
import {
  CalendarDays,
  MapPin,
  Code2,
} from "lucide-react";

type ExperienceTab = "development" | "previous";

export function Experience() {
  const [activeTab, setActiveTab] =
    useState<ExperienceTab>("development");

  return (
    <article className="experience-section">
      <h2>Experience & Growth</h2>

      <p className="experience-intro">
        From my first professional experiences
        to building real web applications.
      </p>

      <nav
        className="experience-tabs"
        aria-label="Professional experience"
      >
        <button
          type="button"
          className={`experience-tab ${
            activeTab === "development"
              ? "experience-tab--active"
              : ""
          }`}
          aria-pressed={activeTab === "development"}
          onClick={() => setActiveTab("development")}
        >
          Software Development
        </button>

        <button
          type="button"
          className={`experience-tab ${
            activeTab === "previous"
              ? "experience-tab--active"
              : ""
          }`}
          aria-pressed={activeTab === "previous"}
          onClick={() => setActiveTab("previous")}
        >
          Previous Experience
        </button>
      </nav>

      <section className="experience-content">
        {activeTab === "development" ? (
          <div>
            <div className="experience-role">
              <h3>
                Junior Full Stack Developer Intern
              </h3>

              <p className="experience-company">
                Educa360
              </p>

              <div className="experience-meta">
                <span>
                  <CalendarDays aria-hidden="true" />
                  Sep 2026 – Present
                </span>

                <span>
                  <MapPin aria-hidden="true" />
                  Remote
                </span>
              </div>
            </div>

            <div className="experience-project">
              <div className="experience-project-title">
                <Code2 aria-hidden="true" />
                <strong>Aula Circular</strong>
              </div>

              <p>
                A collaborative web application
                for lending and exchanging
                educational resources.
              </p>
            </div>

            <h4>What I've worked on</h4>

            <ul className="experience-list">
              <li>
                Developed REST API endpoints
                and PostgreSQL logic for
                reservations, handovers and
                cancellations.
              </li>

              <li>
                Added backend support for
                incident reports and retiring
                affected resources.
              </li>

              <li>
                Tested API and database behavior,
                including cancellation rules
                and transaction rollbacks.
              </li>
            </ul>

            <div className="experience-tech">
              {[
                "Node.js",
                "Express",
                "PostgreSQL",
                "REST APIs",
                "Integration Testing",
              ].map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="experience-role">
              <h3>
                Contracting Department Intern
              </h3>

              <p className="experience-company">
                World2Meet (Iberostar Group)
              </p>

              <div className="experience-meta">
                <span>
                  <CalendarDays aria-hidden="true" />
                  May 2025 – Sep 2025
                </span>
              </div>
            </div>

            <h4>What I worked on</h4>

            <ul className="experience-list">
              <li>
                Updated tourism product
                information using the
                Juniper platform.
              </li>

              <li>
                Reviewed hotel pricing,
                contracts and availability.
              </li>
            </ul>

            <div className="experience-note">
              <p>
                This was part of my earlier
                professional journey, before
                finding my way back to
                software development.
              </p>
            </div>
          </div>
        )}
      </section>
    </article>
  );
}
