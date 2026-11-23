
import { motion } from "motion/react";

import { CardFace } from "./CardFace";
import type { PortfolioCard } from "../data/cards";

interface GameCardProps {
  card: PortfolioCard;
  isSelected: boolean;
  onSelect: (card: PortfolioCard) => void;
}

export function GameCard({
  card,
  isSelected,
  onSelect,
}: GameCardProps) {
  return (
    <div
      className={`card-slot ${
        isSelected ? "card-slot--selected" : ""
      }`}
    >
      <motion.button
        key={`${card.id}-${isSelected ? "selected" : "idle"}`}
        initial={false}
        type="button"
        className="game-card"
        disabled={isSelected}
        onClick={() => onSelect(card)}
        aria-label={`Open ${card.title}`}
        animate={{
          opacity: isSelected ? 0 : 1,
          scale: isSelected ? 0.65 : 1,
          filter: isSelected
            ? "brightness(2)"
            : "brightness(1)",
        }}
        whileHover={
          isSelected
            ? undefined
            : { y: -25, scale: 1.08 }
        }
        whileTap={
          isSelected
            ? undefined
            : { scale: 0.95 }
        }
        transition={{ duration: 0.25 }}
      >
        <CardFace card={card} />
      </motion.button>
    </div>
  );
}
