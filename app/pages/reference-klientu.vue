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
          <span class="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-4">Reference</span>
          <h1 class="text-3xl md:text-5xl font-bold mb-6">Reference spokojených klientů - Účetnictví pro OSVČ</h1>
          <p class="text-lg text-gray-700">Podívejte se na zkušenosti klientů, kteří využívají mých služeb v oblasti vedení účetnictví, daňových přiznání a účetního poradenství.</p>
        </div>
      </div>
    </section>
    
    <!-- Hlavní sekce s referencemi - Karty -->
    <section class="py-16 md:py-24">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-2xl md:text-4xl font-bold mb-4">Reference klientů</h2>
          <p class="text-lg max-w-3xl mx-auto text-gray-600">Důvěru nemohu vybudovat sliby, ale kvalitně odvedenou prací. Přečtěte si, jak jsou moji klienti spokojeni s mými službami.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <!-- Reference 1 -->
          <ClientOnly>
            <div class="bg-white rounded-xl shadow-md border border-gray-100 p-8 relative">
              <div class="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center rounded-full bg-primary">
                <UIcon name="i-heroicons-quote-marks" class="text-white text-lg" />
              </div>
              
              <div class="mb-6">
                <div class="flex items-center mb-1">
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                </div>
                <p class="text-lg italic text-gray-600 my-4">
                  "Jsem velmi spokojený s vedením účetnictví pro moji živnost. Vždy ocením profesionální přístup, rychlou komunikaci a zejména schopnost vysvětlit složité účetní a daňové záležitosti srozumitelným způsobem. Díky této spolupráci se mohu plně soustředit na své podnikání."
                </p>
                <div class="flex items-center">
                  <div class="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                    <UImage
                      src="/img/client1.webp"
                      alt="Reference klienta Petr Novák"
                      width="48"
                      height="48"
                      class="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 class="font-semibold">Petr Novák</h3>
                    <p class="text-sm text-gray-500">E-commerce podnikatel</p>
                  </div>
                </div>
              </div>
            </div>
            <template #fallback>
              <div class="bg-white rounded-xl shadow-md border border-gray-100 p-8 relative">
                <div class="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center rounded-full bg-primary">
                  <UIcon name="i-heroicons-quote-marks" class="text-white text-lg" />
                </div>
                <!-- Obsah reference 1 - fallback -->
                <div class="mb-6">
                  <div class="flex items-center mb-1">
                    <UIcon name="i-heroicons-star" class="text-yellow-400" />
                    <UIcon name="i-heroicons-star" class="text-yellow-400" />
                    <UIcon name="i-heroicons-star" class="text-yellow-400" />
                    <UIcon name="i-heroicons-star" class="text-yellow-400" />
                    <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  </div>
                  <p class="text-lg italic text-gray-600 my-4">
                    "Jsem velmi spokojený s vedením účetnictví pro moji živnost. Vždy ocením profesionální přístup, rychlou komunikaci a zejména schopnost vysvětlit složité účetní a daňové záležitosti srozumitelným způsobem."
                  </p>
                  <div class="flex items-center">
                    <div class="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <h3 class="font-semibold">Petr Novák</h3>
                      <p class="text-sm text-gray-500">E-commerce podnikatel</p>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </ClientOnly>

          <!-- Reference 2 -->
          <ClientOnly>
            <div class="bg-white rounded-xl shadow-md border border-gray-100 p-8 relative">
              <div class="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center rounded-full bg-primary">
                <UIcon name="i-heroicons-quote-marks" class="text-white text-lg" />
              </div>
              
              <div class="mb-6">
                <div class="flex items-center mb-1">
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                </div>
                <p class="text-lg italic text-gray-600 my-4">
                  "Spolupráce předčila moje očekávání. Oceňuji především proaktivní přístup a schopnost najít daňovou optimalizaci, kterou bych sám neobjevil. Díky tomu jsem minulý rok ušetřil značné prostředky na daních. Jednoznačně doporučuji všem OSVČ!"
                </p>
                <div class="flex items-center">
                  <div class="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                    <UImage
                      src="/img/client2.webp"
                      alt="Reference klienta Jan Svoboda"
                      width="48"
                      height="48"
                      class="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 class="font-semibold">Jan Svoboda</h3>
                    <p class="text-sm text-gray-500">IT konzultant</p>
                  </div>
                </div>
              </div>
            </div>
            <template #fallback>
              <div class="bg-white rounded-xl shadow-md border border-gray-100 p-8 relative">
                <div class="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center rounded-full bg-primary">
                  <UIcon name="i-heroicons-quote-marks" class="text-white text-lg" />
                </div>
                <!-- Obsah reference 2 - fallback -->
                <div class="mb-6">
                  <div class="flex items-center mb-1">
                    <UIcon name="i-heroicons-star" class="text-yellow-400" />
                    <UIcon name="i-heroicons-star" class="text-yellow-400" />
                    <UIcon name="i-heroicons-star" class="text-yellow-400" />
                    <UIcon name="i-heroicons-star" class="text-yellow-400" />
                    <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  </div>
                  <p class="text-lg italic text-gray-600 my-4">
                    "Spolupráce předčila moje očekávání. Oceňuji především proaktivní přístup a schopnost najít daňovou optimalizaci. Jednoznačně doporučuji!"
                  </p>
                  <div class="flex items-center">
                    <div class="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <h3 class="font-semibold">Jan Svoboda</h3>
                      <p class="text-sm text-gray-500">IT konzultant</p>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </ClientOnly>

          <!-- Reference 3 -->
          <ClientOnly>
            <div class="bg-white rounded-xl shadow-md border border-gray-100 p-8 relative">
              <div class="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center rounded-full bg-primary">
                <UIcon name="i-heroicons-quote-marks" class="text-white text-lg" />
              </div>
              
              <div class="mb-6">
                <div class="flex items-center mb-1">
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                </div>
                <p class="text-lg italic text-gray-600 my-4">
                  "Po několika špatných zkušenostech s jinými účetními jsem konečně našla profesionála na svém místě. Komunikace probíhá rychle, vše je vždy včas zpracováno a oceňuji i pravidelné reporty o stavu mého podnikání."
                </p>
                <div class="flex items-center">
                  <div class="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                    <UImage
                      src="/img/client3.webp"
                      alt="Reference klienta Markéta Dvořáková"
                      width="48"
                      height="48"
                      class="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 class="font-semibold">Markéta Dvořáková</h3>
                    <p class="text-sm text-gray-500">Grafická designérka</p>
                  </div>
                </div>
              </div>
            </div>
            <template #fallback>
              <div class="bg-white rounded-xl shadow-md border border-gray-100 p-8 relative">
                <div class="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center rounded-full bg-primary">
                  <UIcon name="i-heroicons-quote-marks" class="text-white text-lg" />
                </div>
                <!-- Obsah reference 3 - fallback -->
                <div class="mb-6">
                  <div class="flex items-center mb-1">
                    <UIcon name="i-heroicons-star" class="text-yellow-400" />
                    <UIcon name="i-heroicons-star" class="text-yellow-400" />
                    <UIcon name="i-heroicons-star" class="text-yellow-400" />
                    <UIcon name="i-heroicons-star" class="text-yellow-400" />
                    <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  </div>
                  <p class="text-lg italic text-gray-600 my-4">
                    "Po několika špatných zkušenostech s jinými účetními jsem konečně našla profesionála na svém místě. Komunikace probíhá rychle a vše je vždy včas."
                  </p>
                  <div class="flex items-center">
                    <div class="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <h3 class="font-semibold">Markéta Dvořáková</h3>
                      <p class="text-sm text-gray-500">Grafická designérka</p>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </ClientOnly>

          <!-- Reference 4 -->
          <ClientOnly>
            <div class="bg-white rounded-xl shadow-md border border-gray-100 p-8 relative">
              <div class="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center rounded-full bg-primary">
                <UIcon name="i-heroicons-quote-marks" class="text-white text-lg" />
              </div>
              
              <div class="mb-6">
                <div class="flex items-center mb-1">
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                </div>
                <p class="text-lg italic text-gray-600 my-4">
                  "Spolupráce je opravdu na vysoké úrovni. Mohu se spolehnout, že vše bude zpracováno správně a na čas. Navíc dostávám cenné rady, jak optimalizovat své podnikání. Nemohu než doporučit!"
                </p>
                <div class="flex items-center">
                  <div class="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                    <UImage
                      src="/img/face1.webp"
                      alt="Reference klienta Tomáš Horák"
                      width="48"
                      height="48"
                      class="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 class="font-semibold">Tomáš Horák</h3>
                    <p class="text-sm text-gray-500">Fotograf</p>
                  </div>
                </div>
              </div>
            </div>
            <template #fallback>
              <div class="bg-white rounded-xl shadow-md border border-gray-100 p-8 relative">
                <div class="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center rounded-full bg-primary">
                  <UIcon name="i-heroicons-quote-marks" class="text-white text-lg" />
                </div>
                <!-- Obsah reference 4 - fallback -->
                <div class="mb-6">
                  <div class="flex items-center mb-1">
                    <UIcon name="i-heroicons-star" class="text-yellow-400" />
                    <UIcon name="i-heroicons-star" class="text-yellow-400" />
                    <UIcon name="i-heroicons-star" class="text-yellow-400" />
                    <UIcon name="i-heroicons-star" class="text-yellow-400" />
                    <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  </div>
                  <p class="text-lg italic text-gray-600 my-4">
                    "Spolupráce je opravdu na vysoké úrovni. Mohu se spolehnout, že vše bude zpracováno správně a na čas."
                  </p>
                  <div class="flex items-center">
                    <div class="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <h3 class="font-semibold">Tomáš Horák</h3>
                      <p class="text-sm text-gray-500">Fotograf</p>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </ClientOnly>

          <!-- Reference 5 -->
          <ClientOnly>
            <div class="bg-white rounded-xl shadow-md border border-gray-100 p-8 relative">
              <div class="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center rounded-full bg-primary">
                <UIcon name="i-heroicons-quote-marks" class="text-white text-lg" />
              </div>
              
              <div class="mb-6">
                <div class="flex items-center mb-1">
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                </div>
                <p class="text-lg italic text-gray-600 my-4">
                  "Když jsem začínal podnikat, nevěděl jsem, co vše účetnictví obnáší. Díky profesionálnímu přístupu a trpělivému vysvětlování jsem se zorientoval v základních principech a dnes se mohu více věnovat rozvoji svého podnikání."
                </p>
                <div class="flex items-center">
                  <div class="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                    <UImage
                      src="/img/face2.webp"
                      alt="Reference klienta Martin Kučera"
                      width="48"
                      height="48"
                      class="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 class="font-semibold">Martin Kučera</h3>
                    <p class="text-sm text-gray-500">Fitness trenér</p>
                  </div>
                </div>
              </div>
            </div>
            <template #fallback>
              <div class="bg-white rounded-xl shadow-md border border-gray-100 p-8 relative">
                <div class="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center rounded-full bg-primary">
                  <UIcon name="i-heroicons-quote-marks" class="text-white text-lg" />
                </div>
                <!-- Obsah reference 5 - fallback -->
                <div class="mb-6">
                  <div class="flex items-center mb-1">
                    <UIcon name="i-heroicons-star" class="text-yellow-400" />
                    <UIcon name="i-heroicons-star" class="text-yellow-400" />
                    <UIcon name="i-heroicons-star" class="text-yellow-400" />
                    <UIcon name="i-heroicons-star" class="text-yellow-400" />
                    <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  </div>
                  <p class="text-lg italic text-gray-600 my-4">
                    "Když jsem začínal podnikat, nevěděl jsem, co vše účetnictví obnáší. Díky profesionálnímu přístupu jsem se zorientoval v základních principech."
                  </p>
                  <div class="flex items-center">
                    <div class="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <h3 class="font-semibold">Martin Kučera</h3>
                      <p class="text-sm text-gray-500">Fitness trenér</p>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </ClientOnly>

          <!-- Reference 6 -->
          <ClientOnly>
            <div class="bg-white rounded-xl shadow-md border border-gray-100 p-8 relative">
              <div class="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center rounded-full bg-primary">
                <UIcon name="i-heroicons-quote-marks" class="text-white text-lg" />
              </div>
              
              <div class="mb-6">
                <div class="flex items-center mb-1">
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400" />
                  <UIcon name="i-heroicons-star-half" class="text-yellow-400" />
                </div>
                <p class="text-lg italic text-gray-600 my-4">
                  "Účetní služby využívám už třetím rokem a jsem maximálně spokojená. Flexibilita a vstřícnost při řešení nestandardních situací je pro mě velmi důležitá. Oceňuji také dostupnost a rychlost odpovědí na mé dotazy."
                </p>
                <div class="flex items-center">
                  <div class="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                    <UImage
                      src="/img/face3.webp"
                      alt="Reference klienta Alena Nováková"
                      width="48"
                      height="48"
                      class="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 class="font-semibold">Alena Nováková</h3>
                    <p class="text-sm text-gray-500">Kosmetička</p>
                  </div>
                </div>
              </div>
            </div>
            <template #fallback>
              <div class="bg-white rounded-xl shadow-md border border-gray-100 p-8 relative">
                <div class="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center rounded-full bg-primary">
                  <UIcon name="i-heroicons-quote-marks" class="text-white text-lg" />
                </div>
                <!-- Obsah reference 6 - fallback -->
                <div class="mb-6">
                  <div class="flex items-center mb-1">
                    <UIcon name="i-heroicons-star" class="text-yellow-400" />
                    <UIcon name="i-heroicons-star" class="text-yellow-400" />
                    <UIcon name="i-heroicons-star" class="text-yellow-400" />
                    <UIcon name="i-heroicons-star" class="text-yellow-400" />
                    <UIcon name="i-heroicons-star-half" class="text-yellow-400" />
                  </div>
                  <p class="text-lg italic text-gray-600 my-4">
                    "Účetní služby využívám už třetím rokem a jsem maximálně spokojená. Flexibilita a vstřícnost při řešení nestandardních situací je pro mě velmi důležitá."
                  </p>
                  <div class="flex items-center">
                    <div class="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <h3 class="font-semibold">Alena Nováková</h3>
                      <p class="text-sm text-gray-500">Kosmetička</p>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </ClientOnly>
        </div>
      </div>
    </section>
    
    <!-- Velká reference - Citát -->
    <section class="py-16 md:py-24 bg-gray-50">
      <div class="container-custom">
        <ClientOnly>
          <div class="bg-white rounded-xl shadow-md border border-gray-100 p-8 md:p-12 relative">
            <div class="absolute -top-6 -left-6 w-16 h-16 flex items-center justify-center rounded-full bg-primary shadow-lg">
              <UIcon name="i-heroicons-quote-marks" class="text-white text-2xl" />
            </div>
            
            <div class="md:flex items-center gap-8">
              <div class="md:w-1/3 mb-6 md:mb-0">
                <div class="rounded-lg overflow-hidden">
                  <UImage
                    src="/img/yasmin-may.webp"
                    alt="Reference klienta Pavel Svoboda"
                    width="400"
                    height="300"
                    class="w-full h-auto"
                  />
                </div>
              </div>
              <div class="md:w-2/3">
                <div class="flex items-center mb-2">
                  <UIcon name="i-heroicons-star" class="text-yellow-400 text-xl" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400 text-xl" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400 text-xl" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400 text-xl" />
                  <UIcon name="i-heroicons-star" class="text-yellow-400 text-xl" />
                </div>
                <p class="text-xl md:text-2xl italic text-gray-600 mb-6">
                  "Spolupráce s touto účetní byla jedním z nejlepších rozhodnutí pro mé podnikání. Jako majitel malé IT firmy jsem potřeboval někoho, kdo rozumí specifikům našeho oboru. Oceňuji zejména proaktivní přístup, kdy mi jsou nabízena řešení a optimalizace, na které bych sám nepřišel. Díky tomu jsem ušetřil nejen peníze, ale především čas, který mohu věnovat rozvoji firmy."
                </p>
                <div class="flex items-center">
                  <div>
                    <h3 class="font-bold text-xl">Pavel Svoboda</h3>
                    <p class="text-gray-500">Majitel IT společnosti</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <template #fallback>
            <div class="bg-white rounded-xl shadow-md border border-gray-100 p-8 md:p-12 relative">
              <div class="absolute -top-6 -left-6 w-16 h-16 flex items-center justify-center rounded-full bg-primary shadow-lg">
                <UIcon name="i-heroicons-quote-marks" class="text-white text-2xl" />
              </div>
              
              <div class="md:flex items-center gap-8">
                <div class="md:w-1/3 mb-6 md:mb-0">
                  <div class="rounded-lg bg-gray-200 aspect-[4/3]"></div>
                </div>
                <div class="md:w-2/3">
                  <div class="flex items-center mb-2">
                    <UIcon name="i-heroicons-star" class="text-yellow-400 text-xl" />
                    <UIcon name="i-heroicons-star" class="text-yellow-400 text-xl" />
                    <UIcon name="i-heroicons-star" class="text-yellow-400 text-xl" />
                    <UIcon name="i-heroicons-star" class="text-yellow-400 text-xl" />
                    <UIcon name="i-heroicons-star" class="text-yellow-400 text-xl" />
                  </div>
                  <p class="text-xl md:text-2xl italic text-gray-600 mb-6">
                    "Spolupráce s touto účetní byla jedním z nejlepších rozhodnutí pro mé podnikání. Jako majitel malé IT firmy jsem potřeboval někoho, kdo rozumí specifikům našeho oboru."
                  </p>
                  <div class="flex items-center">
                    <div>
                      <h3 class="font-bold text-xl">Pavel Svoboda</h3>
                      <p class="text-gray-500">Majitel IT společnosti</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </ClientOnly>
      </div>
    </section>
    
    <!-- Důvěryhodnost - Logo sekce -->
    <section class="py-16 md:py-20">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-3xl font-bold mb-4">Důvěřují mi podnikatelé z různých oborů</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">Poskytuji účetní služby pro OSVČ z nejrůznějších oblastí podnikání - od IT profesionálů přes e-commerce podnikatele až po řemeslníky.</p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
          <div class="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all p-4">
            <UImage 
              src="/img/industry-tech.svg" 
              alt="IT a technologie" 
              width="100" 
              height="60" 
              class="h-12 w-auto" 
            />
          </div>
          <div class="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all p-4">
            <UImage 
              src="/img/industry-retail.svg" 
              alt="E-commerce a retail" 
              width="100" 
              height="60" 
              class="h-12 w-auto" 
            />
          </div>
          <div class="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all p-4">
            <UImage 
              src="/img/industry-services.svg" 
              alt="Služby" 
              width="100" 
              height="60" 
              class="h-12 w-auto" 
            />
          </div>
          <div class="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all p-4">
            <UImage 
              src="/img/industry-craft.svg" 
              alt="Řemesla" 
              width="100" 
              height="60" 
              class="h-12 w-auto" 
            />
          </div>
          <div class="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all p-4">
            <UImage 
              src="/img/industry-health.svg" 
              alt="Zdraví a krása" 
              width="100" 
              height="60" 
              class="h-12 w-auto" 
            />
          </div>
          <div class="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all p-4">
            <UImage 
              src="/img/industry-creative.svg" 
              alt="Kreativní obory" 
              width="100" 
              height="60" 
              class="h-12 w-auto" 
            />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Statistiky a čísla -->
    <section class="py-16 md:py-24 bg-primary text-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-4xl font-bold mb-4">Důvěra v číslech</h2>
          <p class="text-lg opacity-90 max-w-3xl mx-auto">Za dobu své praxe jsem pomohla stovkám podnikatelů s jejich účetnictvím a daňovými povinnostmi.</p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ClientOnly>
            <div class="text-center p-6">
              <div class="text-4xl md:text-5xl font-bold mb-2">8+</div>
              <p class="text-lg opacity-80">Let praxe</p>
            </div>
            <template #fallback>
              <div class="text-center p-6">
                <div class="text-4xl md:text-5xl font-bold mb-2">8+</div>
                <p class="text-lg opacity-80">Let praxe</p>
              </div>
            </template>
          </ClientOnly>
          
          <ClientOnly>
            <div class="text-center p-6">
              <div class="text-4xl md:text-5xl font-bold mb-2">350+</div>
              <p class="text-lg opacity-80">Spokojených klientů</p>
            </div>
            <template #fallback>
              <div class="text-center p-6">
                <div class="text-4xl md:text-5xl font-bold mb-2">350+</div>
                <p class="text-lg opacity-80">Spokojených klientů</p>
              </div>
            </template>
          </ClientOnly>
          
          <ClientOnly>
            <div class="text-center p-6">
              <div class="text-4xl md:text-5xl font-bold mb-2">1200+</div>
              <p class="text-lg opacity-80">Zpracovaných daňových přiznání</p>
            </div>
            <template #fallback>
              <div class="text-center p-6">
                <div class="text-4xl md:text-5xl font-bold mb-2">1200+</div>
                <p class="text-lg opacity-80">Zpracovaných daňových přiznání</p>
              </div>
            </template>
          </ClientOnly>
          
          <ClientOnly>
            <div class="text-center p-6">
              <div class="text-4xl md:text-5xl font-bold mb-2">96%</div>
              <p class="text-lg opacity-80">Míra spokojenosti</p>
            </div>
            <template #fallback>
              <div class="text-center p-6">
                <div class="text-4xl md:text-5xl font-bold mb-2">96%</div>
                <p class="text-lg opacity-80">Míra spokojenosti</p>
              </div>
            </template>
          </ClientOnly>
        </div>
      </div>
    </section>
    
    <!-- CTA sekce -->
    <section class="py-16 md:py-24">
      <div class="container-custom">
        <div class="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="bg-gradient-to-br from-primary to-blue-800 text-white p-8 md:p-12 flex items-center">
              <div>
                <h2 class="text-2xl md:text-3xl font-bold mb-4">Připojte se k více než 350 spokojeným klientům</h2>
                <p class="text-lg opacity-90 mb-8">Nechte si nezávazně zpracovat nabídku účetních služeb na míru pro vaše podnikání.</p>
                <div class="flex flex-col sm:flex-row gap-4">
                  <UButton 
                    to="/kontakt-blansko" 
                    color="white"
                    size="lg"
                    class="shadow-md"
                  >
                    <UIcon name="i-heroicons-envelope" class="mr-2" />
                    Kontaktujte mě
                  </UButton>
                  <UButton 
                    to="/ucetni-sluzby-osvc" 
                    color="white"
                    variant="outline"
                    size="lg"
                    class="border-2"
                  >
                    <UIcon name="i-heroicons-document-text" class="mr-2" />
                    Zobrazit služby
                  </UButton>
                </div>
              </div>
            </div>
            <div class="p-8 md:p-12 flex items-center">
              <div>
                <h3 class="text-xl font-bold mb-6">Co získáte spoluprací?</h3>
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Profesionální vedení účetnictví nebo daňové evidence</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Včasné zpracování a podání daňových přiznání</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Legální daňovou optimalizaci</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Více času na vaše podnikání</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Klid a jistotu, že je vše v pořádku</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Reference | Účetnictví pro OSVČ Blansko | Martina Navrátilová',
  description: 'Přečtěte si reference mých klientů z Blanska a celé ČR. Poskytuji spolehlivé účetní služby pro OSVČ, daňové poradenství a vedení účetnictví.',
  ogTitle: 'Reference | Účetnictví pro OSVČ Blansko | Martina Navrátilová',
  ogDescription: 'Přečtěte si reference mých klientů z Blanska a celé ČR. Poskytuji spolehlivé účetní služby pro OSVČ, daňové poradenství a vedení účetnictví.',
  ogImage: 'https://ucetni-blansko.cz/img/og-image.webp',
  ogUrl: 'https://ucetni-blansko.cz/reference-klientu',
  canonical: 'https://ucetni-blansko.cz/reference-klientu',
});
</script>

<style scoped>
.text-primary {
  color: var(--primary-color);
}
.bg-primary {
  background-color: var(--primary-color);
}
.from-primary {
  --tw-gradient-from: var(--primary-color);
}
.border-primary {
  border-color: var(--primary-color);
}
</style>