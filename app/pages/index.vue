<template>
  <div>
    <!-- Hero sekce -->
    <section id="home" class="relative h-[80vh] px-20 overflow-hidden bg-gradient-to-br from-white to-white-50">
      <div class="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/5 to-primary-100 -z-10"></div>
      
      <!-- Dekorativní prvky -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-40">
        <div class="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/20 filter blur-3xl"></div>
        <div class="absolute top-1/3 left-10 w-72 h-72 rounded-full bg-indigo-200/30 filter blur-3xl"></div>
        <div class="absolute bottom-24 right-48 w-64 h-64 rounded-full bg-blue-200/40 filter blur-3xl"></div>
      </div>
      
      <div class="container-custom relative z-10 h-full flex flex-col items-center justify-center">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Účetnictví pro OSVČ a firmy v <span class="text-primary">Blansku</span> i celé ČR online
            </h1>
            <p class="text-lg md:text-xl text-gray-700 mb-8">
              Profesionální vedení účetnictví a daňové poradenství pro OSVČ a právnické osoby. Soustřeďte se na své podnikání, o papírování se postarám za vás.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <UButton 
                to="#kontakt" 
                color="primary"
                size="xl"
                class="shadow-md text-white px-3 py-3 rounded-lg
                transition-transform duration-300 ease-in-out hover:-translate-y-1"
              >
                <UIcon name="i-heroicons-envelope" class="mr-2" />
                Nezávazná konzultace
              </UButton>
              <UButton 
                to="/ucetni-sluzby-osvc" 
                variant="outline"
                size="xl"
                class="shadow-md bg-white text-primary px-3 py-3 rounded-lg
                transition-transform duration-300 ease-in-out hover:-translate-y-1"
              >
                <UIcon name="i-heroicons-information-circle" class="mr-2" />
                Nabídka služeb
              </UButton>
            </div>
            
            <!-- Statistiky / Trust badges -->
            <div class="grid grid-cols-3 gap-4 mt-12 max-w-xl">
              <div class="text-center">
                <div class="text-3xl font-bold text-primary mb-1">30+</div>
                <div class="text-sm text-gray-600">Let zkušeností</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-primary mb-1">150+</div>
                <div class="text-sm text-gray-600">Spokojených klientů</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-primary mb-1">10 000+</div>
                <div class="text-sm text-gray-600">Zaúčtovaných dokladů</div>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <img 
              src="/img/hero-image.webp" 
              alt="Účetnictví pro OSVČ a firmy v Blansku i online" 
              class="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
      
    </section>

    <!-- Přehled služeb -->
    <section id="sluzby" class="py-16 md:py-24 relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30">
        <div class="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary/10 filter blur-3xl"></div>
        <div class="absolute top-1/4 right-10 w-72 h-72 rounded-full bg-indigo-200/30 filter blur-3xl"></div>
      </div>
      
      <div class="container-custom">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-4">Služby</span>
          <h2 class="text-2xl md:text-4xl font-bold mb-4">Jak vám mohu pomoci?</h2>
          <p class="text-lg max-w-3xl mx-auto text-gray-600">Poskytnuji komplexní služby vedení účetnictví a daňové evidence pro OSVĆ a právnické osoby.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ClientOnly>
            <div class="bg-white rounded-xl shadow-md border border-gray-100 p-8 hover:shadow-lg transition-shadow">
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
                  <span class="text-gray-600">Zpracování mzdové a personání agendy</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span class="text-gray-600">Finanční výkazy a reporty</span>
                </li>
              </ul>
              <UButton 
                to="/ucetni-sluzby-osvc#ucetnictvi" 
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
                  to="/ucetni-sluzby-osvc#ucetnictvi" 
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
            <div class="bg-white rounded-xl shadow-md border border-gray-100 p-8 hover:shadow-lg transition-shadow">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                <UIcon name="i-heroicons-building-office-2" class="text-primary text-3xl" />
              </div>
              <h3 class="text-xl font-bold mb-4">Zastupování na úřadech</h3>
              <p class="text-gray-600 mb-6">Zajišťuji styk s veškerými úřady a institucemi spojenými s vaším podnikáním.</p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span class="text-gray-600">Finanční úřad</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span class="text-gray-600">Správa sociálního zabezpečení</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check" class="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span class="text-gray-600">Zdravotní pojišťovna</span>
                </li>
              </ul>
              <UButton 
                to="/ucetni-sluzby-osvc#zastupovani" 
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
                  <UIcon name="i-heroicons-building-office-2" class="text-primary text-3xl" />
                </div>
                <h3 class="text-xl font-bold mb-4">Zastupování na úřadech</h3>
                <p class="text-gray-600 mb-6">Zajišťuji styk s veškerými úřady a institucemi spojenými s vaším podnikáním.</p>
                <UButton 
                  to="/ucetni-sluzby-osvc#zastupovani" 
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
            <div class="bg-white rounded-xl shadow-md border border-gray-100 p-8 hover:shadow-lg transition-shadow">
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
                to="/ucetni-sluzby-osvc#poradenstvi" 
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
                  to="/ucetni-sluzby-osvc#poradenstvi" 
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
            to="/ucetni-sluzby-osvc" 
            color="primary"
            size="lg"
            class="shadow-md text-white transition-transform duration-300 ease-in-out hover:-translate-y-1"
          >
            <UIcon name="i-heroicons-information-circle" class="mr-2" />
            Více informací
          </UButton>
        </div>
      </div>
    </section>
    
    <!-- O mně sekce -->
    <section id="o-mne" class="py-16 md:py-24 bg-gradient-to-br from-primary-200 to-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <ClientOnly>
            <div class="relative md:col-span-2">
              <div class="absolute -z-10 w-full h-full -top-4 -right-4 bg-primary/10 rounded-xl"></div>
              <img
                src="/img/accountant-portrait.webp"
                alt="Martina Navrátilová - Účetní pro OSVČ a firmy"
                class="rounded-xl shadow-lg z-10 relative"
                width="400"
              />
            </div>
            <template #fallback>
              <div class="relative">
                <div class="absolute -z-10 w-full h-full -top-4 -right-4 bg-primary/10 rounded-xl"></div>
                <img
                  src="/img/accountant-portrait.webp"
                  alt="Martina Navrátilová - Účetní pro OSVČ a firmy"
                  class="rounded-xl shadow-lg z-10 relative"
                  width="600"
                  height="400"
                />
              </div>
            </template>
          </ClientOnly>
          
          <div class="md:col-span-3">
            <span class="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-4">O mně</span>
            <h2 class="text-2xl md:text-4xl font-bold mb-6">Proč se mnou spolupracovat?</h2>
            <p class="text-lg text-gray-700 mb-6">
              Jmenuji se Martina Navrátilová a již více než 30 let pomáhám podnikatelům, OSVČ a právnickým osobám s vedením účetnictví a daňovou evidencí. Mám bohaté zkušenosti z různých oborů podnikání, od řemeslníků přes IT profesionály až po umělce na volné noze.
            </p>
            
            <div class="space-y-4 mb-8">
              <div class="flex items-start">
                <UIcon name="i-heroicons-briefcase" class="text-primary text-xl mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold mb-1">Bohaté zkušenosti</h4>
                  <p class="text-gray-600">Více než 30 let praxe v účetnictví pro OSVČ a právnické osoby v různých odvětvích.</p>
                </div>
              </div>

              <div class="flex items-start">
                <UIcon name="i-heroicons-academic-cap" class="text-primary text-xl mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold mb-1">Kvalifikace</h4>
                  <p class="text-gray-600">Vzdělání v oboru účetnictví a daně, pravidelná školení a certifikace.</p>
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
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <UButton 
                to="/ucetni-sluzby-osvc" 
                color="primary"
                class="text-white transition-transform duration-300 ease-in-out hover:-translate-y-1"
              >
                <UIcon name="i-heroicons-document-text" class="mr-2" />
                Moje služby
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
          <p class="text-lg max-w-3xl mx-auto text-gray-600">Přečtěte si zkušenosti a názory klientů, kteří využívají mé účetní služby.</p>
        </div>
        
        <!-- Featured testimonial -->
        <div class="overflow-hidden mb-16 ring-1 ring-gray-200 shadow-lg rounded-xl bg-gradient-to-br from-white to-primary/5">
          <div class="grid grid-cols-1 md:grid-cols-2 md:h-[350px]">
            <!-- Fotografie klienta -->
            <div class="h-80 md:h-full relative overflow-hidden">
              <img 
                :src="featuredTestimonial.avatar" 
                :alt="`${featuredTestimonial.name} - spokojený klient`" 
                class="w-full h-full object-cover featured-testimonial-img"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 md:pb-8 lg:pb-10">
                <div class="text-white">
                  <h3 class="font-bold text-xl mb-1">{{ featuredTestimonial.name }}</h3>
                  <p class="text-white/90 text-sm">{{ featuredTestimonial.role }}</p>
                </div>
              </div>
            </div>
            <!-- Obsah reference -->
            <div class="p-8 md:p-10 md:pt-0 lg:pt-10 flex flex-col justify-center from-primary-50 to-white">
              <div class="mb-6">
                <UIcon name="i-heroicons-chat-bubble-left-quote" class="text-5xl text-primary/20" />
              </div>
              <blockquote class="text-lg md:text-md lg:text-xl font-light leading-relaxed mb-8 text-gray-700">
                "{{ featuredTestimonial.quote }}"
              </blockquote>
              <div class="flex items-center space-x-1">
                <UIcon 
                  v-for="i in featuredTestimonial.rating" 
                  :key="i" 
                  name="i-heroicons-star-solid" 
                  class="text-yellow-400 w-5 h-5" 
                />
                <span class="ml-2 text-sm text-gray-600" v-if="featuredTestimonial.yearStarted">
                  Spolupracujeme od roku {{ featuredTestimonial.yearStarted }}
                </span>
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
              <UiTestimonialCard
                v-for="(testimonial, index) in testimonials"
                :key="`testimonial-${index}`"
                :name="testimonial.name"
                :role="testimonial.role"
                :quote="testimonial.quote"
                :rating="testimonial.rating"
                :avatar="testimonial.avatar"
              />
            </div>
            
            <!-- Duplicate for infinite scrolling effect -->
            <div class="testimonial-slide flex gap-8 mx-4">
              <UiTestimonialCard
                v-for="(testimonial, index) in testimonials"
                :key="`testimonial-duplicate-${index}`"
                :name="testimonial.name"
                :role="testimonial.role"
                :quote="testimonial.quote"
                :rating="testimonial.rating"
                :avatar="testimonial.avatar"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-8">
        <UButton 
          to="/reference-klientu" 
          color="primary" 
          size="lg" 
          class="shadow-md text-white transition-transform duration-300 ease-in-out hover:-translate-y-1"
        >
          <UIcon name="i-heroicons-users" class="mr-2" />
          Všechny reference
        </UButton>
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
              <div class="flex items-start items-center">
                <div class="w-12 h-12 flex items-center justify-center bg-white/15 rounded-full mr-4 flex-shrink-0">
                  <UIcon name="i-heroicons-phone" class="text-white text-xl" />
                </div>
                <div>
                  <h3 class="font-semibold mb-1 text-white">Telefon</h3>
                  <p class="text-white opacity-80">+420 774 069 617</p>
                  <p class="text-sm text-white opacity-60 mt-1">Dostupná v pracovní dny 9:00 - 17:00</p>
                </div>
              </div>
              
              <div class="flex items-start items-center">
                <div class="w-12 h-12 flex items-center justify-center bg-white/15 rounded-full mr-4 flex-shrink-0">
                  <UIcon name="i-heroicons-envelope" class="text-white text-xl" />
                </div>
                <div>
                  <h3 class="font-semibold mb-1 text-white">E-mail</h3>
                  <p class="text-white opacity-80">Navratilova@ucetni-blansko.cz</p>
                  <p class="text-sm text-white opacity-60 mt-1">Odpovídám do 24 hodin</p>
                </div>
              </div>
              
              <div class="flex items-start items-center">
                <div class="w-12 h-12 flex items-center justify-center bg-white/15 rounded-full mr-4 flex-shrink-0">
                  <UIcon name="i-heroicons-map-pin" class="text-white text-xl" />
                </div>
                <div>
                  <h3 class="font-semibold mb-1 text-white">Adresa kanceláře</h3>
                  <p class="text-white opacity-80">Okružní 17<br>678 01 Blansko</p>
                  <p class="text-sm text-white opacity-60 mt-1">Schůzku prosím domluvte předem</p>
                </div>
              </div>
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
import { ref } from 'vue'

