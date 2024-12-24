<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-blue-600 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="text-4xl sm:text-5xl font-bold mb-4">
          Welcome to Adrar Systems
        </h1>
        <p class="text-lg sm:text-xl mb-8">
          Your trusted partner in tech solutions for the modern world.
        </p>
        <a
          href="/contact"
          class="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>

    <!-- About Us Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-semibold text-gray-800 mb-6">About Us</h2>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          At Adrar Systems, we specialize in providing innovative tech solutions
          to help businesses grow. We focus on crafting software that improves
          your operational efficiency, making your processes smoother and more
          cost-effective.
        </p>
        <a
          href="/about"
          class="text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
        >
          Learn More
        </a>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-semibold text-gray-800 mb-12">Our Services</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Service 1 -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">
              Web Development
            </h3>
            <p class="text-gray-600 mb-4">
              We build responsive, modern websites that are tailored to your
              business needs.
            </p>
            <a
              href="/contact"
              class="text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
            >
              Get Started
            </a>
          </div>

          <!-- Service 2 -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">
              Mobile Applications
            </h3>
            <p class="text-gray-600 mb-4">
              We design and develop user-friendly mobile apps for both iOS and
              Android platforms.
            </p>
            <a
              href="/contact"
              class="text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
            >
              Get Started
            </a>
          </div>

          <!-- Service 3 -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">
              SEO & Marketing
            </h3>
            <p class="text-gray-600 mb-4">
              Boost your online presence with our comprehensive SEO and digital
              marketing services.
            </p>
            <a
              href="/contact"
              class="text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA Section -->
    <section class="bg-blue-600 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-semibold mb-4">
          Ready to start your project?
        </h2>
        <p class="text-lg mb-6">
          Get in touch with us today and let’s bring your ideas to life.
        </p>
        <a
          href="/contact"
          class="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
