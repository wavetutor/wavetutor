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
    {subject: "Math", topics: ["Prealgebra", "Algebra I", "Geometry", "Algebra II", "Probability", "SAT Math"]},
    {subject: "Science", topics: ["Biology", "Chemistry", "Physics", "Psychology", "Neuroscience", "Human Anatomy & Physiology"]},
    {subject: "Other", topics: ["Writing/English", "Debate", "Chess"]},
    ];
    const tutors = [
    {
        id: "vedanti",
        name: "Vedanti Patil",
        bio: "Hey there! I'm Vedanti, a rising freshman with an interest in life science. I'm primarily passionate about biology and neuroscience. I'm also enthusiastic about chemistry and psychology! In my free time, I enjoy creating art, spending time with my friends, and participating in my school publication.",
        picture: 'vedanti.png',
        accomplishments: ["State Champion for UIL District Science", "Placed 10th nationally in Intermediate Brain Bee (organized by NSF)", "State Champion for Bio Process Lab (organized by Science Olympiad)"],
        subjects: ["Biology", "Chemistry", "Psychology", "Neuroscience", "Human Anatomy & Physiology"]
    },
    {
        id: "nikhil",
        name: "Nikhil Gupta",
        bio: "Hello! My name is Nikhil, a rising freshman at Westwood High School. I'm passionate about math, programming, writing, and chess.  In my free time, I enjoy reading, writing, talking to friends, and listenting to music.",
        picture: 'nikhil.jpg',
        accomplishments: ["Editor-In-Chief of School Newspaper,", "Student Council Freshman Representative", "4.0 GPA in 2022-2023 School Year", ],
        subjects: ["Prealgebra", "Algebra I", "Geometry", "Algebra II", "Chess", "Writing/English", "Debate"]
    },
    { 
        id: "rishabh", 
        name: "Rishabh Susarla", 
        bio: "Hey, my name is Rishabh, and I'm a rising freshman at Westwood High School. I really enjoy doing math and physics, and I'm really excited to go deeper with these topics with you! In my free time I enjoy doing things like playing video games, talking with friends, listening to music, and procrastinating for hours at a time.", 
        picture: 'rishabh.jpg', 
        accomplishments: ["4.0 GPA in 2022-2023 School Year", "790 Math SAT Score in 8th Grade", "Science Bowl Practice Team - 2022-2023"], 
        subjects: ["Prealgebra", "Algebra 1", "Geometry", "Algebra 2", "Probability", "SAT Math", "Physics"] 
    },
    { 
        id: "aaron", 
        name: "Aaron Fan", 
        bio: "Hey! I'm Aaron, and I'm a rising freshman who loves learning math and competing in math competitions. In my free time I like to procrastinate and read.", 
        picture: "aaron.png", 
        accomplishments: ["2x AIME Qualifier (2022, 2023)", "Mathcounts State 2nd Place Team (2022, 2023) and Top 13 (2023) ", "Science Bowl Team 2023"], 
        subjects: ["Prealgebra", "Algebra 1", "Geometry", "Algebra 2", "Probability", "SAT Math"]
    }
    ];
    
</script>   