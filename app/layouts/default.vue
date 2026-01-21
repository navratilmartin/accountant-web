<template>
  <div class="min-h-screen flex flex-col">
    <!-- Modern floating navigation bar with glass effect -->
    <header class="fixed w-full top-0 z-50 backdrop-blur-md bg-white/80 shadow-sm">
      <div class="container-custom py-3">
        <nav class="flex justify-between items-center">
          <!-- Logo area with subtle scaling on hover -->
          <NuxtLink to="/" class="flex items-center gap-3 text-xl font-bold text-primary transition-transform hover:scale-105 duration-300">
            <img src="/img/logo.webp" alt="Logo" class="h-10 w-auto" />
            <span>Účetní Blansko</span>
          </NuxtLink>
          
          <!-- Main Navigation (Desktop) -->
          <div class="hidden md:flex items-center">
            <div class="space-x-1 flex items-center">
              <NuxtLink 
                v-for="link in navLinks" 
                :key="link.path" 
                :to="link.path" 
                basic-link
                class="group px-4 py-2.5 relative rounded-full text-sm font-medium text-gray-800 hover:text-primary transition-colors duration-300"
              >
                <span class="relative z-10">{{ link.title }}</span>
                <!-- Hover background effect -->
                <span class="absolute inset-0 rounded-full bg-gray-100/0 group-hover:bg-gray-100/80 transition-all duration-300"></span>
              </NuxtLink>
            </div>
            
            <!-- CTA Button -->
            <NuxtLink to="/#kontakt" class="ml-4 px-5 py-2 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary/90 transition-colors duration-300 shadow-sm">
              Nezávazná konzultace
            </NuxtLink>
          </div>
          
          <!-- Mobile menu button -->
          <UButton 
            icon="i-heroicons-bars-3" 
            color="gray" 
            variant="ghost" 
            class="md:hidden"
            @click="isMenuOpen = !isMenuOpen"
          />
        </nav>
      </div>
      
      <!-- Mobile Navigation - Animated slide down with subtle background -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform -translate-y-8 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-8 opacity-0"
      >
        <div 
          v-if="isMenuOpen" 
          class="md:hidden bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-100"
        >
          <div class="container-custom py-4 space-y-0.5">
            <NuxtLink 
              v-for="link in navLinks" 
              :key="link.path" 
              :to="link.path" 
              class="block px-5 py-3.5 rounded-lg hover:bg-gray-50 text-gray-800 font-medium transition-all duration-200 hover:pl-7"
              @click="isMenuOpen = false"
            >
              {{ link.title }}
            </NuxtLink>
            
            <!-- Mobile CTA -->
            <NuxtLink 
              to="/#kontakt" 
              class="block mt-3 mx-1 text-center px-5 py-3.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
              @click="isMenuOpen = false"
            >
              Nezávazná konzultace
            </NuxtLink>
          </div>
        </div>
      </Transition>
    </header>
    
    <!-- Content spacer to account for fixed header -->
    <div class="h-16"></div>
    
    <main class="flex-grow">
      <slot />
    </main>
    
    <footer class="bg-gray-50 py-8">
      <div class="container-custom px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left justify-items-center">
          <div>
            <h3 class="font-semibold text-lg mb-4">Rychlé odkazy</h3>
            <ul class="space-y-2">
              <li v-for="link in navLinks" :key="link.path">
                <NuxtLink :to="link.path" class="hover:text-primary transition-colors">
                  {{ link.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold text-lg mb-4">Kontaktní údaje</h3>
            <div class="space-y-2 md:text-base">
              <p>Martina Navrátilová</p>
              <p class="break-words">E-mail: navratilova@ucetni-blansko.cz</p>
              <p>Telefon: +420 774 069 617</p>
            </div>
          </div>
          <div>
            <h3 class="font-semibold text-lg mb-4">Adresa kanceláře</h3>
            <div class="space-y-2">
              <p>Okružní 17</p>
              <p>678 01 Blansko</p>
              <p>Česká republika</p>
            </div>
          </div>
        </div>
        <div class="mt-8 pt-6 border-t border-gray-200">
          <div class="text-center text-sm text-gray-600 px-4">
            <p class="mb-3">&copy; {{ new Date().getFullYear() }} Účetní Blansko. Všechna práva vyhrazena.</p>
            <div class="text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-center gap-2">
              <span>Web vytvořil Martin Navrátil</span>
              <span class="flex items-center gap-3">
                <a 
                  href="https://www.linkedin.com/in/martin-navr%C3%A1til-a14234232/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn profil"
                >
                  <svg class="w-5 h-5" fill="#0A66C2" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/martinek.navratil.1/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="hover:opacity-80 transition-opacity"
                  aria-label="Facebook profil"
                >
                  <svg class="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:martin.navratil00@gmail.com" 
                  class="hover:opacity-80 transition-opacity"
                  aria-label="Email kontakt"
                >
                  <svg class="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                  </svg>
                </a>
              </span>
              </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const isMenuOpen = ref(false);

const navLinks = [
  { title: 'Služby', path: '/ucetni-sluzby-osvc' },
  { title: 'Reference', path: '/#reference' },
  { title: 'O mně', path: '/#o-mne' },
];
</script>

<style>
.text-primary {
  color: var(--primary-color);
}
.bg-primary {
  background-color: var(--primary-color);
}
.hover\:bg-primary\/90:hover {
  background-color: var(--primary-color, #4f46e5);
  opacity: 0.9;
}

/* Remove underlines from all navigation links */
header a {
  text-decoration: none;
}
footer a {
  text-decoration: none;
}
</style>