<template>
  <TrashIcon class="trash-icon" />
</template>

<script>
import { TrashIcon } from "@heroicons/vue/outline";
export default {
  name: "DeleteButton",
  components: {
    TrashIcon,
  },
};
</script>

<style>
.trash-icon {
  width: 25px;
}
</style>
