<template>
  <div class="bg-secondary text-white !w-full">
    <!-- Header -->
    <div
      :style="{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
    >
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <header class="p-6 !w-full" data-aos="fade-down" data-aos-delay="100">
        <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-4xl font-bold text-primary">
            {{ $t("adrar-systems") }}
          </h1>
          <nav>
            <ul class="flex space-x-6">
              <li>
                <a href="#services" class="hover:text-primary">{{
                  $t("services")
                }}</a>
              </li>
              <li>
                <a href="#about" class="hover:text-primary">{{
                  $t("about-us")
                }}</a>
              </li>
              <li>
                <a href="#contact" class="hover:text-primary">{{
                  $t("contact")
                }}</a>
              </li>
              <li>
                <a href="#pricing" class="hover:text-primary">{{
                  $t("pricing")
                }}</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section
        class="relative bg-cover bg-center h-[600px] !w-full"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        <div
          class="container mx-auto text-center text-white relative z-10 py-24"
        >
          <h2 class="text-5xl font-bold mb-4">
            {{ $t("innovative-solutions") }}
          </h2>
          <p class="text-xl mb-6">{{ $t("create-cutting-edge-solutions") }}</p>
          <a
            href="#contact"
            class="bg-primary text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-secondary transition"
            >{{ $t("get-in-touch") }}</a
          >
        </div>
      </section>
    </div>

    <!-- Services Section -->
    <section
      id="services"
      class="py-20 bg-dark !w-full"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold text-primary mb-6">
          {{ $t("our-services") }}
        </h2>
        <p class="text-xl text-gray-400 mb-12">
          {{ $t("we-offer-top-notch-services") }}
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div
            class="bg-dark-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <h3 class="text-2xl font-semibold text-primary">
              {{ $t("web-development") }}
            </h3>
            <p class="text-gray-300 mt-4">
              {{ $t("custom-websites-and-applications") }}
            </p>
          </div>
          <div
            class="bg-dark-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h3 class="text-2xl font-semibold text-primary">
              {{ $t("app-development") }}
            </h3>
            <p class="text-gray-300 mt-4">
              {{ $t("mobile-apps-for-seamless-experience") }}
            </p>
          </div>
          <div
            class="bg-dark-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <h3 class="text-2xl font-semibold text-primary">
              {{ $t("cloud-solutions") }}
            </h3>
            <p class="text-gray-300 mt-4">
              {{ $t("scalable-cloud-solutions") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Us Section -->
    <section
      id="about"
      class="py-8 md:py-20 bg-light !w-full"
      data-aos="fade-up"
      data-aos-delay="700"
    >
      <div class="container mx-auto text-center px-6">
        <h2 class="text-3xl font-bold text-primary mb-4 md:mb-6">
          {{ $t("about-adrar-systems") }}
        </h2>
        <p class="text-xl text-gray-400 mb-6 md:mb-8">
          {{ $t("adrar-systems-description") }}
        </p>
        <div
          class="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12"
        >
          <div class="w-full max-w-sm md:w-1/2">
            <img
              src="https://via.placeholder.com/500"
              alt="{{ $t('about-us') }}"
              class="rounded-lg shadow-lg w-full h-auto"
              data-aos="fade-right"
              data-aos-delay="800"
            />
          </div>
          <div
            class="w-full md:w-1/2 text-left"
            data-aos="fade-left"
            data-aos-delay="900"
          >
            <p class="text-gray-300 text-base md:text-lg leading-relaxed">
              {{ $t("we-are-a-passionate-team") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section
      id="pricing"
      class="py-20 bg-dark !w-full"
      data-aos="fade-up"
      data-aos-delay="1000"
    >
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold text-primary mb-6">
          {{ $t("our-pricing") }}
        </h2>
        <p class="text-xl text-gray-400 mb-12">
          {{ $t("flexible-pricing-plans") }}
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div
            class="bg-dark-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all"
            data-aos="flip-up"
            data-aos-delay="1100"
          >
            <h3 class="text-2xl font-semibold text-primary">
              {{ $t("basic-plan") }}
            </h3>
            <p class="text-gray-300 mt-4">$29/month</p>
            <ul class="text-gray-300 mt-4">
              <li>{{ $t("responsive-website") }}</li>
              <li>{{ $t("1-app-integration") }}</li>
              <li>{{ $t("basic-seo") }}</li>
            </ul>
            <a
              href="#contact"
              class="bg-primary text-white py-2 px-6 rounded-md mt-6 inline-block"
              >{{ $t("get-started") }}</a
            >
          </div>
          <div
            class="bg-dark-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all"
            data-aos="flip-up"
            data-aos-delay="1200"
          >
            <h3 class="text-2xl font-semibold text-primary">
              {{ $t("premium-plan") }}
            </h3>
            <p class="text-gray-300 mt-4">$79/month</p>
            <ul class="text-gray-300 mt-4">
              <li>{{ $t("advanced-website-features") }}</li>
              <li>{{ $t("up-to-3-app-integrations") }}</li>
              <li>{{ $t("advanced-seo-marketing") }}</li>
            </ul>
            <a
              href="#contact"
              class="bg-primary text-white py-2 px-6 rounded-md mt-6 inline-block"
              >{{ $t("get-started") }}</a
            >
          </div>
          <div
            class="bg-dark-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all"
            data-aos="flip-up"
            data-aos-delay="1300"
          >
            <h3 class="text-2xl font-semibold text-primary">
              {{ $t("enterprise-plan") }}
            </h3>
            <p class="text-gray-300 mt-4">$149/month</p>
            <ul class="text-gray-300 mt-4">
              <li>{{ $t("fully-custom-solutions") }}</li>
              <li>{{ $t("unlimited-app-integrations") }}</li>
              <li>{{ $t("dedicated-support") }}</li>
            </ul>
            <a
              href="#contact"
              class="bg-primary text-white py-2 px-6 rounded-md mt-6 inline-block"
              >{{ $t("get-started") }}</a
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section
      id="contact"
      class="py-20 bg-light !w-full"
      data-aos="fade-up"
      data-aos-delay="1400"
    >
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold text-primary mb-6">
          {{ $t("contact-us") }}
        </h2>
        <p class="text-xl text-gray-400 mb-12">
          {{ $t("we-are-here-to-help") }}
        </p>
        <form action="#" method="post" class="max-w-lg mx-auto">
          <input
            type="text"
            name="name"
            class="bg-dark-100 text-white p-4 rounded-lg mb-4 w-full"
            :placeholder="$t('your-name')"
          />
          <input
            type="email"
            name="email"
            class="bg-dark-100 text-white p-4 rounded-lg mb-4 w-full"
            :placeholder="$t('your-email')"
          />
          <textarea
            name="message"
            class="bg-dark-100 text-white p-4 rounded-lg mb-4 w-full"
            rows="6"
            :placeholder="$t('your-message')"
          ></textarea>
          <button
            type="submit"
            class="bg-primary text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-secondary transition"
          >
            {{ $t("send-message") }}
          </button>
        </form>
      </div>
    </section>
    <footer class="bg-dark py-12">
      <div class="container mx-auto text-center text-white">
        <div class="flex justify-center mb-6">
          <a href="#" class="mx-4 hover:text-primary transition">Facebook</a>
          <a href="#" class="mx-4 hover:text-primary transition">Twitter</a>
          <a href="#" class="mx-4 hover:text-primary transition">LinkedIn</a>
        </div>
        <p class="text-lg mb-4">{{ $t("footer-copyright") }}</p>
        <div class="text-sm">
          <a href="#" class="text-gray-400 hover:text-primary transition">{{
            $t("footer-privacy-policy")
          }}</a>
          |
          <a href="#" class="text-gray-400 hover:text-primary transition">{{
            $t("footer-terms-of-service")
          }}</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import heroImage from "~/assets/img/hero.jpg";
</script>
