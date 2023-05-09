<template>
    <div>{{status}}</div>
</template>

<script>
export default{
    data(){
        return {
            status:''
        }
    },
    watch:{
        status:{
            handler(){
                console.log(`Current Value for status is : ${this.status}`)
            },
            immediate:true
        }
    },
    beforeMount(){
        this.status="Initializing"
    },
    mounted(){
        this.status="Online"
    },    
    beforeUnmount() {
        this.status="Ofline"
    },

}
</script>