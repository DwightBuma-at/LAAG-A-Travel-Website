<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border-b border-neutral-200/50 dark:border-gray-700/50 shadow-soft transition-all duration-300">
    <div class="container-custom">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <a href="/" @click.prevent="goToHome" class="flex items-center space-x-3 group cursor-pointer">
          <div class="flex flex-col">
            <h1 class="font-display text-3xl md:text-4xl font-bold text-primary-400 dark:text-primary-400 tracking-wide group-hover:text-primary-500 transition-all duration-300">
              LAAG
            </h1>
            <span class="text-xs text-neutral-500 dark:text-gray-400 tracking-widest uppercase font-medium -mt-1">
              Explore Paradise
            </span>
          </div>
        </a>
        
        <!-- Desktop Navigation -->
        <ul class="hidden lg:flex items-center space-x-8">
          <li>
            <a 
              href="/" 
              @click.prevent="goToHome"
              class="font-semibold transition-colors duration-300 relative group"
              :class="isHomeActive ? '!text-primary-400 dark:!text-primary-400' : 'text-neutral-600 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400'"
            >
              Home
              <span class="absolute -bottom-1 left-0 h-0.5 bg-primary-400 transition-all duration-300"
                    :class="isHomeActive ? 'w-full' : 'w-0 group-hover:w-full'"></span>
            </a>
          </li>
          <li>
            <a 
              href="#destination" 
              @click="scrollToSection('destination')"
              class="font-semibold transition-colors duration-300 relative group"
              :class="activeSection === 'destination' ? '!text-primary-400 dark:!text-primary-400' : 'text-neutral-600 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400'"
            >
              Destinations
              <span class="absolute -bottom-1 left-0 h-0.5 bg-primary-400 transition-all duration-300"
                    :class="activeSection === 'destination' ? 'w-full' : 'w-0 group-hover:w-full'"></span>
            </a>
          </li>
          <li>
            <a 
              href="#offers" 
              @click="scrollToSection('offers')"
              class="font-semibold transition-colors duration-300 relative group"
              :class="activeSection === 'offers' ? '!text-primary-400 dark:!text-primary-400' : 'text-neutral-600 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400'"
            >
              Offers
              <span class="absolute -bottom-1 left-0 h-0.5 bg-primary-400 transition-all duration-300"
                    :class="activeSection === 'offers' ? 'w-full' : 'w-0 group-hover:w-full'"></span>
            </a>
          </li>
          <li>
            <a 
              href="/about" 
              @click.prevent="navigateToAbout"
              class="font-semibold transition-colors duration-300 relative group"
              :class="isAboutActive ? '!text-primary-400 dark:!text-primary-400' : 'text-neutral-600 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400'"
            >
              About Us
              <span class="absolute -bottom-1 left-0 h-0.5 bg-primary-400 transition-all duration-300"
                    :class="isAboutActive ? 'w-full' : 'w-0 group-hover:w-full'"></span>
            </a>
          </li>
          <li>
            <a 
              href="/booking" 
              @click.prevent="navigateToBooking"
              class="font-semibold transition-colors duration-300 relative group"
              :class="isBookingActive ? '!text-primary-400 dark:!text-primary-400' : 'text-neutral-600 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400'"
            >
              Booking
              <span class="absolute -bottom-1 left-0 h-0.5 bg-primary-400 transition-all duration-300"
                    :class="isBookingActive ? 'w-full' : 'w-0 group-hover:w-full'"></span>
            </a>
          </li>
        </ul>

        <!-- Action Buttons -->
        <div class="flex items-center space-x-4">
          <!-- Theme Toggle -->
          <button 
            @click="store.toggleTheme" 
            :title="store.isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
            class="p-3 rounded-2xl bg-neutral-100 dark:bg-gray-700 hover:bg-neutral-200 dark:hover:bg-gray-600 transition-all duration-300 group"
          >
            <svg v-if="!store.isDarkMode" class="w-5 h-5 text-neutral-600 group-hover:text-primary-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
            <svg v-else class="w-5 h-5 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
          </button>
          
          <!-- Desktop Auth Buttons -->
          <div class="hidden md:flex items-center space-x-3">
            <button 
              @click="store.openModal('login')"
              class="px-6 py-2.5 text-neutral-700 hover:text-primary-400 font-medium rounded-2xl hover:bg-primary-50 transition-all duration-300"
            >
              Login
            </button>
            <button 
              @click="store.openModal('signup')"
              class="px-6 py-2.5 bg-primary-400 hover:bg-primary-500 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-soft"
            >
              Sign Up
            </button>
          </div>
          
          <!-- Mobile Menu Toggle -->
          <button 
            @click="toggleMobileMenu"
            class="lg:hidden p-2 rounded-2xl bg-neutral-100 dark:bg-gray-800 hover:bg-neutral-200 dark:hover:bg-gray-700 transition-all duration-300"
          >
            <div class="w-6 h-6 flex flex-col justify-center space-y-1">
              <span 
                class="block w-full h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300"
                :class="{ 'rotate-45 translate-y-1.5': mobileMenuOpen }"
              ></span>
              <span 
                class="block w-full h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300"
                :class="{ 'opacity-0': mobileMenuOpen }"
              ></span>
              <span 
                class="block w-full h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300"
                :class="{ '-rotate-45 -translate-y-1.5': mobileMenuOpen }"
              ></span>
            </div>
          </button>
        </div>
      </div>
      
      <!-- Mobile Menu -->
      <div 
        class="lg:hidden overflow-hidden transition-all duration-300"
        :class="{ 'max-h-0 opacity-0': !mobileMenuOpen, 'max-h-96 opacity-100': mobileMenuOpen }"
      >
        <div class="py-6 space-y-4 border-t border-neutral-200 dark:border-gray-700">
          <a 
            href="/" 
            @click.prevent="goToHome(); closeMobileMenu()"
            class="block font-semibold transition-colors duration-300"
            :class="isHomeActive ? '!text-primary-400 dark:!text-primary-400' : 'text-neutral-600 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400'"
          >
            Home
          </a>
          <a 
            href="#destination" 
            @click="scrollToSection('destination'); closeMobileMenu()"
            class="block font-semibold transition-colors duration-300"
            :class="activeSection === 'destination' ? '!text-primary-400 dark:!text-primary-400' : 'text-neutral-600 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400'"
          >
            Destinations
          </a>
          <a 
            href="#offers" 
            @click="scrollToSection('offers'); closeMobileMenu()"
            class="block font-semibold transition-colors duration-300"
            :class="activeSection === 'offers' ? '!text-primary-400 dark:!text-primary-400' : 'text-neutral-600 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400'"
          >
            Offers
          </a>
          <a 
            href="/about" 
            @click.prevent="navigateToAbout(); closeMobileMenu()"
            class="block font-semibold transition-colors duration-300"
            :class="isAboutActive ? '!text-primary-400 dark:!text-primary-400' : 'text-neutral-600 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400'"
          >
            About Us
          </a>
          <a 
            href="/booking" 
            @click.prevent="navigateToBooking(); closeMobileMenu()"
            class="block font-semibold transition-colors duration-300"
            :class="isBookingActive ? '!text-primary-400 dark:!text-primary-400' : 'text-neutral-600 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400'"
          >
            Booking
          </a>
          
          <!-- Mobile Auth Buttons -->
          <div class="flex flex-col space-y-3 pt-4 border-t border-neutral-200 dark:border-gray-700">
            <button 
              @click="store.openModal('login'); closeMobileMenu()"
              class="w-full px-6 py-2.5 text-neutral-700 hover:text-primary-400 font-medium rounded-2xl hover:bg-primary-50 transition-all duration-300"
            >
              Login
            </button>
            <button 
              @click="store.openModal('signup'); closeMobileMenu()"
              class="w-full px-6 py-2.5 bg-primary-400 hover:bg-primary-500 text-white font-semibold rounded-2xl transition-all duration-300"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAppStore } from '../store'

