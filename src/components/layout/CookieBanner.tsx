'use client';
import { useEffect, useState } from 'react';

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const openPreferences = () => setShow(true);
    queueMicrotask(() => {
      setShow(!localStorage.getItem('sgs-cookie-consent'));
    });
    window.addEventListener('sgs-cookie-preferences', openPreferences);
    return () => window.removeEventListener('sgs-cookie-preferences', openPreferences);
  }, []);

  const acceptAll = () => {
    localStorage.setItem('sgs-cookie-consent', JSON.stringify({ analytics: true, marketing: true }));
    setShow(false);
    window.dispatchEvent(new Event('cookie-consent-updated'));
  };

  const declineAll = () => {
    localStorage.setItem('sgs-cookie-consent', JSON.stringify({ analytics: false, marketing: false }));
    setShow(false);
    window.dispatchEvent(new Event('cookie-consent-updated'));
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white border-t border-slate-200 p-4 z-[9999] shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">
          Utilizamos cookies necessários e, com sua autorização, analytics/marketing para melhorar a experiência no site institucional SGS.
          Ao clicar em aceitar, você concorda com nossa <a href="/privacidade" className="underline font-bold">Política de Privacidade</a>.
        </p>
        <div className="flex gap-2">
          <button onClick={declineAll} className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-md transition-colors">
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
