// plugins/v-drag.js
import { defineNuxtPlugin } from '#app';
import drag from 'v-drag';

export default defineNuxtPlugin(nuxtApp => {
    if (process.client) {
        nuxtApp.vueApp.use(drag);
        // debugger

        // nuxtApp.vueApp.directive("click-outside", TwClickOutside);
    }
});
