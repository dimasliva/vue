<template>
    <div class="app">
        <post-form @create="createPost"/>
        <post-list :posts="posts"/>
    </div>
</template>

<script>
    import PostList from "./components/PostList.vue";
    import PostForm from "./components/PostForm.vue";

    export default {
        components: {
            PostList,
            PostForm,
        },
        data() {
            return {
                posts: [
                    {id: 1, title: "Title one", desc: "Description one"},
                    {id: 2, title: "Title two", desc: "Description two"},
                    {id: 3, title: "Title three", desc: "Description three"},
                ],
                title: "",
                desc: "",
            };
        },
        methods: {
            createPost(post) {
                this.posts.push(post)
            }
        },
    };
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
</style>
