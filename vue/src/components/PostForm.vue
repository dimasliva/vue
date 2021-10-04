<template>
  <div>
    <form @submit.prevent>
      <input v-model="post.title" type="text" placeholder="Enter title" />
      <input v-model="post.desc" type="text" placeholder="Enter description" />
      <button @click="createPost">Create</button>
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
      this.$emit("create", this.post, this.post.id);
      this.post = {
        title: "",
        desc: "",
      };
    },
  },
};
</script>

<style></style>
