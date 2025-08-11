<template>
    <main class="grow bg-white dark:bg-zinc-900">
        <section class="min-h-full py-16">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-md text-center mb-12 lg:mb-16">
                    <h2 class="mb-6 text-4xl tracking-tight font-extrabold text-zinc-900 dark:text-white">
                        Simple, Transparent Pricing
                    </h2>
                    <p class="mb-8 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        High-quality, inexpensive personalized tutoring. No complicated packages.
                    </p>
                    
                    <!-- Trust indicators -->
                    <div class="flex items-center justify-center gap-8 mb-8">
                        <div class="flex items-center gap-2">
                            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                            </svg>
                            <span class="text-sm font-medium text-gray-600 dark:text-gray-300">No contracts</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                            </svg>
                            <span class="text-sm font-medium text-gray-600 dark:text-gray-300">Cancel anytime</span>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col lg:flex-row lg:gap-12 lg:items-start justify-center">
                    <!-- Single Pricing Card -->
                    <div class="relative flex flex-col p-8 mx-auto max-w-lg text-center text-zinc-900 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 dark:border-gray-600 dark:bg-zinc-800 dark:text-white transform hover:-translate-y-2 lg:mx-0">
                        
                        <h3 class="mb-4 text-2xl font-bold">1-on-1 Tutoring</h3>
                        <p class="font-medium text-gray-600 dark:text-gray-300 mb-6">Personalized learning for all subjects and skill levels</p>
                        
                        <div class="flex justify-center items-baseline mb-8">
                            <span class="mr-2 text-5xl font-extrabold text-primary">$30</span>
                            <span class="text-gray-500 dark:text-gray-400 text-lg">/hour</span>
                        </div>

                        <!-- Features list -->
                        <ul role="list" class="mb-8 space-y-4 text-left">
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                                <span>1-on-1 personalized tutoring</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                                <span>Google Meet sessions</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                                <span>Flexible scheduling</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                                <span>Weekly personalized homework</span>
                            </li>
                            
                        </ul>

                        <a href="/signup/" class="group w-full text-white bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary focus:ring-4 focus:ring-primary/50 font-semibold rounded-xl text-lg px-6 py-4 text-center transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                            <span>Get Started Today</span>
                            <svg class="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                            </svg>
                        </a>
                    </div>

                    <!-- What's Included Section - Side by side on desktop -->
                    <div class="max-w-lg lg:max-w-md mt-8 lg:mt-0">
                        <div class="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-8 h-full">
                            <h3 class="text-2xl font-bold text-zinc-900 dark:text-white mb-6 text-center lg:text-left">
                                What's Included in Every Session
                            </h3>
                            <div class="space-y-6">
                                <div class="flex items-start gap-4">
                                    <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                        <i class="fas fa-clipboard-list text-white text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold text-zinc-900 dark:text-white mb-2">Pre-Session Prep</h4>
                                        <p class="text-gray-600 dark:text-gray-300 text-sm">Tutors prepare customized materials based on your student's needs</p>
                                    </div>
                                </div>
                                <div class="flex items-start gap-4">
                                    <div class="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                                        <i class="fas fa-chalkboard-teacher text-white text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold text-zinc-900 dark:text-white mb-2">Active Learning</h4>
                                        <p class="text-gray-600 dark:text-gray-300 text-sm">Interactive sessions with real-time feedback and concept checks</p>
                                    </div>
                                </div>
                                <div class="flex items-start gap-4">
                                    <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <i class="fas fa-pencil-alt text-white text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold text-zinc-900 dark:text-white mb-2">Follow-up Work</h4>
                                        <p class="text-gray-600 dark:text-gray-300 text-sm">Personalized homework and practice problems to reinforce learning</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Additional FAQ or info can go here if needed -->
                <div class="mt-16 max-w-4xl mx-auto">
                    <div class="bg-gray-50 dark:bg-zinc-800/50 rounded-2xl p-8 text-center">
                        <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-4">
                            Questions about pricing?
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 mb-6">
                            We're happy to discuss your specific tutoring needs and answer any questions you have.
                        </p>
                        <router-link to="/contact/" class="inline-flex items-center justify-center py-3 px-6 font-semibold text-primary border-2 border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300">
                            Contact Us
                            <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                            </svg>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>