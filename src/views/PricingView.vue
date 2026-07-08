<template>
    <main class="grow bg-paper dark:bg-stone-900">
        <section class="min-h-full py-16">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-md text-center mb-12 lg:mb-16">
                    <h2 class="mb-6 font-display text-4xl sm:text-5xl tracking-tight font-semibold text-stone-900 dark:text-white">
                        Simple, transparent pricing
                    </h2>
                    <p class="mb-8 text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
                        High-quality, inexpensive personalized tutoring. No complicated packages.
                    </p>

                    <!-- Trust indicators -->
                    <div class="flex items-center justify-center gap-8 mb-8">
                        <div class="flex items-center gap-2">
                            <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                            </svg>
                            <span class="text-sm font-medium text-stone-600 dark:text-stone-300">No contracts</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                            </svg>
                            <span class="text-sm font-medium text-stone-600 dark:text-stone-300">Cancel anytime</span>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col lg:flex-row lg:gap-8 lg:items-stretch justify-center">
                    <!-- Single Pricing Card -->
                    <div class="card relative flex flex-col p-8 mx-auto max-w-lg w-full text-center text-stone-900 dark:text-white lg:mx-0">

                        <h3 class="mb-4 text-2xl font-semibold">1-on-1 Tutoring</h3>
                        <p class="font-medium text-stone-600 dark:text-stone-300 mb-6">Personalized learning for all subjects and skill levels</p>

                        <div class="flex justify-center items-baseline mb-8">
                            <span class="mr-2 font-display text-5xl font-semibold text-primary">$30</span>
                            <span class="text-stone-500 dark:text-stone-400 text-lg">/hour</span>
                        </div>

                        <!-- Features list -->
                        <ul role="list" class="mb-8 space-y-4 text-left">
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                                <span>1-on-1 personalized tutoring</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                                <span>Google Meet sessions</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                                <span>Flexible scheduling</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                                <span>Weekly personalized homework</span>
                            </li>

                        </ul>

                        <a href="/signup/" class="btn-primary w-full text-lg py-4 mt-auto">
                            Get Started Today
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                            </svg>
                        </a>
                    </div>

                    <!-- What's Included Section - Side by side on desktop -->
                    <div class="max-w-lg lg:max-w-md w-full mt-8 lg:mt-0 mx-auto lg:mx-0">
                        <div class="card p-8 h-full">
                            <h3 class="text-2xl font-semibold text-stone-900 dark:text-white mb-6 text-center lg:text-left">
                                What's Included in Every Session
                            </h3>
                            <div class="space-y-6">
                                <div class="flex items-start gap-4">
                                    <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                                        <i class="fas fa-clipboard-list text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold text-stone-900 dark:text-white mb-2">Pre-Session Prep</h4>
                                        <p class="text-stone-600 dark:text-stone-300 text-sm">Tutors prepare customized materials based on your student's needs</p>
                                    </div>
                                </div>
                                <div class="flex items-start gap-4">
                                    <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                                        <i class="fas fa-chalkboard-teacher text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold text-stone-900 dark:text-white mb-2">Active Learning</h4>
                                        <p class="text-stone-600 dark:text-stone-300 text-sm">Interactive sessions with real-time feedback and concept checks</p>
                                    </div>
                                </div>
                                <div class="flex items-start gap-4">
                                    <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                                        <i class="fas fa-pencil-alt text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold text-stone-900 dark:text-white mb-2">Follow-up Work</h4>
                                        <p class="text-stone-600 dark:text-stone-300 text-sm">Personalized homework and practice problems to reinforce learning</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Questions about pricing -->
                <div class="mt-16 max-w-4xl mx-auto">
                    <div class="bg-sand dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700 rounded-2xl p-8 text-center">
                        <h3 class="text-xl font-semibold text-stone-900 dark:text-white mb-4">
                            Questions about pricing?
                        </h3>
                        <p class="text-stone-600 dark:text-stone-300 mb-6">
                            We're happy to discuss your specific tutoring needs and answer any questions you have.
                        </p>
                        <router-link to="/contact/" class="btn-secondary">
                            Contact Us
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                            </svg>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
