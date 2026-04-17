import Logo from './Logo';

type Props = {
  /** Tailwind text-size class controls overall size (icon scales from font-size). */
  size?: string;
  className?: string;
};

/**
 * ONFIT wordmark — the disc icon serves as the letter "O",
 * followed by the literal text "NFIT".
 */
export default function Wordmark({
  size = 'text-2xl',
  className = '',
}: Props) {
  return (
    <span
      className={`inline-flex items-center font-sans font-extrabold tracking-tight text-white ${size} ${className}`}
    >
      <span className="leading-none inline-flex items-center">
        <Logo
          withGlow={false}
          className="h-[1.15em] w-[1.15em] text-brand-400 drop-shadow-[0_0_12px_rgba(63,169,220,0.45)] -mr-[0.02em]"
        />
        <span>NFIT</span>
      </span>
    </span>
  );
}
