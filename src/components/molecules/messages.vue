<template>
  <div>
    <div v-for="message in parts" :key="message.id">
      <incoming-message
        v-if="message.type === TYPE_INCOMING"
        :name="message.author"
        :time="message.created"
        :text="message.text"
      ></incoming-message>
      <outgoing-message
        v-if="message.type === TYPE_OUTGOING"
        :name="message.author"
        :time="message.created"
        :text="message.text"
      ></outgoing-message>
    </div>
  </div>
</template>

<script>
import IncomingMessage from "@/components/atoms/IncomingMessage";
import OutgoingMessage from "@/components/atoms/OutgoingMessage";
export default {
  name: "messages",
  props:['parts'],
  components: {OutgoingMessage, IncomingMessage},
  data:()=>({
    TYPE_INCOMING:'incoming',
    TYPE_OUTGOING:'outgoing',
  })
}
</script>

<style scoped>

</style>
