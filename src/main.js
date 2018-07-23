import Vue from 'vue'
import App from './App.vue'
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
	routes: Routes,
	mode: 'history'
});

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);

// Change Color Directiver
Vue.directive('changeColor', {
	bind(el, binding, vnode){
		el.style.color = "#" + Math.random().toString().slice(2,8);
	}
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
