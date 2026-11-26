// Subject catalog shown on /tutors and used by the signup and apply forms.
// The admin portal keeps the same list (wavetutor-admin: src/lib/options.ts).
export const SUBJECT_GROUPS = [
  { subject: 'Math', topics: ['Prealgebra', 'Algebra I', 'Geometry', 'Algebra II', 'Precalculus (AP)', 'Probability', 'Calculus (AP: AB, BC)'] },
  { subject: 'Science', topics: ['Biology (Honors, AP)', 'Chemistry (Honors)', 'Physics (Honors, AP)', 'Psychology', 'Neuroscience/Brain Bee', 'Human Anatomy & Physiology'] },
  { subject: 'Test Prep', topics: ['SAT Prep: Math, R&W', 'AMC 8', 'AP Testing', 'STAAR Testing'] },
  { subject: 'More', topics: ['English/Writing', 'Debate', 'Chess'] },
]

export const RELATIONSHIPS = ['Mother', 'Father', 'Guardian', 'Myself']
export const GRADES = ['K', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'College']
export const CONTACT_METHODS = ['Email', 'Text (SMS)', 'WhatsApp', 'Phone call']
export const HEARD_FROM = ['School', 'Family or Friends', 'Social Media', 'Stores', 'Not sure']
export const FORMATS = [
  { value: 'online', label: 'Online' },
  { value: 'in_person', label: 'In person' },
  { value: 'either', label: 'Either' },
]
export const TIMEZONES = ['Central (Texas)', 'Eastern', 'Mountain', 'Pacific', 'Other']
export const HOURS_PER_WEEK = ['1-2', '3-5', '6-10', '10+']
