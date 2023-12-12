import type { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

// This triggers error TS4081: Exported type alias 'NumberRef' has or is using private name 'Ref'.
export type NumberRef = Ref<number>

// This triggers error TS4025: Exported variable 'count' has or is using private name 'Ref'.
export const count: Ref<number> = ref(1)
