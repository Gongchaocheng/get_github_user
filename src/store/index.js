import { createStore } from 'vuex'
import users from './users'

export default createStore({
/*   state: {
  },
  // 对state的数据进行加工
  getters: {
  },
  // 操作数据
  mutations: {
  },
  // 响应组件中的动作
  actions: {

  }, */
  modules: {
    users
  }
})
