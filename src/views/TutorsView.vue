<template>
    <main class="grow">
        <section class="bg-white dark:bg-zinc-900 min-h-full">
            <section class="bg-white dark:bg-zinc-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-zinc-900 dark:text-white">Our Tutors</h2>
                        <p class="text-md tracking-tight text-zinc-900 dark:text-white font-medium">Click on a tutor to learn about their qualifications.</p>
                    </div> 
                    <div class="grid gap-8 mb-6 lg:mb-8 grid-cols-2 md:grid-cols-3 w-fit mx-auto">
                        <Tutor v-for="tutor in tutors" :key="tutor.name" :id="tutor.id" :name="tutor.name" :bio="tutor.bio" :picture="tutor.picture" :accomplishments="tutor.accomplishments" :subjects="tutor.subjects" />
                    </div>  
                </div>
                </section>
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 class="mb-4 text-4xl tracking-tight font-bold text-zinc-900 dark:text-white">Subjects offered</h2>
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
<script setup lang="js">
    import TutorSubjects from "../components/TutorSubjects.vue";
    import Tutor from "../components/Tutor.vue";
    const subjects = [
    {subject: "Math", topics: ["Prealgebra", "Algebra I", "Geometry", "Algebra II", "Precalculus (AP)", "Probability"]},
    {subject: "Science", topics: ["Biology (Honors, AP)", "Chemistry (Honors)", "Physics (Honors, AP)", "Psychology", "Neuroscience/Brain Bee", "Human Anatomy & Physiology"]},
    {subject: "Test Prep", topics: ["SAT Prep: Math, R&W", "AMC 8", "AP Testing", "STAAR Testing"]},
    {subject: "More", topics: ["English/Writing", "Debate", "Chess"]},
    ];
    const tutors = [
    {
        id: "vedanti",
        name: "Vedanti Patil",
        bio: "Hey there! I'm Vedanti, a student at Westwood High School. I'm passionate about the world of biology and neuroscience. I'm also enthusiastic about chemistry and psychology! In my free time, I enjoy creating art, spending time with my friends, and participating in my school publication.",
        picture: 'vedanti.png',
        accomplishments: ["State Champion for UIL District Science", "Placed 4th nationally in the Senior Brain Bee (organized by NSF)", "Placed 8th in Texas for State Brain Bee", "State Champion for Bio Process Lab (organized by Science Olympiad)", "Gold Medal at National Spanish Examination"],
        subjects: ["Biology (Honors, AP)", "Chemistry (Honors)", "Physics (Honors, AP)", "Psychology", "Neuroscience/Brain Bee", "Human Anatomy & Physiology", "Spanish 1-4"]
    },
    {
        id: "nikhil",
        name: "Nikhil Gupta",
        bio: "Hello! My name is Nikhil, and I am a student at Westwood High School. I'm passionate about math, programming, writing, and chess. I enjoy reading, writing, talking to friends, and listening to music in my free time.",
        picture: 'nikhil.jpg',
        accomplishments: ["4.0 GPA in the 2023-2024 School Year", "Ranked fifth best debater in the state of Texas by the Texas Forensic Association", "Qualified to the Tournament of Champions, the most prestigious national tournament in Policy Debate", "Finalist of the Stanford Debate Tournament and Quarterfinalist of the Harvard Debate Tournament", "2x Texas Forensic Association State Tournament Qualifier", "IB Student"],
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
        bio: "Hey, I'm Aaron! I love learning math and competing in math competitions all across the country. In my free time I like to procrastinate, read and play Brawl Stars.", 
        picture: "aaron.jpg", 
        accomplishments: ["4x AIME Qualifier (2022, 2023, 2024, 2025)", "Mathcounts State 2nd Place Team (2022, 2023) and Top 13 (2023) ", "Science Bowl Team 2023"], 
        subjects: ["Prealgebra", "Algebra I", "Geometry", "Algebra II", "Precalculus (AP)", "Probability", "SAT Math"]
    }
    ];
    
</script>   