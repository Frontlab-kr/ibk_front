import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "404" | "default" | "front" | "my-learn-layout" | "pub" | "puberror" | "publogin" | "pubtest"
declare module "../../node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}