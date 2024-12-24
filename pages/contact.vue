<template>
  <div>
    <main class="bg-gray-50 py-20 px-4">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900">Contact Us</h1>
        <p class="mt-4 text-xl text-gray-700">
          We’d love to hear from you! Get in touch with us today.
        </p>
      </div>

      <form class="max-w-2xl mx-auto mt-8 space-y-6">
        <div>
          <label for="name" class="block text-lg text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            class="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label for="email" class="block text-lg text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            class="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label for="message" class="block text-lg text-gray-700"
            >Message</label
          >
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            class="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg"
        >
          Submit
        </button>
      </form>
    </main>
  </div>
</template>
