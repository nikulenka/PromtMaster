
import React from 'react';
import { CopyIcon, CheckIcon } from './IconComponents';

interface HistoryModalProps {
  history: string[];
  onClose: () => void;
  onViewPrompt: (prompt: string) => void;
}

export const HistoryModal: React.FC<HistoryModalProps> = ({ history, onClose, onViewPrompt }) => {
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);

  const handleCopy = (prompt: string, index: number) => {
    navigator.clipboard.writeText(prompt);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const truncatePrompt = (prompt: string, length: number = 100) => {
    if (prompt.length <= length) return prompt;
    const truncated = prompt.substring(0, length);
    const lastSpace = truncated.lastIndexOf(' ');
    return (lastSpace > -1 ? truncated.substring(0, lastSpace) : truncated) + '...';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="bg-slate-800 rounded-xl shadow-2xl w-full max-w-2xl h-[80vh] flex flex-col">
        <div className="p-5 border-b border-slate-700 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-slate-100">Prompt History</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 transition-colors p-2 rounded-full hover:bg-slate-700"
            aria-label="Close history"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-grow overflow-y-auto p-5 space-y-4">
          {history.length === 0 ? (
            <div className="text-center text-slate-500 py-10">
              <p className="text-lg">No prompts in history yet.</p>
              <p className="text-sm">Generate a prompt to start building your history!</p>
            </div>
          ) : (
            history.map((item, index) => (
              <div
                key={index}
                className="bg-slate-700 p-4 rounded-lg shadow-md flex flex-col gap-3 transition-colors duration-200"
              >
                <div
                  className="text-slate-300 text-sm cursor-pointer hover:text-purple-300 transition-colors"
                  onClick={() => onViewPrompt(item)}
                  aria-label={`View prompt: ${truncatePrompt(item, 50)}`}
                >
                  <pre className="whitespace-pre-wrap break-words font-sans">
                    {truncatePrompt(item)}
                  </pre>
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => onViewPrompt(item)}
                    className="text-xs bg-purple-600 hover:bg-purple-700 text-white font-medium py-1.5 px-3 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-700 focus:ring-purple-500"
                  >
                    View Full
                  </button>
                  <button
                    onClick={() => handleCopy(item, index)}
                    className="flex items-center gap-1 text-xs bg-slate-600 hover:bg-slate-500 text-slate-300 font-medium py-1.5 px-3 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-700 focus:ring-purple-500"
                    aria-label={copiedIndex === index ? 'Copied!' : 'Copy prompt to clipboard'}
                  >
                    {copiedIndex === index ? <CheckIcon className="w-3 h-3 text-green-400" /> : <CopyIcon className="w-3 h-3" />}
                    {copiedIndex === index ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
