import React from 'react';

import Chat from './Chat';

export default function App() {
  return (
    <section id="landbot-app" className="hero is-fullheight is-dark">
      <div className="hero-body">
        <div className="chat-container">
          <div className="landbot-chat">
            <Chat />
          </div>
        </div>
      </div>
    </section>
  );
}
