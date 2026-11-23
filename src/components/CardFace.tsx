
import {
  UserRound,
  Wrench,
  BriefcaseBusiness,
  Folder,
  Mail,
  type LucideIcon,
} from "lucide-react";

import type { PortfolioCard, CardId } from "../data/cards";

interface CardFaceProps {
  card: PortfolioCard;
}

const cardIcons: Record<CardId, LucideIcon> = {
  about: UserRound,
  skills: Wrench,
  experience: BriefcaseBusiness,
  projects: Folder,
  contact: Mail,
};

export function CardFace({ card }: CardFaceProps) {
  const Icon = cardIcons[card.id];

  return (
    <div className="card-face">
      <img
        className="game-card__image"
        src={card.image}
        alt=""
        draggable={false}
      />

      <span className="game-card__title">
        {card.title}
      </span>

      <span className="game-card__icon">
        <Icon aria-hidden="true" />
      </span>
    </div>
  );
}
