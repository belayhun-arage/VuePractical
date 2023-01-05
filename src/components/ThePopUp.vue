<template>
    <div v-show="show" class="px-6 py-2 mx-auto h-auto w-1/5 bg-gray-300 fixed  inset-x-20 top-32 rounded-lg z-20 duration-500">
        <div class="flex flex-row">
          <div class="flex flex-col py-2 pl-2">
            <div class="flex flex-row justify-between w-full">
                <div class="text-2xl  text-lime-500">Your Form Data</div>
                <div class="pl-5">
                    <button @click="tryAgain" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"  height="24" viewBox="0 0 24 24">
                          <path fill="none" d="M0 0h24v24H0V0z"/>
                          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="border-2 p-2">
                <div v-for="(group,index) in formData" :key="index" class="">
                    <div class="flex flex-row items-center">
                        <p class="text-lime-500">Group {{index}}:</p> <span class="text-xl font-medium px-3 text-blue-600/100">{{group.groupName}}</span>
                    </div>
                    <div class="pl-10" v-for="(slot,i) in group.members" :key="i">
                        <div class="flex flex-row items-center">
                            <p class="text-lime-500">Slot {{i}}:</p> <span class="text-lg font-normal px-4 text-blue-600/75">{{slot.name}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default{
      props:['formData'],
      data(){
          return {
              show:false
          }
      },

      methods:{
          tryAgain(){
            this.$emit('tryagain',false)
            this.show=false
          },
      }

  }

</script>