/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** 'true' to send form submissions to local Firebase emulators. */
  readonly VITE_USE_EMULATORS?: string
}

// TutorsView.vue is plain JavaScript; give it a component type.
declare module '*/TutorsView.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, unknown>
  export default component
}
