import { defineNuxtPlugin } from '#app';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import VueFroala from 'vue-froala-wysiwyg';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueFroala);
});
