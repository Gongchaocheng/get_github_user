<template>
  <div id="list-item">
    <a :href="link" class="user-link">
      <img :src="path" alt="" class="img-rounded">
      <div class="user-name">{{ userName }}</div>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'UserListItem',
    props:{
      userName:{
        type:String,
        default:'未发现用户'
      },
      path:{
        type: String,
        default:''
      },
      link:{
        type:String,
        default: 'www.baidu.com'
      }
    }
  }
</script>

<style lang="css" scoped>
  #list-item{
    width: 140px;
    text-align: center;
    font-size: 16px;
    background-color: rgb(226, 227, 226);
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
  }
  img{
    width: 105px;
  }
</style>