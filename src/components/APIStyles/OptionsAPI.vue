<template>
    <button>{{ count }}</button>
</template>

<script>
export default{
    data(){
        return{
            count :0
        } 
    },
    methods:{
        adder(){
            this.count++;
        }
    }
}
</script>