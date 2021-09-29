<template>
    <div class="navbar">
        <router-link to="/">Home</router-link>
        <router-link to="/posts">Our posts</router-link>
        <router-link to="/about">About</router-link>
    </div>
</template>

<script>
    export default {
        name: 'my-navbar',
    }
</script>

<style lang="scss" scoped>
.navbar{
    height: 50px;
    padding: 0 15px;
    background: rgb(247, 247, 247);
    box-shadow: 2px 2px 2px teal;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 20px;
    a{
        padding: 0 15px;
        color:teal;
    }
}
</style>