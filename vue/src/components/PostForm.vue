<template>
  <div>
    <form @submit.prevent>
      <my-input v-model="post.title" type="text" placeholder="Enter title" />
      <my-input v-model="post.desc" type="text" placeholder="Enter description" />
      <my-button @click="createPost">Create</my-button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        desc: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post)
      this.post = {
        title:  "",
        desc:  ""
      }
    }
  },
};
</script>

<style></style>
