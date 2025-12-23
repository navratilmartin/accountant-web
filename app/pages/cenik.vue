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
          <span class="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-4">Ceník služeb</span>
          <h1 class="text-3xl md:text-5xl font-bold mb-6">Transparentní cenová nabídka</h1>
          <p class="text-lg text-gray-700">Přehledný ceník účetních služeb pro OSVČ. Individuální přístup a konkurenceschopné ceny s ohledem na rozsah vašeho podnikání.</p>
        </div>
      </div>
    </section>

    <!-- Hlavní sekce ceníku -->
    <section class="py-16">
      <div class="container-custom">
        <!-- Přepínání mezi typy služeb -->
        <div class="mb-12">
          <div class="flex flex-wrap justify-center gap-2 mb-8">
            <UButton
              color="primary"
              variant="soft"
              size="lg"
              class="min-w-32"
              @click="activeTab = 'ucetnictvi'"
              :class="{ '!bg-primary !text-white': activeTab === 'ucetnictvi' }"
            >
              <UIcon name="i-heroicons-calculator" class="mr-2" />
              Vedení účetnictví
            </UButton>
            <UButton
              color="primary"
              variant="soft"
              size="lg"
              class="min-w-32"
              @click="activeTab = 'dane'"
              :class="{ '!bg-primary !text-white': activeTab === 'dane' }"
            >
              <UIcon name="i-heroicons-document-text" class="mr-2" />
              Daňová přiznání
            </UButton>
            <UButton
              color="primary"
              variant="soft"
              size="lg"
              class="min-w-32"
              @click="activeTab = 'poradenstvi'"
              :class="{ '!bg-primary !text-white': activeTab === 'poradenstvi' }"
            >
              <UIcon name="i-heroicons-light-bulb" class="mr-2" />
              Poradenství
            </UButton>
          </div>
        </div>
        
        <!-- Ceník vedení účetnictví -->
        <div v-show="activeTab === 'ucetnictvi'" class="transition-opacity duration-300">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <!-- Základní balíček -->
            <ClientOnly>
              <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden" v-motion-slide-visible-once-bottom>
                <div class="p-6 border-b border-gray-100">
                  <h3 class="text-xl font-bold text-center mb-1">Základní</h3>
                  <p class="text-gray-500 text-center mb-6">Pro začínající OSVČ</p>
                  <div class="text-center mb-4">
                    <span class="text-4xl font-bold">1 500 Kč</span>
                    <span class="text-gray-500">/měsíc</span>
                  </div>
                  <p class="text-center text-sm text-gray-500">+ DPH</p>
                </div>
                <div class="p-6">
                  <ul class="space-y-3">
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Vedení daňové evidence</span>
                    </li>
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Zpracování do 100 dokladů měsíčně</span>
                    </li>
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Základní reporting</span>
                    </li>
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Elektronická komunikace</span>
                    </li>
                    <li class="flex items-start text-gray-400">
                      <UIcon name="i-heroicons-x-circle" class="text-gray-400 mt-1 mr-2 flex-shrink-0" />
                      <span>Přiznání k DPH</span>
                    </li>
                    <li class="flex items-start text-gray-400">
                      <UIcon name="i-heroicons-x-circle" class="text-gray-400 mt-1 mr-2 flex-shrink-0" />
                      <span>Osobní konzultace</span>
                    </li>
                  </ul>
                  <div class="mt-8">
                    <UButton 
                      to="/kontakt"
                      color="primary"
                      block
                    >
                      Nezávazná poptávka
                    </UButton>
                  </div>
                </div>
              </div>
              <template #fallback>
                <!-- Fallback obsah -->
                <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                  <div class="p-6 border-b border-gray-100">
                    <h3 class="text-xl font-bold text-center mb-1">Základní</h3>
                    <p class="text-gray-500 text-center mb-6">Pro začínající OSVČ</p>
                    <div class="text-center mb-4">
                      <span class="text-4xl font-bold">1 500 Kč</span>
                      <span class="text-gray-500">/měsíc</span>
                    </div>
                    <p class="text-center text-sm text-gray-500">+ DPH</p>
                  </div>
                  <div class="p-6">
                    <!-- Fallback obsah -->
                  </div>
                </div>
              </template>
            </ClientOnly>

            <!-- Standardní balíček -->
            <ClientOnly>
              <div class="bg-white rounded-xl shadow-lg border-2 border-primary overflow-hidden relative transform md:-translate-y-4" v-motion-slide-visible-once-bottom>
                <div class="absolute top-0 right-0 left-0 h-1 bg-primary"></div>
                <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-bold py-1 px-3 rounded-full">
                  Nejpopulárnější
                </div>
                <div class="p-6 border-b border-gray-100">
                  <h3 class="text-xl font-bold text-center mb-1">Standard</h3>
                  <p class="text-gray-500 text-center mb-6">Pro aktivní OSVČ</p>
                  <div class="text-center mb-4">
                    <span class="text-4xl font-bold">2 500 Kč</span>
                    <span class="text-gray-500">/měsíc</span>
                  </div>
                  <p class="text-center text-sm text-gray-500">+ DPH</p>
                </div>
                <div class="p-6">
                  <ul class="space-y-3">
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Vedení daňové evidence nebo účetnictví</span>
                    </li>
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Zpracování do 300 dokladů měsíčně</span>
                    </li>
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Přiznání k DPH, kontrolní hlášení</span>
                    </li>
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Detailní měsíční reporting</span>
                    </li>
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>2 hod. osobní konzultace měsíčně</span>
                    </li>
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Telefonická podpora</span>
                    </li>
                  </ul>
                  <div class="mt-8">
                    <UButton 
                      to="/kontakt"
                      color="primary"
                      block
                    >
                      Nezávazná poptávka
                    </UButton>
                  </div>
                </div>
              </div>
              <template #fallback>
                <!-- Fallback obsah -->
                <div class="bg-white rounded-xl shadow-lg border-2 border-primary overflow-hidden relative">
                  <div class="absolute top-0 right-0 left-0 h-1 bg-primary"></div>
                  <div class="p-6 border-b border-gray-100">
                    <h3 class="text-xl font-bold text-center mb-1">Standard</h3>
                    <p class="text-gray-500 text-center mb-6">Pro aktivní OSVČ</p>
                    <div class="text-center mb-4">
                      <span class="text-4xl font-bold">2 500 Kč</span>
                      <span class="text-gray-500">/měsíc</span>
                    </div>
                    <p class="text-center text-sm text-gray-500">+ DPH</p>
                  </div>
                  <div class="p-6">
                    <!-- Fallback obsah -->
                  </div>
                </div>
              </template>
            </ClientOnly>

            <!-- Premium balíček -->
            <ClientOnly>
              <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden" v-motion-slide-visible-once-bottom>
                <div class="p-6 border-b border-gray-100">
                  <h3 class="text-xl font-bold text-center mb-1">Premium</h3>
                  <p class="text-gray-500 text-center mb-6">Pro náročné podnikatele</p>
                  <div class="text-center mb-4">
                    <span class="text-4xl font-bold">4 000 Kč</span>
                    <span class="text-gray-500">/měsíc</span>
                  </div>
                  <p class="text-center text-sm text-gray-500">+ DPH</p>
                </div>
                <div class="p-6">
                  <ul class="space-y-3">
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Kompletní vedení účetnictví</span>
                    </li>
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Zpracování neomezeného počtu dokladů</span>
                    </li>
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Veškerá daňová přiznání</span>
                    </li>
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Pokročilé analýzy a reporty</span>
                    </li>
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Neomezené konzultace</span>
                    </li>
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Daňová optimalizace</span>
                    </li>
                  </ul>
                  <div class="mt-8">
                    <UButton 
                      to="/kontakt"
                      color="primary"
                      block
                    >
                      Nezávazná poptávka
                    </UButton>
                  </div>
                </div>
              </div>
              <template #fallback>
                <!-- Fallback obsah -->
                <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                  <div class="p-6 border-b border-gray-100">
                    <h3 class="text-xl font-bold text-center mb-1">Premium</h3>
                    <p class="text-gray-500 text-center mb-6">Pro náročné podnikatele</p>
                    <div class="text-center mb-4">
                      <span class="text-4xl font-bold">4 000 Kč</span>
                      <span class="text-gray-500">/měsíc</span>
                    </div>
                    <p class="text-center text-sm text-gray-500">+ DPH</p>
                  </div>
                  <div class="p-6">
                    <!-- Fallback obsah -->
                  </div>
                </div>
              </template>
            </ClientOnly>
          </div>

          <!-- Poznámka k ceníku účetnictví -->
          <div class="bg-blue-50 rounded-lg p-6 mb-12">
            <div class="flex items-start">
              <UIcon name="i-heroicons-information-circle" class="text-blue-600 text-xl mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 class="font-semibold mb-2 text-blue-800">Poznámka k ceníku služeb vedení účetnictví</h3>
                <p class="text-blue-700">Uvedené ceny jsou orientační a mohou se lišit v závislosti na konkrétním objemu dokladů, složitosti vašeho účetnictví a dalších faktorech. Pro přesnou cenovou kalkulaci mě neváhejte kontaktovat.</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Ceník daňových přiznání -->
        <div v-show="activeTab === 'dane'" class="transition-opacity duration-300">
          <!-- Tabulka s ceníkem daňových přiznání -->
          <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden mb-12">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-6 text-center">Ceník zpracování daňových přiznání</h3>
              <div class="overflow-x-auto">
                <table class="w-full">
                  <thead>
                    <tr class="border-b border-gray-200">
                      <th class="py-4 px-6 text-left font-semibold">Typ přiznání</th>
                      <th class="py-4 px-6 text-right font-semibold">Cena od</th>
                      <th class="py-4 px-6 text-right font-semibold">Cena do</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-gray-200">
                      <td class="py-4 px-6">
                        <span class="font-medium">Daň z příjmu fyzických osob</span>
                        <p class="text-sm text-gray-500 mt-1">Pro neplátce DPH (paušální výdaje)</p>
                      </td>
                      <td class="py-4 px-6 text-right">1 500 Kč</td>
                      <td class="py-4 px-6 text-right">3 000 Kč</td>
                    </tr>
                    <tr class="border-b border-gray-200">
                      <td class="py-4 px-6">
                        <span class="font-medium">Daň z příjmu fyzických osob</span>
                        <p class="text-sm text-gray-500 mt-1">Pro plátce DPH (skutečné výdaje)</p>
                      </td>
                      <td class="py-4 px-6 text-right">2 500 Kč</td>
                      <td class="py-4 px-6 text-right">5 000 Kč</td>
                    </tr>
                    <tr class="border-b border-gray-200">
                      <td class="py-4 px-6">
                        <span class="font-medium">Přiznání k DPH</span>
                        <p class="text-sm text-gray-500 mt-1">Měsíční nebo čtvrtletní</p>
                      </td>
                      <td class="py-4 px-6 text-right">500 Kč</td>
                      <td class="py-4 px-6 text-right">1 000 Kč</td>
                    </tr>
                    <tr class="border-b border-gray-200">
                      <td class="py-4 px-6">
                        <span class="font-medium">Kontrolní hlášení k DPH</span>
                      </td>
                      <td class="py-4 px-6 text-right">300 Kč</td>
                      <td class="py-4 px-6 text-right">800 Kč</td>
                    </tr>
                    <tr class="border-b border-gray-200">
                      <td class="py-4 px-6">
                        <span class="font-medium">Silniční daň</span>
                      </td>
                      <td class="py-4 px-6 text-right">500 Kč</td>
                      <td class="py-4 px-6 text-right">1 000 Kč</td>
                    </tr>
                    <tr>
                      <td class="py-4 px-6">
                        <span class="font-medium">Přehledy OSVČ pro ČSSZ a ZP</span>
                      </td>
                      <td class="py-4 px-6 text-right">500 Kč</td>
                      <td class="py-4 px-6 text-right">800 Kč</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Poznámka k ceníku daňových přiznání -->
          <div class="bg-blue-50 rounded-lg p-6 mb-12">
            <div class="flex items-start">
              <UIcon name="i-heroicons-information-circle" class="text-blue-600 text-xl mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 class="font-semibold mb-2 text-blue-800">Poznámka k ceníku daňových přiznání</h3>
                <p class="text-blue-700">Konečná cena se odvíjí od množství dokladů, složitosti případu a časové náročnosti. V případě pravidelné spolupráce při vedení účetnictví je možné dohodnout zvýhodněné ceny za zpracování daňových přiznání.</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Ceník poradenství -->
        <div v-show="activeTab === 'poradenstvi'" class="transition-opacity duration-300">
          <!-- Poradenské služby s hodinovými sazbami -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <ClientOnly>
              <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden" v-motion-slide-visible-once-bottom>
                <div class="p-6 border-b border-gray-100">
                  <div class="flex items-center justify-center mb-4">
                    <UIcon name="i-heroicons-user" class="text-primary text-3xl" />
                  </div>
                  <h3 class="text-xl font-bold text-center mb-1">Osobní konzultace</h3>
                  <p class="text-gray-500 text-center mb-6">V kanceláři nebo online</p>
                  <div class="text-center mb-4">
                    <span class="text-4xl font-bold">800 Kč</span>
                    <span class="text-gray-500">/hodina</span>
                  </div>
                  <p class="text-center text-sm text-gray-500">+ DPH</p>
                </div>
                <div class="p-6">
                  <ul class="space-y-3">
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Individuální konzultace dle vašich potřeb</span>
                    </li>
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Analýza dokumentů a účetních postupů</span>
                    </li>
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Připravená písemná doporučení</span>
                    </li>
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Osobně nebo online přes Zoom/Teams</span>
                    </li>
                  </ul>
                  <div class="mt-8">
                    <UButton 
                      to="/kontakt"
                      color="primary"
                      block
                    >
                      Sjednat konzultaci
                    </UButton>
                  </div>
                </div>
              </div>
              <template #fallback>
                <!-- Fallback obsah -->
                <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                  <div class="p-6 border-b border-gray-100">
                    <h3 class="text-xl font-bold text-center mb-1">Osobní konzultace</h3>
                    <p class="text-gray-500 text-center mb-6">V kanceláři nebo online</p>
                    <div class="text-center mb-4">
                      <span class="text-4xl font-bold">800 Kč</span>
                      <span class="text-gray-500">/hodina</span>
                    </div>
                    <p class="text-center text-sm text-gray-500">+ DPH</p>
                  </div>
                  <div class="p-6">
                    <!-- Fallback obsah -->
                  </div>
                </div>
              </template>
            </ClientOnly>
            
            <ClientOnly>
              <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden" v-motion-slide-visible-once-bottom>
                <div class="p-6 border-b border-gray-100">
                  <div class="flex items-center justify-center mb-4">
                    <UIcon name="i-heroicons-document-check" class="text-primary text-3xl" />
                  </div>
                  <h3 class="text-xl font-bold text-center mb-1">Daňová optimalizace</h3>
                  <p class="text-gray-500 text-center mb-6">Komplexní řešení</p>
                  <div class="text-center mb-4">
                    <span class="text-4xl font-bold">5 000 Kč</span>
                    <span class="text-gray-500">/projekt</span>
                  </div>
                  <p class="text-center text-sm text-gray-500">+ DPH</p>
                </div>
                <div class="p-6">
                  <ul class="space-y-3">
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Analýza současného stavu</span>
                    </li>
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Návrh daňové optimalizace</span>
                    </li>
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Implementace doporučených kroků</span>
                    </li>
                    <li class="flex items-start">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Závěrečná zpráva s doporučeními</span>
                    </li>
                  </ul>
                  <div class="mt-8">
                    <UButton 
                      to="/kontakt"
                      color="primary"
                      block
                    >
                      Nezávazná poptávka
                    </UButton>
                  </div>
                </div>
              </div>
              <template #fallback>
                <!-- Fallback obsah -->
                <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                  <div class="p-6 border-b border-gray-100">
                    <h3 class="text-xl font-bold text-center mb-1">Daňová optimalizace</h3>
                    <p class="text-gray-500 text-center mb-6">Komplexní řešení</p>
                    <div class="text-center mb-4">
                      <span class="text-4xl font-bold">5 000 Kč</span>
                      <span class="text-gray-500">/projekt</span>
                    </div>
                    <p class="text-center text-sm text-gray-500">+ DPH</p>
                  </div>
                  <div class="p-6">
                    <!-- Fallback obsah -->
                  </div>
                </div>
              </template>
            </ClientOnly>
          </div>
          
          <!-- Další poradenské služby -->
          <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden mb-12">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-6 text-center">Další poradenské služby</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-4 border border-gray-100 rounded-lg">
                  <h4 class="font-semibold mb-2 flex items-center">
                    <UIcon name="i-heroicons-briefcase" class="text-primary mr-2" />
                    Založení podnikání
                  </h4>
                  <p class="text-gray-600 mb-4">Kompletní servis při zahájení podnikání, včetně registrací na úřadech.</p>
                  <p class="font-medium">Od 3 000 Kč + DPH</p>
                </div>
                <div class="p-4 border border-gray-100 rounded-lg">
                  <h4 class="font-semibold mb-2 flex items-center">
                    <UIcon name="i-heroicons-document-chart-bar" class="text-primary mr-2" />
                    Finanční analýza
                  </h4>
                  <p class="text-gray-600 mb-4">Podrobná analýza finančního stavu vaší firmy s doporučeními.</p>
                  <p class="font-medium">Od 4 000 Kč + DPH</p>
                </div>
                <div class="p-4 border border-gray-100 rounded-lg">
                  <h4 class="font-semibold mb-2 flex items-center">
                    <UIcon name="i-heroicons-academic-cap" class="text-primary mr-2" />
                    Školení a workshopy
                  </h4>
                  <p class="text-gray-600 mb-4">Individuální nebo skupinová školení na míru vašim potřebám.</p>
                  <p class="font-medium">Od 1 500 Kč/hod. + DPH</p>
                </div>
                <div class="p-4 border border-gray-100 rounded-lg">
                  <h4 class="font-semibold mb-2 flex items-center">
                    <UIcon name="i-heroicons-user-group" class="text-primary mr-2" />
                    Zastupování na úřadech
                  </h4>
                  <p class="text-gray-600 mb-4">Jednání s finančním úřadem a dalšími institucemi ve vašem zastoupení.</p>
                  <p class="font-medium">Od 1 000 Kč/hod. + DPH</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Poznámka k ceníku poradenství -->
          <div class="bg-blue-50 rounded-lg p-6 mb-12">
            <div class="flex items-start">
              <UIcon name="i-heroicons-information-circle" class="text-blue-600 text-xl mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 class="font-semibold mb-2 text-blue-800">Poznámka k ceníku poradenských služeb</h3>
                <p class="text-blue-700">Uvedené ceny jsou orientační. Pro klienty s pravidelnou spoluprací nabízím zvýhodněné sazby za poradenské služby. Konečná cena závisí na rozsahu a komplexnosti poskytovaných služeb.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA sekce -->
    <section class="py-16 bg-primary-50">
      <div class="container-custom">
        <div class="bg-white rounded-xl shadow-lg border border-gray-100 p-8 md:p-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 class="text-2xl md:text-3xl font-bold mb-4">Potřebujete individuální řešení?</h2>
              <p class="text-gray-600 mb-6">Každé podnikání je jedinečné a může vyžadovat speciální přístup. Kontaktujte mě pro vytvoření nabídky na míru přesně podle vašich potřeb.</p>
              <UButton 
                to="/kontakt" 
                color="primary"
                size="lg"
                class="shadow-md"
              >
                <UIcon name="i-heroicons-envelope" class="mr-2" />
                Nezávazná konzultace
              </UButton>
            </div>
            <div class="flex justify-center">
              <UImage
                src="/img/custom-solution.webp"
                alt="Individuální řešení"
                class="rounded-xl"
                width="400"
                height="300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref('ucetnictvi');

definePageMeta({
  title: 'Ceník účetních služeb | Účetní služby pro OSVČ',
  description: 'Přehledný ceník účetních služeb pro OSVČ. Vedení účetnictví, daňová přiznání a poradenství za transparentní ceny.'
});
</script>

<style scoped>
.text-primary {
  color: var(--primary-color);
}
.bg-primary {
  background-color: var(--primary-color);
}
.bg-primary-50 {
  background-color: #f0f5ff;
}
.border-primary {
  border-color: var(--primary-color);
}
.min-w-32 {
  min-width: 8rem;
}
</style>