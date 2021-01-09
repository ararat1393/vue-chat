<template>
    <b-row class="w-full h-full align-items-center justify-content-center">
      <b-col class="chat-box messaging" sm="12" md="10">
        <b-row class="inbox_msg">
          <b-col sm="12" md="4" class="p-0">
            <b-spinner variant="primary" class="mt-5" v-if="!isLoadingList"></b-spinner>
            <message-list v-else :lists="messageLists" ></message-list>
          </b-col>
          <b-col sm="12" md="8" class="mesgs">
            <subject-dialog :dialog="currentDialog"></subject-dialog>
            <send-message :user="currentUser" :dialog="currentDialog"></send-message>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
</template>

<script>
import MessageList from "@/components/molecules/messageList";
import {mapGetters} from 'vuex';
import SendMessage from "./atoms/sendMessage";
import SubjectDialog from "./molecules/subjectDialog";

export default {
  name: "Chat",
  components: {SubjectDialog, SendMessage, MessageList},
  data:()=>({
    listsAreReady:false,
    currentDialog:{},
    currentUser:{
      type:'incoming',
      author: null,
      text: null,
      created: null,
    },
    dialogId:null
  }),
  computed:{
    ...mapGetters({
      messageLists:'getMessagesList'
    }),
    isLoadingList:function (){
      return Boolean(Number(this.messageLists.length));
    }
  },
  methods:{
    updateDialog(dialogId){
      this.messageLists.forEach((dialog) =>{
        this.$set(dialog,'active','');
        if( Number(dialog.id) === Number(dialogId)){
          dialog.active = 'active';
          this.currentDialog = dialog;
          let currentUserMessages = dialog.parts.filter(part => part.type === 'incoming');
          this.currentUser.author = currentUserMessages[0].author;
        }
      })
    }
  },
  created() {
    if( this.isLoadingList ){
      this.dialogId = this.$route.params.id ? this.$route.params.id : 1;
      this.updateDialog( this.dialogId )
    }
    bus.$on('update-dialog',(dialog)=>{
      this.updateDialog(dialog.id);
    });
  }
}
</script>

<style scoped>

</style>
