<template>
  <div class="min-h-screen relative">
    <!-- Background Slideshow -->
    <div class="background-slideshow">
      <div 
        v-for="(spot, index) in store.touristSpots" 
        :key="index"
        class="slide"
        :class="{ active: store.currentSlide === index }"
        :style="{ backgroundImage: `url(${spot.image})` }"
      >
        <div class="overlay"></div>
      </div>
    </div>

    <!-- Hero Section -->
    <section id="home" class="relative min-h-screen flex items-center justify-center text-center px-4 z-10">
      <div class="max-w-4xl mx-auto z-10">
        <h2 class="text-lg md:text-xl text-white/90 mb-4 font-light tracking-wider uppercase">
          Welcome to the Philippines
        </h2>
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Discover Your Next 
          <span class="gradient-text">Adventure</span>
        </h1>
        <p class="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience the breathtaking beauty of the Philippines. From pristine beaches 
          to vibrant culture, your perfect escape awaits.
        </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              class="bg-primary-400 hover:bg-primary-500 text-white font-semibold rounded-3xl px-10 py-4 text-lg transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-primary-100 active:scale-95" 
              @click="store.openModal('signup')"
            >
              Start Exploring
            </button>
            <button class="bg-white/10 backdrop-blur-md text-white font-semibold rounded-3xl px-10 py-4 text-lg border-2 border-white/40 hover:bg-white/20 hover:border-white/60 transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/20 active:scale-95">
              Learn More
            </button>
          </div>
        
        <!-- Current Location Badge -->
        <div class="inline-flex items-center bg-white/20 backdrop-blur-xl rounded-2xl px-4 py-2 border border-white/30 shadow-2xl group hover:bg-white/30 transition-all duration-500 hover:scale-105 animate-slide-up">
          <!-- Custom Modern Location Icon -->
          <div class="relative mr-3">
            <div class="w-6 h-6 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 animate-pulse-slow">
              <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <!-- Pulse Animation -->
            <div class="absolute inset-0 w-6 h-6 bg-primary-400/30 rounded-full animate-ping"></div>
          </div>
          <div class="text-left">
            <div class="text-white font-bold text-base tracking-wide">{{ store.touristSpots[store.currentSlide].name }}</div>
          </div>
        </div>
      </div>

    </section>

    <!-- Destination Section -->
    <section id="destination" class="py-24 bg-gradient-to-br from-neutral-100 via-white to-neutral-50 dark:from-dark-900 dark:to-dark-800">
      <div class="container-custom">
        <div class="text-center mb-20">
          <h2 class="section-title text-4xl md:text-5xl font-bold mb-6">
            Popular Destinations
          </h2>
          <p class="text-lg text-neutral-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore the most beautiful places in the Philippines
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DestinationCard 
            v-for="(destination, index) in store.destinations" 
            :key="index"
            :destination="destination"
            :index="index"
          />
        </div>
      </div>
    </section>

    <!-- Offers Section -->
    <section id="offers" class="py-24 bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 dark:from-dark-800 dark:to-dark-700">
      <div class="container-custom">
        <div class="text-center mb-20">
          <h2 class="section-title text-4xl md:text-5xl font-bold mb-6">
            Special Offers
          </h2>
            <p class="text-lg text-neutral-600 dark:text-gray-300 max-w-2xl mx-auto">
              Unbeatable deals for your next adventure
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div 
            v-for="(offer, index) in store.offers" 
            :key="index"
            class="card-hover group relative"
          >
            <div class="absolute top-5 right-5 bg-accent-400 text-white px-4 py-2 rounded-full text-sm font-bold z-10 shadow-soft" v-if="offer.discount">{{ offer.discount }}% OFF</div>
            <div class="relative overflow-hidden rounded-t-3xl">
              <img :src="offer.image" :alt="offer.title" class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500">
            </div>
            <div class="p-8">
              <h3 class="text-xl font-bold text-neutral-800 dark:text-white mb-3">{{ offer.title }}</h3>
                <p class="text-neutral-600 dark:text-gray-300 mb-6 leading-relaxed">{{ offer.description }}</p>
              <div class="space-y-3 mb-6">
                <div class="flex items-center text-neutral-600">
                  <svg class="w-5 h-5 mr-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                  <span class="text-sm">{{ offer.accommodation }}</span>
                </div>
                <div class="flex items-center text-neutral-600">
                  <svg class="w-5 h-5 mr-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                  </svg>
                  <span class="text-sm">{{ offer.flight }}</span>
                </div>
                <div class="flex items-center text-neutral-600">
                  <svg class="w-5 h-5 mr-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span class="text-sm">{{ offer.duration }}</span>
                </div>
              </div>
              <div class="flex items-center justify-between mb-6 pb-6 border-t border-neutral-100 pt-6">
                <div class="flex flex-col">
                  <span class="text-base text-neutral-400 line-through" v-if="offer.originalPrice">₱{{ offer.originalPrice }}</span>
                  <span class="text-3xl font-bold text-primary-400 dark:text-primary-400">₱{{ offer.price }}</span>
                    <span class="text-sm text-neutral-500">per person</span>
                </div>
              </div>
              <button class="btn-primary w-full py-4" @click="store.openModal('login')">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useAppStore } from '../store'
