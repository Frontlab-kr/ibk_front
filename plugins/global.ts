import Utility from "../lib/Utility";
import VsToast from '@vuesimple/vs-toast';
import DialogService from 'primevue/dialogservice';



export default defineNuxtPlugin(({ vueApp: app }) => {
  // const router = useRouter();
  // const route = useRoute();
  app.use(DialogService);
  app.component('vs-toast', VsToast);
  return {
    provide: {
      Utility: Utility,
      // Snackbar: snackbar, 
      // router: router,
      // route: route,

    },
  };
});

