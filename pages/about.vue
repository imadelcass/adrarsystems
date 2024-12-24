<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-blue-600 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
        <p class="text-lg sm:text-xl mb-8">
          Learn more about who we are, what we stand for, and how we can help you.
        </p>
      </div>
    </section>

    <!-- Our Mission Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          At Adrar Systems, our mission is to empower businesses by delivering innovative and scalable tech solutions. We believe in the power of technology to streamline processes, enhance customer experiences, and drive growth for companies of all sizes.
        </p>
      </div>
    </section>

    <!-- Our Values Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-semibold text-gray-800 mb-6">Our Values</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Value 1 -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Innovation</h3>
            <p class="text-gray-600">
              We are always exploring new technologies and strategies to provide the most effective solutions for our clients.
            </p>
          </div>

          <!-- Value 2 -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Customer-Centricity</h3>
            <p class="text-gray-600">
              Our clients are at the heart of everything we do. We strive to understand their needs and exceed their expectations.
            </p>
          </div>

          <!-- Value 3 -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Integrity</h3>
            <p class="text-gray-600">
              We build long-lasting relationships with our clients based on trust, transparency, and ethical practices.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Team Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-semibold text-gray-800 mb-6">Meet Our Team</h2>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Our team is composed of experienced professionals who are passionate about technology and committed to delivering exceptional results. Get to know the talented people driving Adrar Systems forward.
        </p>
        <div class="flex flex-wrap justify-center gap-8">
          <!-- Team Member 1 -->
          <div class="bg-white p-6 rounded-lg shadow-lg w-60">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              class="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 class="text-xl font-semibold text-gray-800">John Doe</h3>
            <p class="text-gray-600">CEO & Founder</p>
          </div>

          <!-- Team Member 2 -->
          <div class="bg-white p-6 rounded-lg shadow-lg w-60">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              class="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 class="text-xl font-semibold text-gray-800">Jane Smith</h3>
            <p class="text-gray-600">Lead Developer</p>
          </div>

          <!-- Team Member 3 -->
          <div class="bg-white p-6 rounded-lg shadow-lg w-60">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              class="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 class="text-xl font-semibold text-gray-800">Mike Johnson</h3>
            <p class="text-gray-600">Marketing Manager</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
/* Add any custom styles here */
</style>