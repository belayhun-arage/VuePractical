<template>
    <button @click="adder">Count : {{count}}</button>
</template>

<script setup>
import { ref,onMounted } from 'vue';

// reactive state
const count=ref(0);

// mutator function
function adder(){
    count.value++
}

// lifecycle hook
onMounted(()=>{
    console.log("The initial value of the counter before mounting is"+ count.value)
})
</script>