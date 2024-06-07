<template>
    <main class="grow">
        <section class="bg-white dark:bg-gray-900 min-h-full">
            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Tutors</h2>
                        <p class="text-md tracking-tight text-gray-900 dark:text-white font-medium">Click on a tutor to learn about their qualifications.</p>
                    </div> 
                    <div class="grid gap-8 mb-6 lg:mb-8 grid-cols-2 md:grid-cols-3 w-fit mx-auto">
                        <Tutor v-for="tutor in tutors" :key="tutor.name" :id="tutor.id" :name="tutor.name" :bio="tutor.bio" :picture="tutor.picture" :accomplishments="tutor.accomplishments" :subjects="tutor.subjects" />
                    </div>  
                </div>
                </section>
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Subjects offered</h2>
                    <p class="font-light">We offer a wide range of subjects and topics for tutoring, and <span class="font-bold">more to come soon! </span></p>
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
    {subject: "Math", topics: ["Prealgebra", "Algebra I", "Geometry", "Algebra II", "Precalculus (AP)", "Probability"]},
    {subject: "Science", topics: ["Biology (Honors)", "Chemistry (Honors)", "Physics (Honors, AP)", "Psychology", "Neuroscience/Brain Bee", "Human Anatomy & Physiology"]},
    {subject: "Test Prep", topics: ["SAT Prep: Math", "SAT Prep: Reading/Writing", "SAT Prep: Full Test", "AMC 8"]},
    {subject: "More", topics: ["English/Writing", "Debate", "Chess"]},
    ];
    const tutors = [
    {
        id: "vedanti",
        name: "Vedanti Patil",
        bio: "Hey there! I'm Vedanti, a student at Westwood High School. I'm primarily passionate about biology and neuroscience. I'm also enthusiastic about chemistry and psychology! In my free time, I enjoy creating art, spending time with my friends, and participating in my school publication.",
        picture: 'vedanti.png',
        accomplishments: ["State Champion for UIL District Science", "Placed 10th nationally in the Intermediate Brain Bee (organized by NSF)", "State Champion for Bio Process Lab (organized by Science Olympiad)"],
        subjects: ["Biology (Honors)", "Chemistry (Honors)", "Physics (Honors, AP)", "Psychology", "Neuroscience/Brain Bee", "Human Anatomy & Physiology"]
    },
    {
        id: "nikhil",
        name: "Nikhil Gupta",
        bio: "Hello! My name is Nikhil, and I am a student at Westwood High School. I'm passionate about math, programming, writing, and chess. I enjoy reading, writing, talking to friends, and listening to music in my free time.",
        picture: 'nikhil.jpg',
        accomplishments: ["4.0 GPA in the 2023-2024 School Year", "Success at debate tournaments on the national circuit", "1x Texas Forensic Association State Tournament Qualifier", "IB Student", ],
        subjects: ["Prealgebra", "Algebra I", "Geometry", "Algebra II", "Chess", "English/Writing", "Debate"]   
    },
    { 
        id: "rishabh", 
        name: "Rishabh Susarla", 
        bio: "Hey! My name is Rishabh, and I'm a student at Westwood High School. I enjoy doing math and physics, and I'm really excited to go deeper with these topics with you! I enjoy playing video games, talking with friends, listening to music, and procrastinating for hours in my free time.", 
        picture: 'rishabh.jpg', 
        accomplishments: ["4.0 GPA in 2022-2023 School Year", "790 Math SAT Score in 8th Grade", "AFJROTC Academic Bowl National Qualifier 2023-2024", "Science Bowl Practice Team 2022-2023"], 
        subjects: ["Prealgebra", "Algebra I", "Geometry", "Algebra II", "Precalculus (AP)", "Probability", "SAT Math", "Physics"] 
    },
    { 
        id: "aaron", 
        name: "Aaron Fan", 
        bio: "Hey! I'm Aaron, and I'm a student who loves learning math and competing in math competitions. In my free time I like to procrastinate and read.", 
        picture: "aaron.jpg", 
        accomplishments: ["3x AIME Qualifier (2022, 2023, 2024)", "Mathcounts State 2nd Place Team (2022, 2023) and Top 13 (2023) ", "Science Bowl Team 2023"], 
        subjects: ["Prealgebra", "Algebra I", "Geometry", "Algebra II", "Probability", "SAT Math"]
    }
    ];
    
</script>   