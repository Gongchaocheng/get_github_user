<template>
  <div id="search">
    <form class="form-inline">
      <h1>Search Github Users</h1>
      <div class="form-group">
        <label class="sr-only" for="serchName">Search</label>
        <input type="text" 
                id="serchName" 
                v-model="keyWorld"
                class="form-control searchInput" 
                placeholder="enter the name you search">
      </div>
      <button type="button" class="btn btn-primary" @click="searchUser">search</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex';
// https://api.github.com/search/users
export default {
  name: 'Search',
  data() {
    return {
      keyWorld:''
    }
  },
  methods:{
    ...mapMutations('users',{updateUser:'UPDATE'}),
    searchUser(){
      let key = this.keyWorld
      axios.get(`https://api.github.com/search/users?q=${key}`).then(
        response => {
          console.log(`successed search ${key}`);
          this.updateUser(response.data.items)
        }
      ).catch(
        error => {
          console.log(error.message);
        }
      )
      this.keyWorld = ''
    }
  }
}
</script>

<style lang="css" scoped>
  #search{
    display: flex;
    justify-content: center;
    align-items: end;
    padding-bottom: 10px;
    margin-bottom: 10px;
    background-color: antiquewhite;
  }
  .searchInput{
    margin-right: 10px;
  }
</style>