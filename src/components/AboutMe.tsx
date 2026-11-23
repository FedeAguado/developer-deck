
import { useState } from "react";
import {
  MapPin,
  Globe2,
  Languages,
  Code2,
} from "lucide-react";

type AboutTab = "journey" | "motivation" | "personal";

const tabs: { id: AboutTab; label: string }[] = [
  { id: "journey", label: "My Journey" },
  { id: "motivation", label: "What Drives Me" },
  { id: "personal", label: "Beyond Coding" },
];

export function AboutMe() {
  const [activeTab, setActiveTab] =
    useState<AboutTab>("journey");

  return (
    <article className="about-me">
      <h2>The Developer Behind the Deck</h2>

      <p className="about-intro">
        Hi! I'm Federico, a junior software developer
        based in Málaga, Spain.
      </p>

      <nav
        className="about-tabs"
        aria-label="About Me sections"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`about-tab ${
              activeTab === tab.id
                ? "about-tab--active"
                : ""
            }`}
            aria-pressed={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <section
        className="about-content"
        aria-live="polite"
      >
        {activeTab === "journey" && (
          <div>
            <h3>Finding My Way Back</h3>

            <p>
              My journey into software development hasn't exactly been a straight line. 
              I first studied IT, then took a different path and earned a degree in Tourism. 
              At that point in my life, my priorities were different, and I hadn't yet figured out what I really wanted to do.
            </p>

            <p>
              Eventually, I found my way back to programming and realised something important: 
              building things with code gives me a sense of purpose and satisfaction that I genuinely enjoy.
            </p>
          </div>
        )}

        {activeTab === "motivation" && (
          <div>
            <h3>Always Learning</h3>

            <p>
              I know I'm still at the beginning of my journey, and there's a lot left for me to learn. 
              But I'm curious, I learn quickly, and I'm willing to put in the effort. 
              I've learned that when I truly commit to something, I can achieve much more than I initially thought.
            </p>

            <p>
              I'm currently gaining hands-on
              experience at Educa360, working
              on a collaborative web application
              and improving my development skills.
            </p>
          </div>
        )}

        {activeTab === "personal" && (
          <div>
            <h3>Beyond the Code</h3>

            <p>
              Outside of programming, I enjoy
              gaming, card games and
              travelling. Some of those interests
              even inspired this portfolio!
            </p>

            <div className="about-halo">
            <img
    src="/images/kaiser.png"
    alt="Kaiser, my dog"
    className="about-halo__photo"
            />

        <div>
        <strong>Meet Kaiser!</strong>
        <p>
         My loyal adventure companion.
        You might have spotted him
        in the background.
        </p>
  </div>
</div>
          </div>
        )}
      </section>

      <div className="about-facts">
        <span>
          <MapPin aria-hidden="true" />
          Málaga, Spain
        </span>

        <span>
          <Globe2 aria-hidden="true" />
          Open to relocation
        </span>

        <span>
          <Code2 aria-hidden="true" />
          Full-stack development
        </span>

        <span>
          <Languages aria-hidden="true" />
          English C1
        </span>
      </div>
    </article>
  );
}
