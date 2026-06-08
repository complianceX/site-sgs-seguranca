import { createServerFn } from '@tanstack/react-start'
import { verifyTurnstileToken } from './turnstile'
import { supabase } from './supabase'
import { demoFormSchema } from './api'

export type DemoResult =
  | { success: true; message?: string }
  | { success: false; message: string }

export const submitDemo = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => demoFormSchema.parse(data))
  .handler(async ({ data }) => {
    const { turnstileToken, ...formData } = data

    if (turnstileToken) {
      const verification = await verifyTurnstileToken(turnstileToken)
      if (!verification) {
      return {
        success: false as const,
        message: 'Verificação anti-spam falhou. Tente novamente.',
      }
      }
    }

    if (!supabase) {
      console.warn(
        'Supabase não configurado. Variáveis VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY necessárias.'
      )
      return {
        success: false as const,
        message:
          'Serviço de formulário temporariamente indisponível. Tente novamente mais tarde.',
      }
    }

    const { error } = await supabase.from('demo_requests').insert({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      employee_count: formData.employees,
      message: formData.needs,
    })

    if (error) {
      console.error('Erro ao salvar no Supabase:', error)
      return {
        success: false as const,
        message:
          'Erro ao enviar solicitação. Tente novamente mais tarde.',
      }
    }

    return { success: true as const }
  })
