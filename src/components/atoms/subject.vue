<template>
  <div :class="list.active" class="chat_list cursor-pointer" @click="changeDialog(list)">
    <div class="chat_people">
      <div class="chat_img">
        <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil">
      </div>
      <div class="chat_ib text-left">
        <h5 class="d-flex justify-content-between align-items-center">
          {{ list.subject }}
          <span class="chat_date">{{ list.created }}</span>
        </h5>
        <small>{{ firstMessage }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "subject",
  props:['list'],
  data:()=>({
  }),
  computed:{
    firstMessage:function (){
      return this.list.parts.length ? this.list.parts[0].text : "";
    },
  },
  methods:{
    changeDialog(dialog) {
      const dialogId = this.$route.params.id ? this.$route.params.id : 1 ;
      if( Number(dialog.id) === Number(dialogId) )
        return true;
      this.$router.push({name: 'Dialog', params: {id: dialog.id}});
      bus.$emit('update-dialog',dialog);
    }
  },
  created() {

  }
}
</script>

<style scoped>
  .active{
    background: gainsboro
  }
</style>