export default {
  name: 'Navbar',
  setup() {
    const store = useAppStore()
    const router = useRouter()
    const route = useRoute()
    const mobileMenuOpen = ref(false)
    const activeSection = ref(null)
    
    // Computed properties for active states
    const isHomeActive = computed(() => {
      return route.path === '/' && !activeSection.value
    })
    
    const isAboutActive = computed(() => {
      return route.path === '/about'
    })
    
    const isBookingActive = computed(() => {
      return route.path === '/booking'
    })
    
    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }
    
    const closeMobileMenu = () => {
      mobileMenuOpen.value = false
    }
    
    const scrollToSection = (sectionId) => {
      // Set active section
      activeSection.value = sectionId
      
      // Check if we're on the home page
      if (window.location.pathname !== '/') {
        // If not on home page, navigate to home first
        router.push('/')
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.getElementById(sectionId)
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          }
        }, 100)
      } else {
        // If already on home page, just scroll
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }
    
    const goToHome = () => {
      // Clear active section when going to home
      activeSection.value = null
      router.push('/')
    }
    
    const navigateToAbout = () => {
      try {
        activeSection.value = null
        router.push('/about')
      } catch (error) {
        console.error('Navigation error:', error)
        // Fallback to window.location
        window.location.href = '/about'
      }
    }
    
    const navigateToBooking = () => {
      try {
        activeSection.value = null
        router.push('/booking')
      } catch (error) {
        console.error('Navigation error:', error)
        // Fallback to window.location
        window.location.href = '/booking'
      }
    }
    
    // Reset active section when navigating away from home
    const resetActiveSection = () => {
      if (window.location.pathname !== '/') {
        activeSection.value = null
      }
    }
    
    // Watch for route changes
    router.afterEach(() => {
      resetActiveSection()
    })
    
    return {
      store,
      mobileMenuOpen,
      activeSection,
      isHomeActive,
      isAboutActive,
      isBookingActive,
      toggleMobileMenu,
      closeMobileMenu,
      scrollToSection,
      goToHome,
      navigateToAbout,
      navigateToBooking
    }
  }
}
</script>

<style scoped>
/* Navbar styles are now handled by Tailwind classes */
</style>
