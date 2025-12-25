import { Resend } from 'resend';

// Definice očekávaného tvaru dat z kontaktního formuláře
interface ContactForm {
  name: string;
  email: string;
  phone?: string; // volitelné
  message: string;
}

export default defineEventHandler(async (event) => {
  try {
    // Získání dat z požadavku
    const body = await readBody<ContactForm>(event);
    
    // Získání konfigurace
    const config = useRuntimeConfig();
    
    // Validace dat
    if (!body.name || !body.email || !body.message) {
      return {
        statusCode: 400,
        message: 'Chybí povinné údaje'
      };
    }


    // Odeslání emailu pomocí Resend
    const resend = new Resend(config.resendApiKey || process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: `"Kontaktní formulář" <${config.emailUser || 'onboarding@resend.dev'}>`,
      to: config.emailRecipient || 'martinacek.n@gmail.com',
      subject: 'Nová zpráva z kontaktního formuláře',
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
    return {
      statusCode: 200,
      message: 'Email byl úspěšně odeslán'
    };
  } catch (error) {
    console.error('Chyba při odesílání emailu:', error);
    
    // Vrácení chybové odpovědi
    return {
      statusCode: 500,
      message: 'Nastala chyba při odesílání emailu'
    };
  }
});