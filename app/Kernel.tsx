"use client";

import React, { SetStateAction, useState, useRef, useEffect } from "react";

export default function Kernel() {
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const system = "vivek@try-linux";
  const [path, setPath] = useState<string>("~");

  useEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  }, []);

  const [currentCommand, setCurrentCommand] = useState(`${system}:${path}$ `);
  const handleCommandInputChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setCurrentCommand(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setCommandHistory([...commandHistory, currentCommand]);
      setCurrentCommand(`${system}:${path}$ `);
    }
  };

  return (
    <main className="max-w-full h-full flex relative overflow-y-hidden">
      <div className="bg-slate-500 w-full h-full font-mono p-1 no-scrollbar overflow-y-scroll">
        <div className="mt-1">
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
          placeholder=""
          value={currentCommand}
          onChange={handleCommandInputChange}
          onKeyDown={handleKeyDown}
          spellCheck={false}
        />
      </div>
    </main>
  );
}