useSeoMeta({
  title: 'Účetnictví pro OSVČ a firmy Blansko a online | Martina Navrátilová',
  description: 'Hledáte spolehlivé účetnictví pro OSVČ nebo právnické osoby v Blansku nebo online? Nabízím kompletní vedení účetnictví, daňovou evidenci a odborné poradenství. Zajistěte si klid a ušetřete čas.',
  ogTitle: 'Účetnictví pro OSVČ a firmy Blansko a online | Martina Navrátilová',
  ogDescription: 'Hledáte spolehlivé účetnictví pro OSVČ nebo právnické osoby v Blansku nebo online? Nabízím kompletní vedení účetnictví, daňovou evidenci a odborné poradenství. Zajistěte si klid a ušetřete čas.',
  ogImage: 'https://ucetni-blansko.cz/img/og-image.webp',
  ogUrl: 'https://ucetni-blansko.cz',
  canonical: 'https://ucetni-blansko.cz',
})

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
    content: 'Ceny za služby se odvíjejí od rozsahu spolupráce, množství dokladů a složitosti vašeho účetnictví. Pro přesnou kalkulaci mě prosím kontaktujte se specifickými požadavky na vaše účetnictví.'
  }
];

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify([
        {
          '@context': 'https://schema.org',
          '@type': 'AccountingService',
          'name': 'Účetnictví pro OSVČ a firmy - Martina Navrátilová',
          'description': 'Profesionální účetní služby pro OSVČ a právnické osoby v Blansku a celé ČR. Nabízím vedení účetnictví, daňovou evidenci a odborné poradenství.',
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'Martina Navrátilová',
            'image': '/img/accountant-portrait.webp',
            'telephone': '+420 774 069 617',
            'email': 'Navratilova@ucetni-blansko.cz',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': 'Okružní 17',
              'addressLocality': 'Blansko',
              'postalCode': '678 01',
              'addressCountry': 'CZ'
            },
            'geo': {
              '@type': 'GeoCoordinates',
              'latitude': '49.3744558',
              'longitude': '16.653352'
            },
            'openingHoursSpecification': [
              {
                '@type': 'OpeningHoursSpecification',
                'dayOfWeek': [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday'
                ],
                'opens': '09:00',
                'closes': '17:00'
              }
            ],
            'areaServed': {
              '@type': 'Country',
              'name': 'Czech Republic'
            }
          },
          'serviceType': [
            'Vedení účetnictví',
            'Daňová evidence',
            'Daňové poradenství',
            'Mzdové účetnictví',
            'Zastupování na úřadech'
          ]
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': faqItems.map(item => ({
            '@type': 'Question',
            'name': item.label,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': item.content
            }
          }))
        }
      ])
    }
  ]
})

