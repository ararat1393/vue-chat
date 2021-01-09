<template>
  <div class="msg_history" id="dialog">
    <div class="w-full h-full d-flex justify-content-center align-items-center" v-if="isLoadingDialog">
      <b-spinner variant="primary"></b-spinner>
    </div>
    <messages v-else :parts="dialog.parts"></messages>
  </div>
</template>

<script>
import Messages from "./messages";

export default {
  name: "subjectDialog",
  components: {Messages},
  props:['dialog'],
  data:()=>({
    isLoadingDialog : true,
  }),
  methods:{
    scrollBottom(){
      var dialog = document.getElementById("dialog");
      dialog.scrollTop = dialog.scrollHeight;
    },
    initDialog(){
      setTimeout(()=>{
        this.isLoadingDialog = false;
        this.scrollBottom();
      },1500)
    }
  },
  mounted() {
    this.initDialog()
  },
  created() {
    bus.$on('scroll-bottom-dialog',()=>{
      this.$nextTick(()=>{
        this.scrollBottom();
      })
    })
  },
  watch:{
    "$route.path":function (val,oldVal){
      if( val !== oldVal ){
        this.isLoadingDialog = true;
        this.initDialog();
      }
    }
  }
}
</script>

<style scoped>

</style>
