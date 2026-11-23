
import {
  Mail,
  Code2,
  FileText,
  ArrowUpRight,
  MapPin,
  Globe2,
} from "lucide-react";

const contactLinks = [
  {
    id: "email",
    title: "Email me",
    description: "fcaguado@gmail.com",
    href: "mailto:fcaguado@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    id: "github",
    title: "GitHub",
    description: "Explore my code and repositories",
    href: "https://github.com/FedeAguado",
    icon: Code2,
    external: true,
  },
  {
    id: "resume",
    title: "My Resume",
    description: "View or download my CV",
    href: "/files/Federico_Aguado_CV.pdf",
    icon: FileText,
    external: true,
  },
];

export function Contact() {
  return (
    <article className="contact-section">
      <h2>Let's Connect</h2>

      <p className="contact-intro">
        I'm looking for opportunities to learn,
        contribute and grow as a software developer.
        Whether you have an opportunity in mind or
        simply want to say hello, I'd be happy
        to hear from you.
      </p>

      <div className="contact-links">
        {contactLinks.map((link) => {
          const Icon = link.icon;

          return (
            <a
              key={link.id}
              href={link.href}
              className="contact-link"
              target={
                link.external ? "_blank" : undefined
              }
              rel={
                link.external
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              <span className="contact-link__icon">
                <Icon aria-hidden="true" />
              </span>

              <span className="contact-link__text">
                <strong>{link.title}</strong>
                <small>{link.description}</small>
              </span>

              <ArrowUpRight
                className="contact-link__arrow"
                aria-hidden="true"
              />
            </a>
          );
        })}
      </div>

      <div className="contact-footer">
        <span>
          <MapPin aria-hidden="true" />
          Málaga, Spain
        </span>

        <span>
          <Globe2 aria-hidden="true" />
          Open to relocation
        </span>
      </div>
    </article>
  );
}
