<template>
	<div id="one-poster">
		<h1>{{ onePoster.pTitle }}</h1>
		<h2>Вигляд: {{ onePoster.pLook }}</h2>
		<h3>Бренд: {{ onePoster.pBrend }}</h3>
		<h4>Про річь:</h4>
		<article>{{ onePoster.pDescript }}</article>
		<h5>Склад:</h5>
		<p>{{ onePoster.pStorage }}</p>
		<h6>Доставка і оплата:</h6>
		<p>{{ onePoster.pDeliver }}</p>
		<p>Жіноча: {{ onePoster.pWomen_item }}</p>
		<p>Дитяча: {{ onePoster.pKid_item }}</p>
		<p>Чоловіча: {{ onePoster.pMan_item }}</p>
		<p>Колір:</p>
		<ul>
			<li v-for="pShade in onePoster.pShader">{{ pShade }}</li>
		</ul>
	</div>
</template>

<script>

export default {
	data(){
		return {
			id: this.$route.params.id,
			onePoster: {},
		}
	},
	methods: {
		
	},
	created(){
		this.$http.get('https://torry-vita.firebaseio.com/poster/' + this.id + '.json').then(function(data){
			return data.json();
		}).then(function(data){
			this.onePoster = data;
		});
	}
}
</script>
<style>
#one-poster {
	margin: 0 auto;
	max-width: 800px;
}
</style>