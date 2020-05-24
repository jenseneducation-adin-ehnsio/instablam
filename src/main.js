import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase/app";

Vue.config.productionTip = false

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/sw.js')
//   .then(function(registration) {
//     console.log('Registration successful, scope is:', registration.scope);
//   })
//   .catch(function(error) {
//     console.log('Service worker registration failed, error:', error);
//   });
// }

var firebaseConfig = {
  apiKey: "AIzaSyCEYygG9kTlrmnIevWMRbAEPFRRXTmlY6o",
  authDomain: "instablam-3f500.firebaseapp.com",
  databaseURL: "https://instablam-3f500.firebaseio.com",
  projectId: "instablam-3f500",
  storageBucket: "instablam-3f500.appspot.com",
  messagingSenderId: "552806874462",
  appId: "1:552806874462:web:4bf2b3ff66d69735d9e3cf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')