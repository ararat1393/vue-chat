<template>
  <div class="inbox_people">
    <div class="inbox_chat">
      <subject
        v-for="list in lists"
        :key="list.id"
        :list="list">
      </subject>
    </div>
  </div>
</template>

<script>
import subject from "@/components/atoms/Subject";
export default {
  name: "MessageList",
  components: {subject},
  props:['lists'],
}
</script>

<style scoped>

</style>
