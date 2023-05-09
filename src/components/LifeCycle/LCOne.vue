<template>
    <div>
        <LCTwo v-if="showComponent"></LCTwo>
    </div>
</template>

<script>
import LCTwo from './LCTwo.vue';
export default{
    components:{LCTwo},
    data(){
        return {
            showComponent:false
        }
    },
    mounted(){
        this.showComponent=true
        window.setTimeout(()=>{
            this.showComponent=false
        },1000)
    }
}
</script>