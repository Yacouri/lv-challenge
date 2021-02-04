require('./bootstrap');
import Vue from 'vue';
import router from './routes.js';
import {Form, HasError, AlertError} from 'vform';

window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

new Vue({
    el: '#app',
    router,
});
