<template>
  <main class="h-full">
    <section
      class="bg-white dark:bg-zinc-900 flex items-center justify-center flex-col min-h-full"
    >
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="max-w-screen-lg sm:text-lg text-gray-800 dark:text-gray-400">
          <!-- Title -->
          <h2
            class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white"
          >
            Making payments to Wave Tutor
          </h2>

          <!-- Intro paragraphs -->
          <p class="mb-4 sm:text-2xl text-lg font-light text-gray-700 dark:text-gray-500">
            Thank you for being a customer of Wave Tutor! We know there are a
            lot of different tutoring businesses out there, and we’re glad you
            chose us to tutor you/your child.
          </p>
          <p class="mb-6 sm:text-2xl text-lg font-medium text-gray-700 dark:text-gray-500">
            We kindly request you to make payments shortly after each session.
            Please make sure you are able to pay before the session starts.
          </p>

          <!-- PayPal card -->
          <div
            class="bg-gray-100 dark:bg-zinc-800 rounded-lg p-5"
          >
            <h3 class="text-2xl mb-2 font-bold text-gray-900 dark:text-white">
              PayPal Details:
            </h3>
            <p class="mb-4 text-gray-800 dark:text-white">
              <span class="font-medium">$30</span> to @ruhangupta –
              <a
                href="https://paypal.me/ruhangupta"
                class="inline-flex items-center font-medium underline text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
              >
                paypal.me/ruhangupta
              </a>
            </p>
            <p class="text-gray-800 dark:text-white">
              Include <span class="font-medium"
                >"Wave Tutor - $30 - (Student Name)"</span
              >
              in the description.
            </p>
            <br />
            <p class="text-gray-800 dark:text-white">
              Please select the "Friends & Family" option to waive the PayPal
              fees.
            </p>
          </div>

          <!-- Thank you gradient -->
          <h2
            class="mb-4 text-6xl font-extrabold text-gray-900 dark:text-white [text-wrap:balance] text-center mt-8"
          >
            <span
              class="bg-clip-text text-transparent bg-gradient-to-tr from-primary to-blue-700"
              >Thank you!</span
            >
          </h2>
        </div>
      </div>
    </section>
  </main>
</template>
