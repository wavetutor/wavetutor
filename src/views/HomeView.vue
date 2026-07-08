<template>
  <main class="bg-paper dark:bg-stone-900">
    <!-- Hero Section -->
    <section class="relative overflow-hidden">
      <div class="relative grid max-w-screen-xl px-4 py-14 mx-auto lg:gap-8 xl:gap-0 lg:py-24 lg:grid-cols-12 lg:items-center">
        <div class="mr-auto place-self-center lg:col-span-7 mb-10 lg:mb-0">
          <h1 class="text-center lg:text-left mb-6 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.05] text-stone-900 dark:text-stone-50">
            This isn't like
            <span class="text-primary">other tutoring.</span>
          </h1>

          <p class="text-center lg:text-left max-w-2xl mb-8 text-stone-600 lg:mb-10 md:text-lg lg:text-xl dark:text-stone-300 leading-relaxed">
            Wave Tutor provides <span class="font-semibold text-stone-900 dark:text-white">personalized, conversational tutoring</span> to propel learning like never before.
          </p>

          <div class="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">
            <a href="/signup/" class="btn-primary w-full sm:w-auto text-base sm:text-lg py-3.5 px-8">
              Sign Up Today
              <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </a>
            <router-link to="/pricing/" class="btn-secondary w-full sm:w-auto text-base sm:text-lg py-3.5 px-8">
              View Pricing
            </router-link>
          </div>
        </div>

        <div class="hidden lg:flex lg:col-span-5 justify-center items-center">
          <img
            :src="Logo"
            alt="Wave Tutor Logo"
            class="rounded-full h-80 w-80 object-cover ring-1 ring-stone-200 dark:ring-stone-700 shadow-lg"
            style="outline: 8px solid white; outline-offset: -8px;"
          />
        </div>
      </div>

      <!-- Inline stats strip -->
      <div class="border-y border-stone-200 dark:border-stone-800 bg-sand/60 dark:bg-stone-800/40">
        <div class="max-w-screen-xl mx-auto px-4 lg:px-6">
          <dl class="grid grid-cols-3 divide-x divide-stone-200 dark:divide-stone-800 text-center">
            <div class="py-8 px-2">
              <dt class="font-display text-3xl sm:text-4xl font-semibold text-primary">175</dt>
              <dd class="mt-1 text-sm sm:text-base text-stone-600 dark:text-stone-400">Sessions taught</dd>
            </div>
            <div class="py-8 px-2">
              <dt class="font-display text-3xl sm:text-4xl font-semibold text-primary">3 yrs</dt>
              <dd class="mt-1 text-sm sm:text-base text-stone-600 dark:text-stone-400">In operation</dd>
            </div>
            <div class="py-8 px-2">
              <dt class="font-display text-3xl sm:text-4xl font-semibold text-primary">20+</dt>
              <dd class="mt-1 text-sm sm:text-base text-stone-600 dark:text-stone-400">Subjects offered</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <!-- Narrative Statement -->
    <section class="bg-sand dark:bg-stone-800/40 py-16 lg:py-24">
      <div class="max-w-4xl mx-auto px-4 text-center lg:px-6">
        <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-stone-900 dark:text-white [text-wrap:balance]">
          For three years, Wave Tutor has helped students across the United States thrive through
          <span class="text-primary">personalized education</span>.
        </h2>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="bg-paper dark:bg-stone-900 py-16 lg:py-24">
      <div class="max-w-screen-xl px-4 mx-auto lg:px-6">
        <div class="mx-auto mb-12 max-w-2xl lg:mb-16 text-center">
          <h2 class="mb-4 font-display text-3xl sm:text-4xl font-semibold text-stone-900 dark:text-white">
            What families are saying
          </h2>
          <p class="text-lg text-stone-600 dark:text-stone-400">
            Real stories from families across the country who trust Wave Tutor
          </p>
        </div>

        <div class="grid gap-8 lg:grid-cols-2">
          <!-- Original Testimonial -->
          <figure class="card p-8">
            <svg class="w-9 h-9 text-primary/30 mb-4" fill="currentColor" viewBox="0 0 24 27">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"/>
            </svg>
            <blockquote class="mb-6">
              <p class="text-lg text-stone-700 dark:text-stone-200 leading-relaxed">
                "Wave Tutor is a great service for online tutoring. Our son Varun, 13, has been taking Math and Language Arts from them since August 2023. He is doing online flex education because of his medical treatment. Wave Tutor has helped him keep up with school and ensure he is not losing out on opportunities. He likes working with <router-link :to="{ path: '/tutors/', query: { tutor: 'vedanti' } }" class="text-primary font-semibold underline decoration-primary/40 hover:decoration-primary transition-colors">Vedanti</router-link> and <router-link :to="{ path: '/tutors/', query: { tutor: 'nikhil' } }" class="text-primary font-semibold underline decoration-primary/40 hover:decoration-primary transition-colors">Nikhil</router-link>, who are patient, friendly and knowledgeable."
              </p>
            </blockquote>
            <figcaption class="flex items-center">
              <img class="w-12 h-12 rounded-full object-cover ring-1 ring-stone-200 dark:ring-stone-700" :src="JyotiTestImg" alt="Jyoti V., and family" />
              <div class="ml-4">
                <div class="font-semibold text-stone-900 dark:text-white">Suraj &amp; Jyoti V.</div>
                <div class="text-sm text-stone-500 dark:text-stone-400">Oregon • Math and English since August 2023</div>
              </div>
            </figcaption>
          </figure>

          <!-- Second Testimonial -->
          <figure class="card p-8">
            <svg class="w-9 h-9 text-primary/30 mb-4" fill="currentColor" viewBox="0 0 24 27">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"/>
            </svg>
            <blockquote class="mb-6">
              <p class="text-lg text-stone-700 dark:text-stone-200 leading-relaxed">
                "My son started taking math lessons from Wave Tutor since summer of this year. In 2 months, he has improved a lot in his math skills. We've been very fortunate to have a talented high school student, guiding my son through complex math concepts. <router-link :to="{ path: '/tutors/', query: { tutor: 'aaron' } }" class="text-primary font-semibold underline decoration-primary/40 hover:decoration-primary transition-colors">Aaron</router-link>'s patience, depth of understanding, and ability to explain advanced topics have been very helpful."
              </p>
            </blockquote>
            <figcaption class="flex items-center">
              <div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span class="text-white font-semibold text-lg">B</span>
              </div>
              <div class="ml-4">
                <div class="font-semibold text-stone-900 dark:text-white">Bulbul G.</div>
                <div class="text-sm text-stone-500 dark:text-stone-400">Texas • Math since May 2025</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- Why Choose Wave Tutor -->
    <section class="bg-sand dark:bg-stone-800/40 py-16 lg:py-24">
      <div class="max-w-screen-xl px-4 mx-auto lg:px-6">
        <div class="max-w-2xl mb-12 lg:mb-16">
          <h2 class="mb-4 font-display text-3xl sm:text-4xl font-semibold text-stone-900 dark:text-white">
            Why choose Wave Tutor?
          </h2>
          <p class="text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
            We're not just another tutoring service. Our approach is designed around what actually works for students.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <!-- 1-on-1 Tutoring -->
          <div class="card p-8">
            <div class="flex items-center justify-center mb-5 w-12 h-12 rounded-xl bg-primary/10 text-primary">
              <i class="fas fa-user-graduate text-xl"></i>
            </div>
            <h3 class="mb-2 text-xl font-semibold text-stone-900 dark:text-white">1-on-1 Personalized</h3>
            <p class="text-stone-600 dark:text-stone-400 leading-relaxed">
              No generic curriculums. Every session is tailored to your student's unique learning style and goals.
            </p>
          </div>

          <!-- Custom Materials -->
          <div class="card p-8">
            <div class="flex items-center justify-center mb-5 w-12 h-12 rounded-xl bg-primary/10 text-primary">
              <i class="fas fa-book-open text-xl"></i>
            </div>
            <h3 class="mb-2 text-xl font-semibold text-stone-900 dark:text-white">Custom Materials</h3>
            <p class="text-stone-600 dark:text-stone-400 leading-relaxed">
              Tailored resources and problem sets that match each student's goals and learning habits.
            </p>
          </div>

          <!-- Concept Mastery -->
          <div class="card p-8">
            <div class="flex items-center justify-center mb-5 w-12 h-12 rounded-xl bg-primary/10 text-primary">
              <i class="fas fa-check-circle text-xl"></i>
            </div>
            <h3 class="mb-2 text-xl font-semibold text-stone-900 dark:text-white">Concept Mastery</h3>
            <p class="text-stone-600 dark:text-stone-400 leading-relaxed">
              We ensure understanding before moving on, so students can practice with confidence.
            </p>
          </div>

          <!-- Smart Homework -->
          <div class="card p-8">
            <div class="flex items-center justify-center mb-5 w-12 h-12 rounded-xl bg-primary/10 text-primary">
              <i class="fas fa-tasks text-xl"></i>
            </div>
            <h3 class="mb-2 text-xl font-semibold text-stone-900 dark:text-white">Smart Homework</h3>
            <p class="text-stone-600 dark:text-stone-400 leading-relaxed">
              Written from scratch and personalized to reinforce session content effectively.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Band -->
    <section class="bg-primary">
      <div class="max-w-screen-xl px-4 mx-auto py-16 lg:py-20 lg:px-6 text-center">
        <h2 class="text-3xl sm:text-4xl font-display font-semibold text-white mb-4">
          Ready to experience the difference?
        </h2>
        <p class="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
          Join students across the U.S. who have transformed learning with Wave Tutor.
        </p>
        <a href="/signup/" class="inline-flex items-center justify-center gap-2 py-3.5 px-8 font-semibold text-primary bg-white rounded-xl shadow-sm hover:bg-stone-100 transition-colors duration-200">
          Get Started Today
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
        </a>
      </div>
    </section>

    <!-- Our Team -->
    <section class="bg-paper dark:bg-stone-900 py-16 lg:py-24">
      <div class="px-4 mx-auto max-w-screen-xl text-center lg:px-6">
        <h2 class="mb-12 lg:mb-16 font-display text-3xl sm:text-4xl font-semibold text-stone-900 dark:text-white">Our Team</h2>
        <div class="grid gap-10 lg:gap-16 sm:grid-cols-3">
          <div class="text-center" v-for="person in team" :key="person.name">
            <img class="mx-auto mb-4 w-36 h-36 rounded-full object-cover ring-1 ring-stone-200 dark:ring-stone-700" :src="person.pfp" :alt="person.name" />
            <h3 class="mb-1 text-xl font-semibold text-stone-900 dark:text-white">{{ person.name }}</h3>
            <p class="font-medium text-primary">{{ person.role }}</p>
            <ul class="flex justify-center mt-3 space-x-4" v-if="person.github">
              <li>
                <a
                  :href="`https://github.com/${person.github}`"
                  class="text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white transition-colors"
                  aria-label="GitHub Profile">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Aspiring Tutors Section -->
    <section class="bg-sand dark:bg-stone-800/40 py-16 lg:py-20">
      <div class="max-w-screen-xl px-4 mx-auto text-center lg:px-6">
        <h2 class="mb-4 font-display text-3xl font-semibold text-stone-900 dark:text-white">Want to join our team of tutors?</h2>
        <p class="mb-8 text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
          We're always looking for passionate educators. If you're interested in becoming a Wave Tutor, fill out our application form.
        </p>
        <a
          href="https://forms.gle/pezRaRBtRWSqkjEo7"
          target="_blank"
          rel="noopener"
          class="btn-secondary">
          Apply to be a tutor
        </a>
      </div>
    </section>

  </main>
