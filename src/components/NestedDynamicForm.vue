<template>
    <div class="p-5">
        <ThePopUpVue @tryagain="tryAgain"  :formData="formData" v-show="show" ></ThePopUpVue>
        <div class="border">
            <div class="h-12 bg-gray-100 border p-3">Grupos / Slots</div>
            <div class="flex flex-col divide-y gap-5" v-for="(formGroup,index) in formData" :key="index">
                <table class="table-auto divide-y divide-gray-50 my-3 ">
                    <thead class="border">
                        <tr class="text-left">
                            <th class="w-1/12"><div class="px-5">#</div></th>
                            <th class="w-1/4">Grupo</th>
                            <th class="w-1/2">Slot</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <td class="w-1/12 align-text-top">
                               <div class="px-5">
                                    <button @click="removeGroup(index)" class="mt-4 h-8 w-8 bg-red-500 rounded">
                                        <font-awesome-icon icon="fa-solid fa-minus"/>
                                    </button>
                               </div>
                            </td>
                            <td class="w-1/4 align-text-top ">
                                <input class="mt-4 border p-2 border-gray-300 rounded-lg bg-gray-50" type="text" v-model="formGroup.groupName" :placeholder='"group"+index'>
                            </td>
                            <td class="w-1/2">
                                <div class="flex flex-col">
                                    <div class="flex flex-col " v-for="(slot,i) in formGroup.members" :key="i">
                                        <hr class="my-2 border-gray-300 border-opacity-50">
                                        <div class="flex flex-row items-center" >
                                            <input class="ml-2 w-full border p-2 border-gray-300 rounded-lg bg-gray-50" type="text" v-model="slot.name" :placeholder='"g"+index+"_slot"+i'>
                                            <span class="px-5">
                                                <button @click="removeField(index,i)" class="h-5 w-5 bg-red-500 rounded">
                                                    <font-awesome-icon icon="fa-solid fa-minus"/>
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <hr class="my-2 border-gray-300 border-opacity-50">
                                        <button @click="addField(index)" class="bg-sky-500/75 hover:bg-sky-700/75 px-2 py-1">
                                            <font-awesome-icon icon="fa-solid fa-plus"/>
                                            <span class="text-white px-[2px]">Add Slot</span>
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="h-12 bg-gray-100 border p-2">
                <button @click="addGroup" class="bg-blue-500 hover:bg-blue-700 px-2 py-1">
                    <font-awesome-icon icon="fa-solid fa-plus"/>
                    <span class="text-white px-[2px]">Add Group</span>
                </button>
            </div>
        </div>
        <div class=" flex items-center justify-center p-10">
            <button @click="showForData" class="bg-blue-400 text-white text-xl px-2 py-1 rounded">
                Save
            </button>
        </div>
    </div>    
</template>

<script>
import ThePopUpVue from './ThePopUp.vue'
export default{
    components:{ThePopUpVue},
    data:function(){
        return{
            formData:[
                {
                    groupName:'',
                    members:[
                        {
                            name:''
                        }
                    ]
                }
            ],
            show:false
        }
    },
    methods:{
        addField(index){
            this.formData[index].members.push(
                {
                    name:''
                }
            )
        },
        removeField(index,i){
            this.formData[index].members.splice(i,1)
        },
        addGroup(){
            this.formData.push(
                {
                    groupName:'',
                    members:[
                        {
                            name:''
                        }
                    ]
                }
            )
        },
        removeGroup(index){
            this.formData.splice(index, 1)
        },
        showForData(){
            this.show=true
        },
        tryAgain(){
            this.show=false
        }
    }
}
</script>

<style>
.fa-plus, .fa-minus{
    color: white;
  }

  .input-normal{
    width: 342px;
    height: 40px;
    border: 0.5px solid rgba(255,255,255,0.4);
    border-radius: 5px;
    background: transparent;
    padding-left: 24px;
  }
</style>