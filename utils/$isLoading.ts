// import { promptModal } from "jenesius-vue-modal";

// import AppAlert from "~~/src/components/AppAlert.vue";

export default async (loading = true )=>{
  try {
    // service 가 initialized 되기전에 호출될수있으므로 동적으로 import 함.
    const { useBaseStore } = await import("@/domains/base");
    const baseStore = useBaseStore();
    baseStore.isLoading = loading;
  }catch(e){
    console.error(e);
  }

};
