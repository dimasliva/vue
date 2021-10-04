<template>
  <div>
    <p><b>Название: </b>{{ post.title }}</p>
    <p><b>Описание: </b>{{ post.desc }}</p>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
