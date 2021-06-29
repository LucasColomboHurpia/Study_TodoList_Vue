<template>
    <button 
    @click="onclick()"
    :style="{background: color}"
     class="btn btnshow">
        {{text}}
     </button>
</template>

<script>
export default {
    name: 'Button',
    props:{
        text: String,
        color: String,
    },
    methods:{
        onclick(){
            this.$emit('btn-toggle')
        },
    }
}
</script>

<style scoped>
.btnshow:hover{
  background-color: #b64848 ;
  color: black;
}
</style>