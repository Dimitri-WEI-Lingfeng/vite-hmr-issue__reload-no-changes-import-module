<template>
  <div>a:2322233</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import module1 from "/@/views/module1";

export default defineComponent({
  name: 'Page1',
  created() {
    console.log(module1, 'page1.module1')
  },
})
</script>

<style scoped></style>
