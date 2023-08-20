export default{
  // 开启命名空间，配合mapState这些api使用
    namespaced: true,
      // 存储的数据
    state: {
      users:[]
    },
    // 对state的数据进行加工
    getters: {
    },
    // 操作数据
    mutations: {
      UPDATE(state ,value){
        state.users = value
      }
    },
    // 响应组件中的动作
    actions: {
      updatedUsers(context,value) {
        context.commit('UPDATE',value)
      },
  }
}