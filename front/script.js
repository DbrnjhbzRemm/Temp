export default {
    name: 'vromashina',
    data(){
      return{
        msg: 'VictoriaRomashina',
        window: window
      }
    },
    computed:{
      currentUserData(){
        return this.$store.getters.getCurrentStudent
      }
    },
    created(){
      this.axios.post(`${window.API}/vromashina`).then((response)=>{
        this.$store.commit('setStudentData', response.data)
      }, (error)=>{})
    }
  }