import { Camera, ClipboardCheck, FileText, ShieldCheck } from "lucide-react";
import { fieldGalleryItems } from "@/data/home";

const icons = [Camera, ClipboardCheck, FileText, ShieldCheck];

export function FieldGallerySection() {
  return (
    <section className="container" aria-labelledby="field-gallery-title">
      <div className="mx-auto mb-24 max-w-3xl text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-sgs-orange/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-sgs-orange">
          <Camera className="h-3.5 w-3.5" aria-hidden="true" />
          SGS em campo
        </div>
        <h2 id="field-gallery-title" className="mb-8 text-4xl font-black tracking-tight text-sgs-navy lg:text-6xl text-balance">
          Operação real, <span className="text-sgs-orange">resultados</span> reais
        </h2>
        <p className="text-xl font-medium leading-relaxed text-slate-500">
          Evidências, assinaturas e documentos críticos conectados à rotina de quem faz a segurança acontecer.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {fieldGalleryItems.map((photo, index) => {
          const Icon = icons[index % icons.length];
          return (
            <article
              key={photo.title}
              className="group relative aspect-[3/4] overflow-hidden rounded-[2.5rem] border border-slate-100 shadow-sgs"
              style={{
                background: `linear-gradient(165deg, ${photo.gradientFrom} 0%, ${photo.gradientTo} 55%, #0f172a 100%)`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <Icon className="h-24 w-24 text-white" aria-hidden="true" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-sgs-navy via-sgs-navy/50 to-transparent opacity-80" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                  {photo.category}
                </p>
                <h3 className="mb-3 text-2xl font-black leading-tight text-white">{photo.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{photo.desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
