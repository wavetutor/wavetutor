<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
        <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">We are students on a mission to revolutionize tutoring the right way.</p>
      </div> 
      <div class="grid gap-8 lg:gap-16 sm:grid-cols-3">
          <div class="text-center text-gray-500 dark:text-gray-400" v-for="person in team" :key="person.name">
            <img class="mx-auto mb-4 w-36 h-36 rounded-full" :src="person.pfp" alt="Avatar">
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ person.name }}</h3>
            <p>{{ person.role }}</p>
            <ul class="flex justify-center mt-4 space-x-4">
              <li v-if="person.github">
                <a :href="`https://github.com/${person.github}`" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300" aria-label="Link to GitHub Social Profile">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>  
    </div>
  </section>
</template>

<script setup lang="ts">
import ruhan from "../assets/credits/ruhan.jpeg";
import vedanti from "../assets/credits/vedanti.png";
import nikhil from "../assets/credits/nikhil.jpg";
import rishabh from "../assets/credits/rishabh.jpg";
import aaron from "../assets/credits/aaron.jpg";

const team = shuffle([
  { name: "Ruhan Gupta", role: "Operations Lead, Web Dev Lead, Marketing Lead", rank: 4, pfp: ruhan, github: "IMGROOT2"},
  { name: "Vedanti Patil", role: "Lead Tutor, Marketing Lead", rank: 3, pfp: vedanti, github: "likevee" },
  { name: "Nikhil Gupta", role: "Lead Tutor, Marketing Lead", rank: 2, pfp: nikhil, github: "NikG978" },
  { name: "Rishabh Susarla", role: "Tutor", rank: 1, pfp: rishabh, github: "" },
  { name: "Aaron Fan", role: "Tutor", rank: 0, pfp: aaron, github: ""}

]).sort((a, b) => b.rank - a.rank);

function shuffle<T>(arr: T[]) {
  for (let i = arr.length; i > 0;) {
    const j = Math.floor(Math.random() * i);
    i--;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
</script>
