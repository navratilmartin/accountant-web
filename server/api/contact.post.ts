import { Resend } from 'resend';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    
    // Validace dat
    if (!body.name || !body.email || !body.message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Chybí povinné údaje'
      });
    }

    const config = useRuntimeConfig();
    
    // Odeslání emailu pomocí Resend
    const resend = new Resend(config.resendApiKey);
    
    await resend.emails.send({
      from: `"Kontaktní formulář" <${config.emailUser || 'onboarding@resend.dev'}>`,
      to: config.emailRecipient || 'martinacek.n@gmail.com',
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

    return { 
      statusCode: 200, 
      message: 'Email byl úspěšně odeslán' 
    };
  } catch (error: any) {
    console.error('Chyba při odesílání emailu:', error);
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Nastala chyba při odesílání emailu',
      message: error?.message || 'Unknown error'
    });
  }
});
