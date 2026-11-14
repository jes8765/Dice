import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="desktop-pet">
      {isOpen && (
        <div className="chat-bubble">
          <div className="chat-header">
            <span>Dice</span>
            <button onClick={() => setIsOpen(false)}>×</button>
          </div>

          <p>Hello! I'm Dice.</p>
          <p className="sub-text">
            Let's practice English together!
          </p>
        </div>
      )}

      <button
        className="pet"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Dice conversation"
      >
        <span className="eye eye-left" />
        <span className="eye eye-right" />
        <span className="mouth" />
      </button>
    </main>
  );
}

export default App;