const featuredTestimonial = {
  name: 'Yasmin May',
  role: 'Podnikatelka v oblasti sociálních sítí',
  quote: 'Spolupráce s paní Navrátilovou je naprosto bezproblémová. Oceňuji její profesionalitu, odbornost a rychlou komunikaci. Díky jejím radám jsem optimalizovala své daňové povinnosti a ušetřila nejen čas, ale i značné peníze. Můžu se konečně plně věnovat svému podnikání a hodit starosti s účetnictvím za hlavu.',
  rating: 5,
  avatar: '/img/yasmin-may.webp',
  yearStarted: '2022'
}

const testimonials = [
  {
    name: 'Peter Kolínek',
    role: 'Řemeslník',
    quote: 'Přechod od předchozí účetní byl hladký a bezproblémový. Oceňuji profesionální a vstřícný přístup, přehledné výkazy a pravidelné konzultace. Díky paní Navrátilové mám konečně přehled o svých financích a můžu se plně soustředit na svou práci.',
    rating: 5,
    avatar: '/img/peter-kolinek.webp'
  },
  {
    name: 'Marek Dvořák',
    role: 'Webový vývojář',
    quote: 'Jako začínající podnikatel jsem potřeboval někoho, kdo mi pomůže zorientovat se v účetnictví a daňových povinnostech. Paní Navrátilová mi vše trpělivě vysvětlila a nastavila systém, který mi perfektně vyhovuje. Výborná volba pro každého OSVČ!',
    rating: 5,
    avatar: '/img/face1.webp'
  },
  {
    name: 'Martin Horák',
    role: 'Architekt',
    quote: 'Oceňuji především rychlou odezvu na všechny mé dotazy a velmi vstřícný přístup při řešení nestandardních situací. Díky profesionálním radám a daňové optimalizaci jsem ušetřil nemalé prostředky, které mohu investovat zpět do svého podnikání.',
    rating: 5,
    avatar: '/img/face3.webp'

  },
  {
    name: 'Lucie Černá',
    role: 'Copywriterka & obsahová stratégka',
    quote: 'Spolupracuji s paní Navrátilovou již třetím rokem a jsem maximálně spokojená. Vždy dodržuje termíny, je nesmírně pečlivá a její rady mi ušetřily mnoho času i peněz. Účetnictví už pro mě není stres, ale hladce fungující zázemí.',
    rating: 5,
    avatar: '/img/face6.webp'
  },
  {
    name: 'David Svoboda',
    role: 'Fotograf',
    quote: 'Paní Navrátilová mi pomohla s digitalizací účetnictví a teď mám v dokladech naprostý pořádek. Oceňuji přechod na přehledný systém, který mi šetří spoustu času. Konečně se můžu naplno věnovat kreativní práci místo administrativy.',    rating: 5,
    avatar: '/img/face4.webp'
  },
  {
    name: 'Eva Vlčková',
    role: 'Marketingová konzultantka',
    quote: 'Oceňuji proaktivní přístup paní Navrátilové a její hluboké znalosti daňové problematiky. Pomohla mi nejen optimalizovat daně, ale také nastavit efektivní cash flow. Je pro mě spolehlivým partnerem v růstu mého podnikání.',    rating: 5,
    avatar: '/img/face2.webp'
  }
]

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
  
  try {
    // Reálné odeslání formuláře na server
    const { data, error } = await useFetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.value.name,
        email: form.value.email,
        phone: form.value.phone,
        message: form.value.message
      }
    });
    
    // Zpracování odpovědi
    if (error.value) {
      throw new Error('Došlo k chybě při odesílání zprávy');
    }
    
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
  } catch (error) {
    console.error('Chyba při odesílání formuláře:', error);
    form.value.error = true;
  } finally {
    form.value.loading = false;
  }
};

const activeTab = ref('ucetnictvi');
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

.featured-testimonial-img {
  object-position: left -10px;
}

@media (min-width: 500px) {
  .featured-testimonial-img {
    object-position: left -65px;
  }
}

@media (min-width: 768px) {
  .featured-testimonial-img {
    object-position: left -15px;
  }
}

@media (min-width: 1024px) {
  .featured-testimonial-img {
    object-position: left -60px;
  }
}
</style>