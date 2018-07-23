import formVita from './components/formVita.vue';
import formVitaPrev from './components/form_vita_prev.vue';
import mainVita from './components/main_vita.vue';
import onePoster from './components/one_poster.vue';

export default [
	{path: '/', component: mainVita},
	{path: '/formVita', component: formVita},
	{path: '/formVitaPrev', component: formVitaPrev},
	{path: '/poster/:id', component: onePoster}
]