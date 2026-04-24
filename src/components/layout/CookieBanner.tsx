'use client';
import { useState, useEffect } from 'react';

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('sgs-cookie-consent');
    if (!consent) setShow(true);
  }, []);

  const acceptAll = () => {
    localStorage.setItem('sgs-cookie-consent', 'all');
    setShow(false);
    window.location.reload(); // Recarrega para ativar scripts de analytics
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white border-t border-slate-200 p-4 z-[9999] shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">
          Utilizamos cookies para melhorar sua experiência em nossa plataforma SaaS. 
          Ao clicar em aceitar, você concorda com nossa <a href="/privacidade" className="underline font-bold">Política de Privacidade</a>.
        </p>
        <div className="flex gap-2">
          <button onClick={() => setShow(false)} className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-md transition-colors">
            Recusar
          </button>
          <button onClick={acceptAll} className="px-6 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 rounded-md shadow-lg transition-colors">
            Aceitar Cookies
          </button>
        </div>
      </div>
    </div>
  );
}