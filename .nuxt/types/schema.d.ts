import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["piniaPersistedstate"]?: typeof import("@pinia-plugin-persistedstate/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["snackbar"]?: typeof import("nuxt-snackbar").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["macros"]?: typeof import("@vue-macros/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["primevue"]?: typeof import("@primevue/nuxt-module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["swiper"]?: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,  modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["@pinia-plugin-persistedstate/nuxt", Exclude<NuxtConfig["piniaPersistedstate"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["nuxt-snackbar", Exclude<NuxtConfig["snackbar"], boolean>] | ["@vue-macros/nuxt", Exclude<NuxtConfig["macros"], boolean>] | ["@primevue/nuxt-module", Exclude<NuxtConfig["primevue"], boolean>] | ["nuxt-swiper", Exclude<NuxtConfig["swiper"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["piniaPersistedstate"]?: typeof import("@pinia-plugin-persistedstate/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["snackbar"]?: typeof import("nuxt-snackbar").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["macros"]?: typeof import("@vue-macros/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["primevue"]?: typeof import("@primevue/nuxt-module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["swiper"]?: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,  modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["@pinia-plugin-persistedstate/nuxt", Exclude<NuxtConfig["piniaPersistedstate"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["nuxt-snackbar", Exclude<NuxtConfig["snackbar"], boolean>] | ["@vue-macros/nuxt", Exclude<NuxtConfig["macros"], boolean>] | ["@primevue/nuxt-module", Exclude<NuxtConfig["primevue"], boolean>] | ["nuxt-swiper", Exclude<NuxtConfig["swiper"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   apiSecret: string,

   nitro: {
      envPrefix: string,
   },

   snackbar: {
      top: boolean,

      bottom: boolean,

      left: boolean,

      right: boolean,

      groups: boolean,

      success: string,

      error: string,

      warning: string,

      info: string,

      duration: number,

      messageClass: string,

      zIndex: number,

      dense: boolean,

      shadow: boolean,

      reverse: boolean,

      border: string,

      backgroundOpacity: number,

      backgroundColor: string,

      baseBackgroundColor: string,
   },
  }
  interface PublicRuntimeConfig {
   apiBase: string,

   frontBase: string,

   env: string,

   IS_LOCAL: string,

   persistedState: {
      storage: string,

      debug: boolean,

      cookieOptions: any,
   },

   snackbar: {
      top: boolean,

      bottom: boolean,

      left: boolean,

      right: boolean,

      groups: boolean,

      success: string,

      error: string,

      warning: string,

      info: string,

      duration: number,

      messageClass: string,

      zIndex: number,

      dense: boolean,

      shadow: boolean,

      reverse: boolean,

      border: string,

      backgroundOpacity: number,

      backgroundColor: string,

      baseBackgroundColor: string,
   },

   primevue: {
      usePrimeVue: boolean,

      autoImport: boolean,

      resolvePath: any,

      importPT: any,

      importTheme: {
         from: string,
      },

      options: {
         locale: {
            startsWith: string,

            contains: string,

            notContains: string,

            endsWith: string,

            equals: string,

            notEquals: string,

            noFilter: string,

            lt: string,

            lte: string,

            gt: string,

            gte: string,

            dateIs: string,

            dateIsNot: string,

            dateBefore: string,

            dateAfter: string,

            clear: string,

            apply: string,

            matchAll: string,

            matchAny: string,

            addRule: string,

            removeRule: string,

            accept: string,

            reject: string,

            choose: string,

            upload: string,

            cancel: string,

            pending: string,

            completed: string,

            dayNames: Array<string>,

            dayNamesShort: Array<string>,

            dayNamesMin: Array<string>,

            monthNames: Array<string>,

            monthNamesShort: Array<string>,

            dateFormat: string,

            firstDayOfWeek: number,

            today: string,

            weekHeader: string,

            weak: string,

            medium: string,

            strong: string,

            passwordPrompt: string,

            emptyFilterMessage: string,

            emptyMessage: string,

            aria: {
               trueLabel: string,

               falseLabel: string,

               nullLabel: string,

               star: string,

               stars: string,

               selectAll: string,

               unselectAll: string,

               close: string,

               previous: string,

               next: string,

               navigation: string,

               scrollTop: string,

               moveTop: string,

               moveUp: string,

               moveDown: string,

               moveBottom: string,

               moveToTarget: string,

               moveToSource: string,

               moveAllToTarget: string,

               moveAllToSource: string,

               pageLabel: string,

               firstPageLabel: string,

               lastPageLabel: string,

               nextPageLabel: string,

               previousPageLabel: string,

               rowsPerPageLabel: string,

               jumpToPageDropdownLabel: string,

               jumpToPageInputLabel: string,

               selectRow: string,

               unselectRow: string,

               expandRow: string,

               collapseRow: string,

               showFilterMenu: string,

               hideFilterMenu: string,

               filterOperator: string,

               filterConstraint: string,

               editRow: string,

               saveEdit: string,

               cancelEdit: string,

               listView: string,

               gridView: string,

               slide: string,

               slideNumber: string,

               zoomImage: string,

               zoomIn: string,

               zoomOut: string,

               rotateRight: string,

               rotateLeft: string,
            },
         },
      },

      components: Array<{

      }>,

      directives: Array<{

      }>,

      composables: Array<{

      }>,

      config: Array<{

      }>,

      services: Array<{

      }>,

      styles: Array<{

      }>,

      injectStylesAsString: Array<any>,

      injectStylesAsStringToTop: Array<string>,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }