<template>
  <div>
    <!-- Hlavička stránky -->
    <section class="relative py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
      <!-- Dekorativní prvky -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div class="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-200 filter blur-3xl opacity-30"></div>
        <div class="absolute top-1/2 right-10 w-72 h-72 rounded-full bg-indigo-200 filter blur-3xl opacity-40"></div>
      </div>
      
      <div class="container-custom relative z-10">
        <div class="text-center max-w-3xl mx-auto">
          <span class="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-4">Nabídka služeb</span>
          <h1 class="text-3xl md:text-5xl font-bold mb-6">Účetní služby pro vaše podnikání</h1>
          <p class="text-lg text-gray-700">Komplexní nabídka účetních služeb a poradenství pro osoby samostatně výdělečně činné. Spolehlivě se postarám o vaše účetnictví, abyste se mohli soustředit na své podnikání.</p>
        </div>
      </div>
    </section>
    
    <!-- Přehled hlavních služeb -->
    <section id="prehled" class="py-16 md:py-24">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-2xl md:text-4xl font-bold mb-4">Jak vám mohu pomoci?</h2>
          <p class="text-lg max-w-3xl mx-auto text-gray-600">Poskytuji komplexní účetní služby pro OSVČ. Od vedení účetnictví a daňové evidence až po optimalizaci daňových povinností.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ClientOnly>
            <div class="bg-white rounded-xl shadow-md border border-gray-100 p-8 text-center hover:shadow-lg transition-shadow">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                <UIcon name="i-heroicons-calculator" class="text-primary text-3xl" />
              </div>
              <h3 class="text-xl font-bold mb-4">Vedení účetnictví</h3>
              <p class="text-gray-600 mb-6">Komplexní zpracování účetnictví nebo daňové evidence pro vaše podnikání.</p>
              <UButton 
                to="/sluzby#ucetnictvi" 
                color="primary" 
                variant="ghost" 
                size="sm" 
                trailing-icon="i-heroicons-arrow-right"
              >
                Více informací
              </UButton>
            </div>
            <template #fallback>
              <div class="bg-white rounded-xl shadow-md border border-gray-100 p-8 text-center">
                <div class="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                  <UIcon name="i-heroicons-calculator" class="text-primary text-3xl" />
                </div>
                <h3 class="text-xl font-bold mb-4">Vedení účetnictví</h3>
                <p class="text-gray-600 mb-6">Komplexní zpracování účetnictví nebo daňové evidence pro vaše podnikání.</p>
                <UButton 
                  to="/sluzby#ucetnictvi" 
                  color="primary" 
                  variant="ghost" 
                  size="sm" 
                  trailing-icon="i-heroicons-arrow-right"
                >
                  Více informací
                </UButton>
              </div>
            </template>
          </ClientOnly>
          
          <ClientOnly>
            <div class="bg-white rounded-xl shadow-md border border-gray-100 p-8 text-center hover:shadow-lg transition-shadow">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                <UIcon name="i-heroicons-document-text" class="text-primary text-3xl" />
              </div>
              <h3 class="text-xl font-bold mb-4">Daňová přiznání</h3>
              <p class="text-gray-600 mb-6">Zpracování všech typů daňových přiznání pro OSVČ a zajištění jejich včasného podání.</p>
              <UButton 
                to="/sluzby#dane" 
                color="primary" 
                variant="ghost" 
                size="sm" 
                trailing-icon="i-heroicons-arrow-right"
              >
                Více informací
              </UButton>
            </div>
            <template #fallback>
              <div class="bg-white rounded-xl shadow-md border border-gray-100 p-8 text-center">
                <div class="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                  <UIcon name="i-heroicons-document-text" class="text-primary text-3xl" />
                </div>
                <h3 class="text-xl font-bold mb-4">Daňová přiznání</h3>
                <p class="text-gray-600 mb-6">Zpracování všech typů daňových přiznání pro OSVČ a zajištění jejich včasného podání.</p>
                <UButton 
                  to="/sluzby#dane" 
                  color="primary" 
                  variant="ghost" 
                  size="sm" 
                  trailing-icon="i-heroicons-arrow-right"
                >
                  Více informací
                </UButton>
              </div>
            </template>
          </ClientOnly>
          
          <ClientOnly>
            <div class="bg-white rounded-xl shadow-md border border-gray-100 p-8 text-center hover:shadow-lg transition-shadow">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                <UIcon name="i-heroicons-light-bulb" class="text-primary text-3xl" />
              </div>
              <h3 class="text-xl font-bold mb-4">Účetní poradenství</h3>
              <p class="text-gray-600 mb-6">Odborné konzultace a poradenství v oblasti účetnictví, daní a finančního plánování.</p>
              <UButton 
                to="/sluzby#poradenstvi" 
                color="primary" 
                variant="ghost" 
                size="sm" 
                trailing-icon="i-heroicons-arrow-right"
              >
                Více informací
              </UButton>
            </div>
            <template #fallback>
              <div class="bg-white rounded-xl shadow-md border border-gray-100 p-8 text-center">
                <div class="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                  <UIcon name="i-heroicons-light-bulb" class="text-primary text-3xl" />
                </div>
                <h3 class="text-xl font-bold mb-4">Účetní poradenství</h3>
                <p class="text-gray-600 mb-6">Odborné konzultace a poradenství v oblasti účetnictví, daní a finančního plánování.</p>
                <UButton 
                  to="/sluzby#poradenstvi" 
                  color="primary" 
                  variant="ghost" 
                  size="sm" 
                  trailing-icon="i-heroicons-arrow-right"
                >
                  Více informací
                </UButton>
              </div>
            </template>
          </ClientOnly>
        </div>
      </div>
    </section>

    <!-- Sekce služeb -->
    <section class="py-12 md:py-16">
      <div class="container-custom">
        <!-- Vedení účetnictví -->
        <div id="ucetnictvi" class="mb-16 scroll-mt-24">
          <div class="max-w-4xl mx-auto">
            <ClientOnly>
              <div class="flex items-center mb-6">
                <UIcon name="i-heroicons-calculator" class="text-primary text-3xl mr-4" />
                <h2 class="text-2xl md:text-3xl font-bold">Vedení účetnictví</h2>
              </div>

              <div class="bg-white p-6 md:p-8 rounded-xl shadow-sm">
                <p class="mb-4">Poskytuji komplexní zpracování účetnictví a daňové evidence pro OSVČ a menší firmy. Vaše doklady zpracuji pečlivě a přesně, tak aby vše bylo v souladu s účetními i daňovými předpisy.</p>
                
                <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="flex">
                    <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                    <div>
                      <h3 class="font-medium mb-1">Daňová evidence</h3>
                      <p class="text-gray-600">Pro živnostníky s obratem do 25 mil. Kč ročně. Jednoduché a přehledné evidování příjmů a výdajů.</p>
                    </div>
                  </div>
                  
                  <div class="flex">
                    <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                    <div>
                      <h3 class="font-medium mb-1">Podvojné účetnictví</h3>
                      <p class="text-gray-600">Komplexní zpracování účetnictví podle aktuálních účetních standardů a legislativy.</p>
                    </div>
                  </div>

                  <div class="flex">
                    <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                    <div>
                      <h3 class="font-medium mb-1">Zpracování DPH</h3>
                      <p class="text-gray-600">Příprava a podání přiznání k DPH, kontrolní hlášení, souhrnná hlášení.</p>
                    </div>
                  </div>

                  <div class="flex">
                    <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                    <div>
                      <h3 class="font-medium mb-1">Evidence majetku</h3>
                      <p class="text-gray-600">Správa dlouhodobého a drobného majetku, odpisy, inventarizace.</p>
                    </div>
                  </div>
                </div>
              </div>
              <template #fallback>
                <div class="flex items-center mb-6">
                  <UIcon name="i-heroicons-calculator" class="text-primary text-3xl mr-4" />
                  <h2 class="text-2xl md:text-3xl font-bold">Vedení účetnictví</h2>
                </div>

                <div class="bg-white p-6 md:p-8 rounded-xl shadow-sm">
                  <p class="mb-4">Poskytuji komplexní zpracování účetnictví a daňové evidence pro OSVČ a menší firmy. Vaše doklady zpracuji pečlivě a přesně, tak aby vše bylo v souladu s účetními i daňovými předpisy.</p>
                  
                  <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="flex">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                      <div>
                        <h3 class="font-medium mb-1">Daňová evidence</h3>
                        <p class="text-gray-600">Pro živnostníky s obratem do 25 mil. Kč ročně. Jednoduché a přehledné evidování příjmů a výdajů.</p>
                      </div>
                    </div>
                    
                    <div class="flex">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                      <div>
                        <h3 class="font-medium mb-1">Podvojné účetnictví</h3>
                        <p class="text-gray-600">Komplexní zpracování účetnictví podle aktuálních účetních standardů a legislativy.</p>
                      </div>
                    </div>

                    <div class="flex">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                      <div>
                        <h3 class="font-medium mb-1">Zpracování DPH</h3>
                        <p class="text-gray-600">Příprava a podání přiznání k DPH, kontrolní hlášení, souhrnná hlášení.</p>
                      </div>
                    </div>

                    <div class="flex">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                      <div>
                        <h3 class="font-medium mb-1">Evidence majetku</h3>
                        <p class="text-gray-600">Správa dlouhodobého a drobného majetku, odpisy, inventarizace.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </ClientOnly>
          </div>
        </div>

        <!-- Daňová přiznání -->
        <div id="dane" class="mb-16 scroll-mt-24">
          <div class="max-w-4xl mx-auto">
            <ClientOnly>
              <div class="flex items-center mb-6">
                <UIcon name="i-heroicons-document-text" class="text-primary text-3xl mr-4" />
                <h2 class="text-2xl md:text-3xl font-bold">Daňová přiznání</h2>
              </div>

              <div class="bg-white p-6 md:p-8 rounded-xl shadow-sm">
                <p class="mb-4">Zpracuji za vás všechny typy daňových přiznání včas a správně. Díky znalosti aktuální daňové legislativy dokážu navrhnout optimální řešení pro vaše daňové povinnosti.</p>
                
                <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="flex">
                    <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                    <div>
                      <h3 class="font-medium mb-1">Daň z příjmů fyzických osob</h3>
                      <p class="text-gray-600">Kompletní zpracování daňového přiznání pro OSVČ včetně příloh a přehledů pro OSSZ a ZP.</p>
                    </div>
                  </div>
                  
                  <div class="flex">
                    <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                    <div>
                      <h3 class="font-medium mb-1">Daň z příjmů právnických osob</h3>
                      <p class="text-gray-600">Přiznání k dani z příjmů pro s.r.o. a další právnické osoby.</p>
                    </div>
                  </div>

                  <div class="flex">
                    <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                    <div>
                      <h3 class="font-medium mb-1">Silniční daň</h3>
                      <p class="text-gray-600">Výpočet a zpracování přiznání k silniční dani pro firemní vozidla.</p>
                    </div>
                  </div>

                  <div class="flex">
                    <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                    <div>
                      <h3 class="font-medium mb-1">Další daňová přiznání</h3>
                      <p class="text-gray-600">Zpracování dalších typů daňových přiznání podle vašich potřeb.</p>
                    </div>
                  </div>
                </div>
              </div>
              <template #fallback>
                <div class="flex items-center mb-6">
                  <UIcon name="i-heroicons-document-text" class="text-primary text-3xl mr-4" />
                  <h2 class="text-2xl md:text-3xl font-bold">Daňová přiznání</h2>
                </div>

                <div class="bg-white p-6 md:p-8 rounded-xl shadow-sm">
                  <p class="mb-4">Zpracuji za vás všechny typy daňových přiznání včas a správně. Díky znalosti aktuální daňové legislativy dokážu navrhnout optimální řešení pro vaše daňové povinnosti.</p>
                  
                  <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="flex">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                      <div>
                        <h3 class="font-medium mb-1">Daň z příjmů fyzických osob</h3>
                        <p class="text-gray-600">Kompletní zpracování daňového přiznání pro OSVČ včetně příloh a přehledů pro OSSZ a ZP.</p>
                      </div>
                    </div>
                    
                    <div class="flex">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                      <div>
                        <h3 class="font-medium mb-1">Daň z příjmů právnických osob</h3>
                        <p class="text-gray-600">Přiznání k dani z příjmů pro s.r.o. a další právnické osoby.</p>
                      </div>
                    </div>

                    <div class="flex">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                      <div>
                        <h3 class="font-medium mb-1">Silniční daň</h3>
                        <p class="text-gray-600">Výpočet a zpracování přiznání k silniční dani pro firemní vozidla.</p>
                      </div>
                    </div>

                    <div class="flex">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                      <div>
                        <h3 class="font-medium mb-1">Další daňová přiznání</h3>
                        <p class="text-gray-600">Zpracování dalších typů daňových přiznání podle vašich potřeb.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </ClientOnly>
          </div>
        </div>

        <!-- Účetní poradenství -->
        <div id="poradenstvi" class="mb-16 scroll-mt-24">
          <div class="max-w-4xl mx-auto">
            <ClientOnly>
              <div class="flex items-center mb-6">
                <UIcon name="i-heroicons-light-bulb" class="text-primary text-3xl mr-4" />
                <h2 class="text-2xl md:text-3xl font-bold">Účetní poradenství</h2>
              </div>

              <div class="bg-white p-6 md:p-8 rounded-xl shadow-sm">
                <p class="mb-4">Poskytuji komplexní účetní a daňové poradenství pro OSVČ. Pomůžu vám zorientovat se v účetních a daňových předpisech a optimalizovat vaše podnikání z hlediska daní.</p>
                
                <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="flex">
                    <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                    <div>
                      <h3 class="font-medium mb-1">Daňová optimalizace</h3>
                      <p class="text-gray-600">Návrhy legálních postupů pro snížení daňové zátěže a efektivní využití daňových úlev.</p>
                    </div>
                  </div>
                  
                  <div class="flex">
                    <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                    <div>
                      <h3 class="font-medium mb-1">Zahájení a ukončení podnikání</h3>
                      <p class="text-gray-600">Poradenství při založení živnosti nebo firmy, při ukončení nebo změně formy podnikání.</p>
                    </div>
                  </div>

                  <div class="flex">
                    <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                    <div>
                      <h3 class="font-medium mb-1">Konzultace k účetním dokladům</h3>
                      <p class="text-gray-600">Poradenství ohledně správného vystavování a náležitostí účetních dokladů.</p>
                    </div>
                  </div>

                  <div class="flex">
                    <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                    <div>
                      <h3 class="font-medium mb-1">Zastupování na úřadech</h3>
                      <p class="text-gray-600">Zastupování při jednáních s finančním úřadem a dalšími institucemi.</p>
                    </div>
                  </div>
                </div>
              </div>
              <template #fallback>
                <div class="flex items-center mb-6">
                  <UIcon name="i-heroicons-light-bulb" class="text-primary text-3xl mr-4" />
                  <h2 class="text-2xl md:text-3xl font-bold">Účetní poradenství</h2>
                </div>

                <div class="bg-white p-6 md:p-8 rounded-xl shadow-sm">
                  <p class="mb-4">Poskytuji komplexní účetní a daňové poradenství pro OSVČ. Pomůžu vám zorientovat se v účetních a daňových předpisech a optimalizovat vaše podnikání z hlediska daní.</p>
                  
                  <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="flex">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                      <div>
                        <h3 class="font-medium mb-1">Daňová optimalizace</h3>
                        <p class="text-gray-600">Návrhy legálních postupů pro snížení daňové zátěže a efektivní využití daňových úlev.</p>
                      </div>
                    </div>
                    
                    <div class="flex">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                      <div>
                        <h3 class="font-medium mb-1">Zahájení a ukončení podnikání</h3>
                        <p class="text-gray-600">Poradenství při založení živnosti nebo firmy, při ukončení nebo změně formy podnikání.</p>
                      </div>
                    </div>

                    <div class="flex">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                      <div>
                        <h3 class="font-medium mb-1">Konzultace k účetním dokladům</h3>
                        <p class="text-gray-600">Poradenství ohledně správného vystavování a náležitostí účetních dokladů.</p>
                      </div>
                    </div>

                    <div class="flex">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                      <div>
                        <h3 class="font-medium mb-1">Zastupování na úřadech</h3>
                        <p class="text-gray-600">Zastupování při jednáních s finančním úřadem a dalšími institucemi.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </ClientOnly>
          </div>
        </div>

        <!-- Další služby -->
        <div id="ostatni" class="mb-16 scroll-mt-24">
          <div class="max-w-4xl mx-auto">
            <ClientOnly>
              <div class="flex items-center mb-6">
                <UIcon name="i-heroicons-briefcase" class="text-primary text-3xl mr-4" />
                <h2 class="text-2xl md:text-3xl font-bold">Další služby</h2>
              </div>

              <div class="bg-white p-6 md:p-8 rounded-xl shadow-sm">
                <p class="mb-4">Kromě základních účetních služeb nabízím i další služby, které mohou usnadnit vaše podnikání:</p>
                
                <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="flex">
                    <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                    <div>
                      <h3 class="font-medium mb-1">Mzdové účetnictví</h3>
                      <p class="text-gray-600">Kompletní zpracování mezd pro vaše zaměstnance včetně všech souvisejících výkazů.</p>
                    </div>
                  </div>
                  
                  <div class="flex">
                    <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                    <div>
                      <h3 class="font-medium mb-1">Fakturace a administrativa</h3>
                      <p class="text-gray-600">Pomoc s vystavováním faktur a další administrativou spojenou s podnikáním.</p>
                    </div>
                  </div>

                  <div class="flex">
                    <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                    <div>
                      <h3 class="font-medium mb-1">Ekonomické poradenství</h3>
                      <p class="text-gray-600">Analýzy hospodaření, finanční plánování a další ekonomické konzultace.</p>
                    </div>
                  </div>

                  <div class="flex">
                    <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                    <div>
                      <h3 class="font-medium mb-1">Školení a konzultace</h3>
                      <p class="text-gray-600">Individuální školení v oblasti účetnictví a daní pro vás nebo vaše zaměstnance.</p>
                    </div>
                  </div>
                </div>
              </div>
              <template #fallback>
                <div class="flex items-center mb-6">
                  <UIcon name="i-heroicons-briefcase" class="text-primary text-3xl mr-4" />
                  <h2 class="text-2xl md:text-3xl font-bold">Další služby</h2>
                </div>

                <div class="bg-white p-6 md:p-8 rounded-xl shadow-sm">
                  <p class="mb-4">Kromě základních účetních služeb nabízím i další služby, které mohou usnadnit vaše podnikání:</p>
                  
                  <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="flex">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                      <div>
                        <h3 class="font-medium mb-1">Mzdové účetnictví</h3>
                        <p class="text-gray-600">Kompletní zpracování mezd pro vaše zaměstnance včetně všech souvisejících výkazů.</p>
                      </div>
                    </div>
                    
                    <div class="flex">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                      <div>
                        <h3 class="font-medium mb-1">Fakturace a administrativa</h3>
                        <p class="text-gray-600">Pomoc s vystavováním faktur a další administrativou spojenou s podnikáním.</p>
                      </div>
                    </div>

                    <div class="flex">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                      <div>
                        <h3 class="font-medium mb-1">Ekonomické poradenství</h3>
                        <p class="text-gray-600">Analýzy hospodaření, finanční plánování a další ekonomické konzultace.</p>
                      </div>
                    </div>

                    <div class="flex">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1 mr-3" />
                      <div>
                        <h3 class="font-medium mb-1">Školení a konzultace</h3>
                        <p class="text-gray-600">Individuální školení v oblasti účetnictví a daní pro vás nebo vaše zaměstnance.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </ClientOnly>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA sekce -->
    <section class="py-12 md:py-16 bg-primary-50">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-sm text-center">
          <h2 class="text-2xl md:text-3xl font-bold mb-4">Potřebujete některou z mých služeb?</h2>
          <p class="text-lg mb-8">Neváhejte mě kontaktovat pro nezávaznou konzultaci nebo cenovou nabídku.</p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <UButton to="/#kontakt" color="primary" class="text-white" size="lg">
              Kontaktujte mě
            </UButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

// Animace budou aplikovány klientsky po načtení stránky
onMounted(() => {
  // Zde můžeme inicializovat animace manuálně, pokud je potřeba
});

definePageMeta({
  title: 'Účetní služby pro OSVČ Blansko | Kompletní nabídka',
  description: 'Kompletní nabídka účetních služeb pro OSVČ - vedení účetnictví, daňová přiznání a poradenství. Profesionální služby pro vaše podnikání.'
});
</script>

<style scoped>
.scroll-mt-24 {
  scroll-margin-top: 6rem;
}
.text-primary {
  color: var(--primary-color);
}
.bg-primary {
  background-color: var(--primary-color);
}
.border-primary {
  border-color: var(--primary-color);
}
</style>