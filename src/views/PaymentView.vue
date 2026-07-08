<template>
  <main class="h-full">
    <section
      class="bg-paper dark:bg-stone-900 flex items-center justify-center flex-col min-h-full"
    >
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="max-w-screen-lg sm:text-lg text-stone-800 dark:text-stone-300">
          <!-- Title -->
          <h2
            class="mb-6 font-display text-4xl sm:text-5xl tracking-tight font-semibold text-stone-900 dark:text-white"
          >
            Making payments to Wave Tutor
          </h2>

          <!-- Intro paragraphs -->
          <p class="mb-4 sm:text-2xl text-lg font-light text-stone-700 dark:text-stone-400">
            Thank you for being a customer of Wave Tutor! We know there are a
            lot of different tutoring businesses out there, and we’re glad you
            chose us to tutor you/your child.
          </p>
          <p class="mb-6 sm:text-2xl text-lg font-medium text-stone-700 dark:text-stone-400">
            We kindly request you to make payments shortly after each session.
            Please make sure you are able to pay before the session starts.
          </p>

          <!-- PayPal card -->
          <div class="card p-6">
            <h3 class="text-2xl mb-2 font-semibold text-stone-900 dark:text-white">
              PayPal Details:
            </h3>
            <p class="mb-4 text-stone-800 dark:text-stone-200">
              <span class="font-medium">$30</span> to @ruhangupta –
              <a
                href="https://paypal.me/ruhangupta"
                class="inline-flex items-center font-medium underline text-primary hover:text-secondary"
              >
                paypal.me/ruhangupta
              </a>
            </p>
            <p class="text-stone-800 dark:text-stone-200">
              Include <span class="font-medium"
                >"Wave Tutor - $30 - (Student Name)"</span
              >
              in the description.
            </p>
            <br />
            <p class="text-clay font-bold text-2xl">
              Please select the "Friends &amp; Family" option to waive the PayPal
              fees.
            </p>
          </div>

          <!-- Thank you -->
          <h2
            class="mb-4 font-display text-6xl font-semibold text-primary [text-wrap:balance] text-center mt-8"
          >
            Thank you!
          </h2>
        </div>
      </div>
    </section>
  </main>
</template>
