<template>
    <main class="grow">
        <section class="bg-white dark:bg-gray-900 min-h-full">
            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Tutors</h2>
                    </div> 
                    <div class="grid gap-8 mb-6 lg:mb-8 grid-cols-2 md:grid-cols-3 w-fit mx-auto">
                        <Tutor v-for="tutor in tutors" :key="tutor.name" :id="tutor.id" :name="tutor.name" :bio="tutor.bio" :picture="tutor.picture" :accomplishments="tutor.accomplishments" :subjects="tutor.subjects" />
                    </div>  
                </div>
                </section>
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Subjects offered</h2>
                    <p class="font-light">We offer a wide range of subjects and topics for tutoring.</p>
                    <p class="mb-6 font-medium"> If you don't see a subject you're looking for, please contact us and we'll see if we can help. </p>
                    <div class="mx-auto">
                        <div class="grid grid-cols-2 lg:grid-cols-4">
                            <TutorSubjects v-for="subject in subjects" :key="subject.subject" :subject="subject.subject" :topics="subject.topics" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script setup lang="ts">
    import TutorSubjects from "../components/TutorSubjects.vue";
    import Tutor from "../components/Tutor.vue";
    const subjects = [
    {subject: "Math", topics: ["Algebra", "Geometry", "Trigonometry", "Pre-Calculus", "Calculus", "Statistics", "Probability"]},
    {subject: "Science", topics: ["Biology", "Chemistry", "Physics", "Psychology", "Neurology"]},
    {subject: "Computer Science", topics: ["Intro to CS", "AP CS Principles", "AP CS A"]},
    {subject: "Other", topics: ["Debate", "Chess"]},
    ];
    const tutors = [
    {
        id: "vedanti",
        name: "Vedanti Patil",
        bio: "Hey there! I'm Vedanti, a rising freshman with an interest in life science. I'm primarily passionate about biology and neuroscience. I'm also enthusiastic about chemistry and psychology! In my free time, I enjoy creating art, spending time with my friends, and participating in my school publication.",
        picture: "../src/assets/credits/vedanti.png",
        accomplishments: ["State Champion for UIL District Science", "Placed 10th nationally in Intermediate Brain Bee (organized by NSF)", "State Champion for Bio Process Lab (organized by Science Olympiad)"],
        subjects: ["Biology", "Chemistry", "Psychology", "Neuroscience", "Human Anatomy & Physiology"]
    },
    ];
    
</script>   