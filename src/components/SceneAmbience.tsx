/**
 * Developer Deck: subtle star twinkles only.
 * The SVG coordinates match the 1672 × 941 panoramic background.
 */
const stars = [
  { x: 1014, y: 83, delay: "-0.4s" },
  { x: 1090, y: 77, delay: "-2.7s" },
  { x: 1344, y: 87, delay: "-3.9s" },
  { x: 1460, y: 116, delay: "-1.7s" },
  { x: 1130, y: 40, delay: "-5.2s" },
];

export function SceneAmbience() {
  return (
    <div className="scene-ambience" aria-hidden="true">
      <svg
        className="scene-ambience__art"
        viewBox="0 0 1672 941"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
      >
        {stars.map((star, index) => (
          <g key={index} transform={`translate(${star.x} ${star.y})`}>
            <path
              className="scene-star__twinkle"
              d="M-6 0 H6 M0 -6 V6"
              stroke="#d0efff"
              strokeWidth="1.6"
              strokeLinecap="round"
              style={{ animationDelay: star.delay }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
