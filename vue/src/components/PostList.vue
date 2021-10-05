<template>
    <div class="post">
        <post-item
                :post="post"
                :key="post.id"
                v-for="post in posts"/>
    </div>
</template>

<script>
    import PostItem from "./PostItem.vue";

    export default {
        components: {PostItem},
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
