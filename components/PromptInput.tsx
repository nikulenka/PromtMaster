
import React from 'react';
import { WandIcon } from './IconComponents';

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export const PromptInput: React.FC<PromptInputProps> = ({ value, onChange, onSubmit, isLoading }) => {
  return (
    <div className="flex flex-col bg-slate-800 rounded-xl shadow-lg h-full">
      <div className="p-4 border-b border-slate-700">
        <h2 className="text-lg font-semibold text-slate-200">Your Simple Request</h2>
        <p className="text-sm text-slate-400">Describe what you want to achieve in a few words.</p>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="e.g., Помоги написать письмо клиенту с извинениями за задержку заказа"
          className="w-full flex-grow bg-slate-800 text-slate-200 rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow"
          rows={10}
          disabled={isLoading}
        />
      </div>
      <div className="p-4 border-t border-slate-700">
        <button
          onClick={onSubmit}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors disabled:bg-slate-600 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-purple-500"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            <>
              <WandIcon className="w-5 h-5" />
              Generate Professional Prompt
            </>
          )}
        </button>
      </div>
    </div>
  );
};
