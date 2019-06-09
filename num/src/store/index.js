import vue from "vue"
import vuex from "vuex"
import axios from "axios"
// import "../mock/mock"
vue.use(vuex)
export default new vuex.Store({
    state: {
        data:["123"]
    },  
    actions: {
        getdata({commit}){
            axios.post("/api/index").then(re=>{
                // console.log(re.data,"sa")
                commit("getres",re.data)
            })
        }
    },
    mutations: {
        getres(state,obj){
            state.data=obj
        }
    },
    getters: {

    }


}
)