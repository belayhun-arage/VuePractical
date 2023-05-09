<template>
    <div>
        <div>{{members}}</div>
        <button @click="getMembers()">Reactive</button>
    </div>
</template>

<script>
export default{
    data(){
        return {
            red: 'hot',
            chili: 'peppers',
            members:{}  //Dynamic Data
        }
    },
    methods:{
        getMembers(){
            const newMember={
                name:"Jano",
                instrument:"KRAR AND MASINKO",
                baseLevel:"A++"
            }
            // this.members[newMember.name]=newMember
            this.$set(this.members,newMember.name,newMember)
        }
    }
}
</script>