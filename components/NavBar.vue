<template>
  <header class="bg-blue-600">
    <div class="max-w-7xl mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a href="/" class="text-white text-2xl font-bold">Adrar Systems</a>

        <!-- Hamburger Icon (for mobile) -->
        <div class="lg:hidden">
          <button @click="toggleMenu" class="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <!-- Desktop Menu -->
        <nav class="hidden lg:flex space-x-8">
          <a href="/" class="text-white hover:text-gray-200">Home</a>
          <a href="/about" class="text-white hover:text-gray-200">About Us</a>
          <a href="/contact" class="text-white hover:text-gray-200">Contact</a>
        </nav>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="lg:hidden mt-4 space-y-4">
        <a href="/" class="block text-white">Home</a>
        <a href="/about" class="block text-white">About Us</a>
        <a href="/contact" class="block text-white">Contact</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
/* Optional: Add hover transition for a smoother effect */
a {
  transition: color 0.3s;
}
</style>
