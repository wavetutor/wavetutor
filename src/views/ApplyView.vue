<template>
  <main class="grow bg-paper dark:bg-stone-900">
    <section class="mx-auto max-w-2xl px-4 py-12 lg:py-16">
      <template v-if="!sent">
        <h1 class="font-display text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl dark:text-white">Tutor with Wave Tutor</h1>
        <p class="mt-3 text-lg text-stone-600 dark:text-stone-300">$15 per session, online, on your schedule.</p>

        <div class="card mt-6 p-5 text-stone-700 sm:p-6 dark:text-stone-300">
          <h2 class="text-lg font-semibold text-stone-900 dark:text-white">What we expect</h2>
          <ul class="mt-2 list-disc space-y-1 pl-5">
            <li>Show up on time, with a plan for the lesson.</li>
            <li>Adapt to your student and stay patient when they get things wrong.</li>
            <li>Send personalized homework after each session.</li>
            <li>Be professional and respectful. Families are paying for this.</li>
          </ul>
          <p class="mt-3">You get a @wavetutor.com account with Google Meet, and a team to lean on.</p>
        </div>

        <form class="mt-8 space-y-8" novalidate @submit.prevent="submit">
          <fieldset class="card space-y-5 p-5 sm:p-6">
            <legend class="sr-only">About you</legend>
            <h2 class="text-xl font-semibold text-stone-900 dark:text-white">About you</h2>
            <div class="grid gap-5 sm:grid-cols-2">
              <Field id="first" label="First name" :error="errors.first">
                <input id="first" maxlength="60" v-model="f.first" class="field-input" autocomplete="given-name" />
              </Field>
              <Field id="last" label="Last name" :error="errors.last">
                <input id="last" maxlength="60" v-model="f.last" class="field-input" autocomplete="family-name" />
              </Field>
            </div>
            <div class="grid gap-5 sm:grid-cols-2">
              <Field id="email" label="Email" :error="errors.email">
                <input id="email" maxlength="120" v-model="f.email" type="email" class="field-input" autocomplete="email" />
              </Field>
              <Field id="phone" label="Phone" :error="errors.phone">
                <input id="phone" :value="f.phone" type="tel" inputmode="tel" maxlength="22" class="field-input" autocomplete="tel" placeholder="(512) 555-0142" @input="onPhone($event, (v) => (f.phone = v))" />
              </Field>
            </div>
            <Field id="discord" label="Discord username" :error="errors.discord">
              <input id="discord" maxlength="40" v-model="f.discord" class="field-input" autocomplete="off" />
            </Field>
            <Field id="over18" label="Are you 18 or older?" as="group" :error="errors.over18">
              <Chips v-model="f.over18" :options="['Yes', 'No']" labelledby="over18-label" />
            </Field>
            <div class="grid gap-5 sm:grid-cols-2">
              <Field id="grade" label="Grade or year" optional>
                <input id="grade" maxlength="60" v-model="f.gradeOrYear" class="field-input" placeholder="11th grade, college sophomore" />
              </Field>
              <Field id="school" label="School" optional>
                <input id="school" maxlength="120" v-model="f.school" class="field-input" />
              </Field>
            </div>
            <Field id="hours" label="Hours you can tutor per week" as="group">
              <Chips v-model="f.hoursPerWeek" :options="HOURS_PER_WEEK" labelledby="hours-label" />
            </Field>
            <Field id="timezone" label="Time zone" as="group">
              <Chips v-model="f.timezone" :options="TIMEZONES" labelledby="timezone-label" />
            </Field>
          </fieldset>

          <fieldset class="card space-y-5 p-5 sm:p-6">
            <legend class="sr-only">Teaching</legend>
            <h2 class="text-xl font-semibold text-stone-900 dark:text-white">Teaching</h2>
            <Field id="subjects" label="Subjects you can teach" as="group" :error="errors.subjects">
              <div class="space-y-3">
                <div v-for="g in SUBJECT_GROUPS" :key="g.subject">
                  <p class="mb-1.5 text-sm text-stone-500 dark:text-stone-400">{{ g.subject }}</p>
                  <Chips v-model="f.subjects" :options="g.topics" multiple labelledby="subjects-label" />
                </div>
              </div>
              <input v-model="f.subjectsOther" maxlength="300" class="field-input mt-3" placeholder="Other subjects or skills" aria-label="Other subjects" />
            </Field>
            <Field id="qualifications" label="Qualifications" :error="errors.qualifications">
              <textarea id="qualifications" maxlength="3000" v-model="f.qualifications" rows="4" class="field-input" placeholder="Grades, scores, awards, past tutoring" />
            </Field>
            <Field id="fit" label="Why would you be a good fit?" :error="errors.whyFit">
              <textarea id="fit" maxlength="2400" v-model="f.whyFit" rows="5" class="field-input" />
              <p class="mt-1 text-right text-sm tabular-nums" :class="words > 200 ? 'text-rose-600' : 'text-stone-500'">{{ words }} / 200 words</p>
            </Field>
          </fieldset>

          <div class="card p-5 sm:p-6">
            <button type="button" role="checkbox" :aria-checked="f.friendRequestsOn" class="flex items-start gap-3 text-left" @click="f.friendRequestsOn = !f.friendRequestsOn">
              <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded border" :class="f.friendRequestsOn ? 'border-primary bg-primary text-white' : 'border-stone-400 bg-white dark:bg-stone-900'">
                <svg v-if="f.friendRequestsOn" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
              </span>
              <span class="text-stone-700 dark:text-stone-300">
                My Discord friend requests are on. We'll reach out from <strong>@wavetutor</strong> if we'd like to talk.
              </span>
            </button>
            <p v-if="errors.friendRequestsOn" class="mt-2 text-sm text-rose-600 dark:text-rose-400">{{ errors.friendRequestsOn }}</p>
            <div class="hidden" aria-hidden="true">
              <label for="website">Website</label>
              <input id="website" v-model="honeypot" tabindex="-1" autocomplete="off" />
            </div>
          </div>

          <p v-if="submitError" class="rounded-lg bg-rose-50 px-4 py-3 text-sm text-rose-800 dark:bg-rose-950 dark:text-rose-200">{{ submitError }}</p>
          <button type="submit" class="btn-primary w-full text-lg sm:w-auto" :disabled="sending">{{ sending ? 'Sending' : 'Send application' }}</button>
        </form>
      </template>

      <div v-else class="py-16 text-center">
        <img :src="Logo" alt="" class="mx-auto h-20 w-20" />
        <h1 class="mt-6 font-display text-4xl font-semibold text-stone-900 dark:text-white">Application sent</h1>
        <p class="mt-3 text-lg text-stone-600 dark:text-stone-300">If it's a fit, we'll message you on Discord from @wavetutor.</p>
        <router-link to="/" class="btn-secondary mt-8">Back to home</router-link>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from 'vue'

