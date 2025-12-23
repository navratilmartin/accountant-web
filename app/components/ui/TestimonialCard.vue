<script setup lang="ts">
interface Props {
  name: string
  role: string
  quote: string
  rating?: number
  avatar?: string
}

withDefaults(defineProps<Props>(), {
  rating: 5,
})
</script>
<template>
  <div class="w-[350px] shrink-0 hover:shadow-lg transition-shadow p-6 bg-white border-1 border-primary-100 rounded-xl shadow-sm shadow-primary-100">
    <blockquote class="text-base sm:text-lg leading-relaxed mb-8 text-gray-700 h-55">
      "{{ quote }}"
    </blockquote>

    <div class="flex items-center gap-1 mb-4">
      <UIcon 
        v-for="i in rating" 
        :key="i" 
        name="i-heroicons-star-solid" 
        class="text-yellow-400 w-5 h-5" 
      />
    </div>

    <div class="flex items-center pt-4 border-t border-gray-100 gap-4 h-18">
      <div class="w-12 h-12 flex items-center justify-center rounded-full overflow-hidden bg-gray-100 mr-2">
        <UAvatar 
          v-if="avatar"
          :src="avatar" 
          :alt="name" 
          size="xl"
          class="w-12 h-12"
        />
        <UAvatar 
          v-else
          icon="i-heroicons-user"
          size="xl"
          class="w-12 h-12"
        />
      </div>
      <div>
        <h4 class="font-semibold text-gray-900">{{ name }}</h4>
        <p class="text-sm text-gray-600 text-nowrap">{{ role }}</p>
      </div>
    </div>
  </div>
</template>

