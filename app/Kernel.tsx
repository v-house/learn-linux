"use client";

import React, { SetStateAction, useState, useRef, useEffect } from "react";

export default function Kernel() {
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [nonEmptyCommands, setNonEmptyCommands] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const system = "vivek@try-linux";
  const [path, setPath] = useState<string>("~");

  useEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  }, []);

  const [currentCommand, setCurrentCommand] = useState(`${system}:${path}$ `);
  const [historyIndex, setHistoryIndex] = useState<number>(0);

  const handleCommandInputChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setCurrentCommand(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const trimmedCommand = currentCommand.trim();
      if (trimmedCommand !== "") {
        if (trimmedCommand === `${system}:${path}$ clear`) {
          if (trimmedCommand !== `${system}:${path}$`) {
            setNonEmptyCommands([...nonEmptyCommands, currentCommand]);
          }
          setCommandHistory([]);
        } else {
          if (trimmedCommand !== `${system}:${path}$`) {
            setNonEmptyCommands([...nonEmptyCommands, currentCommand]);
          }
          setCommandHistory([...commandHistory, currentCommand]);
        }
      }
      setCurrentCommand(`${system}:${path}$ `);
      setHistoryIndex(0);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex <= nonEmptyCommands.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentCommand(nonEmptyCommands[nonEmptyCommands.length - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentCommand(
          newIndex === 0
            ? `${system}:${path}$ `
            : nonEmptyCommands[nonEmptyCommands.length - newIndex]
        );
      }
    }
  };

  return (
    <main className="max-w-full h-full flex relative overflow-y-hidden">
      <div className="bg-slate-500 w-full h-full font-mono p-1 no-scrollbar overflow-y-scroll">
        <div id="kernel" className="mt-1">
          {commandHistory.map((command, index) => (
            <div key={index} className="text-green-400">
              {command}
            </div>
          ))}
        </div>
        <input
          ref={inputRef}
          type="text"
          className="w-full bg-transparent border-none focus:outline-none"
          value={currentCommand}
          onChange={handleCommandInputChange}
          onKeyDown={handleKeyDown}
          spellCheck={false}
        />
      </div>
    </main>
  );
}
