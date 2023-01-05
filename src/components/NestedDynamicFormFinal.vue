<template>
    <!-- Nested Dynamic Form Implementation -->
    <div class="flex flex-row">
        <div class="flex flex-col w-1/2 ">
            <div class="text-3xl">Nested Dynamic Form Final Question</div>
            <div class="bg-gray-200 px-20 py-5">
                <input class="w-full p-2  bg-white" placeholder="Title">
            </div>
            <div class="px-20 py-3">A & B</div>
            <div class="bg-gray-200 px-20 py-5">
                <div class="flex flex-col space-y-2">
                    <div class="" v-for="(abFormGroup,index) in abFormData" :key="index">
                        <div class="flex flex-row space-x-2">
                            <input class="w-full p-2  bg-white" type="text" v-model="abFormGroup.name" :placeholder='"A"+index'>
                            <input class="w-full p-2  bg-white" type="text" v-model="abFormGroup.name" :placeholder='"B"+index'>
                        </div>
                    </div>
                    <div class="h-12 border p-2 text-right">
                        <button @click="addABGroup" class="bg-blue-700 hover:bg-blue-700 px-2 py-1">
                            <span class="text-white px-[2px]">Add A & B</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="px-20 py-3">Groups</div>
            <div class="bg-gray-200 px-20">
                <div class=" flex flex-col p-5 space-y-5" v-for="(group,index) in groupFormData" :key="index">
                    
                    <input class="w-full p-2 bg-white" type="text" v-model="group.name" :placeholder='"G"+index'>
                    
                    <div class="bg-white p-5">
                        <div  v-for="(cvgroup,i) in group.members" :key="i">
                            <div class="flex flex-col">
                                <div>Captions</div>
                                <div class="flex flex-row space-x-2">
                                    <input class="w-1/4 p-2  bg-gray-200" type="text" v-model="cvgroup.name" :placeholder='"C"+i'>
                                    <input class="w-1/4 p-2  bg-gray-200" type="text" v-model="cvgroup.name" :placeholder='"V"+i'>
                                </div>
                            </div>
                        </div>
                        <div class="h-12 p-2 text-right">
                            <button @click="addCVGroup(index)" class="bg-blue-700 hover:bg-blue-700 px-2 py-1">
                                <span class="text-white px-[2px]">Add C & V</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="h-12 p-2 right-10">
                    <button @click="addGroup" class="bg-blue-700 hover:bg-blue-700 px-2 py-1">
                        <span class="text-white px-[2px]">Add Group</span>
                    </button>
                </div>
            </div>
        </div>
        <div>
            <div class="text-3xl">Display Form Output</div>
        </div>
    </div>
</template>
<script>
export default{
    data:function(){
        return{
            abFormData:[
                {
                    name:''
                }
            ],
            groupFormData:[
                {
                    name:'',
                    caption:'',
                    members:[
                        {
                            name:''
                        }
                    ]
                }
            ]
        }
    },
    methods:{
        addABGroup(){
            this.abFormData.push({
                name:''
            }
        )
        },
        addGroup(){
            this.groupFormData.push(
                {
                    name:'',
                    caption:'',
                    members:[
                        {
                            name:''
                        }
                    ]
                }
            )
        },
        addCVGroup(index){
            this.groupFormData[index].members.push(
                {
                    name:''
                }
            )
        },
    }
}
</script>