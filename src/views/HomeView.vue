<template>
    <!-- <NestedDynamicFormFinalVue></NestedDynamicFormFinalVue> -->
    <div>
        <!-- <ParentSlot /> -->
        <!-- <VueDotSet/> -->
        <LCOne/>
    </div>
</template>

<script>
// import NestedDynamicFormVue from '@/components/NestedDynamicForm.vue';
// import NestedDynamicFormFinalVue from '@/components/NestedDynamicFormFinal.vue';
//  import ParentSlot from '@/components/Slots/ParentSlot.vue'
// import VueDotSet from '@/components/Data&Reactivity/VueDotSet.vue';
import LCOne from '@/components/LifeCycle/LCOne.vue';
export default{
    components:{
        // NestedDynamicFormVue
        // NestedDynamicFormFinalVue
        // ParentSlot
        // VueDotSet
        LCOne
    }
}
</script>