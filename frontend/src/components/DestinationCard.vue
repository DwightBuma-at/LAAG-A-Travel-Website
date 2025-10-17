<template>
  <div class="card-hover group cursor-pointer" @click="handleClick">
    <div class="relative overflow-hidden rounded-t-3xl" @click.stop="openTourismWebsite">
      <img 
        :src="destination.image" 
        :alt="destination.name"
        class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
      <div class="absolute bottom-6 left-6 right-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <span class="text-2xl font-bold drop-shadow-lg">{{ destination.name }}</span>
      </div>
    </div>
    <div class="p-8">
      <h3 class="text-xl font-bold text-neutral-800 dark:text-white mb-4">{{ destination.name }}</h3>
      <p class="text-neutral-600 dark:text-gray-300 mb-6 line-clamp-3 leading-relaxed">{{ destination.description }}</p>
      <div class="flex flex-wrap gap-2 mb-6">
        <span 
          v-for="feature in destination.features" 
          :key="feature" 
          class="px-4 py-2 bg-secondary-50 text-secondary-500 text-xs font-semibold rounded-2xl hover:bg-secondary-100 transition-colors duration-200"
        >
          {{ feature }}
        </span>
      </div>
      <div class="flex items-center justify-between pt-4 border-t border-neutral-100">
        <span class="text-xl font-bold text-primary-400 dark:text-primary-400">From ₱{{ destination.startingPrice }}</span>
        <span class="text-sm text-neutral-500 dark:text-gray-400 bg-neutral-100 px-3 py-1 rounded-full">{{ destination.duration }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { useAppStore } from '../store'

export default {
  name: 'DestinationCard',
  props: {
    destination: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const store = useAppStore()
    
    const handleClick = () => {
      store.setActiveDestination(props.index)
    }
    
    const openTourismWebsite = () => {
      if (props.destination.tourismUrl) {
        window.open(props.destination.tourismUrl, '_blank')
      }
    }
    
    return {
      handleClick,
      openTourismWebsite
    }
  }
}
</script>

<style scoped>
/* DestinationCard styles are now handled by Tailwind classes */
</style>
