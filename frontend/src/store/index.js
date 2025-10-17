import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    // Theme
    isDarkMode: false,
    
    // Modal
    showModal: false,
    modalType: 'login', // 'login' or 'signup'
    
    // Forms
    loginForm: {
      email: '',
      password: '',
      remember: false
    },
    signupForm: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false
    },
    
    // Background Slideshow
    currentSlide: 0,
    slideInterval: null,
    touristSpots: [
      {
        name: 'Bohol',
        image: '/images/boohl.jpg'
      },
      {
        name: 'Cebu',
        image: '/images/cebu.jpg'
      },
      {
        name: 'Siargao',
        image: '/images/siargao.jpeg'
      },
      {
        name: 'Palawan',
        image: '/images/palawan.jpeg'
      },
      {
        name: 'Boracay',
        image: '/images/boracay.jpg'
      },
      {
        name: 'Manila',
        image: '/images/manila.jpg'
      }
    ],
    
    // Destinations
    destinations: [
      {
        name: 'Palawan',
        description: 'Discover pristine beaches, crystal-clear waters, and stunning limestone cliffs in one of the world\'s most beautiful islands.',
        image: '/images/palawan.jpeg',
        features: ['Beaches', 'Island Hopping', 'Snorkeling', 'El Nido'],
        startingPrice: '15,000',
        duration: '3-5 days',
        tourismUrl: 'https://philippinetourismusa.com/top-destinations/palawan/'
      },
      {
        name: 'Boracay',
        description: 'Experience the famous White Beach, vibrant nightlife, and world-class resorts in this tropical paradise.',
        image: '/images/boracay.jpg',
        features: ['White Beach', 'Water Sports', 'Nightlife', 'Resorts'],
        startingPrice: '12,000',
        duration: '3-4 days',
        tourismUrl: 'https://philippinetourismusa.com/top-destinations/boracay/'
      },
      {
        name: 'Cebu',
        description: 'Explore rich history, beautiful beaches, and vibrant culture in the Queen City of the South.',
        image: '/images/cebu.jpg',
        features: ['Historical Sites', 'Beaches', 'Waterfalls', 'Diving'],
        startingPrice: '10,000',
        duration: '4-6 days',
        tourismUrl: 'https://philippinetourismusa.com/top-destinations/cebu/'
      },
      {
        name: 'Bohol',
        description: 'Meet the famous Chocolate Hills, tarsiers, and enjoy pristine beaches in this unique island province.',
        image: '/images/boohl.jpg',
        features: ['Chocolate Hills', 'Tarsiers', 'Beaches', 'Panglao'],
        startingPrice: '8,000',
        duration: '2-3 days',
        tourismUrl: 'https://philippinetourismusa.com/top-destinations/bohol/'
      },
      {
        name: 'Siargao',
        description: 'Ride the waves in the surfing capital of the Philippines and discover untouched natural beauty.',
        image: '/images/siargao.jpeg',
        features: ['Surfing', 'Lagoons', 'Island Hopping', 'Cloud 9'],
        startingPrice: '18,000',
        duration: '4-5 days',
        tourismUrl: 'https://philippinetourismusa.com/top-destinations/siargao/'
      },
      {
        name: 'Manila',
        description: 'Experience the vibrant capital city with rich history, modern attractions, and authentic Filipino culture.',
        image: '/images/manila.jpg',
        features: ['Intramuros', 'Rizal Park', 'Shopping', 'Cultural Sites'],
        startingPrice: '6,000',
        duration: '2-3 days',
        tourismUrl: 'https://philippinetourismusa.com/top-destinations/manila/'
      }
    ],
    
    // Offers
    offers: [
      {
        title: 'Palawan Paradise Package',
        description: 'Complete island hopping experience with luxury accommodations',
        image: '/images/palawan.jpeg',
        accommodation: '5-star resort',
        flight: 'Included',
        duration: '5 days / 4 nights',
        originalPrice: '25,000',
        price: '18,500',
        discount: '26',
        featured: true
      },
      {
        title: 'Boracay Beach Escape',
        description: 'Relax on the famous White Beach with all-inclusive resort stay',
        image: '/images/boracay.jpg',
        accommodation: 'Beachfront resort',
        flight: 'Included',
        duration: '4 days / 3 nights',
        originalPrice: '18,000',
        price: '13,500',
        discount: '25',
        featured: false
      },
      {
        title: 'Cebu Heritage Tour',
        description: 'Explore historical sites, beautiful beaches, and cultural experiences',
        image: '/images/cebu.jpg',
        accommodation: 'Boutique hotel',
        flight: 'Included',
        duration: '5 days / 4 nights',
        originalPrice: '16,000',
        price: '12,800',
        discount: '20',
        featured: false
      },
      {
        title: 'Siargao Surf Adventure',
        description: 'Learn to surf and explore pristine islands in the surfing capital',
        image: '/images/siargao.jpeg',
        accommodation: 'Surf resort',
        flight: 'Included',
        duration: '6 days / 5 nights',
        originalPrice: '22,000',
        price: '17,600',
        discount: '20',
        featured: true
      },
      {
        title: 'Bohol Nature Experience',
        description: 'Discover Chocolate Hills, meet tarsiers, and enjoy pristine beaches',
        image: '/images/boohl.jpg',
        accommodation: 'Eco-resort',
        flight: 'Included',
        duration: '4 days / 3 nights',
        originalPrice: '15,000',
        price: '11,500',
        discount: '23',
        featured: false
      },
      {
        title: 'Manila City Explorer',
        description: 'Discover the capital city with historical sites, modern attractions, and authentic Filipino culture',
        image: '/images/manila.jpg',
        accommodation: 'City hotel',
        flight: 'Included',
        duration: '3 days / 2 nights',
        originalPrice: '12,000',
        price: '9,200',
        discount: '23',
        featured: false
      }
    ]
  }),
  
  actions: {
    // Theme Toggle
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light')
    },
    
    // Modal Methods
    openModal(type) {
      this.modalType = type
      this.showModal = true
      document.body.style.overflow = 'hidden'
    },
    
    closeModal() {
      this.showModal = false
      document.body.style.overflow = 'auto'
      this.resetForms()
    },
    
    switchModal(type) {
      this.modalType = type
      this.resetForms()
    },
    
    resetForms() {
      this.loginForm = {
        email: '',
        password: '',
        remember: false
      }
      this.signupForm = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: false
      }
    },
    
    // Form Handlers
    handleLogin() {
      console.log('Login submitted:', this.loginForm)
      alert(`Welcome back! (Demo: ${this.loginForm.email})`)
      this.closeModal()
    },
    
    handleSignup() {
      if (this.signupForm.password !== this.signupForm.confirmPassword) {
        alert('Passwords do not match!')
        return
      }
      console.log('Signup submitted:', this.signupForm)
      alert(`Account created for ${this.signupForm.name}! (Demo)`)
      this.closeModal()
    },
    
    // Slideshow Methods
    startSlideshow() {
      this.slideInterval = setInterval(() => {
        this.nextSlide()
      }, 3000)
    },
    
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.touristSpots.length
    },
    
    
    // Destination Methods
    setActiveDestination(index) {
      console.log('Selected destination:', this.destinations[index])
    },
    
    // Initialize
    init() {
      // Check for saved theme preference or default to light mode
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme === 'dark') {
        this.isDarkMode = true
        document.documentElement.classList.add('dark')
      } else {
        this.isDarkMode = false
        document.documentElement.classList.remove('dark')
      }
      
      // Start background slideshow
      this.startSlideshow()
    }
  }
})
