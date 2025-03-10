// import AppAlert from "~~/src/components/AppAlert.vue";

import BaseService, { type ApiFactoryType } from "../lib/BaseService";

export default (): ApiFactoryType => { 
    const instance = BaseService.getIns();
    
    return instance.apiFactory;
};
