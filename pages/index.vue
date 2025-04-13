<template>
  <div>
    <!-- Hero sekce -->
    <section id="home" class="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-white to-indigo-50">
      <div class="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/10 to-blue-50 -z-10"></div>
      
      <!-- Dekorativní prvky -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-40">
        <div class="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/20 filter blur-3xl"></div>
        <div class="absolute top-1/3 left-10 w-72 h-72 rounded-full bg-indigo-200/30 filter blur-3xl"></div>
        <div class="absolute bottom-24 right-48 w-64 h-64 rounded-full bg-blue-200/40 filter blur-3xl"></div>
      </div>
      
      <div class="container-custom relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Účetnictví pro <span class="text-primary">OSVČ</span> bez zbytečného stresu
            </h1>
            <p class="text-lg md:text-xl text-gray-700 mb-8">
              Profesionální vedení účetnictví a daňové poradenství pro osoby samostatně výdělečně činné. Soustřeďte se na své podnikání, o papírování se postarám za vás.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <UButton 
                to="#kontakt" 
                color="primary"
                size="xl"
                class="shadow-md"
              >
                <UIcon name="i-heroicons-envelope" class="mr-2" />
                Nezávazná konzultace
              </UButton>
              <UButton 
                to="/sluzby" 
                color="white"
                variant="outline"
                size="xl"
                class="border-2"
              >
                <UIcon name="i-heroicons-information-circle" class="mr-2" />
                Nabídka služeb
              </UButton>
            </div>
            
            <!-- Statistiky / Trust badges -->
            <div class="grid grid-cols-3 gap-4 mt-12 max-w-xl">
              <div class="text-center">
                <div class="text-3xl font-bold text-primary mb-1">15+</div>
                <div class="text-sm text-gray-600">Let zkušeností</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-primary mb-1">200+</div>
                <div class="text-sm text-gray-600">Spokojených klientů</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-primary mb-1">100%</div>
                <div class="text-sm text-gray-600">Spokojenost</div>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <img 
              src="/img/hero-image.webp" 
              alt="Účetní služby pro OSVČ" 
              class="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
      
      <!-- Vlnka na konci sekce -->
      <!-- <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="w-full h-16">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div> -->
    </section>

    <!-- Přehled služeb -->
    <section id="sluzby" class="py-16 md:py-24 relative overflow-hidden">
      <!-- Přidané dekorativní prvky -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30">
        <div class="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary/10 filter blur-3xl"></div>
        <div class="absolute top-1/4 right-10 w-72 h-72 rounded-full bg-indigo-200/30 filter blur-3xl"></div>
      </div>
      
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-4">Služby</span>
          <h2 class="text-2xl md:text-4xl font-bold mb-4">Jak vám mohu pomoci?</h2>
          <p class="text-lg max-w-3xl mx-auto text-gray-600">Poskytuji komplexní účetní služby pro OSVČ. Od vedení účetnictví a daňové evidence až po optimalizaci daňových povinností.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ClientOnly>
            <div class="bg-white rounded-xl shadow-md border border-gray-100 p-8 hover:shadow-lg transition-shadow" v-motion-slide-visible-once-bottom>
              <div class="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                <UIcon name="i-heroicons-calculator" class="text-primary text-3xl" />
              </div>
              <h3 class="text-xl font-bold mb-4">Vedení účetnictví</h3>
              <p class="text-gray-600 mb-6">Komplexní zpracování účetnictví nebo daňové evidence pro vaše podnikání.</p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span class="text-gray-600">Zpracování dokladů</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span class="text-gray-600">Evidence majetku a závazků</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span class="text-gray-600">Finanční výkazy a reporty</span>
                </li>
              </ul>
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
              <div class="bg-white rounded-xl shadow-md border border-gray-100 p-8">
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
            <div class="bg-white rounded-xl shadow-md border border-gray-100 p-8 hover:shadow-lg transition-shadow" v-motion-slide-visible-once-bottom>
              <div class="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                <UIcon name="i-heroicons-document-text" class="text-primary text-3xl" />
              </div>
              <h3 class="text-xl font-bold mb-4">Daňová přiznání</h3>
              <p class="text-gray-600 mb-6">Zpracování všech typů daňových přiznání pro OSVČ a zajištění jejich včasného podání.</p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span class="text-gray-600">Daň z příjmu fyzických osob</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span class="text-gray-600">Přiznání k DPH</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span class="text-gray-600">Silniční daň a další</span>
                </li>
              </ul>
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
              <div class="bg-white rounded-xl shadow-md border border-gray-100 p-8">
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
            <div class="bg-white rounded-xl shadow-md border border-gray-100 p-8 hover:shadow-lg transition-shadow" v-motion-slide-visible-once-bottom>
              <div class="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                <UIcon name="i-heroicons-light-bulb" class="text-primary text-3xl" />
              </div>
              <h3 class="text-xl font-bold mb-4">Účetní poradenství</h3>
              <p class="text-gray-600 mb-6">Odborné konzultace a poradenství v oblasti účetnictví, daní a finančního plánování.</p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span class="text-gray-600">Daňová optimalizace</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span class="text-gray-600">Finanční plánování</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span class="text-gray-600">Zastupování před úřady</span>
                </li>
              </ul>
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
              <div class="bg-white rounded-xl shadow-md border border-gray-100 p-8">
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
        
        <div class="text-center mt-12">
          <UButton 
            to="/cenik" 
            color="primary"
            size="lg"
            class="shadow-md"
          >
            <UIcon name="i-heroicons-currency-euro" class="mr-2" />
            Zobrazit ceník služeb
          </UButton>
        </div>
      </div>
    </section>
    
    <!-- O mně sekce -->
    <section id="o-mne" class="py-16 md:py-24 bg-gradient-to-br from-indigo-50 to-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ClientOnly>
            <div class="relative" v-motion-slide-visible-once-left>
              <div class="absolute -z-10 w-full h-full -top-4 -right-4 bg-primary/10 rounded-xl"></div>
              <img
                src="/img/accountant-portrait.webp"
                alt="Jana Nováková - Účetní pro OSVČ"
                class="rounded-xl shadow-lg z-10 relative"
                width="600"
                height="400"
              />
            </div>
            <template #fallback>
              <div class="relative">
                <div class="absolute -z-10 w-full h-full -top-4 -right-4 bg-primary/10 rounded-xl"></div>
                <img
                  src="/img/accountant-portrait.webp"
                  alt="Jana Nováková - Účetní pro OSVČ"
                  class="rounded-xl shadow-lg z-10 relative"
                  width="600"
                  height="400"
                />
              </div>
            </template>
          </ClientOnly>
          
          <div>
            <span class="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-4">O mně</span>
            <h2 class="text-2xl md:text-4xl font-bold mb-6">Proč se mnou spolupracovat?</h2>
            <p class="text-lg text-gray-700 mb-6">
              Jmenuji se Jana Nováková a již více než 15 let pomáhám podnikatelům a OSVČ s vedením účetnictví, daňovou evidencí a daňovými přiznáními. Mám bohaté zkušenosti z různých oborů podnikání, od řemeslníků přes IT profesionály až po umělce na volné noze.
            </p>
            
            <div class="space-y-4 mb-8">
              <div class="flex items-start">
                <UIcon name="i-heroicons-academic-cap" class="text-primary text-xl mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold mb-1">Kvalifikace a vzdělání</h4>
                  <p class="text-gray-600">Vysokoškolské vzdělání v oboru účetnictví a daně, pravidelná školení a certifikace.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <UIcon name="i-heroicons-briefcase" class="text-primary text-xl mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold mb-1">Bohaté zkušenosti</h4>
                  <p class="text-gray-600">Více než 15 let praxe v účetnictví pro OSVČ a menší firmy v různých odvětvích.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <UIcon name="i-heroicons-chat-bubble-bottom-center-text" class="text-primary text-xl mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold mb-1">Osobní přístup</h4>
                  <p class="text-gray-600">Individuální řešení pro každého klienta s důrazem na jeho specifické potřeby a cíle.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <UIcon name="i-heroicons-shield-check" class="text-primary text-xl mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold mb-1">Naprostá diskrétnost</h4>
                  <p class="text-gray-600">Garantuji maximální ochranu vašich citlivých dat a obchodních informací.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <UIcon name="i-heroicons-clock" class="text-primary text-xl mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold mb-1">Úspora času</h4>
                  <p class="text-gray-600">Věnujte se svému podnikání a nechte administrativu na mně.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <UIcon name="i-heroicons-banknotes" class="text-primary text-xl mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold mb-1">Daňové úspory</h4>
                  <p class="text-gray-600">Legální optimalizace daní a využití všech dostupných slev.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <UIcon name="i-heroicons-document-check" class="text-primary text-xl mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold mb-1">Bez chyb a pokut</h4>
                  <p class="text-gray-600">Minimalizace rizika chyb v účetnictví a pozdních podání.</p>
                </div>
              </div>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <UButton 
                to="/sluzby" 
                color="primary"
              >
                <UIcon name="i-heroicons-document-text" class="mr-2" />
                Moje služby
              </UButton>
              <UButton 
                to="#reference" 
                color="gray"
                variant="ghost"
              >
                <UIcon name="i-heroicons-chat-bubble-left-right" class="mr-2" />
                Reference klientů
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Reference klientů -->
    <section id="reference" class="py-16 md:py-24">
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-4">Reference klientů</span>
          <h2 class="text-2xl md:text-4xl font-bold mb-4">Co říkají moji klienti</h2>
          <p class="text-lg max-w-3xl mx-auto text-gray-600">Přečtěte si zkušenosti a názory klientů, kteří využívají mé účetní služby pro OSVČ.</p>
        </div>
        
        <!-- Featured testimonial -->
        <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden mb-16">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <!-- Fotografie klienta -->
            <div class="h-60 md:h-full relative">
              <img 
                src="/img/client1.webp" 
                alt="Jan Novák - spokojený klient" 
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div class="text-white">
                  <h3 class="font-bold text-xl">Jan Novák</h3>
                  <p class="text-white/80">IT konzultant & vývojář</p>
                </div>
              </div>
            </div>
            <!-- Obsah reference -->
            <div class="p-8 md:p-10 flex flex-col justify-center">
              <div class="mb-6">
                <UIcon name="i-heroicons-quote" class="text-5xl text-primary opacity-20" />
              </div>
              <blockquote class="text-xl font-light italic mb-8">
                "Spolupráce s paní účetní je naprosto bezproblémová. Oceňuji její profesionalitu, odbornost a rychlou komunikaci. Díky jejím radám jsem optimalizoval své daňové povinnosti a ušetřil mnoho času i peněz."
              </blockquote>
              <div class="flex items-center space-x-1">
                <UIcon name="i-heroicons-star" class="text-yellow-400" />
                <UIcon name="i-heroicons-star" class="text-yellow-400" />
                <UIcon name="i-heroicons-star" class="text-yellow-400" />
                <UIcon name="i-heroicons-star" class="text-yellow-400" />
                <UIcon name="i-heroicons-star" class="text-yellow-400" />
                <span class="ml-2 text-sm text-gray-500">Spolupracujeme od roku 2022</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Infinitely moving carousel -->
        <div class="relative overflow-hidden py-4">
          <!-- Testimonial track - this will be animated -->
          <div class="testimonial-track flex animate-infinite-scroll">
            <!-- First set of testimonials -->
            <div class="testimonial-slide flex gap-8 mx-4">
              <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 w-[350px] shrink-0">
                <div class="flex items-center mb-4">
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                </div>
                <div class="mb-6">
                  <UIcon name="i-heroicons-quote" class="text-3xl text-primary opacity-20" />
                </div>
                <blockquote class="text-lg italic mb-8">
                  "Přechod od předchozí účetní byl hladký a bezproblémový. Oceňuji profesionální a vstřícný přístup, přehledné výkazy a pravidelné konzultace. Doporučuji všem OSVČ!"
                </blockquote>
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-gray-200 rounded-full mr-4">
                    <img 
                      src="/img/client2.webp" 
                      alt="Petra Svobodová" 
                      class="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 class="font-semibold">Petra Svobodová</h4>
                    <p class="text-sm text-gray-500">Grafická designérka</p>
                  </div>
                </div>
              </div>
    
              <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 w-[350px] shrink-0">
                <div class="flex items-center mb-4">
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                </div>
                <div class="mb-6">
                  <UIcon name="i-heroicons-quote" class="text-3xl text-primary opacity-20" />
                </div>
                <blockquote class="text-lg italic mb-8">
                  "Jako začínající podnikatel jsem potřeboval někoho, kdo mi pomůže s účetnictvím a zorientovat se v daňových povinnostech. Našel jsem profesionála na svém místě. Vřele doporučuji."
                </blockquote>
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-gray-200 rounded-full mr-4">
                    <img 
                      src="/img/client3.webp" 
                      alt="Marek Dvořák" 
                      class="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 class="font-semibold">Marek Dvořák</h4>
                    <p class="text-sm text-gray-500">Webový vývojář</p>
                  </div>
                </div>
              </div>
    
              <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 w-[350px] shrink-0">
                <div class="flex items-center mb-4">
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star-half" class="text-yellow-400" />
                </div>
                <div class="mb-6">
                  <UIcon name="i-heroicons-quote" class="text-3xl text-primary opacity-20" />
                </div>
                <blockquote class="text-lg italic mb-8">
                  "Oceňuji především rychlou odezvu na všechny mé dotazy a velmi vstřícný přístup při řešení nestandardních situací. Díky profesionálním radám jsem ušetřil na daních."
                </blockquote>
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                    <UIcon name="i-heroicons-user" class="text-gray-400 text-xl" />
                  </div>
                  <div>
                    <h4 class="font-semibold">Martin Horák</h4>
                    <p class="text-sm text-gray-500">Architekt</p>
                  </div>
                </div>
              </div>
    
              <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 w-[350px] shrink-0">
                <div class="flex items-center mb-4">
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                </div>
                <div class="mb-6">
                  <UIcon name="i-heroicons-quote" class="text-3xl text-primary opacity-20" />
                </div>
                <blockquote class="text-lg italic mb-8">
                  "Spolupracuji s paní účetní již třetím rokem a jsem maximálně spokojena. Vždy dodržuje termíny, je pečlivá a její rady mi ušetřily mnoho času i peněz."
                </blockquote>
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                    <UIcon name="i-heroicons-user" class="text-gray-400 text-xl" />
                  </div>
                  <div>
                    <h4 class="font-semibold">Lucie Černá</h4>
                    <p class="text-sm text-gray-500">Copywriterka</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Duplicate of testimonials for infinite scrolling effect -->
            <div class="testimonial-slide flex gap-8 mx-4">
              <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 w-[350px] shrink-0">
                <div class="flex items-center mb-4">
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                </div>
                <div class="mb-6">
                  <UIcon name="i-heroicons-quote" class="text-3xl text-primary opacity-20" />
                </div>
                <blockquote class="text-lg italic mb-8">
                  "Přechod od předchozí účetní byl hladký a bezproblémový. Oceňuji profesionální a vstřícný přístup, přehledné výkazy a pravidelné konzultace. Doporučuji všem OSVČ!"
                </blockquote>
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-gray-200 rounded-full mr-4">
                    <img 
                      src="/img/client2.webp" 
                      alt="Petra Svobodová" 
                      class="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 class="font-semibold">Petra Svobodová</h4>
                    <p class="text-sm text-gray-500">Grafická designérka</p>
                  </div>
                </div>
              </div>
    
              <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 w-[350px] shrink-0">
                <div class="flex items-center mb-4">
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                </div>
                <div class="mb-6">
                  <UIcon name="i-heroicons-quote" class="text-3xl text-primary opacity-20" />
                </div>
                <blockquote class="text-lg italic mb-8">
                  "Jako začínající podnikatel jsem potřeboval někoho, kdo mi pomůže s účetnictvím a zorientovat se v daňových povinnostech. Našel jsem profesionála na svém místě. Vřele doporučuji."
                </blockquote>
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-gray-200 rounded-full mr-4">
                    <img 
                      src="/img/client3.webp" 
                      alt="Marek Dvořák" 
                      class="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 class="font-semibold">Marek Dvořák</h4>
                    <p class="text-sm text-gray-500">Webový vývojář</p>
                  </div>
                </div>
              </div>
    
              <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 w-[350px] shrink-0">
                <div class="flex items-center mb-4">
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star-half" class="text-yellow-400" />
                </div>
                <div class="mb-6">
                  <UIcon name="i-heroicons-quote" class="text-3xl text-primary opacity-20" />
                </div>
                <blockquote class="text-lg italic mb-8">
                  "Oceňuji především rychlou odezvu na všechny mé dotazy a velmi vstřícný přístup při řešení nestandardních situací. Díky profesionálním radám jsem ušetřil na daních."
                </blockquote>
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                    <UIcon name="i-heroicons-user" class="text-gray-400 text-xl" />
                  </div>
                  <div>
                    <h4 class="font-semibold">Martin Horák</h4>
                    <p class="text-sm text-gray-500">Architekt</p>
                  </div>
                </div>
              </div>
    
              <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 w-[350px] shrink-0">
                <div class="flex items-center mb-4">
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                </div>
                <div class="mb-6">
                  <UIcon name="i-heroicons-quote" class="text-3xl text-primary opacity-20" />
                </div>
                <blockquote class="text-lg italic mb-8">
                  "Spolupracuji s paní účetní již třetím rokem a jsem maximálně spokojena. Vždy dodržuje termíny, je pečlivá a její rady mi ušetřily mnoho času i peněz."
                </blockquote>
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                    <UIcon name="i-heroicons-user" class="text-gray-400 text-xl" />
                  </div>
                  <div>
                    <h4 class="font-semibold">Lucie Černá</h4>
                    <p class="text-sm text-gray-500">Copywriterka</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <div class="text-center mt-8">
          <UButton 
            to="/reference" 
            color="primary"
            variant="ghost"
            class="shadow-sm"
          >
            <UIcon name="i-heroicons-chat-bubble-left-right" class="mr-2" />
            Zobrazit všechny reference
          </UButton>
        </div>
      </div>
    </section>
    
    <!-- FAQ sekce -->
    <!-- <section id="faq" class="py-16 md:py-24 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20">
        <div class="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-blue-200/40 filter blur-3xl"></div>
        <div class="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-indigo-200/20 filter blur-3xl"></div>
      </div>
      
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-4">Časté dotazy</span>
          <h2 class="text-2xl md:text-4xl font-bold mb-4">Odpovědi na nejčastější otázky</h2>
          <p class="text-lg max-w-3xl mx-auto text-gray-600">Níže najdete odpovědi na nejčastější otázky ohledně mých služeb. Pokud zde nenajdete odpověď na svůj dotaz, neváhejte mě kontaktovat.</p>
        </div>
        
        <div class="max-w-3xl mx-auto">
          <ClientOnly>
            <UAccordion :items="faqItems" :ui="{ item: { container: 'mb-4 border border-gray-200 rounded-lg' } }" />
            <template #fallback>
              <div class="space-y-4">
                <div class="border border-gray-200 rounded-lg p-4">
                  <div class="font-semibold">Jak často je potřeba se setkávat osobně?</div>
                  <div class="text-gray-600 mt-2">Četnost osobních setkání závisí na vašich preferencích a potřebách. Většinu dokumentů lze předávat elektronicky, přesto doporučuji osobní schůzku alespoň jednou za čtvrtletí pro konzultaci a předání fyzických dokumentů.</div>
                </div>
                <div class="border border-gray-200 rounded-lg p-4">
                  <div class="font-semibold">Jaké doklady od vás potřebuji?</div>
                  <div class="text-gray-600 mt-2">Pro vedení účetnictví jsou potřeba všechny doklady související s vaším podnikáním – faktury vydané i přijaté, pokladní doklady, bankovní výpisy, smlouvy, doklady o majetku apod. Při první konzultaci vám poskytnu podrobný seznam všech potřebných dokladů.</div>
                </div>
              </div>
            </template>
          </ClientOnly>
        </div>
      </div>
    </section> -->
    
    <!-- Kontaktní sekce -->
    <section id="kontakt" class="py-16 md:py-24 bg-primary text-white relative overflow-hidden">
      <!-- Přidané dekorativní prvky -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20">
        <div class="absolute bottom-24 right-24 w-96 h-96 rounded-full bg-white/20 filter blur-3xl"></div>
        <div class="absolute top-1/4 left-1/6 w-64 h-64 rounded-full bg-blue-200/20 filter blur-3xl"></div>
      </div>
      
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
          <!-- Kontaktní údaje -->
          <div class="pr-0 md:pr-8 md:relative">
            <span class="inline-block px-4 py-2 rounded-full bg-white/20 text-white font-medium mb-4">Kontakt</span>
            <h2 class="text-2xl md:text-4xl font-bold mb-6 text-white">Ozvěte se mi</h2>
            <p class="text-lg opacity-90 mb-8">
              Potřebujete pomoci s účetnictvím nebo máte dotaz? Neváhejte mě kontaktovat telefonicky, e-mailem nebo prostřednictvím kontaktního formuláře. Ráda vám odpovím a domluvím nezávaznou konzultaci.
            </p>
            
            <div class="space-y-6 mb-8">
              <div class="flex items-start">
                <div class="w-12 h-12 flex items-center justify-center bg-white/15 rounded-full mr-4 flex-shrink-0">
                  <UIcon name="i-heroicons-phone" class="text-white text-xl" />
                </div>
                <div>
                  <h3 class="font-semibold mb-1 text-white">Telefon</h3>
                  <p class="text-white opacity-80">+420 777 888 999</p>
                  <p class="text-sm text-white opacity-60 mt-1">Dostupná v pracovní dny 9:00 - 17:00</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-12 h-12 flex items-center justify-center bg-white/15 rounded-full mr-4 flex-shrink-0">
                  <UIcon name="i-heroicons-envelope" class="text-white text-xl" />
                </div>
                <div>
                  <h3 class="font-semibold mb-1 text-white">E-mail</h3>
                  <p class="text-white opacity-80">info@ucetni-pro-osvc.cz</p>
                  <p class="text-sm text-white opacity-60 mt-1">Odpovídám do 24 hodin</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-12 h-12 flex items-center justify-center bg-white/15 rounded-full mr-4 flex-shrink-0">
                  <UIcon name="i-heroicons-map-pin" class="text-white text-xl" />
                </div>
                <div>
                  <h3 class="font-semibold mb-1 text-white">Adresa kanceláře</h3>
                  <p class="text-white opacity-80">Účetní ulice 123<br>110 00 Praha 1</p>
                  <p class="text-sm text-white opacity-60 mt-1">Schůzku prosím domluvte předem</p>
                </div>
              </div>
            </div>
            
            <div class="space-x-4">
              <a href="https://www.facebook.com/" target="_blank" class="inline-flex items-center justify-center w-10 h-10 bg-white/15 rounded-full text-white hover:bg-white hover:text-primary transition-colors">
                <UIcon name="i-heroicons-chat-bubble-bottom-center-text" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" class="inline-flex items-center justify-center w-10 h-10 bg-white/15 rounded-full text-white hover:bg-white hover:text-primary transition-colors">
                <UIcon name="i-heroicons-link" />
              </a>
            </div>
            
            <!-- Vertikální oddělovač pro desktop -->
            <div class="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-white/20"></div>
          </div>
          
          <!-- Kontaktní formulář -->
          <div class="mt-12 md:mt-0 md:pl-8">
            <h3 class="text-xl font-bold mb-6 text-white">Kontaktní formulář</h3>
            <form @submit.prevent="submitForm">
              <div class="mb-4">
                <label for="name" class="block text-white text-sm font-medium mb-2">Jméno a příjmení</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  placeholder="Zadejte své jméno" 
                  class="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              
              <div class="mb-4">
                <label for="email" class="block text-white text-sm font-medium mb-2">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  placeholder="vas@email.cz" 
                  class="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              
              <div class="mb-4">
                <label for="phone" class="block text-white text-sm font-medium mb-2">Telefon</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="form.phone" 
                  placeholder="+420 XXX XXX XXX" 
                  class="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              
              <div class="mb-4">
                <label for="message" class="block text-white text-sm font-medium mb-2">Zpráva</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  placeholder="Jak vám mohu pomoci?" 
                  rows="5" 
                  class="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                ></textarea>
              </div>
              
              <div class="flex items-center mb-6">
                <input 
                  type="checkbox" 
                  id="consent" 
                  v-model="form.consent" 
                  class="w-4 h-4 text-primary bg-white/10 border-white/20 rounded focus:ring-white/30"
                />
                <label for="consent" class="ml-2 text-sm text-white/80">
                  Souhlasím se zpracováním osobních údajů pro účel odpovědi na tento formulář.
                </label>
              </div>
              
              <button 
                type="submit" 
                class="w-full py-3 px-6 rounded-lg bg-white text-primary font-medium hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/30 transition-colors flex items-center justify-center"
                :class="{'opacity-75': form.loading}"
                :disabled="form.loading"
              >
                <UIcon v-if="!form.loading" name="i-heroicons-paper-airplane" class="mr-2" />
                <UIcon v-else name="i-heroicons-arrow-path" class="mr-2 animate-spin" />
                {{ form.loading ? 'Odesílám...' : 'Odeslat zprávu' }}
              </button>
              
              <div v-if="form.success" class="mt-4 p-3 bg-green-400/20 text-white border border-green-400/30 rounded-lg">
                Děkuji za vaši zprávu. Ozvu se vám co nejdříve.
              </div>
              
              <div v-if="form.error" class="mt-4 p-3 bg-red-400/20 text-white border border-red-400/30 rounded-lg">
                Při odeslání zprávy nastala chyba. Zkuste to prosím znovu nebo mě kontaktujte přímo e-mailem.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
  consent: false,
  loading: false,
  success: false,
  error: false
});

