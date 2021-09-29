<template>
    <div class="post">
        <div>
            <div class="name__post"><strong>Name Post: </strong>{{ post.title }}</div>
            <div class="desc__post"><strong>Description Post: </strong>{{ post.body }}</div>
        </div>
        <div class="post__btns">
             <my-button
                @click="$router.push(`/posts/${post.id}`)"
            >Details</my-button>
            <my-button
                @click="$emit('remove', post)"
            >Delete</my-button>
        </div>
    </div>
    
</template>

<script>
import MyButton from './UI/MyButton.vue'

export default {
    components: { MyButton },
    props: {
        post: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
    .post{
        padding: 15px;
        border:2px solid teal;
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .post__btns{
            min-width: 200px;
            display: flex;
            justify-content: space-around;
        }
    }
</style>