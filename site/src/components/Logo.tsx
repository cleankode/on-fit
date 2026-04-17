type Props = {
  className?: string;
  /** Render only the disc icon (no inner detail container). Default true. */
  withGlow?: boolean;
};

/**
 * ONFIT mark — replicates the channel-letter sign at reception:
 * a teal disc with three parallel diagonal hatch lines reading as
 * a barbell plate / weight collar in perspective.
 *
 * Color is `currentColor` so it inherits from text-color utilities.
 */
export default function Logo({ className, withGlow = true }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      fill="none"
    >
      {withGlow && (
        <defs>
          <radialGradient id="onfit-glow" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
            <stop offset="70%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>
      )}
      {withGlow && <circle cx="32" cy="32" r="30" fill="url(#onfit-glow)" />}

      {/* Solid disc */}
      <circle cx="32" cy="32" r="22" fill="currentColor" />

      {/* Diagonal hatch lines — clipped to the disc */}
      <g
        clipPath="circle(22px at 32px 32px)"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
      >
        <line x1="20" y1="42" x2="36" y2="22" />
        <line x1="28" y1="46" x2="44" y2="26" />
        <line x1="36" y1="50" x2="52" y2="30" />
      </g>

      {/* Subtle outer ring for definition on light bgs */}
      <circle
        cx="32"
        cy="32"
        r="22"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="0.5"
      />
    </svg>
  );
}