const submitForm = async () => {
  // Validace
  if (!form.value.name || !form.value.email || !form.value.message || !form.value.consent) {
    form.value.error = true;
    return;
  }
  
  form.value.loading = true;
  form.value.error = false;
  
  // Simulace odeslání formuláře
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  form.value.loading = false;
  form.value.success = true;
  
  // Reset formuláře
  form.value.name = '';
  form.value.email = '';
  form.value.phone = '';
  form.value.message = '';
  form.value.consent = false;
  
  // Reset success zprávy po 5 sekundách
  setTimeout(() => {
    form.value.success = false;
  }, 5000);
};

const faqItems = [
  {
    label: 'Jak často je potřeba se setkávat osobně?',
    content: 'Četnost osobních setkání závisí na vašich preferencích a potřebách. Většinu dokumentů lze předávat elektronicky, přesto doporučuji osobní schůzku alespoň jednou za čtvrtletí pro konzultaci a předání fyzických dokumentů.'
  },
  {
    label: 'Jaké doklady od vás potřebuji?',
    content: 'Pro vedení účetnictví jsou potřeba všechny doklady související s vaším podnikáním – faktury vydané i přijaté, pokladní doklady, bankovní výpisy, smlouvy, doklady o majetku apod. Při první konzultaci vám poskytnu podrobný seznam všech potřebných dokladů.'
  },
  {
    label: 'Jak dlouho dopředu je třeba se ozvat před daňovým přiznáním?',
    content: 'Pro zpracování daňového přiznání doporučuji kontaktovat mě nejpozději 1 měsíc před termínem podání. V případě složitějších přiznání nebo při první spolupráci je vhodné začít ještě dříve, aby byl dostatek času na přípravu všech podkladů a optimalizaci.'
  },
  {
    label: 'Mohu s vámi komunikovat jen online?',
    content: 'Ano, veškerá komunikace může probíhat online. Doklady lze zasílat elektronicky (e-mailem nebo přes sdílené úložiště), konzultace mohou probíhat telefonicky nebo přes videokonferenci (Zoom, Teams). Pro maximální pohodlí se snažím přizpůsobit vašim preferencím.'
  },
  {
    label: 'Kolik stojí vaše služby?',
    content: 'Ceny za služby se odvíjejí od rozsahu spolupráce, množství dokladů a složitosti vašeho účetnictví. Pro orientační cenovou nabídku navštivte sekci Ceník. Pro přesnou kalkulaci mě prosím kontaktujte se specifickými požadavky na vaše účetnictví.'
  }
];

definePageMeta({
  title: 'Účetní služby pro OSVČ | Jana Nováková',
  description: 'Profesionální vedení účetnictví a daňové poradenství pro osoby samostatně výdělečně činné. Kompletní účetní služby pro OSVČ.'
});
</script>

<style scoped>
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