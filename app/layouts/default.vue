<template>
  <div class="min-h-screen flex flex-col">
    <!-- Modern floating navigation bar with glass effect -->
    <header class="fixed w-full top-0 z-50 backdrop-blur-md bg-white/80 shadow-sm">
      <div class="container-custom py-3">
        <nav class="flex justify-between items-center">
          <!-- Logo area with subtle scaling on hover -->
          <NuxtLink to="/" class="text-xl font-bold text-primary transition-transform hover:scale-105 duration-300">
            Profi účetnictví
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
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
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
            <div class="space-y-2">
              <p>Martina Navrátilová</p>
              <p>E-mail: navratilova.ucto@seznam.cz</p>
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
        <div class="mt-12 text-center">
          <p>&copy; {{ new Date().getFullYear() }} Profi účetnictví. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const isMenuOpen = ref(false);

const navLinks = [
  { title: 'Služby', path: '/#sluzby' },
  { title: 'O mně', path: '/#o-mne' },
  { title: 'Reference', path: '/#reference' },
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