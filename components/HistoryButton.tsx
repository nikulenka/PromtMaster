
import React from 'react';
import { HistoryIcon } from './IconComponents';

interface HistoryButtonProps {
  onClick: () => void;
}

export const HistoryButton: React.FC<HistoryButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-slate-300 font-medium py-2 px-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-purple-500 text-sm"
      aria-label="View history"
    >
      <HistoryIcon className="w-5 h-5" />
      History
    </button>
  );
};
