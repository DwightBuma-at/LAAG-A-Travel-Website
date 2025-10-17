<template>
  <transition name="modal">
    <div v-if="store.showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md" @click.self="store.closeModal">
      <div class="relative w-full max-w-md mx-4 bg-white dark:bg-gray-800 rounded-3xl shadow-premium overflow-hidden">
        <button class="absolute top-5 right-5 w-10 h-10 bg-neutral-100 dark:bg-gray-700 hover:bg-neutral-200 dark:hover:bg-gray-600 rounded-2xl flex items-center justify-center text-neutral-600 dark:text-gray-400 hover:text-neutral-800 dark:hover:text-gray-200 transition-all duration-200" @click="store.closeModal">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <!-- Login Form -->
        <div v-if="store.modalType === 'login'" class="p-10">
          <div class="text-center mb-10">
            <h2 class="text-3xl font-bold text-neutral-800 dark:text-white mb-3">Welcome Back</h2>
            <p class="text-neutral-600 dark:text-gray-300">Login to continue your journey</p>
          </div>
          
          <form @submit.prevent="store.handleLogin" class="space-y-6">
            <div class="space-y-2">
              <label for="login-email" class="block text-sm font-semibold text-neutral-700 dark:text-gray-300">Email</label>
              <input 
                type="email" 
                id="login-email" 
                v-model="store.loginForm.email" 
                placeholder="Enter your email"
                required
                class="input-field"
              >
            </div>
            <div class="space-y-2">
              <label for="login-password" class="block text-sm font-semibold text-neutral-700 dark:text-gray-300">Password</label>
              <input 
                type="password" 
                id="login-password" 
                v-model="store.loginForm.password" 
                placeholder="Enter your password"
                required
                class="input-field"
              >
            </div>
            <div class="flex items-center justify-between">
              <label class="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  v-model="store.loginForm.remember"
                  class="h-4 w-4 text-primary-400 focus:ring-primary-400 border-neutral-300 rounded"
                >
                <span class="text-sm text-neutral-700 dark:text-gray-300">Remember me</span>
              </label>
              <a href="#" class="text-sm text-primary-400 hover:text-primary-500 font-medium">Forgot Password?</a>
            </div>
            <button type="submit" class="btn-primary w-full py-4">Login</button>
          </form>
          
          <div class="mt-8 text-center">
            <p class="text-neutral-600 dark:text-gray-300">Don't have an account? 
              <a href="#" @click.prevent="store.switchModal('signup')" class="text-primary-400 hover:text-primary-500 font-semibold">Sign Up</a>
            </p>
          </div>
        </div>

        <!-- Signup Form -->
        <div v-if="store.modalType === 'signup'" class="p-10">
          <div class="text-center mb-10">
            <h2 class="text-3xl font-bold text-neutral-800 dark:text-white mb-3">Join LAAG</h2>
            <p class="text-neutral-600 dark:text-gray-300">Create an account to start exploring</p>
          </div>
          
          <form @submit.prevent="store.handleSignup" class="space-y-5">
            <div class="space-y-2">
              <label for="signup-name" class="block text-sm font-semibold text-neutral-700 dark:text-gray-300">Full Name</label>
              <input 
                type="text" 
                id="signup-name" 
                v-model="store.signupForm.name" 
                placeholder="Enter your full name"
                required
                class="input-field"
              >
            </div>
            <div class="space-y-2">
              <label for="signup-email" class="block text-sm font-semibold text-neutral-700 dark:text-gray-300">Email</label>
              <input 
                type="email" 
                id="signup-email" 
                v-model="store.signupForm.email" 
                placeholder="Enter your email"
                required
                class="input-field"
              >
            </div>
            <div class="space-y-2">
              <label for="signup-password" class="block text-sm font-semibold text-neutral-700 dark:text-gray-300">Password</label>
              <input 
                type="password" 
                id="signup-password" 
                v-model="store.signupForm.password" 
                placeholder="Create a password"
                required
                class="input-field"
              >
            </div>
            <div class="space-y-2">
              <label for="signup-confirm" class="block text-sm font-semibold text-neutral-700 dark:text-gray-300">Confirm Password</label>
              <input 
                type="password" 
                id="signup-confirm" 
                v-model="store.signupForm.confirmPassword" 
                placeholder="Confirm your password"
                required
                class="input-field"
              >
            </div>
            <div class="space-y-4">
              <label class="flex items-start space-x-2">
                <input 
                  type="checkbox" 
                  v-model="store.signupForm.terms" 
                  required
                  class="mt-1 h-4 w-4 text-primary-400 focus:ring-primary-400 border-neutral-300 rounded"
                >
                <span class="text-sm text-gray-700 dark:text-gray-300">I agree to the Terms and Conditions</span>
              </label>
            </div>
            <button type="submit" class="btn-primary w-full py-4">Create Account</button>
          </form>
          
          <div class="mt-8 text-center">
            <p class="text-neutral-600 dark:text-gray-300">Already have an account? 
              <a href="#" @click.prevent="store.switchModal('login')" class="text-primary-400 hover:text-primary-500 font-semibold">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { useAppStore } from '../store'

export default {
  name: 'AuthModal',
  setup() {
    const store = useAppStore()
    
    return {
      store
    }
  }
}
</script>

<style scoped>
/* AuthModal styles are now handled by Tailwind classes */
</style>
