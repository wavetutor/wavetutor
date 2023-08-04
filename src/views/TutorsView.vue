<template>
    <main class="grow">
        <section class="bg-white dark:bg-gray-900 min-h-full" id="subjects">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Subjects offered</h2>
                    <p class="font-light">We offer a wide range of subjects and topics for tutoring.</p>
                    <p class="mb-6 font-medium"> If you don't see a subject you're looking for, please contact us and we'll see if we can help. </p>
                    <div class="grid grid-cols-4">
                        <TutorSubjects v-for="subject in subjects" :key="subject.subject" :subject="subject.subject" :topics="subject.topics" />
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script setup lang="ts">
    import TutorSubjects from "../components/TutorSubjects.vue";
    const subjects = [
    {subject: "Math", topics: ["Algebra", "Geometry", "Trigonometry", "Pre-Calculus", "Calculus", "Statistics", "Probability", "AMC 8"]},
    {subject: "Science", topics: ["Biology", "Chemistry", "Physics", "Psychology", "Neurology"]},
    ];
    
</script>