<template>
  <div>
    <!-- Contact Information Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-semibold text-gray-800 mb-8">Contact Information</h2>
        <p class="text-lg text-gray-600 mb-4">
          Feel free to reach out to us through the following channels:
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <!-- Address -->
          <div class="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Our Address</h3>
            <p class="text-gray-600">123 Main St, Rabat, Morocco</p>
          </div>

          <!-- Phone -->
          <div class="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Phone</h3>
            <p class="text-gray-600">+212 123 456 789</p>
          </div>

          <!-- Email -->
          <div class="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Email</h3>
            <p class="text-gray-600">contact@adrarsystems.com</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-semibold text-gray-800 text-center mb-8">Get in Touch</h2>
        <form action="#" method="POST" class="max-w-2xl mx-auto space-y-6">
          <div class="flex flex-col sm:flex-row gap-6">
            <div class="flex-1">
              <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                class="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div class="flex-1">
              <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              class="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            ></textarea>
          </div>

          <div class="text-center">
            <button
              type="submit"
              class="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>

    <!-- Map Section (Optional) -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-semibold text-gray-800 mb-8">Find Us</h2>
        <!-- Placeholder for map (you can replace this with an embedded map or a custom one) -->
        <div class="relative w-full h-64 bg-gray-200">
          <iframe
            class="absolute top-0 left-0 w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.758062388081!2d-7.599243682242973!3d33.59019587973146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdba6be325b397fd%3A0x697d1e981f8767b1!2sRabat!5e0!3m2!1sen!2sma!4v1641401494007!5m2!1sen!2sma"
            width="100%"
            height="100%"
            style="border: 0;"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>

    <!-- Contact CTA Section -->
    <section class="bg-blue-600 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-semibold mb-4">Have any questions?</h2>
        <p class="text-lg mb-6">We’re here to help. Reach out to us today!</p>
        <a
          href="mailto:contact@adrarsystems.com"
          class="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
        >
          Email Us
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
