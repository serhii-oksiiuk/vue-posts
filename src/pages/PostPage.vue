<template>

    <h1>Page Posts</h1>

    <my-input 
      v-model="searchQuery"
      placeholder="Search"
      v-focus
    />

    <div class="btn_and_select__group">
      <my-button
        style="margin: 15px 0;"
        @click="showDialog"
      >Create Post</my-button>
      <my-select 
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>

    <post-list 
      :posts="sortedAndSearchPosts" 
      @remove="removePost" 
      v-if="!isPostLoading" 
    />
    <div v-else>Loading posts...</div>
    
    <div v-intersection="loadMorePosts" class="observe"></div>

    <div class="page__wrapper">
      <div 
        v-for="pageNumb in totalPage" 
        :key="pageNumb"
        class="page"
        :class="{
          'current__page': page === pageNumb
        }"
        @click="changePage(pageNumb)"
      >{{ pageNumb }}</div>
    </div>

  <my-dialog v-model:show="dialogVisible">
    <post-form @create="createPost"/>
  </my-dialog>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import axios from 'axios';

export default {
  components:{
    PostForm,
    PostList
  },
  data(){
    return{
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPage: 0,
      sortOptions: [
        {value: 'title', name: 'Sort by name'},
        {value: 'body', name: 'Sort by description'},
      ]
    }
  },
  methods: {
    createPost(post){
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog(){
      this.dialogVisible = true
    },
    changePage(pageNumb){
      this.page = pageNumb
      this.fetchPosts()
    },
    async fetchPosts(){
      try{
        this.isPostLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params:{
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data;
      }catch(e){
        alert('Error')
      }finally{
        this.isPostLoading = false; 
      }
    },
    async loadMorePosts(){
      try{
        this.page += 1;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params:{
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data];
      }catch(e){
        alert('Error')
      }
    },
  },
  mounted(){
    this.fetchPosts();
  },
  computed: {
    sortedPosts(){
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchPosts() {
      return this.sortedPosts.filter(post => post.title.includes(this.searchQuery.toLowerCase()))
    }
  }
}
</script>

<style lang="scss" scoped>


.btn_and_select__group{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.page__wrapper{
  display: flex;
  div{
    border: 1px solid #ccc;
    padding: 5px 10px;
    margin: 5px 5px 5px 0;
  }
  .current__page{
    border: 2px solid teal;
  }
}
.observe{
    height: 50px;
    background: teal;
}


</style>