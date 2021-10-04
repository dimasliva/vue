<template>
  <div>
    <div class="post" v-bind:key="post" v-for="post in posts">
      <post-item :post="post" />
    </div>
  </div>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.post {
  margin-top: 10px;
  padding: 15px;
  border: 3px solid teal;
}
</style>
