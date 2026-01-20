export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  // Validace dat
  if (!body.name || !body.email || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Chybí povinné údaje'
    })
  }

  // V development módu jen simulujeme odeslání
  console.log('📧 Contact form submission (DEV MODE):')
  console.log('Name:', body.name)
  console.log('Email:', body.email)
  console.log('Phone:', body.phone)
  console.log('Message:', body.message)
  
  // Simulace zpoždění
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  return {
    statusCode: 200,
    message: 'Email byl úspěšně odeslán (DEV MODE - email nebyl skutečně odeslán)'
  }
})
