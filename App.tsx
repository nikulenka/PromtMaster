
import React, { useState, useCallback, useEffect } from 'react';
import { PromptInput } from './components/PromptInput';
import { PromptOutput } from './components/PromptOutput';
import { generateStructuredPrompt } from './services/geminiService';
import { WandIcon, HistoryIcon } from './components/IconComponents';
import { HistoryButton } from './components/HistoryButton';
import { HistoryModal } from './components/HistoryModal';

const HISTORY_KEY = 'promptHistory';
const MAX_HISTORY_ITEMS = 5;

const App: React.FC = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [promptHistory, setPromptHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState<boolean>(false);

  useEffect(() => {
    try {
      const storedHistory = localStorage.getItem(HISTORY_KEY);
      if (storedHistory) {
        setPromptHistory(JSON.parse(storedHistory));
      }
    } catch (e) {
      console.error("Failed to load history from localStorage:", e);
      // Fallback to empty history if parsing fails
      setPromptHistory([]);
    }
  }, []);

  const savePromptToHistory = useCallback((prompt: string) => {
    setPromptHistory(prevHistory => {
      const newHistory = [prompt, ...prevHistory.filter(item => item !== prompt)].slice(0, MAX_HISTORY_ITEMS);
      localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
      return newHistory;
    });
  }, []);

  const handleGenerate = useCallback(async () => {
    if (!userInput.trim()) {
      setError('Please enter a request.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedPrompt('');

    try {
      const result = await generateStructuredPrompt(userInput);
      setGeneratedPrompt(result);
      savePromptToHistory(result);
    } catch (e) {
      console.error(e);
      setError('Failed to generate prompt. Please check your API key and try again.');
    } finally {
      setIsLoading(false);
    }
  }, [userInput, savePromptToHistory]);

  const handleViewHistoryPrompt = useCallback((prompt: string) => {
    setGeneratedPrompt(prompt);
    setUserInput(''); // Clear user input when viewing history
    setShowHistory(false);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans flex flex-col p-4 md:p-8">
      <header className="w-full max-w-6xl mx-auto mb-8 relative">
        <div className="flex items-center justify-center gap-4 mb-2">
          <WandIcon className="w-10 h-10 text-purple-400" />
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text">
            Prompt Constructor Bot
          </h1>
        </div>
        <p className="text-slate-400 max-w-2xl mx-auto text-center">
          Turn your simple ideas into powerful, structured prompts for any LLM. Get better results, faster.
        </p>
        <div className="absolute top-0 right-0">
          <HistoryButton onClick={() => setShowHistory(true)} />
        </div>
      </header>

      <main className="flex-grow w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <PromptInput
          value={userInput}
          onChange={setUserInput}
          onSubmit={handleGenerate}
          isLoading={isLoading}
        />
        <PromptOutput
          prompt={generatedPrompt}
          isLoading={isLoading}
          error={error}
        />
      </main>
      
      <footer className="w-full max-w-6xl mx-auto mt-8 text-center text-slate-500 text-sm">
        <p>Powered by Gemini API</p>
      </footer>

      {showHistory && (
        <HistoryModal
          history={promptHistory}
          onClose={() => setShowHistory(false)}
          onViewPrompt={handleViewHistoryPrompt}
        />
      )}
    </div>
  );
};

export default App;
