interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'wordmark';
  light?: boolean;
  height?: number;
}

export default function Logo({ className = '', variant = 'full', light = false, height = 48 }: LogoProps) {
  const primary = light ? '#FFFFFF' : '#0B2341';
  const secondary = '#168C8C';
  const accent = '#E8B229';

  const iconSvg = (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: `${height}px`, width: 'auto' }}
      className={className}
    >
      {/* Shield outline */}
      <path
        d="M50 8L14 18v28c0 22 14 38 36 46 22-8 36-24 36-46V18L50 8z"
        fill={primary}
      />
      {/* Gold accent corners on shield */}
      <path d="M14 18L50 8L86 18v4L50 12L14 22V18z" fill={accent} opacity="0.9" />
      <path d="M14 46c0 22 14 38 36 46 22-8 36-24 36-46v-4c0 20-14 34-36 42-22-8-36-22-36-42v4z" fill={accent} opacity="0.3" />

      {/* Rumah Gadang roof — two sweeping peaks */}
      <path
        d="M50 22L30 42h6l14-12 14 12h6L50 22z"
        fill={accent}
      />
      {/* Inner roof line */}
      <path
        d="M50 28L36 42h4l10-8 10 8h4L50 28z"
        fill={primary}
        opacity="0.3"
      />

      {/* Mountain */}
      <path
        d="M26 58l10-16 7 10 4-6 7 12H26z"
        fill={secondary}
      />
      {/* Mountain snow cap */}
      <path
        d="M33 46l3-4 3 4-3 2-3-2z"
        fill={light ? primary : '#FFFFFF'}
        opacity="0.6"
      />

      {/* Wave */}
      <path
        d="M24 68c5-3 8-3 13 0s8 3 13 0 8-3 13 0 8 3 13 0c-5 3-8 3-13 0s-8-3-13 0-8 3-13 0-8-3-13 0-8 3-13 0z"
        fill={secondary}
        opacity="0.85"
      />
      <path
        d="M24 74c5-3 8-3 13 0s8 3 13 0 8-3 13 0 8 3 13 0c-5 3-8 3-13 0s-8-3-13 0-8 3-13 0-8-3-13 0-8 3-13 0z"
        fill={secondary}
        opacity="0.5"
      />

      {/* Community figures — three silhouettes */}
      <circle cx="38" cy="52" r="2.5" fill={light ? primary : '#FFFFFF'} opacity="0.7" />
      <circle cx="50" cy="50" r="3" fill={light ? primary : '#FFFFFF'} opacity="0.8" />
      <circle cx="62" cy="52" r="2.5" fill={light ? primary : '#FFFFFF'} opacity="0.7" />
    </svg>
  );

  if (variant === 'icon') {
    return <div className={className}>{iconSvg}</div>;
  }

  if (variant === 'wordmark') {
    return (
      <span
        className={`font-bold tracking-tight ${className}`}
        style={{ fontFamily: 'Poppins, sans-serif', color: primary, fontSize: `${height * 0.5}px` }}
      >
        SAKATO
      </span>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {iconSvg}
      <div className="flex flex-col leading-none">
        <span
          className="font-bold tracking-tight"
          style={{ fontFamily: 'Poppins, sans-serif', color: primary, fontSize: `${height * 0.42}px` }}
        >
          SAKATO
        </span>
        {height >= 40 && (
          <span
            className="font-medium"
            style={{ fontFamily: 'Inter, sans-serif', color: secondary, fontSize: `${height * 0.16}px`, marginTop: '2px' }}
          >
            Belajar Hari Ini, Selamat Esok.
          </span>
        )}
      </div>
    </div>
  );
}
