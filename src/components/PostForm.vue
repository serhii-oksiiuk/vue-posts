<template>
    <div class="form__layer">
        <form @submit.prevent>
            <h4>Create post</h4>
            <my-input 
                v-focus
                v-model="post.title" 
                type="text" 
                placeholder="Name post"
            />
            <my-input 
                v-model="post.body" 
                type="text" 
                placeholder="Description post"
            />
            <my-button
                @click="createPost"
            >Create</my-button>
        </form>
    </div> 
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue';
import MyInput from '@/components/UI/MyInput.vue';

export default {
    components: { MyButton, MyInput },
    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods:{
        createPost(){
            this.post.id = Date.now();
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: '',
            }
        }
    }
}
</script>

<style>
    form{
        display: flex;
        flex-direction: column;
    }  
</style>