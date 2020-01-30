import Vue from '../vendor/vue.js'
import Navbar from '../components/navbar.js'
  

new Vue({
    el: '#MainApp', // This should be the same as your <div id=""> from earlier.
    components: {
      'navbar': Navbar
    },
    methods: {
        //
    },
    mounted: function() {
        console.log("mounted");
    },
    created: function () {
        console.log("created");
    }
  })