import DestinationCard from '../components/DestinationCard.vue'

export default {
  name: 'Home',
  components: {
    DestinationCard
  },
  setup() {
    const store = useAppStore()
    
    return {
      store
    }
  }
}
</script>

<style scoped>
/* Container */
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Section Headers */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 3rem;
  font-weight: 800;
  color: var(--light-text);
  margin-bottom: 1rem;
}

.dark-mode .section-title {
  color: var(--dark-text);
}

.section-subtitle {
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.dark-mode .section-subtitle {
  color: #aaa;
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 2rem 4rem;
  position: relative;
}

.hero-content {
  max-width: 900px;
  text-align: center;
  color: white;
  z-index: 10;
}

.hero-subtitle {
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  opacity: 0.9;
  animation: fadeInUp 1s ease;
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  animation: fadeInUp 1s ease 0.2s both;
}

.hero-title .highlight {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  animation: fadeInUp 1s ease 0.4s both;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 3rem;
  animation: fadeInUp 1s ease 0.6s both;
}

.btn-primary, .btn-secondary {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  font-family: 'Poppins', sans-serif;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(255, 107, 107, 0.5);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: white;
  transform: translateY(-3px);
}

/* Location Badge */
.location-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: fadeInUp 1s ease 0.8s both;
}

.location-icon {
  font-size: 1.2rem;
}

.location-text {
  font-size: 1rem;
  font-weight: 600;
  color: white;
}

/* Slide Navigation */
.slide-navigation {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.8rem;
  z-index: 100;
}

.slide-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  border: 2px solid rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: all 0.3s ease;
}

.slide-dot:hover {
  background: rgba(255, 255, 255, 0.6);
  transform: scale(1.2);
}

.slide-dot.active {
  background: white;
  width: 40px;
  border-radius: 10px;
}

/* Destination Section */
.destination-section {
  padding: 8rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  transition: background 0.3s ease;
}

.dark-mode .destination-section {
  background: linear-gradient(135deg, var(--dark-bg) 0%, var(--dark-secondary) 100%);
}

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

/* Offers Section */
.offers-section {
  padding: 8rem 0;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  transition: background 0.3s ease;
}

.dark-mode .offers-section {
  background: linear-gradient(135deg, var(--dark-secondary) 0%, var(--dark-bg) 100%);
}

.offers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.offer-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
}

.dark-mode .offer-card {
  background: var(--dark-secondary);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.offer-card.featured {
  transform: scale(1.05);
  border: 3px solid var(--primary-color);
}

.offer-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--primary-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.9rem;
  z-index: 10;
}

.offer-image {
  height: 200px;
  overflow: hidden;
}

.offer-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.offer-card:hover .offer-image img {
  transform: scale(1.1);
}

.offer-content {
  padding: 2rem;
}

.offer-content h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--light-text);
  margin-bottom: 1rem;
}

.dark-mode .offer-content h3 {
  color: var(--dark-text);
}

.offer-content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.dark-mode .offer-content p {
  color: #aaa;
}

.offer-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 0.9rem;
}

.dark-mode .detail-item {
  color: #aaa;
}

.detail-item .icon {
  font-size: 1.1rem;
}

.offer-price {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.original-price {
  text-decoration: line-through;
  color: #999;
  font-size: 0.9rem;
}

.current-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
}

.price-note {
  color: #666;
  font-size: 0.8rem;
}

.dark-mode .price-note {
  color: #aaa;
}

.btn-offer {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
}

.btn-offer:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 107, 107, 0.3);
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 968px) {
  .hero-title {
    font-size: 3rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .section-title {
    font-size: 2rem;
  }

  .destinations-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .offers-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 640px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }
}
</style>

