import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueTextareaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';

Vue.use(VueTextareaAutosize)
Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyB1K7BjoHcIk9nkBAMNlNMXxljxanW1cwg",
  authDomain: "vue-calendar-19e1f.firebaseapp.com",
  projectId: "vue-calendar-19e1f",
  storageBucket: "vue-calendar-19e1f.appspot.com",
  messagingSenderId: "653539606194",
  appId: "1:653539606194:web:efc6e760524dff622653ab"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
