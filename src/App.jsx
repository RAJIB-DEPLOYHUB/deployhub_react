import React from 'react';

export default function App() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '3rem', color: '#38bdf8', marginBottom: '0.5rem' }}>⚛️ DeployHub React 18</h1>
      <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '600px', marginBottom: '2rem' }}>
        Lightning-fast Single Page Application built with React 18 and Vite.
      </p>
      <div style={{ background: 'rgba(34, 197, 94, 0.15)', border: '1px solid #22c55e', color: '#4ade80', padding: '0.75rem 1.5rem', borderRadius: '9999px', fontWeight: '600' }}>
        ● Status: Healthy & Ready for Deployment (200 OK)
      </div>
    </main>
  );
}
