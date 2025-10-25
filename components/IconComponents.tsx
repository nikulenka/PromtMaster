
import React from 'react';

type IconProps = {
  className?: string;
};

export const WandIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 4V2" />
    <path d="M15 10V8" />
    <path d="M15 16v-2" />
    <path d="M15 22v-2" />
    <path d="M20.66 7.34 19 9" />
    <path d="M5.01 18.99 3.34 17.32" />
    <path d="m3.34 6.68 1.67 1.67" />
    <path d="m19 15-1.66 1.66" />
    <path d="M9 4V2" />
    <path d="M9 22v-2" />
    <path d="M2.66 12.01h1.68" />
    <path d="m21.32 12 .02-2" />
    <path d="M19.34 17.34 21 19" />
    <path d="m3 5 1.66 1.66" />
    <path d="M9 10v-2" />
    <path d="m9.01 18.99-.01-2" />
    <path d="M12.01 2.68V1" />
    <path d="M12 23v-1.68" />
  </svg>
);

export const CopyIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const SparklesIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.5 3L7 7.5l3 1.5L12 12l1.5-3L17 7.5l-3-1.5z"/>
        <path d="M5 13.5 3 12l2-1.5"/>
        <path d="M19 13.5 21 12l-2-1.5"/>
        <path d="m12 21-1.5-3L7 16.5l3-1.5L12 12l1.5 3L17 16.5l-3 1.5z"/>
    </svg>
);

export const ErrorIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
);

export const HistoryIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/>
    <path d="M21 3v5h-5"/>
    <path d="M12 7v6h4"/>
  </svg>
);
