
export type CardId =
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "contact";

export interface PortfolioCard {
  id: CardId;
  title: string;
  description: string;
  symbol: string;
  image: string;
}

export const cards: PortfolioCard[] = [
  {
    id: "about",
    title: "About Me",
    description: "Discover my story",
    symbol: "✦",
    image: "/images/about.png",
  },
  {
    id: "skills",
    title: "Skills",
    description: "My technical abilities",
    symbol: "⚔",
    image: "/images/skills.png",
  },
  {
    id: "experience",
    title: "Experience",
    description: "My professional journey",
    symbol: "♜",
    image: "/images/experience.png",
  },
  {
    id: "projects",
    title: "Projects",
    description: "Things I've built",
    symbol: "◆",
    image: "/images/projects.png",
  },
  {
    id: "contact",
    title: "Contact",
    description: "Get in touch",
    symbol: "✉",
    image: "/images/contact.png",
  },
];
