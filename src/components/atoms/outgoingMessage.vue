<template>
  <div class="outgoing_msg">
    <div class="sent_msg text-right">
      <p>{{ text }}</p>
      <span class="time_date">{{ time }}
        <span class="name">{{ name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "outgoingMessage",
  props:['name','time','text']
}
</script>

<style scoped>
.name{
  font-size: 16px;
  color: #000;
  font-weight: 700;
  margin-right: 12px
}
.time_date{
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: center;
}
.sent_msg{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
}
</style>
