<template>
  <div id="userList">
    <div v-for="user in users" >
      <UserListItem :userName="user.login" :path="user.avatar_url" :link="user.html_url"></UserListItem>
    </div>
  </div>
</template>

<script>
import UserListItem from '@/components/UserListItem.vue'
import { mapState } from 'vuex';
  export default {
    name: 'Userlist',
    data() {
      return {
      }
    },
    computed:{
      ...mapState('users',['users'])
    },
    components:{
      UserListItem
    }
  }
</script>

<style lang="css" scoped>
  #userList{
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-content: stretch;
  }
</style>