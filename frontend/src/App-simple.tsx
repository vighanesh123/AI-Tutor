import React from 'react';

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>AI Tutor - Test Page</h1>
      <p>If you can see this, React is working!</p>
      <div style={{ 
        background: '#f0f0f0', 
        padding: '10px', 
        borderRadius: '5px',
        marginTop: '20px'
      }}>
        <h2>Quick Test</h2>
        <p>✅ React is loading</p>
        <p>✅ Components are rendering</p>
        <button onClick={() => alert('Button works!')}>
          Test Button
        </button>
      </div>
    </div>
  );
};

export default App;
