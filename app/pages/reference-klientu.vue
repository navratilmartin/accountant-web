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
          <h1 class="text-3xl md:text-5xl font-bold mb-6">Reference spokojených klientů - Účetnictví pro OSVČ a firmy</h1>
          <p class="text-lg text-gray-700">Podívejte se na zkušenosti klientů, kteří využívají mých služeb v oblasti vedení účetnictví, daňové evidence a účetního poradenství.</p>
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
          <!-- Testimonial cards -->
          <ClientOnly>
            <div 
              v-for="(testimonial, index) in testimonials" 
              :key="index"
              class="bg-white rounded-xl shadow-md border border-gray-100 p-8 relative"
            >
              <div class="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center rounded-full bg-primary">
                <UIcon name="i-heroicons-chat-bubble-left-right" class="text-white text-lg" />
              </div>
              
              <div class="mb-6">
                <div class="flex items-center mb-1">
                  <UIcon 
                    v-for="star in 5" 
                    :key="star" 
                    name="i-heroicons-star-solid" 
                    class="text-yellow-400" 
                  />
                </div>
                <p class="text-lg italic text-gray-600 my-4">
                  "{{ testimonial.quote }}"
                </p>
                <div class="flex items-center">
                  <div class="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                    <img
                      :src="testimonial.avatar"
                      :alt="`Reference klienta ${testimonial.name}`"
                      width="48"
                      height="48"
                      class="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 class="font-semibold">{{ testimonial.name }}</h3>
                    <p class="text-sm text-gray-500">{{ testimonial.role }}</p>
                  </div>
                </div>
              </div>
            </div>
            <template #fallback>
              <div 
                v-for="index in 6" 
                :key="index"
                class="bg-white rounded-xl shadow-md border border-gray-100 p-8 relative"
              >
                <div class="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center rounded-full bg-primary">
                  <UIcon name="i-heroicons-chat-bubble-left-right" class="text-white text-lg" />
                </div>
                <div class="mb-6">
                  <div class="flex items-center mb-1">
                    <UIcon v-for="star in 5" :key="star" name="i-heroicons-star" class="text-yellow-400" />
                  </div>
                  <p class="text-lg italic text-gray-600 my-4">
                    Načítání reference...
                  </p>
                  <div class="flex items-center">
                    <div class="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <div class="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                      <div class="h-3 bg-gray-100 rounded w-32"></div>
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
          <div class="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div class="grid grid-cols-1 md:grid-cols-2">
              <!-- Image -->
              <div class="relative h-80 md:h-auto">
                <img
                  :src="featuredTestimonial.avatar"
                  :alt="`Reference klienta ${featuredTestimonial.name}`"
                  class="absolute inset-0 w-full h-full object-cover"
                  style="object-position: center 15%"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <h3 class="font-bold text-2xl mb-1">{{ featuredTestimonial.name }}</h3>
                  <p class="text-white/90 mb-2">{{ featuredTestimonial.role }}</p>
                  <p class="text-sm text-white/80">Spolupráce od roku {{ featuredTestimonial.yearStarted }}</p>
                </div>
              </div>
              
              <!-- Content -->
              <div class="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                <div class="absolute -top-4 -left-4 w-12 h-12 flex items-center justify-center rounded-full bg-primary shadow-lg md:hidden">
                  <UIcon name="i-heroicons-chat-bubble-left-right" class="text-white text-xl" />
                </div>
                
                <div class="flex items-center mb-4">
                  <UIcon 
                    v-for="star in 5" 
                    :key="star" 
                    name="i-heroicons-star-solid" 
                    class="text-yellow-400 text-2xl" 
                  />
                </div>
                
                <blockquote class="text-xl md:text-2xl italic text-gray-700 leading-relaxed mb-6">
                  "{{ featuredTestimonial.quote }}"
                </blockquote>
              </div>
            </div>
          </div>
          
          <template #fallback>
            <div class="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="h-80 md:h-auto bg-gray-200 animate-pulse"></div>
                <div class="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                  <div class="flex items-center mb-4 space-x-1">
                    <div v-for="star in 5" :key="star" class="w-6 h-6 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <div class="space-y-3 mb-6">
                    <div class="h-6 bg-gray-200 rounded animate-pulse"></div>
                    <div class="h-6 bg-gray-200 rounded animate-pulse"></div>
                    <div class="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </ClientOnly>
      </div>
    </section>
    
    <!-- Důvěryhodnost - Obory -->
    <section class="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-3xl font-bold mb-4">Důvěřují mi podnikatelé z různých oborů</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">Poskytuji účetní služby pro OSVČ z nejrůznějších oblastí podnikání - od IT profesionálů přes e-commerce podnikatele až po řemeslníky.</p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div class="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-computer-desktop" class="text-3xl text-blue-600" />
            </div>
            <p class="text-sm font-medium text-gray-700">IT a technologie</p>
          </div>
          
          <div class="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-shopping-cart" class="text-3xl text-green-600" />
            </div>
            <p class="text-sm font-medium text-gray-700">E-commerce</p>
          </div>
          
          <div class="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-briefcase" class="text-3xl text-purple-600" />
            </div>
            <p class="text-sm font-medium text-gray-700">Služby</p>
          </div>
          
          <div class="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-wrench-screwdriver" class="text-3xl text-orange-600" />
            </div>
            <p class="text-sm font-medium text-gray-700">Řemesla</p>
          </div>
          
          <div class="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-heart" class="text-3xl text-pink-600" />
            </div>
            <p class="text-sm font-medium text-gray-700">Zdraví a krása</p>
          </div>
          
          <div class="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-paint-brush" class="text-3xl text-indigo-600" />
            </div>
            <p class="text-sm font-medium text-gray-700">Kreativní obory</p>
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
          <div class="text-center p-6">
            <div class="text-4xl md:text-5xl font-bold mb-2">30+</div>
            <p class="text-lg opacity-80">Let praxe</p>
          </div>
          <div class="text-center p-6">
            <div class="text-4xl md:text-5xl font-bold mb-2">150+</div>
            <p class="text-lg opacity-80">Spokojených klientů</p>
          </div>
        <div class="text-center p-6">
        
            <div class="text-4xl md:text-5xl font-bold mb-2">10 000+</div>
            <p class="text-lg opacity-80">Zaúčtovaných dokladů</p>
            
          </div>
          <div class="text-center p-6">
            <div class="text-4xl md:text-5xl font-bold mb-2">96%</div>
            <p class="text-lg opacity-80">Míra spokojenosti</p>
          </div>
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
                <h2 class="text-2xl md:text-3xl font-bold mb-4">Připojte se k více než 150 spokojeným klientům</h2>
                <p class="text-lg opacity-90 mb-8">Nechte si nezávazně zpracovat nabídku účetních služeb na míru pro vaše podnikání.</p>
                <div class="flex flex-col sm:flex-row gap-4">
                  <UButton 
                    to="/#kontakt" 
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
                    <span>Včasnou přípravu podkladů pro daňové účely</span>
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
import { featuredTestimonial, testimonials } from '~/data/testimonials'

useSeoMeta({
  title: 'Reference | Účetnictví pro OSVČ a firmy Blansko | Martina Navrátilová',
  description: 'Přečtěte si reference mých klientů z Blanska a celé ČR. Poskytuji spolehlivé účetní služby pro OSVČ a právnické osoby, daňové poradenství a vedení účetnictví.',
  ogTitle: 'Reference | Účetnictví pro OSVČ a firmy Blansko | Martina Navrátilová',
  ogDescription: 'Přečtěte si reference mých klientů z Blanska a celé ČR. Poskytuji spolehlivé účetní služby pro OSVČ a právnické osoby, daňové poradenství a vedení účetnictví.',
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