</template>

<script setup lang="ts">
import Logo from "../assets/logo.svg";
import JyotiTestImg from "../assets/jyoti-test.jpg";
import ruhan from "../assets/credits/ruhan.jpeg";
import vedanti from "../assets/credits/vedanti.png";
import nikhil from "../assets/credits/nikhil.jpg";
import rishabh from "../assets/credits/rishabh.png";
import aaron from "../assets/credits/aaron.jpg";

// Team members data
const team = shuffle([
  { name: "Ruhan Gupta", role: "Operations Lead", rank: 4, pfp: ruhan, github: "" },
  { name: "Vedanti Patil", role: "Tutor, Marketing Lead", rank: 3, pfp: vedanti, github: "" },
  { name: "Nikhil Gupta", role: "Tutor", rank: 0, pfp: nikhil, github: "" },
  { name: "Rishabh Susarla", role: "Tutor, Growth Lead", rank: 2, pfp: rishabh, github: "" },
  { name: "Aaron Fan", role: "Tutor", rank: 1, pfp: aaron, github: "" }
]).sort((a, b) => b.rank - a.rank);

function shuffle<T>(arr: T[]): T[] {
  for (let i = arr.length; i > 0; ) {
    const j = Math.floor(Math.random() * i);
    i--;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
</script>
