import React, { useState } from 'react';

const styles = {
  widgetContainer: {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    zIndex: 3000,
    fontFamily: 'inherit',
  },
  // Floating Circle Tricker Token Button
  triggerButton: (isOpen) => ({
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.75)',
    backdropFilter: 'blur(15px) saturate(140%)',
    border: '1px solid rgba(255, 255, 255, 0.8)',
    boxShadow: '0 10px 30px rgba(15, 23, 42, 0.08), inset 0 1px 0 rgba(255,255,255,0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.6rem',
    cursor: 'pointer',
    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease',
    transform: isOpen ? 'rotate(90deg) scale(0.95)' : 'rotate(0deg) scale(1)',
  }),
  // 3D Glass Chat Dialog Window Drawer
  chatWindow: {
    position: 'absolute',
    bottom: '75px',
    right: '0',
    width: '320px',
    background: 'rgba(255, 255, 255, 0.65)',
    backdropFilter: 'blur(30px) saturate(160%)',
    border: '1px solid rgba(255, 255, 255, 0.7)',
    borderRadius: '24px',
    boxShadow: '0 20px 50px rgba(15, 23, 42, 0.12), inset 0 1px 0 rgba(255,255,255,0.9)',
    padding: '1.5rem',
    overflow: 'hidden',
  },
  header: {
    borderBottom: '1px solid rgba(15, 23, 42, 0.06)',
    paddingBottom: '0.75rem',
    marginBottom: '1rem',
  },
  title: { fontSize: '1.1rem', fontWeight: '900', color: '#0F172A', margin: 0 },
  subtitle: { fontSize: '0.78rem', color: '#64748B', display: 'block', marginTop: '2px' },
  messageBubble: {
    background: 'rgba(255, 255, 255, 0.8)',
    border: '1px solid rgba(15, 23, 42, 0.03)',
    borderRadius: '14px 14px 14px 4px',
    padding: '0.75rem 1rem',
    fontSize: '0.9rem',
    color: '#334155',
    lineHeight: '1.5',
    marginBottom: '1.25rem',
  },
  actionOption: {
    width: '100%',
    padding: '0.7rem 1rem',
    background: 'rgba(255, 255, 255, 0.5)',
    border: '1px solid rgba(15, 23, 42, 0.05)',
    borderRadius: '12px',
    fontSize: '0.85rem',
    fontWeight: '700',
    color: '#0F172A',
    textAlign: 'left',
    cursor: 'pointer',
    marginBottom: '0.5rem',
    transition: 'all 0.2s ease',
  }
};

function ConciergeWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredOptionId, setHoveredOptionId] = useState(null);
  const [activeMessage, setActiveMessage] = useState(
    "Welcome to the House of Al Kausar. How may our blending studio guide your journey today?"
  );

  const choices = [
    { id: 1, label: "📦 Track Artisanal Sample", reply: "Please forward your catalog reference token number to concierge@alkausar.com for immediate tracking." },
    { id: 2, label: "🧪 Custom Oil Dilution", reply: "Our pure Attars contain 0% alcohol. For custom compounding requests, connect via our core Contact Form layer." },
    { id: 3, label: "📅 Book Atelier Tour", reply: "Atelier visitations are arranged exclusively by invitation. Leave a message on our house mail network to clear scheduling." }
  ];

  return (
    <div style={styles.widgetContainer}>
      {/* 3D Frosted Drawer Body Content Window */}
      {isOpen && (
        <div style={styles.chatWindow} className="animate-3d-glass">
          <div style={styles.header}>
            <h4 style={styles.title}>House Concierge</h4>
            <span style={styles.subtitle}>Direct Olfactory Assistance</span>
          </div>

          <div style={styles.messageBubble}>
            {activeMessage}
          </div>

          <div className="pt-2">
            {choices.map((choice) => {
              const isHovered = hoveredOptionId === choice.id;
              return (
                <button
                  key={choice.id}
                  style={{
                    ...styles.actionOption,
                    backgroundColor: isHovered ? '#0F172A' : 'rgba(255, 255, 255, 0.5)',
                    color: isHovered ? '#ffffff' : '#0F172A',
                    transform: isHovered ? 'translateX(3px)' : 'translateX(0)'
                  }}
                  onMouseEnter={() => setHoveredOptionId(choice.id)}
                  onMouseLeave={() => setHoveredOptionId(null)}
                  onClick={() => setActiveMessage(choice.reply)}
                >
                  {choice.label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button Token Node */}
      <button 
        style={styles.triggerButton(isOpen)}
        onClick={() => {
          setIsOpen(!isOpen);
          // Refresh message baseline state cleanly on close loops
          if(isOpen) setActiveMessage("Welcome to the House of Al Kausar. How may our blending studio guide your journey today?");
        }}
        onMouseEnter={(e) => !isOpen && (e.target.style.transform = 'translateY(-3px) scale(1.03)')}
        onMouseLeave={(e) => !isOpen && (e.target.style.transform = 'translateY(0) scale(1)')}
      >
        {isOpen ? '✕' : '✨'}
      </button>
    </div>
  );
}

export default ConciergeWidget;
