<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
    <section class="py-20">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="section-title text-4xl md:text-5xl font-bold mb-4">
            Book Your Adventure
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to explore the Philippines? Let's plan your perfect trip!
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="card">
            <form @submit.prevent="handleBooking" class="space-y-8">
              <div class="space-y-6">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">
                  Personal Information
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label for="firstName" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      First Name
                    </label>
                    <input 
                      type="text" 
                      id="firstName" 
                      v-model="bookingForm.firstName" 
                      required
                      class="input-field"
                    >
                  </div>
                  <div class="space-y-2">
                    <label for="lastName" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Last Name
                    </label>
                    <input 
                      type="text" 
                      id="lastName" 
                      v-model="bookingForm.lastName" 
                      required
                      class="input-field"
                    >
                  </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      v-model="bookingForm.email" 
                      required
                      class="input-field"
                    >
                  </div>
                  <div class="space-y-2">
                    <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      v-model="bookingForm.phone" 
                      required
                      class="input-field"
                    >
                  </div>
                </div>
              </div>
              
              <div class="space-y-6">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">
                  Trip Details
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label for="destination" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Destination
                    </label>
                    <select 
                      id="destination" 
                      v-model="bookingForm.destination" 
                      required
                      class="input-field"
                    >
                      <option value="">Select a destination</option>
                      <option v-for="dest in store.destinations" :key="dest.name" :value="dest.name">
                        {{ dest.name }}
                      </option>
                    </select>
                  </div>
                  <div class="space-y-2">
                    <label for="package" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Package
                    </label>
                    <select 
                      id="package" 
                      v-model="bookingForm.package" 
                      required
                      class="input-field"
                    >
                      <option value="">Select a package</option>
                      <option v-for="offer in store.offers" :key="offer.title" :value="offer.title">
                        {{ offer.title }}
                      </option>
                    </select>
                  </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label for="departure" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Departure Date
                    </label>
                    <input 
                      type="date" 
                      id="departure" 
                      v-model="bookingForm.departure" 
                      required
                      class="input-field"
                    >
                  </div>
                  <div class="space-y-2">
                    <label for="return" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Return Date
                    </label>
                    <input 
                      type="date" 
                      id="return" 
                      v-model="bookingForm.return" 
                      required
                      class="input-field"
                    >
                  </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label for="travelers" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Number of Travelers
                    </label>
                    <select 
                      id="travelers" 
                      v-model="bookingForm.travelers" 
                      required
                      class="input-field"
                    >
                      <option value="">Select number</option>
                      <option value="1">1 Traveler</option>
                      <option value="2">2 Travelers</option>
                      <option value="3">3 Travelers</option>
                      <option value="4">4 Travelers</option>
                      <option value="5+">5+ Travelers</option>
                    </select>
                  </div>
                  <div class="space-y-2">
                    <label for="accommodation" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Accommodation Type
                    </label>
                    <select 
                      id="accommodation" 
                      v-model="bookingForm.accommodation" 
                      required
                      class="input-field"
                    >
                      <option value="">Select type</option>
                      <option value="economy">Economy</option>
                      <option value="standard">Standard</option>
                      <option value="deluxe">Deluxe</option>
                      <option value="luxury">Luxury</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div class="space-y-6">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">
                  Special Requests
                </h3>
                <div class="space-y-4">
                  <div class="space-y-2">
                    <label for="requests" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Additional Requests or Notes
                    </label>
                    <textarea 
                      id="requests" 
                      v-model="bookingForm.requests" 
                      rows="4" 
                      placeholder="Tell us about any special requirements, dietary restrictions, or preferences..."
                      class="input-field resize-none"
                    ></textarea>
                  </div>
                  
                  <div class="flex items-start space-x-3">
                    <input 
                      type="checkbox" 
                      id="newsletter"
                      v-model="bookingForm.newsletter"
                      class="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    >
                    <label for="newsletter" class="text-sm text-gray-700 dark:text-gray-300">
                      Subscribe to our newsletter for travel tips and special offers
                    </label>
                  </div>
                </div>
              </div>
              
              <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6" v-if="selectedPackage">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Booking Summary</h3>
                <div class="space-y-3">
                  <div class="flex justify-between">
                    <span class="text-gray-600 dark:text-gray-300">Package:</span>
                    <span class="font-medium text-gray-900 dark:text-white">{{ selectedPackage.title }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600 dark:text-gray-300">Duration:</span>
                    <span class="font-medium text-gray-900 dark:text-white">{{ selectedPackage.duration }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600 dark:text-gray-300">Price per person:</span>
                    <span class="font-medium text-gray-900 dark:text-white">₱{{ selectedPackage.price }}</span>
                  </div>
                  <div class="flex justify-between border-t border-gray-200 dark:border-gray-700 pt-3">
                    <span class="text-lg font-bold text-gray-900 dark:text-white">Total Price:</span>
                    <span class="text-lg font-bold text-primary-600 dark:text-primary-400">₱{{ calculateTotal() }}</span>
                  </div>
                </div>
              </div>
              
              <button type="submit" class="btn-primary w-full py-4 text-lg font-semibold">
                Book Now
              </button>
            </form>
          </div>
          
          <div class="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="card">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">Why Choose LAAG?</h3>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700 dark:text-gray-300">
                  <span class="mr-3">🏆</span>
                  Award-winning travel experiences
                </li>
                <li class="flex items-center text-gray-700 dark:text-gray-300">
                  <span class="mr-3">💰</span>
                  Best price guarantee
                </li>
                <li class="flex items-center text-gray-700 dark:text-gray-300">
                  <span class="mr-3">🔒</span>
                  Secure booking process
                </li>
                <li class="flex items-center text-gray-700 dark:text-gray-300">
                  <span class="mr-3">📞</span>
                  24/7 customer support
                </li>
                <li class="flex items-center text-gray-700 dark:text-gray-300">
                  <span class="mr-3">🌍</span>
                  Sustainable tourism practices
                </li>
                <li class="flex items-center text-gray-700 dark:text-gray-300">
                  <span class="mr-3">🏝️</span>
                  Local expert guides
                </li>
              </ul>
            </div>
            
            <div class="card">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">Booking Process</h3>
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                    <span class="text-sm font-bold text-primary-600 dark:text-primary-400">1</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white mb-1">Choose Your Adventure</h4>
                    <p class="text-gray-600 dark:text-gray-300 text-sm">Select your destination and package</p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                    <span class="text-sm font-bold text-primary-600 dark:text-primary-400">2</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white mb-1">Fill Out Details</h4>
                    <p class="text-gray-600 dark:text-gray-300 text-sm">Provide your travel information</p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                    <span class="text-sm font-bold text-primary-600 dark:text-primary-400">3</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white mb-1">Confirm & Pay</h4>
                    <p class="text-gray-600 dark:text-gray-300 text-sm">Review and complete your booking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useAppStore } from '../store'

export default {
  name: 'Booking',
  setup() {
    const store = useAppStore()
    
    const bookingForm = ref({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      destination: '',
      package: '',
      departure: '',
      return: '',
      travelers: '',
      accommodation: '',
      requests: '',
      newsletter: false
    })
    
    const selectedPackage = computed(() => {
      return store.offers.find(offer => offer.title === bookingForm.value.package)
    })
    
    const calculateTotal = () => {
      if (selectedPackage.value && bookingForm.value.travelers) {
        const travelers = bookingForm.value.travelers === '5+' ? 5 : parseInt(bookingForm.value.travelers)
        const price = parseInt(selectedPackage.value.price.replace(/,/g, ''))
        return (price * travelers).toLocaleString()
      }
      return '0'
    }
    
    const handleBooking = () => {
      console.log('Booking submitted:', bookingForm.value)
      // Open login modal instead of showing alert
      store.openModal('login')
    }
    
    return {
      store,
      bookingForm,
      selectedPackage,
      calculateTotal,
      handleBooking
    }
  }
}
</script>

<style scoped>
/* Booking page styles are now handled by Tailwind classes */
</style>
