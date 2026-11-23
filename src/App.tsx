
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { cards } from "./data/cards";
import type { CardId } from "./data/cards";
import { GameCard } from "./components/GameCard";
import { CardFace } from "./components/CardFace";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { SceneAmbience } from "./components/SceneAmbience";

import "./styles/game.css";
import "./styles/ui-polish.css";
import "./styles/scene-ambience.css";

function App() {
  const [selectedCardId, setSelectedCardId] =
  useState<CardId | null>(null);

const selectedCard =
  cards.find((card) => card.id === selectedCardId) ?? null;

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedCardId(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
  
<main
  className={`game-table ${
    selectedCard ? "game-table--open" : ""
  }`}
>
  <SceneAmbience />
    <header className="game-header">
      <h1>Federico Aguado</h1>
      <p>Junior Software Developer</p>
    </header>

    <section className="game-content">
      <AnimatePresence mode="wait">
        {selectedCard ? (
          <motion.div
            key={selectedCard.id}
            className="selected-stage"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              className="stage-dismiss"
              aria-label="Close card details"
              onClick={() => setSelectedCardId(null)}
            />

            <div className="selected-window">
              <motion.div
                className="selected-card"
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 230,
                  damping: 20,
                  delay: 0.12,
                }}
              >
                <CardFace card={selectedCard} />
              </motion.div>

              <motion.section
                className="selected-info"
                aria-label={`${selectedCard.title} details`}
                initial={{
                  opacity: 0,
                  x: 18,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.3,
                  delay: 0.2,
                  ease: "easeOut",
                }}
              >
                <div className="panel-topbar">
                  <span className="panel-eyebrow">
                    Developer Deck / {selectedCard.title}
                  </span>

                  <button
                    type="button"
                    className="back-button"
                    onClick={() => setSelectedCardId(null)}
                  >
                    ← Back
                  </button>
                </div>

                {selectedCard.id === "about" ? (
                  <AboutMe />
                ) : selectedCard.id === "skills" ? (
                  <Skills />
                ) : selectedCard.id === "experience" ? (
                  <Experience />
                ) : selectedCard.id === "projects" ? (
                  <Projects />
                ) : selectedCard.id === "contact" ? (
                  <Contact />
                ) : (
                  <div className="section-placeholder">
                    <h2>{selectedCard.title}</h2>
                    <p>{selectedCard.description}</p>
                  </div>
                )}
              </motion.section>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="welcome"
            className="welcome-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h2>Welcome, traveler!</h2>
            <p>Choose a card to explore my journey.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>

    <p className="mobile-swipe-hint">
    Swipe to see all five cards →
    </p>

    <nav className="card-hand" aria-label="Portfolio sections">
      {cards.map((card) => (
        <GameCard
          key={card.id}
          card={card}
          isSelected={selectedCardId === card.id}
          onSelect={(selected) => setSelectedCardId(selected.id)}
        />
      ))}
    </nav>
</main>
  );
}

export default App;
