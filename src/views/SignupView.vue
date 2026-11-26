<template>
  <main class="grow bg-paper dark:bg-stone-900">
    <section class="mx-auto max-w-2xl px-4 py-12 lg:py-16">
      <template v-if="!sent">
        <h1 class="font-display text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl dark:text-white">Sign up for tutoring</h1>
        <p class="mt-3 text-lg text-stone-600 dark:text-stone-300">We'll reach out within a day to set up a first session.</p>

        <form class="mt-8 space-y-8" novalidate @submit.prevent="submit">
          <fieldset class="card space-y-5 p-5 sm:p-6">
            <legend class="sr-only">Parent</legend>
            <h2 class="text-xl font-semibold text-stone-900 dark:text-white">You</h2>
            <div class="grid gap-5 sm:grid-cols-2">
              <Field id="parent-first" label="First name" :error="errors.parentFirst">
                <input id="parent-first" maxlength="60" v-model="f.parentFirst" class="field-input" autocomplete="given-name" />
              </Field>
              <Field id="parent-last" label="Last name" :error="errors.parentLast">
                <input id="parent-last" maxlength="60" v-model="f.parentLast" class="field-input" autocomplete="family-name" />
              </Field>
            </div>
            <Field id="relationship" label="Relationship to the student" as="group">
              <Chips v-model="f.relationship" :options="RELATIONSHIPS" labelledby="relationship-label" />
            </Field>
            <div class="grid gap-5 sm:grid-cols-2">
              <Field id="email" label="Email" :error="errors.parentEmail">
                <input id="email" maxlength="120" v-model="f.parentEmail" type="email" class="field-input" autocomplete="email" />
              </Field>
              <Field id="phone" label="Phone" :error="errors.parentPhone">
                <input id="phone" :value="f.parentPhone" type="tel" inputmode="tel" maxlength="22" class="field-input" autocomplete="tel" placeholder="(512) 555-0142" @input="onPhone($event, (v) => (f.parentPhone = v))" />
              </Field>
            </div>
            <Field id="contact" label="Best way to reach you" as="group">
              <Chips v-model="f.contactMethods" :options="CONTACT_METHODS" multiple labelledby="contact-label" />
            </Field>
          </fieldset>

          <fieldset class="card space-y-5 p-5 sm:p-6">
            <legend class="sr-only">Student</legend>
            <h2 class="text-xl font-semibold text-stone-900 dark:text-white">{{ f.students.length > 1 ? 'Students' : 'Student' }}</h2>
            <div v-for="(s, i) in f.students" :key="i" class="space-y-3" :class="i > 0 && 'border-t border-stone-200 pt-5 dark:border-stone-700'">
              <div class="flex items-center justify-between" v-if="f.students.length > 1">
                <p class="text-sm font-semibold text-stone-500 dark:text-stone-400">Student {{ i + 1 }}</p>
                <button v-if="i > 0" type="button" class="rounded-lg px-2 text-sm font-medium text-stone-500 hover:text-rose-600" @click="f.students.splice(i, 1)">Remove</button>
              </div>
              <div class="grid gap-5 sm:grid-cols-2">
                <Field :id="`student-${i}`" label="First name" :error="i === 0 ? errors.studentFirst : undefined">
                  <input :id="`student-${i}`" maxlength="60" v-model="s.first" class="field-input" />
                </Field>
                <Field :id="`student-last-${i}`" label="Last name" :error="i === 0 ? errors.studentLast : undefined">
                  <input :id="`student-last-${i}`" maxlength="60" v-model="s.last" class="field-input" />
                </Field>
              </div>
              <Field :id="`grade-${i}`" label="Grade" as="group" optional>
                <Chips v-model="s.grade" :options="GRADES" :labelledby="`grade-${i}-label`" />
              </Field>
            </div>
            <button v-if="f.students.length < 4" type="button" class="text-sm font-semibold text-primary hover:text-secondary" @click="f.students.push({ first: '', last: f.students[0].last, grade: '' })">
              Add a sibling
            </button>
            <Field id="school" label="School" optional>
              <input id="school" maxlength="120" v-model="f.school" class="field-input" />
            </Field>
          </fieldset>

          <fieldset class="card space-y-5 p-5 sm:p-6">
            <legend class="sr-only">Tutoring</legend>
            <h2 class="text-xl font-semibold text-stone-900 dark:text-white">Tutoring</h2>
            <Field id="subjects" label="Subjects" as="group" :error="errors.subjects">
              <div class="space-y-3">
                <div v-for="g in SUBJECT_GROUPS" :key="g.subject">
                  <p class="mb-1.5 text-sm text-stone-500 dark:text-stone-400">{{ g.subject }}</p>
                  <Chips v-model="f.subjects" :options="g.topics" multiple :labelledby="'subjects-label'" />
                </div>
              </div>
              <input v-model="f.subjectsOther" maxlength="300" class="field-input mt-3" placeholder="Something else? Tell us here" aria-label="Other subjects" />
            </Field>
            <Field id="format" label="Online or in person" as="group">
              <Chips v-model="f.format" :options="FORMATS" labelledby="format-label" />
            </Field>
            <Field id="availability" label="When is the student usually free?" optional>
              <textarea id="availability" maxlength="500" v-model="f.availability" rows="2" class="field-input" placeholder="Weekdays after 5, Sunday afternoons" />
            </Field>
            <Field id="timezone" label="Time zone" as="group">
              <Chips v-model="f.timezone" :options="TIMEZONES" labelledby="timezone-label" />
            </Field>
            <Field id="preferred" label="Preferred tutor" optional>
              <input id="preferred" maxlength="60" v-model="f.preferredTutor" class="field-input" />
            </Field>
          </fieldset>

          <fieldset class="card space-y-5 p-5 sm:p-6">
            <legend class="sr-only">Anything else</legend>
            <Field id="heard" label="How did you hear about us?" as="group">
              <Chips v-model="f.heardFrom" :options="HEARD_FROM" multiple labelledby="heard-label" />
              <input v-model="f.heardFromOther" maxlength="200" class="field-input mt-3" placeholder="Someone specific? Let us know" aria-label="Heard from, other" />
            </Field>
            <Field id="notes" label="Anything else we should know?" optional>
              <textarea id="notes" maxlength="2000" v-model="f.applicantNotes" rows="3" class="field-input" />
            </Field>
            <!-- Bots fill every field; people never see this one. -->
            <div class="hidden" aria-hidden="true">
              <label for="website">Website</label>
              <input id="website" v-model="honeypot" tabindex="-1" autocomplete="off" />
            </div>
          </fieldset>

          <p v-if="submitError" class="rounded-lg bg-rose-50 px-4 py-3 text-sm text-rose-800 dark:bg-rose-950 dark:text-rose-200">{{ submitError }}</p>
          <button type="submit" class="btn-primary w-full text-lg sm:w-auto" :disabled="sending">{{ sending ? 'Sending' : 'Send signup' }}</button>
        </form>
      </template>

      <div v-else class="py-16 text-center">
        <img :src="Logo" alt="" class="mx-auto h-20 w-20" />
        <h1 class="mt-6 font-display text-4xl font-semibold text-stone-900 dark:text-white">Thanks, {{ f.parentFirst.trim() }}</h1>
        <p class="mt-3 text-lg text-stone-600 dark:text-stone-300">We got your signup and will reach out within a day.</p>
        <router-link to="/" class="btn-secondary mt-8">Back to home</router-link>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'

