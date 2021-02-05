require('./bootstrap');
import Vue from 'vue';
import router from './routes.js';
import {Form, HasError, AlertError} from 'vform';
import Swal from 'sweetalert2';
import moment from 'moment';

window.Form = Form;
window.Swal = Swal;
window.Fire = new Vue();

// handle form errors
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

// toast notification 
const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});
window.toast = toast;

// filters
Vue.filter('formatDate', function(date){
    return moment(date).format("MMM Do YYYY");
})

new Vue({
    el: '#app',
    router,
});
