<template>
  <div>

    <Header  :data="flag">
      <span>sad</span>
      <span>sads</span>
      <span>asdas</span>
    </Header>
    <ul>
      <li v-for="(it,index) in data.list " :key="index">{{it.name}}</li>
    </ul>
  </div>
</template>
<script>
import Header from "./header"
import {mapState,mapActions,mapMutations} from "vuex"
export default {
  props:{

  },
  components:{
    Header
  },
  data(){
    return {
      flag:true
    }
  },
  computed:{
    ...mapState(["data"])
  },
  methods:{
    ...mapActions(["getdata"])
    
  },
  created(){
      this.getdata()
    // console.log(this.data,"asdsaasdas")
  },
  mounted(){

  }
}
</script>
<style  lang="">
*{
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>