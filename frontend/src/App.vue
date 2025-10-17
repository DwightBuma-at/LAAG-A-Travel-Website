<template>
  <div id="app" class="min-h-screen bg-neutral-100 dark:bg-gray-900 transition-colors duration-300">
    <!-- Navigation -->
    <Navbar />

    <!-- Main Content -->
    <main class="relative z-10">
      <router-view />
    </main>

    <!-- Login/Signup Modal -->
    <AuthModal />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useAppStore } from './store'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import AuthModal from './components/AuthModal.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    AuthModal
  },
  setup() {
    const store = useAppStore()
    
    onMounted(() => {
      store.init()
    })
    
    return {
      store
    }
  }
}
</script>

<style>
/* App-specific styles are now handled by Tailwind classes */
</style>
