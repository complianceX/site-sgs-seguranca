export default function Loading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-100 border-t-primary"></div>
        <p className="text-sm font-black uppercase tracking-widest text-slate-400">
          Carregando...
        </p>
      </div>
    </div>
  );
}
