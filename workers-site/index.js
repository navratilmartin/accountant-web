// workers-site/index.js
import { getAssetFromKV } from '@cloudflare/kv-asset-handler';
import { Resend } from 'resend';

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  const url = new URL(event.request.url);
  
  // Handle API routes
  if (url.pathname === '/api/contact') {
    return handleContactAPI(event);
  }
  
  try {
    // Let KV Asset Handler serve the asset from the bucket (your .output/public folder)
    return await getAssetFromKV(event);
  } catch (e) {
    // In case of error (asset not found, etc.) return a 404 response.
    return new Response('404 Not Found', { status: 404 });
  }
}

async function handleContactAPI(event) {
  // Handle CORS preflight
  if (event.request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    });
  }
  
  if (event.request.method !== 'POST') {
    return new Response(JSON.stringify({ statusCode: 405, message: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }
  
  try {
    const body = await event.request.json();
    
    // Validace dat
    if (!body.name || !body.email || !body.message) {
      return new Response(JSON.stringify({
        statusCode: 400,
        message: 'Chybí povinné údaje'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }
    
    // Odeslání emailu pomocí Resend
    const resend = new Resend(RESEND_API_KEY);
    
    const { error } = await resend.emails.send({
      from: `"Kontaktní formulář" <${EMAIL_USER || 'onboarding@resend.dev'}>`,
      to: EMAIL_RECIPIENT || 'martinacek.n@gmail.com',
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
    
    if (error) {
      console.error('Resend error:', error);
      throw new Error(error.message);
    }
    
    return new Response(JSON.stringify({
      statusCode: 200,
      message: 'Email byl úspěšně odeslán'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  } catch (error) {
    console.error('Chyba při odesílání emailu:', error);
    
    return new Response(JSON.stringify({
      statusCode: 500,
      message: 'Nastala chyba při odesílání emailu',
      error: error.message || 'Unknown error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }
}