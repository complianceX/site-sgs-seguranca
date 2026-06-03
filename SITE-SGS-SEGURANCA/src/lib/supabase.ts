import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY as
  | string
  | undefined;

export const supabase =
  supabaseUrl && supabaseKey
    ? createClient(supabaseUrl, supabaseKey)
    : null;

export async function submitDemoViaSupabase(payload: {
  name: string;
  email: string;
  phone: string;
  company: string;
  employees?: string;
  needs?: string;
}) {
  if (!supabase) {
    return {
      success: false,
      message:
        "Banco de dados não configurado. Adicione VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY ao .env.",
    };
  }

  const { error } = await supabase.from("demo_requests").insert([
    {
      ...payload,
      created_at: new Date().toISOString(),
    },
  ]);

  if (error) {
    console.error("Supabase insert error:", error);
    return {
      success: false,
      message: "Erro ao salvar solicitação. Tente novamente.",
    };
  }

  return {
    success: true,
    message:
      "Solicitação recebida! Entraremos em contato em até 24h úteis.",
  };
}
