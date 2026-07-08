<template>
  <footer class="bg-sand dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800">
    <div class="max-w-screen-xl mx-auto px-4 py-12 lg:px-6">
      <div class="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <!-- Brand -->
        <div class="max-w-sm">
          <router-link to="/" class="flex items-center mb-4">
            <img src="/icons/icon-192.png" class="h-8 w-8 mr-3" alt="Wave Tutor logo" />
            <span class="text-2xl font-display font-semibold text-stone-900 dark:text-stone-50">Wave Tutor</span>
          </router-link>
          <p class="text-stone-600 dark:text-stone-400 leading-relaxed">
            Personalized, conversational tutoring for students across the United States.
          </p>
        </div>

        <!-- Links -->
        <div class="grid grid-cols-2 gap-10 sm:gap-16">
          <div>
            <h3 class="text-sm font-semibold uppercase tracking-wide text-stone-900 dark:text-stone-100 mb-4">Explore</h3>
            <ul class="space-y-3 text-stone-600 dark:text-stone-400">
              <li><router-link to="/" class="hover:text-primary transition-colors">Home</router-link></li>
              <li><router-link to="/tutors/" class="hover:text-primary transition-colors">Our Tutors</router-link></li>
              <li><router-link to="/pricing/" class="hover:text-primary transition-colors">Pricing</router-link></li>
              <li><router-link to="/contact/" class="hover:text-primary transition-colors">Contact</router-link></li>
            </ul>
          </div>
          <div>
            <h3 class="text-sm font-semibold uppercase tracking-wide text-stone-900 dark:text-stone-100 mb-4">Get in touch</h3>
            <ul class="space-y-3 text-stone-600 dark:text-stone-400">
              <li>
                <a href="mailto:info@wavetutor.com" class="hover:text-primary transition-colors">info@wavetutor.com</a>
              </li>
              <li>
                <a href="/signup/" class="hover:text-primary transition-colors">Sign up for tutoring</a>
              </li>
              <li>
                <a href="https://forms.gle/pezRaRBtRWSqkjEo7" target="_blank" rel="noopener" class="hover:text-primary transition-colors">Become a tutor</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-10 pt-6 border-t border-stone-200 dark:border-stone-800 text-sm text-stone-500 dark:text-stone-500">
        © {{ new Date().getFullYear() }} Wave Tutor. All rights reserved.
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts"></script>
