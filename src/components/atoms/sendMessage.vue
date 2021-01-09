<template>
  <div class="type_msg">
    <div class="input_msg_write">
      <b-input
        type="text"
        class="write_msg"
        v-model="user.text"
        @keyup.13="send"
        :disabled="sending"
        placeholder="Type a message"
      />
      <button
        class="msg_send_btn"
        type="button">
        <b-spinner v-if="sending" small  variant="primary"></b-spinner>
        <b-icon v-else @click="send" icon="cursor-fill"></b-icon>
      </button>

    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "sendMessage",
  props:['user','dialog'],
  data:()=>({
    sending:true
  }),
  methods:{
    send(){
      let text = this.user.text;
      if( text.trim() ){
        this.sending = true;
        setTimeout(()=>{
          this.sending = false;
          this.putMessage();
        },2000)
      }
    },
    putMessage(){
      this.user.created = moment().format('YYYY-DD-MM H:m');
      this.user.id = this.dialog.parts.length + 1;
      this.dialog.parts.push( Object.assign({},this.user) );
      this.user.text = "";
      bus.$emit('scroll-bottom-dialog');
    }
  }
}
</script>

<style scoped>

</style>
