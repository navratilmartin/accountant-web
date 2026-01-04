import { Resend } from 'resend';

interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

interface Env {
  RESEND_API_KEY: string;
  EMAIL_RECIPIENT: string;
  EMAIL_USER: string;
}

// Cloudflare Pages Function
export async function onRequestPost(context: { request: Request; env: Env }) {
  try {
    // Parse JSON body
    const body = await context.request.json() as ContactForm;
    
    // Validace dat
    if (!body.name || !body.email || !body.message) {
      return new Response(JSON.stringify({ 
        statusCode: 400, 
        message: 'Chybí povinné údaje' 
      }), {
        status: 400,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Odeslání emailu pomocí Resend
    const resend = new Resend(context.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: `"Kontaktní formulář" <${context.env.EMAIL_USER || 'onboarding@resend.dev'}>`,
      to: context.env.EMAIL_RECIPIENT || 'martinacek.n@gmail.com',
      subject: `Nová zpráva od ${body.name}`,
      html: `
        <h2>Nová zpráva z kontaktního formuláře</h2>
        <p><strong>Jméno:</strong> ${body.name}</p>
        <p><strong>E-mail:</strong> ${body.email}</p>
        <p><strong>Telefon:</strong> ${body.phone || 'neuvedeno'}</p>
        <p><strong>Zpráva:</strong></p>
        <p>${body.message.replace(/\n/g, '<br>')}</p>
      `
    });

    // Vrácení úspěšné odpovědi
    return new Response(JSON.stringify({ 
      statusCode: 200, 
      message: 'Email byl úspěšně odeslán' 
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    console.error('Chyba při odesílání emailu:', error);
    
    // Vrácení chybové odpovědi
    return new Response(JSON.stringify({ 
      statusCode: 500, 
      message: 'Nastala chyba při odesílání emailu',
      error: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}

// Handle OPTIONS for CORS preflight
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
}
