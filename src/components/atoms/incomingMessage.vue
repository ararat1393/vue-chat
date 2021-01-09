<template>
  <div class="incoming_msg">
    <div class="incoming_msg_img">
      <b-img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
    </div>
    <div class="received_msg">
      <div class="received_withd_msg text-left">
        <p>{{ text }}</p>
        <span class="time_date">{{ time }}
          <span class="name">{{ name }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IncomingMessage",
  props:['name','time','text']
}
</script>

<style scoped>
.name{
  font-size: 16px;
  color: #000;
  font-weight: 700;
  margin-left: 12px
}
</style>