import Logo from '../assets/logo.png'
import Chips from '../components/form/Chips.vue'
import Field from '../components/form/Field.vue'
import { formatPhone, phoneError } from '../lib/phone'
import { HOURS_PER_WEEK, SUBJECT_GROUPS, TIMEZONES } from '../lib/options'

const f = reactive({
  first: '',
  last: '',
  email: '',
  phone: '',
  discord: '',
  over18: '',
  gradeOrYear: '',
  school: '',
  hoursPerWeek: '',
  timezone: '',
  subjects: [] as string[],
  subjectsOther: '',
  qualifications: '',
  whyFit: '',
  friendRequestsOn: false,
})
/** Format the phone number as it's typed; writes back to the box so stripped characters disappear. */
function onPhone(e: Event, set: (v: string) => void) {
  const el = e.target as HTMLInputElement
  const v = formatPhone(el.value)
  if (el.value !== v) el.value = v
  set(v)
}
const honeypot = ref('')
const errors = reactive<Record<string, string>>({})
const sending = ref(false)
const sent = ref(false)
const submitError = ref('')
const tried = ref(false)
// Load the database code while the form is being filled in, so Send is instant.
onMounted(() => {
  import('../lib/firebase').catch(() => {})
  import('firebase/firestore/lite').catch(() => {})
})
// After the first submit attempt, re-check as people fix things so stale errors disappear.
watch(f, () => tried.value && validate(), { deep: true })
const words = computed(() => f.whyFit.trim().split(/\s+/).filter(Boolean).length)

const fieldIds: Record<string, string> = { first: 'first', last: 'last', email: 'email', phone: 'phone', discord: 'discord', over18: 'over18-label', subjects: 'subjects-label', qualifications: 'qualifications', whyFit: 'fit' }

function validate() {
  for (const k of Object.keys(errors)) delete errors[k]
  if (!f.first.trim()) errors.first = 'Add your first name.'
  if (!f.last.trim()) errors.last = 'Add your last name.'
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email.trim())) errors.email = 'Add an email we can reply to.'
  if (!f.phone.trim()) errors.phone = 'Add a phone number.'
  else if (phoneError(f.phone)) errors.phone = phoneError(f.phone)
  if (f.discord.trim().length < 2) errors.discord = 'Add your Discord username. That is how we contact applicants.'
  if (!f.over18) errors.over18 = 'Choose yes or no.'
  if (!f.subjects.length && !f.subjectsOther.trim()) errors.subjects = 'Pick at least one subject.'
  if (!f.qualifications.trim()) errors.qualifications = 'Tell us what qualifies you.'
  if (!f.whyFit.trim()) errors.whyFit = 'Tell us why you would be a good fit.'
  else if (words.value > 200) errors.whyFit = `Keep it to 200 words. You're at ${words.value}.`
  if (!f.friendRequestsOn) errors.friendRequestsOn = 'Turn on Discord friend requests so we can reach you.'
  return Object.keys(errors).length === 0
}

async function submit() {
  submitError.value = ''
  tried.value = true
  if (!validate()) {
    const el = document.getElementById(fieldIds[Object.keys(errors)[0]] ?? '')
    el?.scrollIntoView({ block: 'center' })
    el?.focus()
    return
  }
  if (honeypot.value) {
    sent.value = true
    return
  }
  sending.value = true
  try {
    const [{ db }, { addDoc, collection, serverTimestamp }] = await Promise.all([import('../lib/firebase'), import('firebase/firestore/lite')])
    await addDoc(collection(db, 'tutorApplications'), {
      status: 'new',
      source: 'website',
      name: `${f.first.trim()} ${f.last.trim()}`,
      email: f.email.trim().toLowerCase(),
      phone: f.phone.trim(),
      discord: f.discord.trim(),
      subjects: f.subjects,
      subjectsOther: f.subjectsOther.trim(),
      qualifications: f.qualifications.trim(),
      whyFit: f.whyFit.trim(),
      gradeOrYear: f.gradeOrYear.trim(),
      school: f.school.trim(),
      hoursPerWeek: f.hoursPerWeek,
      timezone: f.timezone,
      over18: f.over18 === 'Yes',
      friendRequestsOn: true,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    })
    sent.value = true
    window.scrollTo({ top: 0 })
  } catch (e) {
    console.error(e)
    submitError.value = "Your application didn't go through. Try again, or email info@wavetutor.com."
  } finally {
    sending.value = false
  }
}
</script>