import Logo from '../assets/logo.png'
import Chips from '../components/form/Chips.vue'
import Field from '../components/form/Field.vue'
import { formatPhone, phoneError } from '../lib/phone'
import { CONTACT_METHODS, FORMATS, GRADES, HEARD_FROM, RELATIONSHIPS, SUBJECT_GROUPS, TIMEZONES } from '../lib/options'

const f = reactive({
  parentFirst: '',
  parentLast: '',
  relationship: '',
  parentEmail: '',
  parentPhone: '',
  contactMethods: [] as string[],
  students: [{ first: '', last: '', grade: '' }],
  school: '',
  subjects: [] as string[],
  subjectsOther: '',
  format: '',
  availability: '',
  timezone: '',
  preferredTutor: '',
  heardFrom: [] as string[],
  heardFromOther: '',
  applicantNotes: '',
})
const fullName = (first: string, last: string) => `${first.trim()} ${last.trim()}`.trim()
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

function validate() {
  for (const k of Object.keys(errors)) delete errors[k]
  if (!f.parentFirst.trim()) errors.parentFirst = 'Add your first name.'
  if (!f.parentLast.trim()) errors.parentLast = 'Add your last name.'
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.parentEmail.trim())) errors.parentEmail = 'Add an email we can reply to.'
  if (!f.parentPhone.trim()) errors.parentPhone = 'Add a phone number.'
  else if (phoneError(f.parentPhone)) errors.parentPhone = phoneError(f.parentPhone)
  if (!f.students[0].first.trim()) errors.studentFirst = "Add the student's first name."
  if (!f.students[0].last.trim()) errors.studentLast = "Add the student's last name."
  if (!f.subjects.length && !f.subjectsOther.trim()) errors.subjects = 'Pick a subject, or describe it below.'
  return Object.keys(errors).length === 0
}

async function submit() {
  submitError.value = ''
  tried.value = true
  if (!validate()) {
    const firstField: Record<string, string> = { parentFirst: 'parent-first', parentLast: 'parent-last', parentEmail: 'email', parentPhone: 'phone', studentFirst: 'student-0', studentLast: 'student-last-0', subjects: 'subjects-label' }
    document.getElementById(firstField[Object.keys(errors)[0]])?.scrollIntoView({ block: 'center' })
    document.getElementById(firstField[Object.keys(errors)[0]])?.focus()
    return
  }
  if (honeypot.value) {
    sent.value = true
    return
  }
  sending.value = true
  try {
    const [{ db }, { addDoc, collection, serverTimestamp }] = await Promise.all([import('../lib/firebase'), import('firebase/firestore/lite')])
    await addDoc(collection(db, 'clients'), {
      status: 'new',
      source: 'website',
      parentName: fullName(f.parentFirst, f.parentLast),
      relationship: f.relationship,
      parentEmail: f.parentEmail.trim().toLowerCase(),
      parentPhone: f.parentPhone.trim(),
      students: f.students.filter((s) => s.first.trim()).map((s) => ({ name: fullName(s.first, s.last), grade: s.grade })),
      school: f.school.trim(),
      subjects: f.subjects,
      subjectsOther: f.subjectsOther.trim(),
      format: f.format,
      preferredTutor: f.preferredTutor.trim(),
      availability: f.availability.trim(),
      timezone: f.timezone,
      contactMethods: f.contactMethods,
      heardFrom: f.heardFrom,
      heardFromOther: f.heardFromOther.trim(),
      applicantNotes: f.applicantNotes.trim(),
      tutorIds: [],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    })
    sent.value = true
    window.scrollTo({ top: 0 })
  } catch (e) {
    console.error(e)
    submitError.value = "Your signup didn't go through. Try again, or email info@wavetutor.com."
  } finally {
    sending.value = false
  }
}
</script>
