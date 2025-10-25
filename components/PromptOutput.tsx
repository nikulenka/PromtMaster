
import React, { useState, useEffect } from 'react';
import { CopyIcon, CheckIcon, SparklesIcon, ErrorIcon } from './IconComponents';

interface PromptOutputProps {
  prompt: string;
  isLoading: boolean;
  error: string | null;
}

export const PromptOutput: React.FC<PromptOutputProps> = ({ prompt, isLoading, error }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  const handleCopy = () => {
    if (prompt) {
      navigator.clipboard.writeText(prompt);
      setIsCopied(true);
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center h-full text-slate-400">
          <SparklesIcon className="w-12 h-12 mb-4 animate-pulse text-purple-400" />
          <p className="font-semibold">Crafting your prompt...</p>
          <p className="text-sm">This may take a few seconds.</p>
        </div>
      );
    }
    if (error) {
      return (
         <div className="flex flex-col items-center justify-center h-full text-red-400">
          <ErrorIcon className="w-12 h-12 mb-4" />
          <p className="font-semibold">An Error Occurred</p>
          <p className="text-sm text-center px-4">{error}</p>
        </div>
      );
    }
    if (!prompt) {
      return (
        <div className="flex flex-col items-center justify-center h-full text-slate-500">
          <div className="w-16 h-16 border-2 border-dashed border-slate-600 rounded-lg mb-4"></div>
          <p>Your generated prompt will appear here.</p>
        </div>
      );
    }
    return (
      <pre className="whitespace-pre-wrap break-words text-slate-300 font-sans text-sm md:text-base p-4">
        {prompt}
      </pre>
    );
  };
  
  return (
    <div className="flex flex-col bg-slate-800 rounded-xl shadow-lg h-full relative">
       <div className="p-4 border-b border-slate-700 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-slate-200">Structured Prompt</h2>
        {prompt && !isLoading && !error && (
            <button
                onClick={handleCopy}
                className="flex items-center gap-2 text-sm bg-slate-700 hover:bg-slate-600 text-slate-300 font-medium py-1 px-3 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-purple-500"
            >
            {isCopied ? <CheckIcon className="w-4 h-4 text-green-400" /> : <CopyIcon className="w-4 h-4" />}
            {isCopied ? 'Copied!' : 'Copy'}
            </button>
        )}
      </div>
      <div className="flex-grow overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};
