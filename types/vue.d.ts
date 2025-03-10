import { typeSerialize } from 'nitropack';
import Utility from '@/lib/Utility';
import { Router, RouteLocationNormalizedLoaded } from 'vue-router';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        
        $router: Router;
        $route: RouteLocationNormalizedLoaded;
    }
}