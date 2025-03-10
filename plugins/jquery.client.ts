import $ from 'jquery';


export default defineNuxtPlugin((nuxtApp) => {
  // this is the equivalent of a normal functional plugin
  window.jQuery = window.$ = $;
});
