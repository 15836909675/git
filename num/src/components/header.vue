<template>
    <div class="header">
           <div>
              
           </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    props:["data"],
    components:{

    },
    data(){
        return {
            numer:123
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        console.log(this.data,"data")
    },
    mounted(){

    }
}
</script>
<style scoped lang="css">
    .header{
        width: 100%;
        height: 44px;
        background: salmon;
        display: flex;
        justify-content: space-between;
    }
    .header span{
        color: #000;
    }
</style>