import Vue from 'vue'
import store from '../store/store'
import VueSocketIo from 'vue-socket.io'

Vue.use(new VueSocketIo({
  debug: true,
  connection: 'ws://192.168.46.105:3000',
  vuex: {
    store,
    actionPrefix: 'socket_'
  },
  options: {}
}))
