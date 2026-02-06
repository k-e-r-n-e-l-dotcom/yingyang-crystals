import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'gold' | 'purple';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function GlowButton({
  children,
  onClick,
  href,
  variant = 'gold',
  size = 'md',
  className = '',
}: GlowButtonProps) {

  const baseClasses =
    'font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2';

  const variantClasses = {
    gold: 'bg-gold text-slate-950 hover:glow-gold',
    purple: 'bg-neon text-white hover:glow-purple',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  const handleClick = (e: React.MouseEvent) => {
    if (!href) return;

    // smooth scroll for anchors
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (href) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={classes}
        target={href.startsWith('#') ? undefined : '_blank'}
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
