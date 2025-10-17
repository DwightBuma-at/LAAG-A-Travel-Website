<template>
  <div class="min-h-screen">
    <!-- About Us Section -->
    <section id="about" class="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8">
            <div>
              <h2 class="section-title text-4xl md:text-5xl font-bold mb-6">
                About LAAG
              </h2>
              <div class="space-y-6">
                <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  LAAG (meaning "to travel" in Filipino) is your gateway to discovering the incredible beauty 
                  of the Philippines. We are passionate about showcasing the rich culture, stunning landscapes, 
                  and warm hospitality that make our country truly special.
                </p>
                <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Founded by travel enthusiasts who believe in sustainable tourism, LAAG connects you with 
                  authentic experiences that support local communities while creating unforgettable memories.
                </p>
              </div>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div class="text-center">
                <div class="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">10K+</div>
                <div class="text-sm text-gray-600 dark:text-gray-400 font-medium">Happy Travelers</div>
              </div>
              <div class="text-center">
                <div class="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">50+</div>
                <div class="text-sm text-gray-600 dark:text-gray-400 font-medium">Destinations</div>
              </div>
              <div class="text-center">
                <div class="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">5★</div>
                <div class="text-sm text-gray-600 dark:text-gray-400 font-medium">Average Rating</div>
              </div>
              <div class="text-center">
                <div class="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">24/7</div>
                <div class="text-sm text-gray-600 dark:text-gray-400 font-medium">Support</div>
              </div>
            </div>

            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                  <span class="text-2xl">🌍</span>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Sustainable Tourism</h4>
                  <p class="text-gray-600 dark:text-gray-300">We promote eco-friendly travel that preserves our natural wonders</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                  <span class="text-2xl">🤝</span>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Local Partnerships</h4>
                  <p class="text-gray-600 dark:text-gray-300">Supporting local communities and authentic experiences</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                  <span class="text-2xl">💝</span>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Personalized Service</h4>
                  <p class="text-gray-600 dark:text-gray-300">Tailored itineraries designed just for you</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="relative group">
            <div class="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1527004768604-cacb88c3c8a4?q=80&w=2070&auto=format&fit=crop" 
                alt="Philippines Culture"
                class="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div class="absolute bottom-6 left-6 right-6 text-white">
                <h3 class="text-2xl font-bold mb-2">Experience the Philippines</h3>
                <p class="text-white/90">Join thousands of travelers who have discovered paradise with LAAG</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-800 dark:to-dark-700">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="section-title text-4xl md:text-5xl font-bold mb-4">
            Our Team
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Meet the passionate people behind LAAG
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card group text-center">
            <div class="relative overflow-hidden rounded-t-lg">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                alt="Team Member"
                class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              >
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Maria Santos</h3>
              <p class="text-primary-600 dark:text-primary-400 font-medium mb-3">Founder & CEO</p>
              <p class="text-gray-600 dark:text-gray-300">Passionate about showcasing the beauty of the Philippines to the world.</p>
            </div>
          </div>
          
          <div class="card group text-center">
            <div class="relative overflow-hidden rounded-t-lg">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=1000&auto=format&fit=crop" 
                alt="Team Member"
                class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              >
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Juan Dela Cruz</h3>
              <p class="text-primary-600 dark:text-primary-400 font-medium mb-3">Travel Director</p>
              <p class="text-gray-600 dark:text-gray-300">Expert in creating unforgettable travel experiences across the archipelago.</p>
            </div>
          </div>
          
          <div class="card group text-center">
            <div class="relative overflow-hidden rounded-t-lg">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop" 
                alt="Team Member"
                class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              >
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Ana Reyes</h3>
              <p class="text-primary-600 dark:text-primary-400 font-medium mb-3">Sustainability Manager</p>
              <p class="text-gray-600 dark:text-gray-300">Dedicated to promoting eco-friendly and responsible tourism practices.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useAppStore } from '../store'

export default {
  name: 'About',
  setup() {
    const store = useAppStore()
    
    return {
      store
    }
  }
}
</script>

<style scoped>
/* About page styles are now handled by Tailwind classes */
</style>
