<template>
    <main class="grow bg-white dark:bg-zinc-900">
        <section class="flex-1 py-8 lg:py-16 min-h-full">
            <div class="h-full px-4 mx-auto max-w-screen-xl lg:px-6 flex flex-col justify-center min-h-screen">

                <!-- Header -->
                <div class="max-w-screen-md mx-auto text-center mb-12">
                    <h2 class="mb-6 text-4xl tracking-tight font-extrabold text-zinc-900 dark:text-white">
                        Get in Touch
                    </h2>
                    <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        Have questions about our tutoring services? We're here to help you find the perfect learning solution.
                    </p>
                </div>

                <!-- Contact Cards Grid -->
                <div class="grid gap-8 lg:grid-cols-2 max-w-4xl mx-auto mb-8 lg:mb-12 flex-shrink-0">
                    <!-- Email Contact Card -->
                    <div class="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div class="flex items-center mb-6">
                            <div class="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mr-4">
                                <i class="fas fa-envelope text-white text-xl"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-zinc-900 dark:text-white">Email Us</h3>
                                <p class="text-gray-600 dark:text-gray-300">Quick questions or concerns</p>
                            </div>
                        </div>
                        <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                            Have questions about our tutoring approach, pricing, or want to learn more about our tutors? Send us an email and we'll get back to you promptly.
                        </p>
                        <a href="mailto:info@wavetutor.com" class="group inline-flex items-center font-semibold text-primary hover:text-secondary transition-colors duration-300">
                            <span>info@wavetutor.com</span>
                            <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                        </a>
                    </div>

                    <!-- Sign Up Card -->
                    <div class="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 p-8 rounded-2xl border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div class="flex items-center mb-6">
                            <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4">
                                <i class="fas fa-graduation-cap text-white text-xl"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-zinc-900 dark:text-white">Ready to Start?</h3>
                                <p class="text-gray-600 dark:text-gray-300">Begin your tutoring journey</p>
                            </div>
                        </div>
                        <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            Ready to experience personalized tutoring that makes a difference? Sign up now to get matched with one of our expert tutors and start your learning journey today.
                        </p>
                        <a href="/signup/" class="group inline-flex items-center justify-center w-full py-3 px-6 font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-xl hover:from-secondary hover:to-primary transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                            <span>Sign Up for Tutoring</span>
                            <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                        </a>
                    </div>
                </div>

                <!-- FAQ Section -->
                <div class="max-w-3xl mx-auto flex-grow flex items-center">
                    <div class="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-6 lg:p-8 w-full">
                        <h3 class="text-2xl font-bold text-zinc-900 dark:text-white mb-6 text-center">
                            Quick Answers
                        </h3>
                        <div class="space-y-6">
                            <div class="border-b border-gray-200 dark:border-gray-600 pb-4">
                                <h4 class="font-semibold text-zinc-900 dark:text-white mb-2">How do I get started?</h4>
                                <p class="text-gray-600 dark:text-gray-300">Simply fill out our signup form, and we'll match you with the perfect tutor for your needs within 1-2 business days.</p>
                            </div>
                            <div class="border-b border-gray-200 dark:border-gray-600 pb-4">
                                <h4 class="font-semibold text-zinc-900 dark:text-white mb-2">What subjects do you offer?</h4>
                                <p class="text-gray-600 dark:text-gray-300">We offer tutoring in Math, Science, English, Test Prep (SAT, AP), and more. Check our <a href="/tutors/" class="text-primary hover:text-secondary underline">Tutors page</a> for the complete list.</p>
                            </div>
                            <div>
                                <h4 class="font-semibold text-zinc-900 dark:text-white mb-2">How flexible is scheduling?</h4>
                                <p class="text-gray-600 dark:text-gray-300">Very flexible! We work around your schedule. Sessions can be weekly, bi-weekly, or as needed, and we accommodate different time zones.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Bottom spacer to ensure proper page height -->
                <div class="flex-shrink-0 h-8 lg:h-16"></div>
            </div>
        </section>
    </main>
</template> 