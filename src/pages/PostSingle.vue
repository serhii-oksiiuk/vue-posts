<template>
    <div class="post__single__head">
        <div class="post__id">Post with ID: {{ $route.params.id }}</div>
        <my-button @click="$router.go(-1)">go back</my-button>
    </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue'
    export default {
        components: { MyButton },
    }
</script>

<style lang="scss" scoped>
.post__single__head{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .post__id{
        margin-top: 15px;
    }
}
</style>