<template>
    <div class="flex flex-col space-y-40">
        <div>
            <div class="text-yellow-500 text-xl font-bold">Simple SLots</div>
            <div class="flex flex-row  space-x-40">
                <ChildSlot />
                <ChildSlot>
                    <div class="text-xl font-semibold text-blue-800">This is the content from Parent Slot</div>
                </ChildSlot>
            </div>
        </div>
        <div>
            <div class="text-yellow-500 text-xl font-bold">Multiple/Named Slots</div>
            <div class="flex flex-row space-x-40">
                <MultipleSLots/>
                <MultipleSLots>
                    <template v-slot:header>Header From Parent</template>
                    <div class="text-xl font-semibold text-blue-800">This is the customized content</div>
                </MultipleSLots>
            </div>
        </div>
    </div>
</template>

<script>
import ChildSlot from './ChildSlot.vue'
import MultipleSLots from './MultipleSLots.vue';
export default{
    components:{ChildSlot,MultipleSLots}
}
</script>