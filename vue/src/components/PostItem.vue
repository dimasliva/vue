<template>
  <div class="post">
    <div>
      <p><b>Название: </b>{{ post.title }}</p>
      <p><b>Описание: </b>{{ post.desc }}</p>
    </div>

    <div class="post__btns">
      <my-button @click="this.$emit('delete', post)">Удалить</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "./UI/MyButton.vue";
export default {
  components: { MyButton },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
  .post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .post__btns {
    display: flex;
  }
</style>
