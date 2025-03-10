import { defineNuxtPlugin } from '#app';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { PaperClipIcon } from '@heroicons/vue/20/solid';
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/vue/24/outline';
/* import 'ag-grid-community/styles/ag-grid.css'; // Mandatory CSS required by the grid
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Optional Theme applied to the grid
import { AgGridVue } from 'ag-grid-vue3'; // Vue Data Grid Component */
import { LicenseManager } from 'ag-grid-enterprise';
LicenseManager.setLicenseKey("Using_this_{AG_Charts_and_AG_Grid}_Enterprise_key_{AG-061694}_in_excess_of_the_licence_granted_is_not_permitted___Please_report_misuse_to_legal@ag-grid.com___For_help_with_changing_this_key_please_contact_info@ag-grid.com___{GetSmart}_is_granted_a_{Multiple_Applications}_Developer_License_for_{1}_Front-End_JavaScript_developer___All_Front-End_JavaScript_developers_need_to_be_licensed_in_addition_to_the_ones_working_with_{AG_Charts_and_AG_Grid}_Enterprise___This_key_has_not_been_granted_a_Deployment_License_Add-on___This_key_works_with_{AG_Charts_and_AG_Grid}_Enterprise_versions_released_before_{14_June_2025}____[v3]_[0102]_MTc0OTg1NTYwMDAwMA==03e2b4d9e8111f0449f2d4c42fc68920")

export default defineNuxtPlugin((nuxtApp) => {
    
    

    nuxtApp.vueApp.component('PaperClipIcon', PaperClipIcon);
    nuxtApp.vueApp.component('Dialog', Dialog);
    nuxtApp.vueApp.component('DialogPanel', DialogPanel);
    nuxtApp.vueApp.component('DialogTitle', DialogTitle);
    nuxtApp.vueApp.component('TransitionChild', TransitionChild);
    nuxtApp.vueApp.component('TransitionRoot', TransitionRoot);
    nuxtApp.vueApp.component('ExclamationTriangleIcon', ExclamationTriangleIcon);
    nuxtApp.vueApp.component('XMarkIcon', XMarkIcon);
    // nuxtApp.vueApp.component('AgGridVue', AgGridVue);

    
});